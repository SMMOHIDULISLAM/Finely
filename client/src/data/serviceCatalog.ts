/**
 * Master service catalog — five divisions, twenty-seven services.
 * Every service renders its own page (/services/:id) inside its category.
 * Facts only: no invented phone numbers, emails or addresses.
 */
import {
  Bot,
  Building,
  Building2,
  BriefcaseBusiness,
  Calculator,
  ChartNoAxesCombined,
  Cog,
  Compass,
  Factory,
  Gavel,
  Globe2,
  GraduationCap,
  HardHat,
  KeyRound,
  Landmark,
  Lightbulb,
  MapPin,
  Megaphone,
  Mic,
  PencilRuler,
  Presentation,
  Receipt,
  Scale,
  Shovel,
  Users,
  UsersRound,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = {
  id: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
};

export type CatalogService = {
  id: string;
  category: string;
  number: string;
  icon: LucideIcon;
  color: string;
  title: string;
  label: string;
  tagline: string;
  description: string;
  examples: string[];
  commitments: string[];
  capabilities: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai-digital",
    title: "AI & Digital Technology",
    short: "AI & Digital",
    tagline: "Intelligent systems that work while you sleep.",
    description:
      "The engine room of FinelyBD: AI agents, digital platforms and data systems designed, built and deployed by our own engineering leadership — plus a government-grade capability for bidding and delivering national IT projects.",
    image: "/assets/cat-ai-digital.png",
    accent: "cyan",
  },
  {
    id: "finance",
    title: "Finance, Banking & Tax",
    short: "Finance & Tax",
    tagline: "From daily bookkeeping to digital banking for everyone.",
    description:
      "A complete financial services house: advisory, accounting, tax, software and partnerships that bring formal finance to people the banks haven't reached — the world's best wallet-and-savings thinking, built for Bangladesh.",
    image: "/assets/cat-finance.png",
    accent: "amber",
  },
  {
    id: "construction",
    title: "Construction & Real Estate",
    short: "Construction",
    tagline: "From raw land to landmark towers.",
    description:
      "An end-to-end built-environment practice: consultancy, design, renovation, high-rise contracts, property management, land agency, development, industrial setup and professional survey.",
    image: "/assets/cat-construction.png",
    accent: "orange",
  },
  {
    id: "business",
    title: "Business & Corporate",
    short: "Business",
    tagline: "Sharper decisions, delivered globally.",
    description:
      "Strategy and delivery for companies that want to grow: business intelligence, corporate and international project delivery, and hands-on consultancy for owners and boards.",
    image: "/assets/cat-business.png",
    accent: "blue",
  },
  {
    id: "people",
    title: "People, Talent & Events",
    short: "People & Events",
    tagline: "The right people, in the right room.",
    description:
      "A curated freelance marketplace, HR outsourcing for multinationals, and a full events and training operation — because in the end, capability is human.",
    image: "/assets/cat-people.png",
    accent: "violet",
  },
];

