import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "wouter";
import QRCode from "qrcode";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BriefcaseBusiness,
  Check,
  Clipboard,
  CreditCard,
  ExternalLink,
  FileText,
  Globe2,
  Landmark,
  LockKeyhole,
  PiggyBank,
  Rocket,
  Smartphone,
  Sparkles,
  WalletCards,
  UsersRound,
} from "lucide-react";
import { assets, leaders, services } from "@/data/brand";

const externalContactUrl = "https://www.finelybd.com/contact.html";
const officialWebsiteUrl = "https://www.finelybd.com";
const aiPreviewUrl = "https://smart-biz-ai-36.preview.emergentagent.com/";

const contactEmails = [
  "CEO@finelybd.com",
  "info@finelybd.com",
  "help@finelybd.com",
  "operation@finelybd.com",
];

const contactPhones = [
  "+8801612834025",
  "+8801844912880",
  "+8801977834025",
  "+8801405815554",
  "+8801868492467",
  "+8801534665339",
  "+8801715235401",
  "+8801616632475",
];

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
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

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT FINELYBD"
        title={
          <>
            Intelligence that
            <br />
            <span>keeps people in view.</span>
          </>
        }
        intro="We help businesses make sense of change with practical expertise, thoughtful systems, and a human-centered view of progress."
      />
      <div className="supporting-content">
        <section
          className="section content-section"
          aria-labelledby="mission-heading"
        >
          <div className="wrap split-layout">
            <div>
              <span className="eyebrow">
                <i /> OUR MISSION
              </span>
              <h2 id="mission-heading" className="section-heading">
                Technology should make better decisions feel more human.
              </h2>
            </div>
            <div>
              <p>
                FinelyBD exists to make business and financial thinking clearer
                and more accessible. We pair analytical discipline with a
                willingness to listen, so that solutions serve real people and
                real operating contexts.
              </p>
              <p>
                Our human-centered mission is simple: support meaningful
                progress without losing sight of the people who carry it
                forward.
              </p>
            </div>
          </div>
        </section>
        <section
          className="section humanity-section"
          aria-labelledby="humanity-heading"
        >
          <div className="wrap split-layout">
            <div className="detail-card">
              <span className="eyebrow">
                <i /> THE HUMAN SIDE OF INTELLIGENCE
              </span>
              <h2 id="humanity-heading">
                Clarity creates room for possibility.
              </h2>
              <p>
                From a more dependable ledger to a better-informed financial
                plan, good advisory work should leave people with more
                understanding, not more mystery.
              </p>
              <div className="capabilities">
                <span>
                  <Check size={15} /> Context before recommendation
                </span>
                <span>
                  <Check size={15} /> Responsible use of information
                </span>
                <span>
                  <Check size={15} /> Progress that can be explained
                </span>
              </div>
            </div>
            <figure className="humanity-visual">
              <img
                src={assets.humanity}
                alt="A connected city landscape representing technology in service of people"
                loading="lazy"
              />
              <figcaption>Human purpose, intelligent possibility.</figcaption>
            </figure>
          </div>
        </section>
        <section
          id="leadership"
          className="section content-section"
          aria-labelledby="leadership-heading"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  <i /> LEADERSHIP
                </span>
                <h2 id="leadership-heading">People behind the perspective.</h2>
              </div>
              <p>
                Leadership grounded in governance, execution, and a clear
                understanding of business and finance.
              </p>
            </div>
            <div className="leadership-grid">
              {leaders.map(leader => (
                <article className="leader-card" key={leader.name}>
                  <div className="leader-initials" aria-hidden="true">
                    {leader.initials}
                  </div>
                  <span className="small-note">{leader.role}</span>
                  <h3>{leader.name}</h3>
                  <p>{leader.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

type FormResult =
  | { kind: "draft"; draft: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

function draftText(data: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  return `FinelyBD consultation enquiry\n\nName: ${data.name}\nEmail: ${data.email}\nAdvisory category: ${data.service}\nMessage:\n${data.message}`;
}

export function ContactPage() {
  const [result, setResult] = useState<FormResult | null>(null);
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [initialService] = useState(() => {
    const candidate = new URLSearchParams(window.location.search).get(
      "service"
    );
    return services.some(service => service.id === candidate) ? candidate! : "";
  });
  const netlifyFormsEnabled = import.meta.env.VITE_NETLIFY_FORMS === "true";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const data = {
      name: String(values.get("name") || "").trim(),
      email: String(values.get("email") || "").trim(),
      service: String(values.get("service") || ""),
      message: String(values.get("message") || "").trim(),
    };
    if (!data.name || !data.message || !values.get("consent")) {
      setResult({
        kind: "error",
        message:
          "Please enter your name and message, and confirm your consent.",
      });
      return;
    }
    const readableDraft = draftText(data);
    setDraft(readableDraft);
    setCopied(false);
    setCopyMessage("");

    if (!netlifyFormsEnabled) {
      setResult({ kind: "draft", draft: readableDraft });
      return;
    }

    const encoded = new URLSearchParams();
    encoded.set("form-name", "consultation");
    encoded.set("name", data.name);
    encoded.set("email", data.email);
    encoded.set("service", data.service);
    encoded.set("message", data.message);
    encoded.set("consent", values.get("consent") ? "yes" : "");
    encoded.set("bot-field", String(values.get("bot-field") || ""));

    setBusy(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setResult({
        kind: "success",
        message: "Your enquiry was submitted successfully.",
      });
    } catch {
      setResult({
        kind: "error",
        message:
          "We could not submit the enquiry. Please retry, or use the official contact page instead.",
      });
    } finally {
      setBusy(false);
    }
  };

  const copyDraft = async () => {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setCopyMessage("Draft copied. Nothing has been sent.");
    } catch {
      setCopied(false);
      setCopyMessage(
        "Copy is unavailable in this preview. Select and copy the draft text above instead."
      );
    }
  };

  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={
          <>
            A thoughtful first
            <br />
            <span>conversation starts here.</span>
          </>
        }
        intro="Share a little about what you are working through. Initial enquiries are free; professional service fees are quoted and agreed before any work begins."
      />
      <div className="supporting-content">
        <section
          className="section content-section"
          aria-labelledby="contact-heading"
        >
          <div className="wrap contact-layout">
            <aside className="contact-aside">
              <span className="eyebrow">
                <i /> LET'S TALK
              </span>
              <h2 id="contact-heading">
                Bring us the question behind the question.
              </h2>
              <p>
                {netlifyFormsEnabled
                  ? "Share your question with the advisory team using the form."
                  : "Prepare an enquiry draft here, then continue on the official contact page. This design preview does not send your information."}
              </p>
              <div className="notice">
                <LockKeyhole size={17} />
                <p>
                  <strong>Privacy by default.</strong> Never send passwords,
                  payment credentials, or confidential banking documents through
                  this form.
                </p>
              </div>
              <div className="direct-contact">
                <h3>Email us</h3>
                <ul className="contact-channels">
                  {contactEmails.map((email) => (
                    <li key={email}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                  ))}
                </ul>
                <h3>Call or message</h3>
                <ul className="contact-channels">
                  {contactPhones.map((phone) => (
                    <li key={phone}>
                      <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="small-note contact-disclosure">
                <FileText size={15} /> Channels above are published for general
                enquiries. For detailed project discussions, the contact form
                keeps everything in one thread.
              </div>
              <a
                className="text-link"
                href={externalContactUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the official FinelyBD contact page{" "}
                <ExternalLink size={16} />
              </a>
            </aside>
            <div className="form-panel">
              <form
                className="inquiry-form"
                name="consultation"
                onSubmit={handleSubmit}
                noValidate={false}
              >
                <input type="hidden" name="form-name" value="consultation" />
                <div
                  className="field"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <label htmlFor="bot-field">Do not fill this out</label>
                  <input
                    id="bot-field"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="contact-name">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="contact-service">
                    Advisory category <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue={initialService}
                    required
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.label}
                      </option>
                    ))}
                    <option value="other">Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="contact-message">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="What would you like to explore?"
                    required
                  />
                </div>
                <label className="check-field">
                  <input type="checkbox" name="consent" value="yes" required />
                  <span>
                    I consent to being contacted about my enquiry. I understand
                    that enquiries are free, professional fees are agreed before
                    work, and I must not share sensitive credentials or
                    confidential banking documents.
                  </span>
                </label>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={busy}
                >
                  {busy
                    ? "Submitting…"
                    : netlifyFormsEnabled
                      ? "Submit enquiry"
                      : "Prepare enquiry draft"}{" "}
                  <ArrowUpRight size={17} />
                </button>
              </form>
              {result && (
                <div
                  className={`form-result ${result.kind}`}
                  role={result.kind === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  <strong>
                    {result.kind === "draft"
                      ? "Draft prepared — nothing was sent."
                      : result.kind === "success"
                        ? "Enquiry submitted"
                        : "Submission issue"}
                  </strong>
                  <p>
                    {result.kind === "draft"
                      ? "Review the readable draft below, then copy it or continue on the official contact page."
                      : result.message}
                  </p>
                  {result.kind === "draft" && (
                    <>
                      <pre>{result.draft}</pre>
                      <div className="form-result-actions">
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={copyDraft}
                        >
                          <Clipboard size={16} />
                          {copied ? "Copied" : "Copy draft"}
                        </button>
                        <a
                          className="btn btn-outline"
                          href={externalContactUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Official contact page <ExternalLink size={15} />
                        </a>
                      </div>
                    </>
                  )}
                  {result.kind === "error" && (
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setResult(null)}
                    >
                      Retry
                    </button>
                  )}
                </div>
              )}
              {copyMessage && (
                <p className="small-note" role="status">
                  {copyMessage}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const portalModes = {
  Customer: {
    icon: BriefcaseBusiness,
    title: "A clearer client experience",
    body: "A future workspace for agreed documents, progress updates, and communication in one secure place.",
  },
  Staff: {
    icon: UsersRound,
    title: "Tools for the team",
    body: "A future workspace for staff workflows, shared resources, and role-based operational visibility.",
  },
  Admin: {
    icon: Landmark,
    title: "Governance and oversight",
    body: "A future workspace for authorised administrators to review structure, controls, and organisation-level information.",
  },
} as const;
type PortalMode = keyof typeof portalModes;

export function PortalPage() {
  const [mode, setMode] = useState<PortalMode>("Customer");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const active = portalModes[mode];

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(
      `${mode} sign-in is not active yet. The portal is still under development — this preview does not transmit or store your credentials, and no account can be created here. Access will be enabled at launch.`
    );
    setPassword("");
  };

  return (
    <>
      <PageHero
        eyebrow="PORTAL"
        title={
          <>
            A secure space,
            <br />
            <span>still taking shape.</span>
          </>
        }
        intro="The FinelyBD portal is under development. The sign-in window below shows how access will work once the portal launches."
      />
      <div className="supporting-content">
        <section
          className="section content-section"
          aria-labelledby="portal-heading"
        >
          <div className="wrap split-layout">
            <div>
              <span className="eyebrow">
                <i /> ONE DOOR, THREE ROLES
              </span>
              <h2 id="portal-heading" className="section-heading">
                Access will follow the right safeguards.
              </h2>
              <p>
                Customers, staff, and administrators will each sign in through
                the same window and land in a workspace shaped to their role.
                No role can be activated from this preview — accounts are
                created by FinelyBD when the portal launches.
              </p>
              <ul className="portal-role-list">
                {(Object.keys(portalModes) as PortalMode[]).map(item => {
                  const RoleIcon = portalModes[item].icon;
                  return (
                    <li key={item}>
                      <RoleIcon size={18} />
                      <div>
                        <strong>{item}</strong>
                        <p>{portalModes[item].body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Link className="btn btn-primary" href="/contact">
                Ask about portal updates <ArrowRight size={17} />
              </Link>
            </div>
            <div className="detail-card portal-card portal-login-card">
              <LockKeyhole size={27} />
              <h3>Sign in to the portal</h3>
              <div
                className="portal-tabs"
                role="group"
                aria-label="Portal role"
              >
                {(Object.keys(portalModes) as PortalMode[]).map(item => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={mode === item}
                    className={mode === item ? "active" : ""}
                    onClick={() => {
                      setMode(item);
                      setNotice(null);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <form className="inquiry-form portal-login-form" onSubmit={handleLogin}>
                <div className="field">
                  <label htmlFor="portal-user">
                    {mode} ID <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="portal-user"
                    name="userId"
                    type="text"
                    autoComplete="username"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="portal-password">
                    Password <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="portal-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Sign in as {mode} <ArrowRight size={17} />
                </button>
              </form>
              {notice && (
                <p className="small-note portal-login-notice" role="status">
                  {notice}
                </p>
              )}
              <p className="small-note">
                Preview only — nothing you type here is sent anywhere or saved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/**
 * Masks an account/wallet/card number so the page never displays it in full.
 * head/tail digits stay visible so clients can tell channels apart.
 */
function maskNumber(value: string, head = 4, tail = 3) {
  if (value.includes("*")) return value;
  if (value.length <= head + tail) return value;
  return `${value.slice(0, head)}${"\u2022".repeat(4)}${value.slice(-tail)}`;
}

/**
 * Renders a scannable QR code for a payment destination. The full number
 * lives only inside the QR payload — never in the visible page text.
 */
function PaymentQr({ value, label }: { value: string; label: string }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    let alive = true;
    QRCode.toDataURL(value, {
      width: 180,
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#173b3a", light: "#ffffff" },
    })
      .then((url) => {
        if (alive) setSrc(url);
      })
      .catch(() => {
        /* QR rendering is best-effort; masked number remains visible */
      });
    return () => {
      alive = false;
    };
  }, [value]);
  if (!src) {
    return <span className="qr-placeholder" aria-label={label} />;
  }
  return <img className="qr-img" src={src} alt={label} />;
}

const mfsOptions = [
  {
    icon: Banknote,
    name: "bKash",
    numbers: ["01712834025", "01886834025", "01715235401"],
  },
  {
    icon: Rocket,
    name: "Rocket",
    numbers: ["01712834025"],
  },
  {
    icon: WalletCards,
    name: "Nagad",
    numbers: ["01712834025"],
  },
  {
    icon: PiggyBank,
    name: "Upay",
    numbers: ["01712834025"],
  },
] as const;

const usdAccount = [
  ["Account holder", "S M MOHIDUL ISLAM"],
  ["Account number", "30000005322271"],
  ["Routing number", "028000024"],
  [
    "Beneficiary address",
    "House 11/4 Road 2/A Sobujbagh R/A Shibgonj Sylhet, Sylhet, BD-G, 3100, BD",
  ],
] as const;

const cardPayments = [
  {
    network: "VISA",
    number: "4549240658108669",
    currency: "International currency",
  },
  {
    network: "VISA",
    number: "4549240642968897",
    currency: "International currency",
  },
  {
    network: "VISA",
    number: "423858******2974",
    currency: "International currency",
  },
] as const;

const localBankAccounts = [
  {
    holder: "S M Mohidul Islam",
    bank: "Eastern Bank PLC",
    account: "0921050000793",
    branch: "Sylhet Branch, Sylhet",
  },
  {
    holder: "S M Mohidul Islam",
    bank: "United Commercial Bank PLC",
    account: "0633211000048914",
    branch: "Sylhet Zinda Bazar Branch, Sylhet",
  },
  {
    holder: "S M Mohidul Islam",
    bank: "Bank Asia PLC",
    account: "01934005277",
    branch: "Shahjalal Upashahar Branch, Sylhet",
  },
  {
    holder: "Saif Ahmed Jaigirder",
    bank: "Pubali Bank PLC",
    account: "4969101001053",
    branch: "Shibgonj Branch, Sylhet",
  },
] as const;

export function PaymentsPage() {
  return (
    <>
      <PageHero
        eyebrow="PAYMENTS"
        title={
          <>
            Simple, secure ways
            <br />
            <span>to pay FinelyBD.</span>
          </>
        }
        intro="FinelyBD accepts payments through Bangladesh's leading mobile financial services and USD bank transfer. Please confirm the payable amount and reference with us before sending any payment."
      />
      <div className="supporting-content">
        <section
          className="section content-section"
          aria-labelledby="mfs-heading"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  <i /> MOBILE FINANCIAL SERVICES
                </span>
                <h2 id="mfs-heading">Pay from any MFS wallet.</h2>
              </div>
              <p>
                These are personal FinelyBD wallets enabled for Cash In,
                Bank Top-up, and Send Money only — and they can receive
                foreign currencies too. For security, full numbers are never
                shown on this page: scan the QR code with your MFS app to
                complete the payment, then share the transaction ID through
                the official contact form.
              </p>
            </div>
            <div className="payment-grid">
              {mfsOptions.map(({ icon: Icon, name, numbers }) => (
                <article className="payment-option" key={name}>
                  <Icon size={23} />
                  <h3>{name}</h3>
                  <ul className="wallet-list">
                    {numbers.map((number) => (
                      <li className="wallet-item" key={number}>
                        <PaymentQr
                          value={`${name} \u2014 FinelyBD payment: ${number}`}
                          label={`${name} payment QR code`}
                        />
                        <span className="wallet-number">
                          {maskNumber(number)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="small-note">
                    Cash In &middot; Bank Top-up &middot; Send Money
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section content-section"
          aria-labelledby="card-heading"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  <i /> CARD PAYMENT
                </span>
                <h2 id="card-heading">Pay by international card.</h2>
              </div>
              <p>
                For payments in international currency, you can transfer to the
                FinelyBD VISA card below. Please confirm the payable amount
                with us first and share the transfer receipt afterwards.
              </p>
            </div>
            <div className="payment-grid account-grid">
              {cardPayments.map(({ network, number, currency }) => (
                <article
                  className="detail-card card-payment-card"
                  key={number}
                >
                  <div className="card-payment-head">
                    <div className="card-payment-title">
                      <CreditCard size={23} />
                      <h3>{network}</h3>
                    </div>
                    <PaymentQr
                      value={`VISA card payment \u2014 FinelyBD: ${number}`}
                      label={`${network} payment QR code`}
                    />
                  </div>
                  <dl className="bank-rows">
                    <div className="bank-row">
                      <dt className="bank-key">Card number</dt>
                      <dd className="bank-value">
                        {maskNumber(number, 6, 4)}
                      </dd>
                    </div>
                    <div className="bank-row">
                      <dt className="bank-key">Currency</dt>
                      <dd className="bank-value">{currency}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section content-section"
          aria-labelledby="local-bank-heading"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  <i /> LOCAL BANK TRANSFER
                </span>
                <h2 id="local-bank-heading">Pay directly to our banks.</h2>
              </div>
              <p>
                Clients in Bangladesh can pay in BDT directly to any of the
                accounts below through mobile banking apps, internet banking,
                or branch deposit. Full account numbers are intentionally
                hidden here — confirm the complete details through the
                official contact form before your first payment, and use your
                invoice reference in the deposit narration.
              </p>
            </div>
            <div className="payment-grid account-grid">
              {localBankAccounts.map(({ holder, bank, account, branch }) => (
                <article className="detail-card account-card" key={account}>
                  <div className="account-card-head">
                    <h3>{bank}</h3>
                    <PaymentQr
                      value={`Bank transfer \u2014 FinelyBD\nBank: ${bank}\nAccount: ${account}\nAccount holder: ${holder}\nBranch: ${branch}`}
                      label={`${bank} payment QR code`}
                    />
                  </div>
                  <dl className="bank-rows">
                    <div className="bank-row">
                      <dt className="bank-key">Account holder</dt>
                      <dd className="bank-value">{holder}</dd>
                    </div>
                    <div className="bank-row">
                      <dt className="bank-key">Account number</dt>
                      <dd className="bank-value">
                        {maskNumber(account, 4, 3)}
                      </dd>
                    </div>
                    <div className="bank-row">
                      <dt className="bank-key">Branch</dt>
                      <dd className="bank-value">{branch}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section content-section"
          aria-labelledby="bank-heading"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  <i /> USD BANK TRANSFER
                </span>
                <h2 id="bank-heading">For international payments.</h2>
              </div>
              <p>
                Clients outside Bangladesh can settle fees in USD by wire
                transfer to the account below. Bank charges may apply; please
                instruct your bank to cover transfer fees as agreed in your
                quotation.
              </p>
            </div>
            <div className="detail-card usd-card">
              <div className="account-card-head">
                <h3>JP Morgan Chase NA</h3>
                <PaymentQr
                  value={`USD wire transfer \u2014 FinelyBD\nBank: JP Morgan Chase NA\nAccount: 30000005322271\nAccount holder: S M MOHIDUL ISLAM\nRouting: 028000024`}
                  label="USD bank transfer QR code"
                />
              </div>
              <dl className="bank-rows">
                {usdAccount.map(([label, value]) => (
                  <div className="bank-row" key={label}>
                    <dt className="bank-key">{label}</dt>
                    <dd className="bank-value">
                      {label === "Account number"
                        ? maskNumber(value, 4, 3)
                        : value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="notice payment-notice">
              <LockKeyhole size={17} />
              <p>
                <strong>Stay safe when paying.</strong> FinelyBD never asks for
                your MFS PIN, wallet password, or card credentials, and never
                displays its own account numbers in full on this page. Verify
                every payment request through the official contact form
                before sending money.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export function MobilePage() {
  return (
    <>
      <PageHero
        eyebrow="FINELYBD ON MOBILE"
        title={
          <>
            Your work,
            <br />
            <span>wherever you are.</span>
          </>
        }
        intro="The existing FinelyBD website works in a mobile browser. Install it to your home screen when you want quick access."
      />
      <div className="supporting-content">
        <section
          className="section content-section"
          aria-labelledby="mobile-heading"
        >
          <div className="wrap mobile-layout">
            <div className="mobile-copy">
              <span className="eyebrow">
                <i /> INSTALL FROM YOUR BROWSER
              </span>
              <h2 id="mobile-heading">A simple, familiar way to stay close.</h2>
              <p>
                Open the official website in Safari or Chrome, then choose your
                browser's <strong>Add to Home Screen</strong> option. The
                installed shortcut opens the live website; it is not a separate
                native app.
              </p>
              <ol className="capabilities">
                <li>
                  <span>01</span>Open the official FinelyBD website.
                </li>
                <li>
                  <span>02</span>Use your browser menu to choose Add to Home
                  Screen.
                </li>
                <li>
                  <span>03</span>Open the new shortcut whenever you need it.
                </li>
              </ol>
              <a
                className="btn btn-primary"
                href={officialWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open www.finelybd.com <ExternalLink size={17} />
              </a>
            </div>
            <div className="detail-card mobile-device-card">
              <Smartphone size={31} />
              <h3>Official website</h3>
              <p>
                For the current FinelyBD experience, use the live website at{" "}
                <a
                  href={officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.finelybd.com
                </a>
                .
              </p>
              <div className="small-note">
                <Globe2 size={15} /> Browser-based access
              </div>
            </div>
          </div>
        </section>
        <section
          className="section content-section mobile-preview-section"
          aria-labelledby="preview-heading"
        >
          <div className="wrap detail-card">
            <Sparkles size={25} />
            <div>
              <span className="eyebrow">OPTIONAL PREVIEW</span>
              <h2 id="preview-heading">Explore a separate AI concept</h2>
              <p>
                <strong>Unverified external preview:</strong> this is a separate
                preview environment, not the official FinelyBD website. Do not
                enter real credentials. Updates do not synchronise with
                FinelyBD.
              </p>
              <a
                className="text-link"
                href={aiPreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the AI preview <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
