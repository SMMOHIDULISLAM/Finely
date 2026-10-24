/**
 * Services hub (/services) and individual service pages (/services/:id).
 * Five divisions, twenty-seven services — each service has its own page
 * with description, real-world examples, commitments and capabilities.
 */
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { assets } from "@/data/brand";
import {
  getCategory,
  getService,
  serviceCategories,
  servicesByCategory,
  type CatalogService,
  type ServiceCategory,
} from "@/data/serviceCatalog";

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
}) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${assets.hero})` }}
      aria-labelledby="page-heading"
    >
      <div className="page-hero-content wrap">
        <span className="eyebrow">
          <i /> {eyebrow}
        </span>
        <h1 id="page-heading" className="page-heading">
          {title}
        </h1>
        <p className="page-intro">{intro}</p>
      </div>
    </section>
  );
}

function DivisionNav() {
  return (
    <nav className="division-nav wrap" aria-label="Service divisions">
      {serviceCategories.map(category => (
        <a key={category.id} href={`#${category.id}`} className="svc-chip">
          {category.short}
        </a>
      ))}
    </nav>
  );
}

function CategoryBand({ category }: { category: ServiceCategory }) {
  const services = servicesByCategory(category.id);
  return (
    <section
      className="cat-band"
      id={category.id}
      aria-labelledby={`cat-${category.id}`}
    >
      <div
        className="cat-band-bg"
        style={{ backgroundImage: `url(${category.image})` }}
        aria-hidden="true"
      />
      <div className="wrap cat-band-inner">
        <div className="cat-band-head">
          <div>
            <span className="eyebrow light">
              <i /> DIVISION {category.id === "ai-digital" ? "01" : category.id === "finance" ? "02" : category.id === "construction" ? "03" : category.id === "business" ? "04" : "05"}
            </span>
            <h2 id={`cat-${category.id}`}>{category.title}</h2>
            <p className="cat-tagline">{category.tagline}</p>
          </div>
          <span className="cat-count">{services.length} services</span>
        </div>
        <p className="cat-description">{category.description}</p>
        <div className="cat-services">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: CatalogService }) {
  const Icon = service.icon;
  return (
    <Link href={`/services/${service.id}`} className="svc-card">
      <div className="svc-card-top">
        <span className={`icon-box ${service.color}`} aria-hidden="true">
          <Icon size={22} strokeWidth={1.7} />
        </span>
        <span className="service-number">{service.number}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.tagline}</p>
      <span className="service-card-link">
        Open service page <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title={
          <>
            Five divisions.
            <br />
            <span>Twenty-seven services. One partner.</span>
          </>
        }
        intro="From AI agents to skyscraper contracts — a multifunctional firm built so that whatever your ambition, there is a desk at FinelyBD that handles it."
      />
      <DivisionNav />
      <div className="supporting-content">
        {serviceCategories.map(category => (
          <CategoryBand key={category.id} category={category} />
        ))}
        <section className="section content-section">
          <div className="wrap detail-card">
            <div>
              <span className="eyebrow">
                <i /> START WITH A QUESTION
              </span>
              <h2>Not sure which service fits?</h2>
              <p>
                Tell us what you are trying to solve. We will use the first
                conversation to understand the context and point you to the
                right division — or assemble a team across several.
              </p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = getService(params.id);
  if (!service) {
    return (
      <section className="section content-section">
        <div className="wrap detail-card">
          <div>
            <span className="eyebrow">
              <i /> SERVICE NOT FOUND
            </span>
            <h2>We could not find that service.</h2>
            <p>
              It may have been renamed or moved. Browse all five divisions to
              find what you need.
            </p>
          </div>
          <Link className="btn btn-primary" href="/services">
            View all services <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    );
  }
  const category = getCategory(service.category)!;
  const siblings = servicesByCategory(service.category);
  const Icon = service.icon;
  const idx = siblings.findIndex(s => s.id === service.id);
  const prev = siblings[(idx - 1 + siblings.length) % siblings.length];
  const next = siblings[(idx + 1) % siblings.length];

  return (
    <>
      <section
        className="svc-hero"
        style={{ backgroundImage: `url(${category.image})` }}
        aria-labelledby="service-heading"
      >
        <div className="svc-hero-overlay">
          <div className="wrap svc-hero-content">
            <nav className="svc-breadcrumb" aria-label="Breadcrumb">
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <a href={`/services#${category.id}`}>{category.short}</a>
            </nav>
            <div className="svc-hero-title">
              <span className={`icon-box xl ${service.color}`} aria-hidden="true">
                <Icon size={34} strokeWidth={1.6} />
              </span>
              <div>
                <span className="eyebrow light">
                  SERVICE {service.number} — {service.label.toUpperCase()}
                </span>
                <h1 id="service-heading">{service.title}</h1>
                <p className="svc-tagline">{service.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="supporting-content">
        <section className="section content-section">
          <div className="wrap svc-layout">
            <div className="svc-main">
              <span className="eyebrow">
                <i /> ABOUT THIS SERVICE
              </span>
              <p className="svc-description">{service.description}</p>

              <h2 className="svc-subheading">
                <Sparkles size={20} /> In practice
              </h2>
              <div className="example-grid">
                {service.examples.map(example => (
                  <div key={example} className="example-item">
                    <Compass size={17} />
                    <span>{example}</span>
                  </div>
                ))}
              </div>

              <h2 className="svc-subheading">
                <Check size={20} /> What this can include
              </h2>
              <ul className="cap-list">
                {service.capabilities.map(capability => (
                  <li key={capability}>
                    <Check size={15} />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="svc-aside">
              <div className="commit-card">
                <h3>
                  <ShieldCheck size={20} /> Our commitments
                </h3>
                <ul>
                  {service.commitments.map(commitment => (
                    <li key={commitment}>
                      <Check size={15} />
                      {commitment}
                    </li>
                  ))}
                </ul>
                <Link
                  className="btn btn-primary btn-block"
                  href={`/contact?service=${service.id}`}
                >
                  Discuss this service <ArrowUpRight size={17} />
                </Link>
                <p className="small-note">
                  Initial enquiries are free. Professional fees are quoted and
                  agreed before any work begins.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section content-section svc-more">
          <div className="wrap">
            <span className="eyebrow">
              <i /> MORE FROM {category.title.toUpperCase()}
            </span>
            <div className="svc-more-grid">
              <Link href={`/services/${prev.id}`} className="svc-more-card">
                <ArrowLeft size={17} />
                <div>
                  <span className="small-note">Previous service</span>
                  <strong>{prev.title}</strong>
                </div>
              </Link>
              <Link href={`/services/${next.id}`} className="svc-more-card">
                <div>
                  <span className="small-note">Next service</span>
                  <strong>{next.title}</strong>
                </div>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
