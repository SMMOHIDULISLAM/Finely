import { allServices } from "./serviceCatalog";

const portable = import.meta.env.VITE_PORTABLE_ASSETS === "true";
export const assets = {
  logo: portable
    ? "/assets/finelybd-mark.png"
    : "/manus-storage/finelybd-logo_ef08cf3e.png",
  hero: portable
    ? "/assets/hero-network.png"
    : "/manus-storage/hero-city_9104a891.webp",
  humanity: portable
    ? "/assets/humanity-abstract.png"
    : "/manus-storage/humanity-city_b4d2787d.webp",
  solutions: portable
    ? "/assets/solutions-abstract.png"
    : "/manus-storage/solutions-city_baa340b3.webp",
};

// Legacy shape consumed by the contact form and shared components —
// now derived from the full service catalog so both never drift apart.
export const services = allServices.map(service => ({
  id: service.id,
  number: service.number,
  icon: service.icon,
  color: service.color,
  title: service.title,
  label: service.label,
  description: service.tagline,
  detail: service.description,
  capabilities: service.capabilities,
}));

export const leaders = [
  {
    name: "Umme Mazrin Nabiha",
    role: "Chairman",
    initials: "UN",
    bio: "Chairman and Co-Founder of FinelyBD, providing strategic governance and institutional vision to the organization. A self-educated, visionary leader representing the next generation of leadership, with remarkable foresight and clarity of purpose. Shapes the company's long-term vision, upholds corporate governance, and ensures FinelyBD grows as an institution built on values, innovation, and integrity.",
  },
  {
    name: "Saif Ahmed Jaigirder",
    role: "MD & CEO",
    initials: "SJ",
    bio: "Co-founder of FinelyBD with over 14 years of experience in finance and banking, including a long tenure as an officer at Pubali Bank PLC, one of Bangladesh's leading banks. Holds BBA and MBA degrees, with deep expertise in financial management, investment, risk assessment, and corporate banking. Personally leads the company's general services, ICT and AI, external communication and corporate dealings, and its fintech projects.",
  },
  {
    name: "Nabila Kawsar",
    role: "Director",
    initials: "NK",
    bio: "Director of HR, Marketing, Risk Management & Compliance at FinelyBD and a key member of the founding leadership. Holds BBA and MBA degrees and brings a long, proven track record as a business entrepreneur, with demonstrated excellence in building organizations, managing people, and driving sustainable growth. Oversees the company's human resources, marketing, risk management, and compliance functions, ensuring efficient operations, regulatory integrity, and a people-first culture.",
  },
  {
    name: "Jannatul Nawim",
    role: "Director",
    initials: "JN",
    bio: "Director of Finance & Accounting, Administration & Security Compliance, Audit and Sales at FinelyBD. Holds BSS and MSS degrees, bringing a strong analytical and academic foundation to her multifaceted role. An independent leader with a zeal for creative work and prosperity, she combines financial discipline with creative vision. Oversees the company's accounting, audit, administration, and sales functions while ensuring robust security compliance — keeping financial transparency, operational efficiency, and secure, compliant growth at the center of the business.",
  },
  {
    name: "Md Assaduzzaman Khan",
    role: "Director",
    initials: "AK",
    bio: "Director and Company Secretary of FinelyBD, leading the advisory panel of the company's legal services. Holds LLB and LLM degrees and is a practicing lawyer of the High Court, Dhaka, Bangladesh. Brings a proven track record in civil cases, deep expertise in fintech and cybercrime, and advisory experience with financial organizations, along with vast knowledge of land and real-estate litigation.",
  },
  {
    name: "Adnan Sakib",
    role: "Director",
    initials: "AS",
    bio: "Director and Head of Consultancy for Architecture and Building Construction at FinelyBD. Holds a BSc in Civil Engineering and an MSc in Data Science, and is pursuing a PhD on building material segregation. Combines theoretical and practical construction expertise in both designing and implementing, and leads the company's largest team of construction sites with a creative, quality-first approach.",
  },
  {
    name: "Md Ashakur Rahman",
    role: "Director",
    initials: "AR",
    bio: "Director of FinelyBD and Head of ICT Operations, AI Solutions, AI Agent Development and Cybersecurity, leading the company's Training & Development wing. Holds a BSc in CSE and an MSc in Data Science, and serves as faculty at Leading University, Sylhet. A pivotal force behind the company's technology backbone and its AI/ML education programs, he leads FinelyBD's largest team.",
  },
  {
    name: "Md Jakir Hossain",
    role: "Director",
    initials: "JH",
    bio: "Director of FinelyBD handling AI business solutions, combining vast knowledge of business, communication and AI. Holds a BBA in MIS and an MSc in Data Science, and is an excellent data scientist known for commendable effort and practical knowledge. He is currently pursuing a PhD in Business.",
  },
  {
    name: "Mohammad Mahmud Hossain",
    role: "Director",
    initials: "MH",
    bio: "Director of FinelyBD, in charge of bidding for corporate services and winning work for the company. Holds a BSc and MSc in Mathematics and an MSc in Data Science. Heads the company's foreign operations and client hunting, leads freelancers in accomplishing every assignment meticulously, and manages the Media and Press wing along with social media marketing for the company's AI agent development and publicity.",
  },
  {
    name: "Md Rifat Hossain",
    role: "Director",
    initials: "RH",
    bio: "Director of FinelyBD and Head of Research and Development, also leading the Corporate Sales Team. Holds a BSc in Statistics and an MSc in Data Science. Participates in online bidding for the company, hunts potential national and international buyers, presents demos of the company's products, and ensures optimum quality and customer relationships through cross-divisional workforces.",
  },
  {
    name: "S M Mohidul Islam",
    role: "Consultant",
    initials: "MI",
    bio: "Consultant to FinelyBD and a leading banker at Pubali Bank PLC, with over 16 years of experience across banking, finance, real estate, legal and retail business. Holds a BSc and MSc in Forestry, an LLB, a Banking Diploma, an MBA in Finance and an MSc in Data Science, and is an expert on AI in the Bangladeshi financial sector. Shares valuable knowledge with the company on climate change, sustainable development, strategic development, green banking, environmental impact assessment, and the implementation of AI across these diversified sectors — in a word, the dream maker behind the tagline 'AI for a Better Humanity'.",
  },
  {
    name: "Sanjay Saha Sojib",
    role: "Consultant",
    initials: "SS",
    bio: "Consultant to FinelyBD and Deputy Director at Bangladesh Bank. Holds a BBA, an MBA and an MSc in Data Science, and is an AI expert in governing accounting, finance, financial derivatives and banking — especially digital banking. Supports the company with judicious input for its financial AI agent development and financial product marketing for financial organizations.",
  },
];
