/**
 * Built-in knowledge base for the FinelyBD visitor assistant.
 * Each entry matches visitor questions by keyword score; the best match
 * (above the threshold) is answered directly. Facts only — no invented
 * phone numbers, emails, or addresses are published anywhere.
 */
export type KnowledgeEntry = {
  keywords: string[];
  answer: string;
};

export const assistantIdentity =
  "You are the FinelyBD assistant, a guide for visitors of the FinelyBD website " +
  "(finelybd.com). FinelyBD is an AI-solutions firm: AI for a Better Humanity — " +
  "every service is delivered with AI. The firm is organized into five " +
  "divisions: AI & Digital Technology; Finance, Banking & Tax; Construction " +
  "& Real Estate; Business & Corporate; and People, Talent & Events — 27 " +
  "services in all, each with its own page under Services. It develops and " +
  "deploys AI agents and AI " +
  "business solutions for local and foreign clients under corporate agreements; " +
  "for large or complicated engagements it onboards specialist experts case by " +
  "case from its freelancer and expert network. Its training & development wing, " +
  "led by Md. Ashfakur Rahman, builds easy-to-learn AI, machine-learning and " +
  "AI-agent courses sold to corporate clients. Core disciplines: business " +
  "workflow automation and operational structuring; " +
  "accounting ledger architecture, audit reconciliation and reporting; quantitative " +
  "cash-flow forecasting, macroeconomic stress modeling and liquidity optimization; " +
  "and banking payment ecosystems (MFS, NPSB, RTGS, Cards) with compliance " +
  "alignment and commercial banking facilitation, across Bangladesh and emerging " +
  "markets. Leadership: Abdul Qader Khan (Director, digital bank onboarding and field marketing outside the Sylhet area), Al Mahmud (Chairman, finance and banking expert and Islamic banking specialist with 14 years of experience), Umme Mazrin Nabiha (Director, YouTube video production and content creation), Jazliha Zaireen (Director, YouTube video production and content creation), Zahed Ahmed (Director, security, protocol and temporary security personnel management), Saif Ahmed " +
  "Jaigirder (MD & CEO & Co-Founder, ex-Pubali Bank PLC), Nabila Kawsar (Director, " +
  "HR, Marketing, Risk Management & Compliance), Jannatul Nawim (Director, Finance " +
  "& Accounting, Administration & Security Compliance, Audit and Sales), Md " +
  "Assaduzzaman Khan (Director & Company Secretary, practicing High Court lawyer " +
  "leading the legal advisory panel), Adnan Sakib (Director & Head of " +
  "Consultancy for Architecture and Building Construction, BSc Civil Engineering, " +
  "MSc Data Science), Md. Ashfakur Rahman (Director, Head of ICT Operations, AI " +
  "Solutions, AI Agent Development & Cybersecurity and head of the Training & " +
  "Development wing, faculty at Leading University Sylhet), Md Jakir Hossain " +
  "(Director, AI business solutions, BBA " +
  "MIS, MSc Data Science, PhD in Business ongoing), Mohammad Mahmud Hossain " +
  "(Director, corporate bidding, foreign operations and media & press wing), and " +
  "Md Rifat Hossain (Director, Head of Research & Development and Corporate " +
  "Sales, BSc Statistics, MSc Data Science). Consultants: S M Nawshad Kaysar (HR and recruitment specialist, MSS and BSS in International Relations and MSS in Economics from University of Dhaka, Banking Diploma, advanced HR and recruitment training), S M Mohidul Islam " +
  "(leading banker at Pubali Bank PLC, 16+ years across banking, finance, real " +
  "estate, legal and retail; advises on climate change, sustainable development, " +
  "green banking, environmental impact assessment and AI implementation) and " +
  "Sanjay Saha Sojib (Deputy Director at Bangladesh Bank, BBA, MBA, MSc Data " +
  "Science; advises on financial AI agent development and financial product " +
  "marketing). Payments: " +
  "Personal MFS accounts, cards and JPMorgan Chase only. Other payment methods are disabled. Payment instructions and VAT totals are confirmed with the invoice. No automatic checkout or payment verification is available. Direct contact channels: " +
  "CEO@finelybd.com, info@finelybd.com, help@finelybd.com, " +
  "operation@finelybd.com; phones +8801612834025, +8801844912880, " +
  "+8801977834025, +8801405815554, +8801868492467, +8801534665339, " +
  "+8801715235401, +8801616632475. The client/staff portal is under " +
  "development and does not collect passwords. Answer briefly and politely, " +
  "guide visitors to the right page or the contact form, and never invent " +
  "contact details. Prompt House offers a fixed 100 free prompts for everyone. Paid prompts cost BDT 500 + VAT. First consultation BDT 1,000 + VAT; AI marketing BDT 30,000 + VAT for the first 3 months; full AI automation BDT 50,000 + VAT; one AI agent for one task BDT 100,000 + VAT. VAT rate and final invoice totals require confirmation.";

