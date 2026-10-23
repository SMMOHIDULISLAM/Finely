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
  "every service is delivered with AI. It develops and deploys AI agents and AI " +
  "business solutions for local and foreign clients under corporate agreements; " +
  "for large or complicated engagements it onboards specialist experts case by " +
  "case from its freelancer and expert network. Its training & development wing, " +
  "led by Md Ashakur Rahman, builds easy-to-learn AI, machine-learning and " +
  "AI-agent courses sold to corporate clients. Core disciplines: business " +
  "workflow automation and operational structuring; " +
  "accounting ledger architecture, audit reconciliation and reporting; quantitative " +
  "cash-flow forecasting, macroeconomic stress modeling and liquidity optimization; " +
  "and banking payment ecosystems (MFS, NPSB, RTGS, Cards) with compliance " +
  "alignment and commercial banking facilitation, across Bangladesh and emerging " +
  "markets. Leadership: Umme Mazrin Nabiha (Chairman & Co-Founder), Saif Ahmed " +
  "Jaigirder (MD & CEO & Co-Founder, ex-Pubali Bank PLC), Nabila Kawsar (Director, " +
  "HR, Marketing, Risk Management & Compliance), Jannatul Nawim (Director, Finance " +
  "& Accounting, Administration & Security Compliance, Audit and Sales), Md " +
  "Assaduzzaman Khan (Director & Company Secretary, practicing High Court lawyer " +
  "leading the legal advisory panel), Adnan Sakib (Director & Head of " +
  "Consultancy for Architecture and Building Construction, BSc Civil Engineering, " +
  "MSc Data Science), Md Ashakur Rahman (Director, Head of ICT Operations, AI " +
  "Solutions, AI Agent Development & Cybersecurity and head of the Training & " +
  "Development wing, faculty at Leading University Sylhet), Md Jakir Hossain " +
  "(Director, AI business solutions, BBA " +
  "MIS, MSc Data Science, PhD in Business ongoing), Mohammad Mahmud Hossain " +
  "(Director, corporate bidding, foreign operations and media & press wing), and " +
  "Md Rifat Hossain (Director, Head of Research & Development and Corporate " +
  "Sales, BSc Statistics, MSc Data Science). Consultants: S M Mohidul Islam " +
  "(leading banker at Pubali Bank PLC, 16+ years across banking, finance, real " +
  "estate, legal and retail; advises on climate change, sustainable development, " +
  "green banking, environmental impact assessment and AI implementation) and " +
  "Sanjay Saha Sojib (Deputy Director at Bangladesh Bank, BBA, MBA, MSc Data " +
  "Science; advises on financial AI agent development and financial product " +
  "marketing). Payments: " +
  "MFS wallets (bKash, Rocket, Nagad, Upay) via QR code, local bank transfers in " +
  "BDT, USD wire via JP Morgan Chase NA, and international VISA card transfer; " +
  "full account numbers are never shown on the site — payment details are " +
  "confirmed through the official contact form. Direct contact channels: " +
  "CEO@finelybd.com, info@finelybd.com, help@finelybd.com, " +
  "operation@finelybd.com; phones +8801612834025, +8801844912880, " +
  "+8801977834025, +8801405815554, +8801868492467, +8801534665339, " +
  "+8801715235401, +8801616632475. The client/staff portal is under " +
  "development and does not collect passwords. Answer briefly and politely, " +
  "guide visitors to the right page or the contact form, and never invent " +
  "contact details.";