export const serviceCatalog: CatalogService[] = [
  // ─── AI & Digital Technology ────────────────────────────────────────
  {
    id: "ai-agents",
    category: "ai-digital",
    number: "01",
    icon: Bot,
    color: "indigo",
    title: "AI agents, built and deployed.",
    label: "AI agent development & deployment",
    tagline: "Autonomous digital workers, engineered end to end.",
    description:
      "Custom AI agents that understand your business, speak your customers' language and execute real work — answering enquiries, qualifying leads, reconciling data, drafting reports. Designed by our AI leadership, deployed on infrastructure we manage, and improved continuously under agreement. From a single assistant to a fleet of agents working across every department.",
    examples: [
      "A 24/7 customer-service agent trained on your products and policies",
      "An agent that reads incoming invoices and prepares ledger entries for review",
      "A sales-qualification agent that books meetings straight into your calendar",
      "An internal knowledge agent answering staff questions from your own documents",
    ],
    commitments: [
      "Built around your data, your workflows and your compliance needs",
      "Deployed on managed infrastructure with monitoring and human fallbacks",
      "Documented and handed over — you are never locked in",
      "Improved continuously from real usage, with monthly reporting",
    ],
    capabilities: [
      "Conversational & customer-service agents",
      "Workflow & back-office automation",
      "Document intelligence (extraction, summarization)",
      "Deployment, hosting & monitoring",
      "Integration with your existing systems",
      "Ongoing tuning & support",
    ],
  },
  {
    id: "govt-it-bidding",
    category: "ai-digital",
    number: "02",
    icon: Gavel,
    color: "blue",
    title: "Government IT project bidding.",
    label: "Government IT bidding & delivery",
    tagline: "Winning public tenders — then delivering them.",
    description:
      "Experienced bid preparation for government and public-sector IT projects: from e-GP (electronic Government Procurement) registration to technical proposals, pricing strategy and compliance documentation — followed by disciplined delivery when the contract is won, with specialist experts assembled from our network.",
    examples: [
      "e-GP tender readiness and PQQ documentation for a ministry ICT framework",
      "Technical & financial proposal for a district digital land-records system",
      "Fintech integration bid for a state-owned commercial bank",
      "Post-award project management of a national e-service rollout",
    ],
    commitments: [
      "Honest go / no-go assessment before any bid — we don't waste your fee",
      "Compliance-first documentation aligned to tender specifications",
      "Realistic pricing that protects both margin and delivery quality",
      "A full delivery team assembled from our expert network when you win",
    ],
    capabilities: [
      "e-GP & tender opportunity scanning",
      "Bid / PQQ preparation & review",
      "Technical proposal writing",
      "Pricing & commercial strategy",
      "Compliance documentation",
      "Post-award delivery management",
    ],
  },
  {
    id: "digital-marketing",
    category: "ai-digital",
    number: "03",
    icon: Megaphone,
    color: "cyan",
    title: "Online marketing solutions.",
    label: "Digital marketing",
    tagline: "Growth, measured in numbers.",
    description:
      "Full-funnel digital marketing run by people who build AI for a living: targeted campaigns, search and social advertising, content engines and marketing analytics — with AI used for audience insight, creative testing and honest reporting that connects ad spend to actual revenue.",
    examples: [
      "Performance ad campaigns for a Sylhet retailer expanding to Dhaka",
      "SEO & content program that tripled organic enquiries for a law firm",
      "AI-assisted creative testing across 40 ad variants for a fintech launch",
      "Monthly analytics dashboard connecting ad spend to actual revenue",
    ],
    commitments: [
      "Strategy before spend — no budget fires without a plan",
      "Transparent reporting you can verify yourself",
      "Creative that respects your brand and local culture",
      "Continuous optimization, never set-and-forget",
    ],
    capabilities: [
      "Search & social advertising",
      "SEO & content marketing",
      "Email & automation journeys",
      "Brand & campaign creative",
      "Marketing analytics & dashboards",
      "AI-driven audience insights",
    ],
  },
  {
    id: "academy",
    category: "ai-digital",
    number: "04",
    icon: GraduationCap,
    color: "violet",
    title: "AI skills, taught simply.",
    label: "AI training & courses",
    tagline: "Corporate AI training, from our wing to your workforce.",
    description:
      "The Training & Development wing of FinelyBD, led by Director Md Ashakur Rahman: practical, jargon-free courses on AI, machine learning and AI agent development. Built in-house, delivered on-site or licensed for your own learning platform — so your team learns by building, not just by watching.",
    examples: [
      "A two-day 'AI for Managers' program for a bank's operations team",
      "Hands-on AI agent development bootcamp for a software firm's engineers",
      "Custom curriculum for a corporate digital-transformation academy",
      "Licensed courseware with train-the-trainer certification",
    ],
    commitments: [
      "Courses designed for real business outcomes, not certificates alone",
      "Taught by practitioners who build AI systems daily",
      "Customized to your industry, your data and your tools",
      "Post-course support and community access",
    ],
    capabilities: [
      "AI/ML fundamentals for business teams",
      "AI agent development bootcamps",
      "Corporate curriculum design",
      "Course licensing & train-the-trainer",
      "Executive AI briefings",
    ],
  },

  // ─── Finance, Banking & Tax ─────────────────────────────────────────
  {
    id: "finance-foresight",
    category: "finance",
    number: "05",
    icon: ChartNoAxesCombined,
    color: "violet",
    title: "Finance, with foresight.",
    label: "Financial advisory",
    tagline: "See the cash flow before it happens.",
    description:
      "Plan beyond the next quarter. Quantitative cash-flow forecasting, macroeconomic stress modeling and liquidity optimization based on empirical time-series methods — models your team can interrogate, assumptions documented, so every recommendation ties to a decision you actually face.",
    examples: [
      "13-week cash-flow model for a manufacturer navigating LC margins",
      "Stress test of a retail chain against taka depreciation scenarios",
      "Working-capital redesign that released 22% of trapped inventory cash",
      "Investment-readiness pack for a Series-A-bound startup",
    ],
    commitments: [
      "Models you can interrogate — assumptions documented, never black boxes",
      "Recommendations tied to real decisions, not generic ratios",
      "Confidential handling of all financial data",
      "Knowledge transfer so your team can run the model itself",
    ],
    capabilities: [
      "Cash-flow forecasting",
      "Stress & scenario modeling",
      "Liquidity optimization",
      "Investment analysis",
      "Financial model audit",
    ],
  },
  {
    id: "banking-connected",
    category: "finance",
    number: "06",
    icon: Landmark,
    color: "teal",
    title: "Banking, connected.",
    label: "Banking facilitation",
    tagline: "Your business, fluent in the banking system.",
    description:
      "Connect business needs with banking expertise: payment ecosystem channel architecture for MFS, NPSB, RTGS and Cards, central bank compliance alignment, and commercial banking facilitation — with direct liaison with banks and MFS providers on your behalf.",
    examples: [
      "Payment architecture for an MFS aggregator covering bKash, Nagad and NPSB",
      "RTGS & BEFTN process design for a corporate treasury",
      "Compliance gap assessment before a digital product launch",
      "Banking facilitation for a foreign buyer paying Bangladeshi suppliers",
    ],
    commitments: [
      "Bangladesh Bank rules treated as a floor, not a ceiling",
      "Vendor-neutral advice — we recommend what fits you",
      "Documentation your auditors and bankers will accept",
      "Direct liaison with banks and MFS providers",
    ],
    capabilities: [
      "MFS / NPSB / RTGS / Card channel architecture",
      "Regulatory compliance alignment",
      "Treasury process design",
      "Bank relationship facilitation",
    ],
  },
  {
    id: "digital-financial-services",
    category: "finance",
    number: "07",
    icon: WalletCards,
    color: "amber",
    title: "Digital financial services.",
    label: "Wallet, savings & payments",
    tagline: "Wallet, savings and payments — finance for everyone.",
    description:
      "Inspired by the world's best consumer fintechs: the design and build capability for wallet, savings, payments and micro-investment products that serve the non-bank community — the market vendor, the driver, the village entrepreneur. We design the product, the compliance path and the agent network, and operate as a partner to make it real.",
    examples: [
      "Agent-wallet model for a cooperative serving 40,000 rural members",
      "Group-savings app design with goals, nudges and withdrawal rules",
      "Merchant QR payment rollout across a mid-size town's bazaar",
      "Micro-investment product reviewed for Bangladesh Bank sandbox rules",
    ],
    commitments: [
      "Consumer protection designed in from day one",
      "Regulatory pathway mapped before a single taka is spent",
      "Products that work on the phones people actually own",
      "Financial-literacy onboarding in plain Bangla and English",
    ],
    capabilities: [
      "Wallet & payment product design",
      "Savings & micro-investment features",
      "Agent network design",
      "Regulatory sandbox applications",
      "Financial-literacy program design",
    ],
  },
  {
    id: "balance-sheet",
    category: "finance",
    number: "08",
    icon: Scale,
    color: "green",
    title: "Balance sheet preparation.",
    label: "Balance sheet preparation",
    tagline: "A statement of your strength, done right.",
    description:
      "Professionally prepared balance sheets for companies, lenders, investors and regulators — from trial balance to a presentation-grade statement, with the notes and schedules that make it stand up to scrutiny, prepared under Bangladesh Financial Reporting Standards.",
    examples: [
      "Year-end balance sheet ahead of a bank credit review",
      "Opening balance sheet for a new joint venture, with asset valuation schedules",
      "Restated financials for a company cleaning up years of informal records",
      "Investor-ready statements with ratio analysis for a fundraising round",
    ],
    commitments: [
      "Prepared under Bangladesh Financial Reporting Standards",
      "Every figure traceable to source documentation",
      "Delivered on the agreed date — lender deadlines respected",
      "Reviewed by a second preparer before release",
    ],
    capabilities: [
      "Trial-balance to statement preparation",
      "Notes & schedules",
      "Comparative & restated statements",
      "Ratio analysis packs",
      "Lender / investor formatting",
    ],
  },
  {
    id: "vat-tax",
    category: "finance",
    number: "09",
    icon: Receipt,
    color: "rose",
    title: "VAT & tax preparation.",
    label: "VAT & tax services",
    tagline: "Filed correctly, by licensed professionals.",
    description:
      "VAT returns, corporate tax computations and personal tax filings prepared under the supervision of licensed attorneys and tax practitioners. We keep you compliant with NBR rules while legitimately optimizing your position — and we represent you if questions arise.",
    examples: [
      "Monthly VAT return automation for a trading house with multi-branch sales",
      "Corporate income tax computation with transfer-pricing documentation",
      "Individual tax return planning for an expatriate executive",
      "NBR audit support with documented responses and representation",
    ],
    commitments: [
      "Signed off by licensed practitioners — not anonymous software",
      "Deadlines tracked, so penalties never happen on our watch",
      "Legitimate optimization only — your reputation stays protected",
      "Full representation during NBR queries and audits",
    ],
    capabilities: [
      "VAT registration & monthly returns",
      "Corporate tax computation & filing",
      "Personal income tax",
      "Transfer pricing documentation",
      "NBR audit representation",
    ],
  },
  {
    id: "accounting",
    category: "finance",
    number: "10",
    icon: Calculator,
    color: "green",
    title: "Accounting, simplified.",
    label: "Accounting & reporting",
    tagline: "Bring clarity to your numbers.",
    description:
      "Structured ledger architecture, audit trail reconciliation and reporting clarity that turns regulatory compliance into actionable insight — with a named accountant who knows your business, fixed monthly pricing, and books your auditor will thank you for.",
    examples: [
      "Cloud ledger setup for a family business moving off notebooks",
      "Monthly close process cut from 12 days to 4 for a manufacturer",
      "Audit-ready books for a company that hadn't reconciled in three years",
      "Management accounts pack delivered every month by day five",
    ],
    commitments: [
      "Books your auditor will thank you for",
      "Fixed monthly pricing — no surprise hourly bills",
      "A named accountant who knows your business",
      "Plain-English explanations, never jargon walls",
    ],
    capabilities: [
      "Bookkeeping & ledger management",
      "Monthly management accounts",
      "Bank & ledger reconciliation",
      "Audit preparation support",
    ],
  },
  {
    id: "accounting-software",
    category: "finance",
    number: "11",
    icon: Cog,
    color: "cyan",
    title: "Easy accounting software setup.",
    label: "Accounting software setup",
    tagline: "Your books, running themselves.",
    description:
      "Selection, configuration and rollout of accounting software matched to your size and sector — from simple SME tools to multi-entity systems — with your historical data migrated, your team trained, and AI-assisted automation where it genuinely saves time.",
    examples: [
      "Spreadsheet-to-cloud migration for a 30-person trading firm",
      "Multi-branch inventory + accounting setup for a retailer",
      "Automated invoice-capture workflow cutting data entry by 70%",
      "Training program that made a non-accountant MD confident reviewing reports",
    ],
    commitments: [
      "Software chosen for fit, not for commission",
      "Clean migration with parallel-run verification",
      "Training until your team can run it without us",
      "Post-go-live support with guaranteed response times",
    ],
    capabilities: [
      "Software selection & licensing",
      "Chart of accounts design",
      "Data migration & parallel run",
      "Automation (invoice capture, reconciliation)",
      "Team training",
    ],
  },
  {
    id: "digital-bank-partner",
    category: "finance",
    number: "12",
    icon: Building2,
    color: "indigo",
    title: "Digital banking partner.",
    label: "Digital bank community partnership",
    tagline: "Bringing the non-bank community into formal finance.",
    description:
      "FinelyBD operates as a partner organization to digital banks and licensed financial institutions, designing the community layer that reaches customers formal banking has missed: onboarding, agent networks, financial education and local trust-building — especially in underserved districts.",
    examples: [
      "Agent-assisted onboarding program for a digital bank in Sylhet division",
      "Financial-literacy drive that opened 3,000+ first-ever accounts",
      "Community collection-point model for garment workers' remittances",
      "Local-language product education campaign raising active usage threefold",
    ],
    commitments: [
      "Full alignment with the partner bank's compliance standards",
      "Community-first design — dignity over hard selling",
      "Transparent reporting of onboarding quality, not just volume",
      "Safeguarding training for every agent we manage",
    ],
    capabilities: [
      "Community onboarding programs",
      "Agent network recruitment & training",
      "Financial literacy campaigns",
      "Last-mile product education",
      "Usage & activation analytics",
    ],
  },
];

