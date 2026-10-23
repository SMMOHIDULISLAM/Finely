import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  Fingerprint,
  Leaf,
  Play,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Link } from "wouter";
import { assets, services } from "@/data/brand";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={assets.hero}
          alt="A friendly AI assistant connecting financial and business tools against a blue cityscape"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <div className="hero-content">
            <span className="hero-badge">
              <span className="pulse-dot" /> INTELLIGENCE, WITH A HUMAN PURPOSE
            </span>
            <h1 id="hero-title">
              AI for a<br />
              better <span>humanity.</span>
            </h1>
            <p>
              Smarter business. Clearer finances. A more connected future. We
              bring together human expertise and intelligent solutions to help
              you move forward.
            </p>
            <div className="hero-buttons">
              <Link href="/services" className="btn btn-mint">
                Explore our solutions <ArrowUpRight size={19} />
              </Link>
              <a href="#approach" className="btn btn-hero-outline">
                <span className="play-circle">
                  <Play size={12} fill="currentColor" />
                </span>{" "}
                Discover our approach
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <Check size={14} /> Human-centered
              </span>
              <span>
                <Check size={14} /> Data-driven
              </span>
              <span>
                <Check size={14} /> Built for your business
              </span>
            </div>
          </div>
          <div className="hero-caption">
            <span className="caption-icon">
              <Sparkles size={18} />
            </span>
            <div>
              <strong>Human expertise. Intelligent possibilities.</strong>
              <span>A thoughtful approach to a smarter tomorrow.</span>
            </div>
          </div>
          <a
            href="#services"
            className="scroll-cue"
            aria-label="Scroll to our services"
          >
            <ArrowDown size={14} />
            <span>SCROLL TO EXPLORE</span>
          </a>
        </div>
      </section>

      <div className="purpose-strip">
        <div className="wrap purpose-inner">
          <span className="purpose-intro">
            One vision.
            <br />
            <strong>Meaningful progress.</strong>
          </span>
          <span>
            <UsersRound /> Empowering people
          </span>
          <span>
            <ChartSymbol /> Strengthening businesses
          </span>
          <span>
            <Fingerprint /> Responsible intelligence
          </span>
          <span>
            <Leaf /> A better tomorrow
          </span>
        </div>
      </div>

      <section id="services" className="section services-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <i /> WHAT WE DO
              </span>
              <h2>
                Complex challenges.
                <br />
                <span className="muted-heading">Clearer solutions.</span>
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Four connected disciplines. One thoughtful approach to helping
                your business thrive.
              </p>
              <Link href="/services" className="text-link">
                Explore all services <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className={`service-card ${service.color}`}
              >
                <div className="service-card-top">
                  <span className={`icon-box ${service.color}`}>
                    <service.icon size={23} strokeWidth={1.7} />
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>
                <span className="service-label">{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-card-link">
                  Discover more <ArrowUpRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="section approach-section">
        <div className="wrap approach-layout">
          <div className="approach-art">
            <img
              src={assets.humanity}
              alt="Intelligent business tools overlooking a greener connected city"
              loading="lazy"
              width="1672"
              height="941"
            />
            <div className="art-note">
              <Leaf size={23} />
              <div>
                <strong>Technology serves people.</strong>
                <span>That’s where we begin.</span>
              </div>
            </div>
            <span className="image-index">THE FINELYBD PHILOSOPHY / 01</span>
          </div>
          <div className="approach-copy">
            <span className="eyebrow">
              <i /> THE HUMAN SIDE OF INTELLIGENCE
            </span>
            <h2>
              Better technology.
              <br />
              <span className="green-heading">A better tomorrow.</span>
            </h2>
            <p>
              We believe progress means more than doing things faster. It means
              making business more transparent, decisions more informed, and
              opportunities more accessible.
            </p>
            <p>
              Across Bangladesh and emerging markets, FinelyBD brings practical
              expertise to quantitative finance and everyday operations—with a
              forward-looking, people-first perspective.
            </p>
            <div className="approach-values">
              <span>
                <Check size={15} /> Expertise that understands your context
              </span>
              <span>
                <Check size={15} /> Insight that supports confident decisions
              </span>
              <span>
                <Check size={15} /> Progress that puts people first
              </span>
            </div>
            <Link href="/about" className="text-link">
              Get to know FinelyBD <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <i /> HOW WE MOVE FORWARD
              </span>
              <h2>Your goals. Our starting point.</h2>
            </div>
            <span className="process-intro">
              A conversation, not a one-size-fits-all solution.
            </span>
          </div>
          <div className="process-steps">
            <div>
              <span className="step-number">01</span>
              <Compass size={24} />
              <h3>Understand</h3>
              <p>
                We start with your business, your challenges, and what you want
                to achieve.
              </p>
            </div>
            <div>
              <span className="step-number">02</span>
              <Sparkles size={24} />
              <h3>Shape the solution</h3>
              <p>
                We define a practical advisory approach around your needs and
                priorities.
              </p>
            </div>
            <div>
              <span className="step-number">03</span>
              <ArrowUpRight size={26} />
              <h3>Move forward, together</h3>
              <p>
                Agree the scope, expectations, and professional fees before work
                begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap cta-content">
          <div>
            <span className="eyebrow">LET’S BUILD WHAT’S NEXT</span>
            <h2>
              Your next chapter.
              <br />A little smarter.
            </h2>
            <p>Tell us about your business. Let’s explore what’s possible.</p>
          </div>
          <div className="cta-action">
            <Link href="/contact" className="btn btn-mint">
              Start a conversation <ArrowUpRight size={20} />
            </Link>
            <span>Initial enquiries are free. No commitment.</span>
          </div>
        </div>
      </section>
      <section className="mobile-teaser">
        <div className="wrap mobile-teaser-inner">
          <div className="mobile-teaser-copy">
            <span className="mini-icon">
              <Sparkles size={19} />
            </span>
            <div>
              <strong>FinelyBD, wherever you are.</strong>
              <p>The same thoughtful experience, on every screen.</p>
            </div>
          </div>
          <Link href="/mobile-app" className="text-link">
            Explore FinelyBD on mobile <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ChartSymbol() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 20V12m6 8V8m6 12V4m5 16H2" />
      <path d="m3 7 6-4 5 1 6-3" />
    </svg>
  );
}