export const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["prompt", "prompts", "prompt house", "প্রম্পট"],
    answer:
      "Prompt House is FinelyBD’s prompt library at /prompt-house. The same fixed 100 prompts are free for everyone, with search, sectors and Bangla/English output instructions. Custom prompts outside that collection cost BDT 500 + VAT each. Request an invoice; payment confirmation and delivery are manual. There is no instant paid-content unlock yet.",
  },
  {
    keywords: [
      "service",
      "offer",
      "do you do",
      "what does",
      "help with",
      "solution",
      "consult",
      "advice",
      "advisory",
    ],
    answer:
      "FinelyBD is organized into five divisions with 27 services, each with its own page under Services. AI & Digital Technology: AI agent development & deployment, government IT project bidding, online marketing solutions, and AI/ML training courses. Finance, Banking & Tax: financial advisory, banking facilitation, digital financial services (wallet, savings & payments for the non-bank community), balance sheet preparation, VAT & tax by licensed professionals, accounting, accounting software setup, and digital-bank community partnership. Construction & Real Estate: construction consultancy, renovation & building design, skyscraper & high-rise contracts, property management, land buy-sell agency, land development, industrial setup & machinery, and land identification & survey. Business & Corporate: business intelligence, corporate & international delivery, and business consultancy. People, Talent & Events: a freelance work marketplace, HR outsourcing for MNCs & remote teams, seminars & conferences, and training operations. Every service page shows examples, commitments and capabilities — use the contact form to discuss your project.",
  },
  {
    keywords: [
      "construction",
      "building",
      "renovation",
      "skyscraper",
      "high-rise",
      "property",
      "land",
      "plot",
      "survey",
      "factory",
      "machinery",
      "industrial",
      "real estate",
      "developer",
    ],
    answer:
      "FinelyBD's Construction & Real Estate division covers eight services, each with its own page: construction consultancy, renovation & building design, skyscraper & high-rise contracts, property management, land buy & sell agency, land development, industrial preparation & machinery setup, and land identification & survey. The division is steered by Adnan Sakib (Director & Head of Consultancy for Architecture and Building Construction, BSc Civil Engineering, MSc Data Science) and backed by the legal advisory panel of Md Assaduzzaman Khan for land and real-estate litigation. Use the contact form to discuss a project.",
  },
  {
    keywords: [
      "tax",
      "vat",
      "nbr",
      "balance sheet",
      "financial statement",
      "accounts",
      "bookkeeping",
      "payroll",
      "audit",
    ],
    answer:
      "FinelyBD's Finance, Banking & Tax division handles balance sheet preparation (BFRS-compliant), VAT & tax preparation signed off by licensed practitioners, bookkeeping & accounting, accounting software setup, financial advisory, banking facilitation, digital financial services for the non-bank community, and digital-bank community partnerships. VAT, tax and financial-statement work is supervised by licensed attorneys and tax practitioners, with full representation during NBR queries. See the Services page for each service's own page.",
  },
  {
    keywords: [
      "freelance",
      "marketplace",
      "outsource",
      "recruit",
      "hiring",
      "staffing",
      "event",
      "conference",
      "seminar",
      "workshop",
    ],
    answer:
      "FinelyBD's People, Talent & Events division runs a curated freelance work marketplace with verified talent, contracts and escrowed payments; HR outsourcing and employer-of-record services for multinationals building remote teams in Bangladesh; full organization of seminars and conferences; and end-to-end training operations with assessment and certification.",
  },
  {
    keywords: [
      "pay",
      "payment",
      "bkash",
      "bikash",
      "rocket",
      "nagad",
      "upay",
      "bank",
      "transfer",
      "usd",
      "visa",
      "card",
      "invoice",
      "fee",
      "charge",
    ],
    answer:
      "The retained payment options are personal MFS accounts, cards and JPMorgan Chase. Other methods, including local bank transfers, are disabled. Request an invoice and verified instructions before paying. This website does not process cards or automatically verify payments.",
  },
  {
    keywords: [
      "contact",
      "email",
      "mail",
      "phone",
      "call",
      "whatsapp",
      "reach",
      "talk",
      "human",
      "agent",
      "office",
      "address",
      "number",
    ],
    answer:
      "You can reach FinelyBD directly by email (CEO@finelybd.com, info@finelybd.com, help@finelybd.com, operation@finelybd.com) or by phone/WhatsApp on +8801612834025, +8801844912880, +8801977834025, +8801405815554, +8801868492467, +8801534665339, +8801715235401 or +8801616632475. For detailed project discussions, the contact form on the Contact page keeps everything in one thread. The first consultation costs BDT 1,000 + VAT; scope and invoice totals are confirmed before payment.",
  },
  {
    keywords: [
      "team",
      "leadership",
      "founder",
      "ceo",
      "chairman",
      "director",
      "owner",
      "who is",
      "who runs",
      "manage",
    ],
    answer:
      "FinelyBD's leadership includes Abdul Qader Khan — Director, digital bank onboarding and field marketing outside the Sylhet area; Al Mahmud — Chairman (finance and banking expert, Islamic banking specialist, 14 years of experience; MSc and BSc in Physics, SUST; Banking Diploma; LLB, National University; Senior Fellow in Bank and Finance for Conventional and Islamic Banking); Umme Mazrin Nabiha — Director, YouTube video production and content creation; Jazliha Zaireen — Director, YouTube video production and content creation; Zahed Ahmed — Director, security and protocol management and outsourcing of temporary security personnel; Saif Ahmed Jaigirder — MD & CEO & Co-Founder (ex-Pubali Bank PLC); Nabila Kawsar — Director (HR, Marketing, Risk Management & Compliance); Jannatul Nawim — Director (Finance & Accounting, Administration & Security Compliance, Audit and Sales); Md Assaduzzaman Khan — Director & Company Secretary (practicing High Court lawyer, leads the legal services advisory panel); Adnan Sakib — Director & Head of Consultancy for Architecture and Building Construction; Md. Ashfakur Rahman — Director, Head of ICT Operations, AI Solutions, AI Agent Development & Cybersecurity (faculty at Leading University, Sylhet); Md Jakir Hossain — Director, AI business solutions (PhD in Business ongoing); Mohammad Mahmud Hossain — Director, corporate bidding, foreign operations, media & press; and Md Rifat Hossain — Director, Head of Research & Development and Corporate Sales. The team is further guided by consultants including S M Nawshad Kaysar (HR and recruitment specialist; MSS and BSS in International Relations, University of Dhaka; MSS in Economics, University of Dhaka; Banking Diploma; advanced training in HR and recruitment), S M Mohidul Islam (leading banker at Pubali Bank PLC, 16+ years across banking, finance, real estate, legal and retail; advises on climate change, sustainable development, green banking, environmental impact assessment and AI implementation) and Sanjay Saha Sojib (Deputy Director at Bangladesh Bank; advises on financial AI agent development and financial product marketing). See About → Leadership for full profiles.",
  },
  {
    keywords: [
      "legal",
      "lawyer",
      "law",
      "court",
      "case",
      "litigation",
      "cybercrime",
      "construction",
      "architect",
      "architecture",
      "building",
      "real estate",
      "real-estate",
      "civil engineering",
    ],
    answer:
      "FinelyBD's legal services advisory panel is led by Md Assaduzzaman Khan — Director & Company Secretary, LLB & LLM, a practicing lawyer of the High Court, Dhaka, with a proven track record in civil cases, expertise in fintech and cybercrime, and vast knowledge of land and real-estate litigation. Its architecture and building construction consultancy is led by Adnan Sakib — Director & Head of Consultancy, BSc in Civil Engineering and MSc in Data Science, leading the company's largest team of construction sites. Use the contact form to discuss a legal or construction matter.",
  },
  {
    keywords: [
      "about",
      "who are you",
      "what is finely",
      "company",
      "firm",
      "humanity",
      "ai for",
    ],
    answer:
      "FinelyBD — 'AI for a Better Humanity' — is an AI-solutions firm working across Bangladesh and international markets: everything it serves, it serves with AI. It develops and deploys AI agents, delivers AI business solutions under corporate agreements, serves foreign companies' AI projects by onboarding case-by-case experts from its freelancer and expert network, and teaches AI, ML and AI-agent development through its training & development wing for corporate clients — alongside its core disciplines of business automation, accounting and audit architecture, quantitative finance modeling, and banking payment ecosystems.",
  },
  {
    keywords: [
      "ai agent",
      "agents",
      "automation",
      "freelancer",
      "expert",
      "hire",
      "outsource",
      "foreign",
      "international",
      "overseas",
      "corporate agreement",
    ],
    answer:
      "AI agent development and deployment is FinelyBD's core craft. The firm takes on corporate agreements and foreign companies' AI projects of any size or complexity — for large engagements it onboards specialist experts from its freelancer and expert network case by case, so the right expert always works on the right problem. Describe your project via the contact form and the team will scope it with you.",
  },
  {
    keywords: [
      "weather",
      "temperature",
      "forecast",
      "rain",
      "climate",
      "dhaka weather",
      "bd weather",
      "hot",
      "cold",
    ],
    answer:
      "A live AI-assisted weather report for Bangladesh — current conditions across all eight divisions (Dhaka, Chattogram, Sylhet, Khulna, Rajshahi, Barishal, Rangpur, Mymensingh) with temperature, wind and a plain-language outlook — is shown right on the Home page, powered by Open-Meteo open data and refreshed automatically every 10 minutes.",
  },
  {
    keywords: [
      "training",
      "course",
      "learn",
      "learning",
      "teach",
      "workshop",
      "class",
      "certification",
      "corporate training",
    ],
    answer:
      "FinelyBD's Training & Development wing, led by Director Md. Ashfakur Rahman, builds easy-to-learn courses on AI, machine learning and AI-agent development — designed for corporate clients who want to upskill their teams. Use the contact form to ask about course catalogs and corporate training programs.",
  },
  {
    keywords: [
      "portal",
      "login",
      "log in",
      "sign in",
      "client area",
      "dashboard",
      "account",
    ],
    answer:
      "The client & staff portal is under development. This preview does not collect passwords — the Login page shows the planned portal scope and how access will work once it launches. Please check back later or ask via the contact form.",
  },
  {
    keywords: [
      "mobile",
      "app",
      "install",
      "pwa",
      "android",
      "iphone",
      "home screen",
    ],
    answer:
      "The FinelyBD website works in any mobile browser and can be installed to your home screen as a web app: open the site in Safari or Chrome and choose 'Add to Home Screen'. See the Mobile page for step-by-step instructions.",
  },
  {
    keywords: ["free", "cost", "price", "quote", "charge", "expensive"],
    answer:
      "First consultation: BDT 1,000 + VAT. Paid prompt: BDT 500 + VAT. Full AI marketing: BDT 30,000 + VAT for the first 3 months. Full AI automation: BDT 50,000 + VAT per agreed project. AI agent: BDT 100,000 + VAT for one agent and one task. Prompt House has the same fixed 100 free prompts for everyone. Confirm VAT and the invoice total before payment.",
  },
  {
    keywords: [
      "ai assistant",
      "chatbot",
      "are you a robot",
      "are you ai",
      "who are you",
    ],
    answer:
      "I'm the FinelyBD assistant — a built-in guide for this website. I answer from FinelyBD's official information and can point you to the right page or the contact form. For anything I can't answer, the contact form reaches the human team.",
  },
];

export const fallbackAnswer =
  "I don't have verified information on that yet. The quickest route is the contact form on the Contact page — initial enquiries are free, and the FinelyBD team will reply. You can also browse Services, Payments, About & Leadership, or the Mobile page.";
