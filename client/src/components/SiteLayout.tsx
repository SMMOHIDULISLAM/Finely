import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Globe2,
  LockKeyhole,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { assets } from "@/data/brand";

const pathAliases: Record<string, string> = {
  "/index.html": "/",
  "/contact.html": "/contact",
  "/login.html": "/portal",
  "/mobile-app.html": "/mobile-app",
  "/payments.html": "/payments",
};

export function Header() {
  const [location] = useLocation();
  const activeLocation = pathAliases[location] || location;
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About us", path: "/about" },
    { label: "Leadership", path: "/about#leadership" },
    { label: "Contact", path: "/contact" },
  ];
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="FinelyBD home">
          <img
            src={assets.logo}
            alt="FinelyBD — AI for a Better Humanity"
            width="220"
            height="88"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(link => (
            <Link
              key={link.label}
              href={link.path}
              className={activeLocation === link.path ? "active" : ""}
              aria-current={activeLocation === link.path ? "page" : undefined}
            >
              {link.label}
              {link.label === "Services" && (
                <ChevronDown size={13} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/portal" className="portal-link">
            <LockKeyhole size={14} /> <span>Client portal</span>
          </Link>
          <Link href="/contact" className="btn btn-primary header-cta">
            Let’s talk <ArrowUpRight size={16} />
          </Link>
        </div>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map(link => (
            <Link
              href={link.path}
              key={link.label}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <Link href="/portal" onClick={() => setOpen(false)}>
            Client portal <LockKeyhole size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <img src={assets.logo} alt="FinelyBD" width="220" height="88" />
          </Link>
          <p>
            Intelligence with purpose.
            <br />
            Progress with people at its heart.
          </p>
          <span className="country">
            <Globe2 size={14} /> Rooted in Bangladesh. Looking forward.
          </span>
        </div>
        <div className="footer-links">
          <span>Explore</span>
          <Link href="/services">Our services</Link>
          <Link href="/about">About FinelyBD</Link>
          <Link href="/about#leadership">Our leadership</Link>
        </div>
        <div className="footer-links">
          <span>Connect</span>
          <Link href="/contact">Make an enquiry</Link>
          <Link href="/portal">Client & staff portal</Link>
          <Link href="/mobile-app">FinelyBD on mobile</Link>
          <Link href="/payments">Payment information</Link>
        </div>
        <div className="footer-inquiry">
          <span>A better tomorrow starts with a conversation.</span>
          <Link href="/contact" className="text-link">
            Tell us what’s next <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} FinelyBD. All rights reserved.
        </span>
        <span className="demo-label">
          <i /> Design preview · No live-site changes
        </span>
        <a
          href="https://www.finelybd.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit current website <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}

export function RouteEffects() {
  const [location] = useLocation();
  useEffect(() => {
    const jump = () =>
      requestAnimationFrame(() => {
        const hash = window.location.hash.slice(1);
        if (hash)
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "instant" });
      });
    for (const event of ["hashchange", "pushState", "replaceState", "popstate"])
      window.addEventListener(event, jump);
    return () => {
      for (const event of [
        "hashchange",
        "pushState",
        "replaceState",
        "popstate",
      ])
        window.removeEventListener(event, jump);
    };
  }, []);
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "AI for a Better Humanity",
      "/services": "Our Advisory Services",
      "/about": "About Us & Leadership",
      "/contact": "Let’s Talk",
      "/portal": "Client & Staff Portal",
      "/mobile-app": "FinelyBD on Mobile",
      "/payments": "Payment Information",
    };
    document.title = `FinelyBD — ${titles[pathAliases[location] || location] || "AI for a Better Humanity"}`;
    const hash = window.location.hash;
    if (hash)
      requestAnimationFrame(() =>
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "instant" })
      );
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}
