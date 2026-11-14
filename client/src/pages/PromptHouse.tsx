import { useState } from "react";
import { Link } from "wouter";
import { Search, Copy, ArrowUpRight, House, LockKeyhole } from "lucide-react";
import { freePrompts, premiumSectors } from "@/data/promptHouse";
import { invoiceEnquiry } from "@/data/pricing";
import "./prompt-house.css";

type Prompt = (typeof freePrompts)[number];
export function promptText(prompt: Prompt, language: "en" | "bn") {
  const instruction =
    language === "bn"
      ? "বাংলায় উত্তর দিন। নিচের কাজটি করুন। বন্ধনীর তথ্য আমার দেওয়া তথ্য দিয়ে পূরণ করুন। তথ্য কম থাকলে প্রশ্ন করুন; তথ্য, সূত্র বা ফলাফল বানাবেন না।"
      : "Respond in English. Complete the task below using my inputs. Ask for missing information; do not invent facts, sources or results.";
  return `${instruction}\n\n${prompt.task}\n\n${language === "bn" ? "আমার তথ্য: [এখানে লিখুন]\nব্যক্তিগত বা গোপন তথ্য ব্যবহার করবেন না।" : "My inputs: [paste here]\nUse anonymised information; exclude confidential or personal identifiers."}`;
}
export default function PromptHouse() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All sectors");
  const [tab, setTab] = useState<"free" | "paid">("free");
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [notice, setNotice] = useState("");
  const [page, setPage] = useState(1);
  const sectors = Array.from(new Set(freePrompts.map(p => p.sector)));
  const matches = (s: string, text: string) =>
    (sector === "All sectors" || s === sector) &&
    text.toLowerCase().includes(query.trim().toLowerCase());
  const free = freePrompts.filter(p =>
    matches(
      p.sector,
      `${p.title} ${p.titleBn} ${p.sector} ${p.sectorBn} ${p.task}`
    )
  );
  const paid = premiumSectors.filter(p =>
    matches(p.sector, `${p.title} ${p.sectorBn} ${p.preview}`)
  );
  async function copy(prompt: Prompt) {
    try {
      await navigator.clipboard.writeText(promptText(prompt, language));
      setNotice(`Copied: ${prompt.title}`);
    } catch {
      setExpanded(prompt.id);
      setNotice(
        "Copy is unavailable in this browser. Select and copy the prompt text below."
      );
    }
  }
  return (
    <div className="ph-shell">
      <section className="ph-hero">
        <div className="wrap">
          <span className="ph-brand">
            <House size={18} /> A WING OF FINELYBD
          </span>
          <h1>
            Prompt House
            <span>
              A better starting point
              <br />
              for your next idea.
            </span>
          </h1>
          <p>
            Practical AI prompts for work, study and everyday life in
            Bangladesh. Explore the same 100 free prompts as everyone else, or
            request a prompt built around your needs.
          </p>
          <div className="ph-highlights">
            <span>100 fixed free prompts</span>
            <span>Bangla & English output</span>
            <span>Paid prompts: ৳500 + VAT</span>
          </div>
        </div>
      </section>
      <section className="wrap ph-library" aria-labelledby="library-heading">
        <div className="ph-library-head">
          <div>
            <span className="eyebrow">FIND YOUR NEXT PROMPT</span>
            <h2 id="library-heading">Useful ideas, ready to adapt.</h2>
          </div>
          <Link className="text-link" href="/payments">
            Prices & payment information <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="ph-toolbar">
          <label className="ph-search">
            <Search size={19} />
            <span className="sr-only">Search prompts</span>
            <input
              value={query}
              placeholder="Search prompts / প্রম্পট খুঁজুন"
              onChange={e => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </label>
          <label>
            Sector
            <select
              value={sector}
              onChange={e => {
                setSector(e.target.value);
                setPage(1);
              }}
            >
              <option>All sectors</option>
              {sectors.map(s => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label>
            Output language
            <select
              value={language}
              onChange={e => {
                setLanguage(e.target.value as "en" | "bn");
                setNotice("");
              }}
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
            </select>
          </label>
        </div>
        <div className="ph-tabs" aria-label="Prompt collection">
          <button
            aria-pressed={tab === "free"}
            onClick={() => {
              setTab("free");
              setPage(1);
            }}
          >
            Free collection · 100
          </button>
          <button aria-pressed={tab === "paid"} onClick={() => setTab("paid")}>
            Paid custom prompts · ৳500 + VAT
          </button>
        </div>
        <p className="ph-status" role="status">
          {notice ||
            `${tab === "free" ? free.length : paid.length} results. Replace the [bracketed fields] with your own information.`}
        </p>
        {tab === "free" ? (
          <>
            <div className="ph-grid">
              {free.slice((page - 1) * 12, page * 12).map(p => (
                <article className="ph-card" key={p.id}>
                  <div className="ph-card-top">
                    <span>{p.sector}</span>
                    <span className="ph-free">FREE</span>
                  </div>
                  <small>{p.id.toUpperCase()}</small>
                  <h3>{language === "bn" ? p.titleBn : p.title}</h3>
                  <p>{p.task}</p>
                  <div className="ph-card-actions">
                    <button
                      onClick={() => {
                        setExpanded(expanded === p.id ? null : p.id);
                        setNotice("");
                      }}
                      aria-expanded={expanded === p.id}
                    >
                      {expanded === p.id ? "Hide prompt" : "View prompt"}
                    </button>
                    <button
                      onClick={() => copy(p)}
                      aria-label={`Copy ${p.title}`}
                    >
                      <Copy size={15} /> Copy
                    </button>
                  </div>
                  {expanded === p.id && (
                    <textarea
                      className="ph-prompt-text"
                      aria-label={`${p.title} full prompt`}
                      readOnly
                      value={promptText(p, language)}
                      rows={9}
                      onFocus={e => e.target.select()}
                    />
                  )}
                </article>
              ))}
            </div>
            {free.length === 0 && (
              <p className="ph-empty">
                No prompts match. Try another keyword or sector.
              </p>
            )}
            {free.length > 12 && (
              <nav className="ph-pagination" aria-label="Prompt pages">
                <button
                  disabled={page === 1}
                  onClick={() => {
                    setPage(page - 1);
                    setExpanded(null);
                  }}
                >
                  Previous
                </button>
                <span>
                  Page {page} of {Math.ceil(free.length / 12)}
                </span>
                <button
                  disabled={page >= Math.ceil(free.length / 12)}
                  onClick={() => {
                    setPage(page + 1);
                    setExpanded(null);
                  }}
                >
                  Next
                </button>
              </nav>
            )}
          </>
        ) : (
          <>
            <div className="ph-paid-note">
              <LockKeyhole size={20} />
              <p>
                <strong>A prompt for your specific task.</strong> Request an
                invoice for ৳500 + VAT per prompt. We confirm the scope, payment
                instructions and delivery time first; the finished prompt is
                delivered manually after payment verification. Instant checkout
                and automatic unlocking are not available yet.
              </p>
            </div>
            <div className="ph-grid">
              {paid.map(p => (
                <article className="ph-card" key={p.sector}>
                  <div className="ph-card-top">
                    <span>{p.sector}</span>
                    <span className="ph-paid">PAID</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.preview}</p>
                  <strong>৳500 + VAT / prompt</strong>
                  <a
                    className="ph-order"
                    href={invoiceEnquiry(
                      `Prompt House: ${p.sector} custom prompt — BDT 500 + VAT`
                    )}
                  >
                    Request this prompt <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>
            {paid.length === 0 && (
              <p className="ph-empty">
                No matching category.{" "}
                <a
                  href={invoiceEnquiry(
                    "Prompt House: another sector — BDT 500 + VAT"
                  )}
                >
                  Request a prompt in another sector.
                </a>
              </p>
            )}
          </>
        )}
        <div className="ph-guidance">
          <h3>Make each prompt your own.</h3>
          <p>
            Choose a prompt, replace the bracketed fields, then paste it into
            your preferred AI tool. Review the result before using it. Provider
            subscriptions or usage charges are separate. For medical, legal or
            financial decisions, use qualified professional advice.
          </p>
          <p>
            This is a curated starter collection for Bangladesh; it is not a
            verified popularity ranking. Need a sector that is not listed?{" "}
            <a href={invoiceEnquiry("Prompt House: new sector request")}>
              Tell us what you need.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