// ─── Construction & Real Estate ─────────────────────────────────────
export const constructionServices: CatalogService[] = [
  {
    id: "construction-consultancy",
    category: "construction",
    number: "13",
    icon: HardHat,
    color: "orange",
    title: "Construction consultancy.",
    label: "Construction consultancy",
    tagline: "Every taka of your build, professionally guided.",
    description:
      "Owner's-representative consultancy for construction projects: feasibility, budgeting, contractor selection, supervision and quality control. Led by our Director & Head of Consultancy for Architecture and Building Construction — a working civil engineer with a data-science edge, leading the company's largest site teams.",
    examples: [
      "Feasibility + cost plan for a 12-storey commercial building in Sylhet",
      "Third-party quality supervision rescuing a delayed residential project",
      "Contractor prequalification and bid evaluation for a factory build",
      "Value-engineering review that cut 9% from a project budget without losing scope",
    ],
    commitments: [
      "Independent advice — our fee never depends on contractor choice",
      "Weekly documented site reporting, with photos",
      "Budget transparency: every variation priced before approval",
      "Safety compliance treated as non-negotiable",
    ],
    capabilities: [
      "Feasibility & cost planning",
      "Design review & value engineering",
      "Contractor selection & contracts",
      "Site supervision & quality control",
      "Progress certification",
    ],
  },
  {
    id: "design-renovation",
    category: "construction",
    number: "14",
    icon: PencilRuler,
    color: "teal",
    title: "Renovation & building design.",
    label: "Renovation & building design",
    tagline: "Old spaces, reimagined beautifully.",
    description:
      "Architectural design and renovation that respects budget and context: homes re-planned for modern life, offices rebuilt for hybrid work, façades renewed and heritage-sensitive upgrades — with 3D visualization before a single wall moves.",
    examples: [
      "Full renovation of a 30-year-old home into a light-filled family space",
      "Office redesign improving team capacity 40% within the same footprint",
      "Restaurant transformation completed in six weeks, trading throughout",
      "Façade renewal adding street presence to a commercial block",
    ],
    commitments: [
      "Designs you walk through in 3D before approving",
      "Fixed-scope renovation contracts with milestone payments",
      "Minimal-disruption phasing for occupied buildings",
      "Aftercare visits at 3 and 12 months post-completion",
    ],
    capabilities: [
      "Architectural & interior design",
      "Renovation project management",
      "3D visualization & walkthroughs",
      "Structural assessment coordination",
      "Heritage-sensitive upgrades",
    ],
  },
  {
    id: "skyscraper-contracts",
    category: "construction",
    number: "15",
    icon: Building,
    color: "blue",
    title: "Skyscraper & high-rise contracts.",
    label: "High-rise construction contracts",
    tagline: "Ambition, engineered upward.",
    description:
      "Contracting capability for high-rise and landmark construction — towers, mixed-use complexes and institutional buildings. We bid seriously, plan obsessively, and bring the specialist engineers a tall building demands, from foundation to curtain wall.",
    examples: [
      "JV bid preparation for a 40-storey mixed-use tower",
      "Construction methodology plan for a high-rise on challenging soils",
      "Specialist subcontractor assembly — piling, MEP, façade — for a tower project",
      "Independent peer review of a high-rise construction program",
    ],
    commitments: [
      "We bid only what we can responsibly deliver",
      "Peer-reviewed engineering for every critical structural element",
      "Transparent milestone-based billing, certified monthly",
      "A zero-compromise safety regime, independently audited",
    ],
    capabilities: [
      "High-rise contracting & JV bidding",
      "Construction methodology & programming",
      "Specialist subcontractor management",
      "Structural & façade coordination",
      "Quality & safety management",
    ],
  },
  {
    id: "property-management",
    category: "construction",
    number: "16",
    icon: KeyRound,
    color: "amber",
    title: "Property management.",
    label: "Property management",
    tagline: "Your property, performing.",
    description:
      "Full-service management for residential and commercial property: tenant finding and vetting, rent collection, maintenance, financial reporting and compliance — so your asset earns while you sleep, wherever in the world you happen to be.",
    examples: [
      "Portfolio takeover: 24 flats brought from 60% to 98% occupancy in five months",
      "Rent-collection automation reducing arrears from 45 to 5 days",
      "Preventive maintenance program halving emergency repair costs",
      "Quarterly landlord reports with income, expense and asset-value tracking",
    ],
    commitments: [
      "Your rent, remitted on the date promised",
      "Vetted tenants — reference and employment checks as standard",
      "Maintenance responded to within 24 hours; emergencies same-day",
      "Full financial transparency with documented expenses",
    ],
    capabilities: [
      "Tenant sourcing & vetting",
      "Rent collection & remittance",
      "Maintenance & repairs",
      "Property accounting & reports",
      "Legal compliance (agreements, holding tax)",
    ],
  },
  {
    id: "land-agency",
    category: "construction",
    number: "17",
    icon: MapPin,
    color: "green",
    title: "Land buy & sell agency.",
    label: "Land brokerage",
    tagline: "The right plot, without the pitfalls.",
    description:
      "Professional land brokerage built on verification: we research title, check mutation and khatian records, physically verify boundaries, and negotiate on your behalf — so the plot you buy is genuinely yours, and the land you sell reaches serious buyers at fair value.",
    examples: [
      "Verified 10-katha residential plot matched to a buyer in three weeks",
      "Due diligence uncovering an unresolved inheritance claim — deal renegotiated",
      "Commercial land assembly for a warehouse developer, three owners unified",
      "Sale mandate achieving 18% above the seller's expected price",
    ],
    commitments: [
      "No plot recommended before document verification",
      "Boundaries physically walked and measured, always",
      "Transparent commissions, visible to both parties",
      "Support through registration and mutation, end to end",
    ],
    capabilities: [
      "Title & record due diligence",
      "Buyer / seller representation",
      "Price negotiation",
      "Boundary verification",
      "Registration & mutation support",
    ],
  },
  {
    id: "land-development",
    category: "construction",
    number: "18",
    icon: Shovel,
    color: "violet",
    title: "Land development.",
    label: "Land development",
    tagline: "Raw land, ready to build.",
    description:
      "Turning undeveloped land into serviced, saleable plots and project sites: master planning, plotting, access roads, drainage and utilities, soil assessment and regulatory approvals — engineered to add genuine, bankable value.",
    examples: [
      "Five-acre subdivision into 38 serviced plots, sold out pre-completion",
      "Drainage redesign rescuing a low-lying site previously 'unbuildable'",
      "Access-road and utility package unlocking a rural industrial site",
      "Development appraisal proving a 2.3× land-value uplift for investors",
    ],
    commitments: [
      "Feasibility first — we model returns before touching soil",
      "All approvals and permits obtained properly, in your name",
      "Infrastructure built to municipal standards",
      "Marketing support until every plot is sold",
    ],
    capabilities: [
      "Master planning & plotting",
      "Roads, drainage & utilities",
      "Soil & topographic assessment",
      "Regulatory approvals (RAJUK / pourashava)",
      "Plot marketing & sales",
    ],
  },
  {
    id: "industrial-setup",
    category: "construction",
    number: "19",
    icon: Factory,
    color: "cyan",
    title: "Industrial preparation & machinery.",
    label: "Industrial setup & machinery",
    tagline: "From empty shed to production line.",
    description:
      "Complete industrial project support: site selection and preparation, factory layout, utilities planning, machinery procurement, installation supervision and commissioning — plus the project documentation lenders and regulators ask for.",
    examples: [
      "Garments-accessories factory: shed to first shipment in seven months",
      "Food-processing line procured and commissioned, halal-certified",
      "Feasibility + lender pack securing term finance for a plastics plant",
      "Utility design — power, gas, water, effluent — for a dyeing unit",
    ],
    commitments: [
      "Procurement at documented, competitive prices",
      "Installation supervised by qualified engineers",
      "Commissioning milestones agreed in writing",
      "Operator training included in every handover",
    ],
    capabilities: [
      "Site selection & preparation",
      "Factory layout & utilities design",
      "Machinery sourcing & procurement",
      "Installation & commissioning",
      "Feasibility & lender documentation",
    ],
  },
  {
    id: "land-survey",
    category: "construction",
    number: "20",
    icon: Compass,
    color: "indigo",
    title: "Land identification & survey.",
    label: "Land identification & survey",
    tagline: "Measured properly, mapped professionally.",
    description:
      "Professional land identification and survey services: physical site identification against your criteria, cadastral and topographic survey, boundary demarcation, and GIS-ready mapping — the factual bedrock every land decision needs.",
    examples: [
      "Boundary demarcation resolving a twenty-year neighbor dispute amicably",
      "Topographic survey enabling flood-safe factory siting",
      "Identification of 15 candidate sites against an investor's 12-point brief",
      "GIS database of a 200-acre acquisition for a development company",
    ],
    commitments: [
      "Survey-grade instruments and documented methods",
      "Disputed boundaries flagged honestly before you pay",
      "Deliverables in formats your engineers can use directly",
      "Re-surveys honored if any measurement is challenged",
    ],
    capabilities: [
      "Site identification & shortlisting",
      "Cadastral & boundary surveys",
      "Topographic surveys",
      "Demarcation & pillar setting",
      "GIS mapping & reporting",
    ],
  },
];

