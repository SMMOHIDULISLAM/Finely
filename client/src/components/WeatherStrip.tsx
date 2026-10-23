import { useEffect, useState } from "react";
import { CloudRain, CloudSun, Cloud, Sun, Snowflake, Wind, CloudFog, CloudLightning, Loader2, CloudSunRain } from "lucide-react";

/**
 * Live weather strip for Bangladesh, powered by the free Open-Meteo API
 * (no API key required). Data refreshes every 10 minutes.
 */

type CityWeather = {
  city: string;
  temperature: number;
  code: number;
  wind: number;
};

const CITIES = [
  { name: "Dhaka", lat: 23.81, lon: 90.41 },
  { name: "Chattogram", lat: 22.35, lon: 91.78 },
  { name: "Sylhet", lat: 24.89, lon: 91.87 },
  { name: "Khulna", lat: 22.84, lon: 89.54 },
  { name: "Rajshahi", lat: 24.37, lon: 88.6 },
  { name: "Barishal", lat: 22.7, lon: 90.36 },
  { name: "Rangpur", lat: 25.74, lon: 89.27 },
  { name: "Mymensingh", lat: 24.63, lon: 90.27 },
];

function describe(code: number): { label: string; Icon: typeof Sun } {
  if (code === 0) return { label: "Clear sky", Icon: Sun };
  if (code <= 2) return { label: "Partly cloudy", Icon: CloudSun };
  if (code === 3) return { label: "Overcast", Icon: Cloud };
  if (code === 45 || code === 48) return { label: "Foggy", Icon: CloudFog };
  if (code >= 51 && code <= 57) return { label: "Drizzle", Icon: CloudRain };
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82))
    return { label: "Rain", Icon: CloudRain };
  if (code >= 71 && code <= 77) return { label: "Snow", Icon: Snowflake };
  if (code >= 95) return { label: "Thunderstorm", Icon: CloudLightning };
  return { label: "Changing", Icon: CloudSunRain };
}

/** Simple heuristic summary in the spirit of an AI assistant. */
function aiInsight(items: CityWeather[]): string {
  const rainy = items.filter((i) => i.code >= 51 && i.code <= 82).length;
  const hot = items.filter((i) => i.temperature >= 33).length;
  const windy = items.filter((i) => i.wind >= 20).length;
  const parts: string[] = [];
  if (rainy > 0)
    parts.push(
      `rain is likely in ${rainy} of ${items.length} regions — carry an umbrella`
    );
  if (hot > 0) parts.push(`heat stays high${hot > 2 ? " across the country" : ""}`);
  if (windy > 0) parts.push("breezy conditions in places");
  if (!parts.length) return "Calm, stable weather across Bangladesh right now.";
  const joined =
    parts.length > 1
      ? `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`
      : parts[0];
  return `AI outlook: ${joined.charAt(0).toUpperCase()}${joined.slice(1)}.`;
}

export default function WeatherStrip() {
  const [items, setItems] = useState<CityWeather[]>([]);
  const [error, setError] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const params = new URLSearchParams({
          latitude: CITIES.map((c) => c.lat).join(","),
          longitude: CITIES.map((c) => c.lon).join(","),
          current: "temperature_2m,weather_code,wind_speed_10m",
          timezone: "Asia/Dhaka",
        });
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        const list = (Array.isArray(data) ? data : [data]).map(
          (entry: any, i: number) => ({
            city: CITIES[i].name,
            temperature: Math.round(entry.current.temperature_2m),
            code: entry.current.weather_code,
            wind: Math.round(entry.current.wind_speed_10m),
          })
        );
        if (alive) {
          setItems(list);
          setUpdatedAt(new Date());
          setError(false);
        }
      } catch {
        if (alive) setError(true);
      }
    }
    load();
    const timer = setInterval(load, 10 * 60 * 1000);
    return () => {
      alive = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="weather-strip" aria-labelledby="weather-heading">
      <div className="wrap">
        <div className="weather-head">
          <div>
            <span className="eyebrow">
              <i /> BANGLADESH WEATHER, LIVE
            </span>
            <h2 id="weather-heading">Conditions across the country, right now.</h2>
          </div>
          <p className="weather-note">
            {error
              ? "Live weather is temporarily unavailable — it refreshes automatically."
              : updatedAt
                ? `${aiInsight(items)} Updated ${updatedAt.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}.`
                : "Loading live conditions…"}
          </p>
        </div>
        {!error && items.length === 0 && (
          <p className="weather-loading">
            <Loader2 className="spin" size={16} /> Fetching live weather…
          </p>
        )}
        {items.length > 0 && (
          <div className="weather-grid">
            {items.map((item) => {
              const { label, Icon } = describe(item.code);
              return (
                <div className="weather-card" key={item.city}>
                  <span className="weather-city">{item.city}</span>
                  <Icon size={22} />
                  <span className="weather-temp">{item.temperature}°C</span>
                  <span className="weather-cond">{label}</span>
                  <span className="weather-wind">
                    <Wind size={12} /> {item.wind} km/h
                  </span>
                </div>
              );
            })}
          </div>
        )}
        <p className="weather-credit">Live data by Open-Meteo · refreshes every 10 min</p>
      </div>
    </section>
  );
}