export const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["service", "offer", "do you do", "what does", "help with", "solution", "consult", "advice", "advisory"],
    answer:
      "Everything FinelyBD serves, it serves with AI. The firm develops and deploys AI agents and AI business solutions; takes on corporate agreements and foreign clients' AI projects of any size or complexity, onboarding specialist experts from its freelancer and expert network case by case; and runs a training & development wing that builds easy-to-learn AI, ML and AI-agent courses sold to corporate clients. Its core disciplines are: (1) business workflow automation and operational structuring; (2) accounting ledger architecture, audit reconciliation and reporting; (3) quantitative cash-flow forecasting, macroeconomic stress modeling and liquidity optimization; and (4) banking payment ecosystems — MFS, NPSB, RTGS and Cards — with compliance alignment and commercial banking facilitation. See the Services page for details, and use the contact form to discuss your project.",
  },
  {
    keywords: ["pay", "payment", "bkash", "bikash", "rocket", "nagad", "upay", "bank", "transfer", "usd", "visa", "card", "invoice", "fee", "charge"],
    answer:
      "The Payments page lists every accepted method: MFS wallets (bKash, Rocket, Nagad, Upay — personal wallets enabled for Cash In, Bank Top-up and Send Money, also receiving foreign currencies) via QR code, four local BDT bank accounts in Sylhet, a USD wire via JP Morgan Chase NA, and international VISA card transfer. Full account numbers are never shown — each method has a QR code, and complete details are confirmed through the official contact form.",
  },
  {
    keywords: ["contact", "email", "mail", "phone", "call", "whatsapp", "reach", "talk", "human", "agent", "office", "address", "number"],
    answer:
      "You can reach FinelyBD directly by email (CEO@finelybd.com, info@finelybd.com, help@finelybd.com, operation@finelybd.com) or by phone/WhatsApp on +8801612834025, +8801844912880, +8801977834025, +8801405815554, +8801868492467, +8801534665339, +8801715235401 or +8801616632475. For detailed project discussions, the contact form on the Contact page keeps everything in one thread. Initial enquiries are free; professional fees are quoted and agreed before work begins.",
  },
  {
    keywords: ["team", "leadership", "founder", "ceo", "chairman", "director", "owner", "who is", "who runs", "manage"],
    answer:
      "FinelyBD's leadership team of ten: Umme Mazrin Nabiha — Chairman & Co-Founder; Saif Ahmed Jaigirder — MD & CEO & Co-Founder (ex-Pubali Bank PLC); Nabila Kawsar — Director (HR, Marketing, Risk Management & Compliance); Jannatul Nawim — Director (Finance & Accounting, Administration & Security Compliance, Audit and Sales); Md Assaduzzaman Khan — Director & Company Secretary (practicing High Court lawyer, leads the legal services advisory panel); Adnan Sakib — Director & Head of Consultancy for Architecture and Building Construction; Md Ashakur Rahman — Director, Head of ICT Operations, AI Solutions, AI Agent Development & Cybersecurity (faculty at Leading University, Sylhet); Md Jakir Hossain — Director, AI business solutions (PhD in Business ongoing); Mohammad Mahmud Hossain — Director, corporate bidding, foreign operations, media & press; and Md Rifat Hossain — Director, Head of Research & Development and Corporate Sales. The team is further guided by two consultants: S M Mohidul Islam (leading banker at Pubali Bank PLC, 16+ years across banking, finance, real estate, legal and retail; advises on climate change, sustainable development, green banking, environmental impact assessment and AI implementation) and Sanjay Saha Sojib (Deputy Director at Bangladesh Bank; advises on financial AI agent development and financial product marketing). See About → Leadership for full profiles.",
  },
  {
    keywords: ["legal", "lawyer", "law", "court", "case", "litigation", "cybercrime", "construction", "architect", "architecture", "building", "real estate", "real-estate", "civil engineering"],
    answer:
      "FinelyBD's legal services advisory panel is led by Md Assaduzzaman Khan — Director & Company Secretary, LLB & LLM, a practicing lawyer of the High Court, Dhaka, with a proven track record in civil cases, expertise in fintech and cybercrime, and vast knowledge of land and real-estate litigation. Its architecture and building construction consultancy is led by Adnan Sakib — Director & Head of Consultancy, BSc in Civil Engineering and MSc in Data Science, leading the company's largest team of construction sites. Use the contact form to discuss a legal or construction matter.",
  },
  {
    keywords: ["about", "who are you", "what is finely", "company", "firm", "humanity", "ai for"],
    answer:
      "FinelyBD — 'AI for a Better Humanity' — is an AI-solutions firm working across Bangladesh and international markets: everything it serves, it serves with AI. It develops and deploys AI agents, delivers AI business solutions under corporate agreements, serves foreign companies' AI projects by onboarding case-by-case experts from its freelancer and expert network, and teaches AI, ML and AI-agent development through its training & development wing for corporate clients — alongside its core disciplines of business automation, accounting and audit architecture, quantitative finance modeling, and banking payment ecosystems.",
  },
  {
    keywords: ["ai agent", "agents", "automation", "freelancer", "expert", "hire", "outsource", "foreign", "international", "overseas", "corporate agreement"],
    answer:
      "AI agent development and deployment is FinelyBD's core craft. The firm takes on corporate agreements and foreign companies' AI projects of any size or complexity — for large engagements it onboards specialist experts from its freelancer and expert network case by case, so the right expert always works on the right problem. Describe your project via the contact form and the team will scope it with you.",
  },
  {
    keywords: ["weather", "temperature", "forecast", "rain", "climate", "dhaka weather", "bd weather", "hot", "cold"],
    answer:
      "A live AI-assisted weather report for Bangladesh — current conditions across all eight divisions (Dhaka, Chattogram, Sylhet, Khulna, Rajshahi, Barishal, Rangpur, Mymensingh) with temperature, wind and a plain-language outlook — is shown right on the Home page, powered by Open-Meteo open data and refreshed automatically every 10 minutes.",
  },
  {
    keywords: ["training", "course", "learn", "learning", "teach", "workshop", "class", "certification", "corporate training"],
    answer:
      "FinelyBD's Training & Development wing, led by Director Md Ashakur Rahman, builds easy-to-learn courses on AI, machine learning and AI-agent development — designed for corporate clients who want to upskill their teams. Use the contact form to ask about course catalogs and corporate training programs.",
  },
  {
    keywords: ["portal", "login", "log in", "sign in", "client area", "dashboard", "account"],
    answer:
      "The client & staff portal is under development. This preview does not collect passwords — the Login page shows the planned portal scope and how access will work once it launches. Please check back later or ask via the contact form.",
  },
  {
    keywords: ["mobile", "app", "install", "pwa", "android", "iphone", "home screen"],
    answer:
      "The FinelyBD website works in any mobile browser and can be installed to your home screen as a web app: open the site in Safari or Chrome and choose 'Add to Home Screen'. See the Mobile page for step-by-step instructions.",
  },
  {
    keywords: ["free", "cost", "price", "quote", "charge", "expensive"],
    answer:
      "Initial enquiries are free. Professional service fees are quoted and agreed with you before any work begins — there are no hidden charges. Use the contact form to describe your project and receive a quotation.",
  },
  {
    keywords: ["ai assistant", "chatbot", "are you a robot", "are you ai", "who are you"],
    answer:
      "I'm the FinelyBD assistant — a built-in guide for this website. I answer from FinelyBD's official information and can point you to the right page or the contact form. For anything I can't answer, the contact form reaches the human team.",
  },
];

export const fallbackAnswer =
  "I don't have verified information on that yet. The quickest route is the contact form on the Contact page — initial enquiries are free, and the FinelyBD team will reply. You can also browse Services, Payments, About & Leadership, or the Mobile page.";