// ─── Business & Corporate ───────────────────────────────────────────
export const businessServices: CatalogService[] = [
  {
    id: "business-intelligence",
    category: "business",
    number: "21",
    icon: BriefcaseBusiness,
    color: "blue",
    title: "Business, made smarter.",
    label: "Business intelligence",
    tagline: "Less friction. More room to grow.",
    description:
      "Workflow automation, strategic operational structuring and data-driven management frameworks designed around the way your business actually works — diagnosed before prescribed, piloted before rolled out, and measured honestly, including the failures.",
    examples: [
      "Workflow automation saving a distributor 30 staff-hours weekly",
      "Management dashboard replacing week-old spreadsheets with live data",
      "SOP design for a 120-person company preparing for certification",
      "Market-entry analysis for a foreign brand assessing Bangladesh",
    ],
    commitments: [
      "Diagnosis before prescription — no templates imposed",
      "Changes piloted before full rollout",
      "Your team trained to sustain every improvement",
      "Measured results reported honestly",
    ],
    capabilities: [
      "Workflow automation",
      "Operational strategy",
      "Data-driven management",
      "SOP & process design",
    ],
  },
  {
    id: "corporate-global",
    category: "business",
    number: "22",
    icon: Globe2,
    color: "cyan",
    title: "Corporate and global delivery.",
    label: "Corporate & international delivery",
    tagline: "Local accountability, global standards.",
    description:
      "AI-based solutions for corporate clients and foreign companies, however large or complicated. We hire and onboard case-to-case domain experts from our built-in freelancer and expert platform, so every assignment is matched with exactly the right team — with contracts that protect IP and confidentiality in both directions.",
    examples: [
      "End-to-end AI platform delivered for a Gulf-based logistics client",
      "Dedicated expert team assembled in ten days for a data-science sprint",
      "Corporate agreement covering 18 months of continuous improvement",
      "Cross-border project managed across three time zones",
    ],
    commitments: [
      "Senior engineers on every engagement — never bait-and-switch",
      "Contracts protecting IP and confidentiality in both directions",
      "Local accountability with global delivery standards",
      "Case-to-case experts — you pay for skill, not overhead",
    ],
    capabilities: [
      "Corporate agreements",
      "International project delivery",
      "Case-to-case expert network",
      "IP & confidentiality frameworks",
    ],
  },
  {
    id: "business-consultancy",
    category: "business",
    number: "23",
    icon: Lightbulb,
    color: "amber",
    title: "Business consultancy.",
    label: "Business consultancy",
    tagline: "A senior thinking partner, on call.",
    description:
      "Practical management consultancy for owners and boards: strategy, growth planning, organizational design, market analysis and turnaround support. We work in plain language, meet you where you are, and stay until the plan works.",
    examples: [
      "Five-year growth roadmap for a second-generation family business",
      "Turnaround plan returning a loss-making unit to profit in nine months",
      "Organizational redesign for a company doubling its headcount",
      "Pricing study lifting a service firm's margin by six points",
    ],
    commitments: [
      "Advice we would stake our own money on",
      "Implementation support, not just slide decks",
      "Senior consultants only — no juniors learning on your fee",
      "Confidentiality as a matter of professional honor",
    ],
    capabilities: [
      "Strategic planning",
      "Market & competitor analysis",
      "Organizational design",
      "Turnaround & performance improvement",
      "Board advisory",
    ],
  },
];

// ─── People, Talent & Events ────────────────────────────────────────
export const peopleServices: CatalogService[] = [
  {
    id: "freelance-marketplace",
    category: "people",
    number: "24",
    icon: UsersRound,
    color: "cyan",
    title: "Freelance work marketplace.",
    label: "Freelance marketplace",
    tagline: "Work finds talent, talent finds work.",
    description:
      "A curated marketplace connecting vetted Bangladeshi freelancers and domain experts with companies that need them — for one assignment or a year's engagement. We verify skills, structure the contract, escrow the payments and stand behind the delivery.",
    examples: [
      "Data-labeling team assembled for an overseas AI company in 72 hours",
      "Contract and escrow for a six-month web-development engagement",
      "Vetting pipeline screening 200 applicants down to 6 hire-ready experts",
      "Dispute resolved fairly through marketplace mediation",
    ],
    commitments: [
      "Every freelancer skill-verified before listing",
      "Escrowed payments — talent and client both protected",
      "Clear contracts covering IP, confidentiality and delivery",
      "Human mediation when anything goes wrong",
    ],
    capabilities: [
      "Talent vetting & profiles",
      "Project matching",
      "Contract & escrow administration",
      "Delivery quality assurance",
      "Dispute resolution",
    ],
  },
  {
    id: "hr-outsourcing",
    category: "people",
    number: "25",
    icon: Users,
    color: "violet",
    title: "HR outsourcing for MNCs & remote teams.",
    label: "HR outsourcing & remote teams",
    tagline: "Your extended team, our responsibility.",
    description:
      "Build and run remote teams in Bangladesh for multinational companies: recruitment, employment administration, payroll, compliance, workspace and culture — so a global firm gets a serious Bangladeshi team without opening a legal entity.",
    examples: [
      "12-person remote data-operations team built for a European fintech",
      "Employer-of-record handling payroll, tax and benefits for an MNC's staff",
      "Recruitment drive delivering 40 vetted candidates for a support center",
      "Team-retention program cutting annual attrition from 35% to 12%",
    ],
    commitments: [
      "Recruitment against written role specifications",
      "100% statutory compliance — labor law, tax, social welfare",
      "Payroll accuracy guaranteed, with full audit trail",
      "Your IP protected through rigorous employment contracts",
    ],
    capabilities: [
      "Recruitment & staffing",
      "Employer-of-record & payroll",
      "HR policy & compliance",
      "Team performance management",
      "Workspace & infrastructure",
    ],
  },
  {
    id: "events-conferences",
    category: "people",
    number: "26",
    icon: Mic,
    color: "rose",
    title: "Seminars & conferences.",
    label: "Events & conferences",
    tagline: "Rooms that change minds.",
    description:
      "Full-service organization of professional events: seminars, conferences, product launches and corporate gatherings — from concept and speaker curation to venue, production, registration, livestreaming and post-event content.",
    examples: [
      "300-delegate fintech conference with central-bank keynote speakers",
      "Product launch executed across venue, press and livestream",
      "Series of SME training seminars in three divisions",
      "Annual general meeting production for a national association",
    ],
    commitments: [
      "Budget transparency with zero hidden vendor commissions",
      "Contingency planning for weather, power and no-shows",
      "Professional staging, sound and streaming standards",
      "Post-event report with full attendance and feedback data",
    ],
    capabilities: [
      "Event concept & planning",
      "Speaker & program curation",
      "Venue, staging & production",
      "Registration & guest management",
      "Livestreaming & content capture",
    ],
  },
  {
    id: "training-ops",
    category: "people",
    number: "27",
    icon: Presentation,
    color: "indigo",
    title: "Training operations & organization.",
    label: "Training operations",
    tagline: "Learning programs, run flawlessly.",
    description:
      "End-to-end training operations for corporates and institutions: needs analysis, curriculum design, trainer coordination, venue logistics, assessment and certification — whether for ten supervisors or a thousand staff across branches.",
    examples: [
      "National sales-training rollout across 22 branches in six weeks",
      "Leadership program for a bank's mid-level managers, four cohorts",
      "Vendor staff onboarding academy for a telecom partner",
      "Assessment & certification system with digital badges",
    ],
    commitments: [
      "Learning outcomes defined and measured, not assumed",
      "Qualified trainers with real industry experience",
      "Flawless logistics — schedules, venues, materials, travel",
      "Post-training impact review at 90 days",
    ],
    capabilities: [
      "Training needs analysis",
      "Curriculum & material design",
      "Trainer sourcing & coordination",
      "Logistics & venue management",
      "Assessment & certification",
    ],
  },
];

export const allServices: CatalogService[] = [
  ...serviceCatalog,
  ...constructionServices,
  ...businessServices,
  ...peopleServices,
];

export function getService(id: string) {
  return allServices.find(service => service.id === id);
}

export function getCategory(id: string) {
  return serviceCategories.find(category => category.id === id);
}

export function servicesByCategory(categoryId: string) {
  return allServices.filter(service => service.category === categoryId);
}
