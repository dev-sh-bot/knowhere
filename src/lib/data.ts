export type Service = {
  num: string;
  name: string;
  tag: string;
  img: string;
  desc: string;
  inc: string[];
  stack: string[];
};

export type CaseStudy = {
  no: string;
  title: string;
  sector: string;
  loc: string;
  year: string;
  tags: string[];
  homeTag: string;
  img: string;
  blurb: string;
  ch: string;
  bd: string;
  outs: [string, string][];
  stack: string[];
};

export type Filter = { k: string; l: string };
export type Step = { n: string; t: string; d: string; m: string };
export type Engage = { t: string; d: string; m: string };
export type Principle = { t: string; d: string };
export type TimelineItem = { y: string; d: string };
export type Stat = { n: number; suf: string; label: string };
export type NavLink = { href: string; key: string; label: string };

export const SVC: Service[] = [
  {
    num: "01",
    name: "Web Development",
    tag: "SITES · CMS · SEO",
    img: "https://picsum.photos/seed/knowhere-web/440/330.jpg",
    desc: "Marketing sites, corporate platforms and CMS builds — fast, accessible and maintainable, engineered for the stack your problem actually needs.",
    inc: [
      "Marketing & corporate websites",
      "WordPress / headless CMS",
      "Landing pages & microsites",
      "Performance & Core Web Vitals",
      "Technical SEO foundations",
    ],
    stack: ["React", "Next.js", "WordPress", "Astro", "Vercel"],
  },
  {
    num: "02",
    name: "Custom Web Apps",
    tag: "SAAS · PORTALS · APIs",
    img: "https://picsum.photos/seed/knowhere-webapp/440/330.jpg",
    desc: "Bespoke web applications, SaaS products and internal tools — role-based access, real-time data and APIs that stay clean as you scale.",
    inc: [
      "SaaS product builds",
      "Customer & admin portals",
      "Workflow & ops tools",
      "REST & GraphQL APIs",
      "Auth, billing & multi-tenant",
    ],
    stack: ["React", "Node.js", "Laravel", "PostgreSQL", "Redis"],
  },
  {
    num: "03",
    name: "Mobile Apps",
    tag: "IOS · ANDROID · SYNC",
    img: "https://picsum.photos/seed/knowhere-mobile/440/330.jpg",
    desc: "Cross-platform apps that feel native, shipped to both stores — with the backend, sync, push and offline behaviour to match.",
    inc: [
      "iOS & Android apps",
      "Cross-platform builds",
      "App Store & Play publishing",
      "Push, offline & sync",
      "Backend & auth integration",
    ],
    stack: ["Flutter", "React Native", "Firebase", "Node.js"],
  },
  {
    num: "04",
    name: "UI/UX & Design",
    tag: "RESEARCH · SYSTEMS · BRAND",
    img: "https://picsum.photos/seed/knowhere-design/440/330.jpg",
    desc: "Research, wireframes, prototypes and pixel-final design systems — designed in the browser wherever possible, so what you approve is what ships.",
    inc: [
      "UX research & audits",
      "Wireframing & prototyping",
      "Design systems & UI kits",
      "Brand identity",
      "Conversion-focused pages",
    ],
    stack: ["Figma", "Framer", "Design tokens", "Storybook"],
  },
  {
    num: "05",
    name: "E-commerce",
    tag: "STORES · CHECKOUT · OMS",
    img: "https://picsum.photos/seed/knowhere-ecom/440/330.jpg",
    desc: "Storefronts and commerce platforms that convert — catalog, cart, payments, inventory and fulfilment wired end to end.",
    inc: [
      "Headless & traditional storefronts",
      "Payment gateway integration",
      "Inventory & order systems",
      "B2B pricing & catalogs",
      "Marketplace features",
    ],
    stack: ["Shopify", "Next.js", "Stripe", "WooCommerce", "Medusa"],
  },
  {
    num: "06",
    name: "Cloud & DevOps",
    tag: "AWS · CI/CD · MONITORING",
    img: "https://picsum.photos/seed/knowhere-cloud/440/330.jpg",
    desc: "Migration, automation and monitoring set up so deployments become boring — the highest compliment in DevOps.",
    inc: [
      "Cloud migration & setup",
      "CI/CD pipelines",
      "Containers & orchestration",
      "Monitoring & alerting",
      "Backups & cost control",
    ],
    stack: ["AWS", "DigitalOcean", "Docker", "GitHub Actions", "Terraform"],
  },
  {
    num: "07",
    name: "Cybersecurity",
    tag: "AUDITS · HARDENING · PENTEST",
    img: "https://picsum.photos/seed/knowhere-sec/440/330.jpg",
    desc: "Vulnerability assessments, penetration testing and hardening that follows OWASP guidance — reported in plain language.",
    inc: [
      "Vulnerability assessments",
      "Penetration testing",
      "Server & app hardening",
      "Secure auth & payments review",
      "Incident response planning",
    ],
    stack: ["OWASP", "Kali Linux", "Burp Suite", "TLS 1.3"],
  },
  {
    num: "08",
    name: "AI & Automation",
    tag: "LLM · BOTS · WORKFLOWS",
    img: "https://picsum.photos/seed/knowhere-ai/440/330.jpg",
    desc: "Practical AI for real workflows — chat assistants, document intelligence, OCR and automation that saves hours, not demos.",
    inc: [
      "Custom GPT / LLM assistants",
      "Document & OCR pipelines",
      "Process automation",
      "AI search & RAG systems",
      "Internal AI tooling",
    ],
    stack: ["OpenAI", "Python", "LangChain", "n8n", "Vector DBs"],
  },
  {
    num: "09",
    name: "Data & Analytics",
    tag: "BI · PIPELINES · DASHBOARDS",
    img: "https://picsum.photos/seed/knowhere-data/440/330.jpg",
    desc: "Pipelines, warehouses and dashboards that turn operational noise into decisions your team can act on every Monday.",
    inc: [
      "Data pipelines & ETL",
      "Business intelligence dashboards",
      "Reporting automation",
      "Warehouse setup",
      "KPI tracking systems",
    ],
    stack: ["Python", "PostgreSQL", "Metabase", "Power BI", "dbt"],
  },
  {
    num: "10",
    name: "QA & Testing",
    tag: "MANUAL · AUTO · UAT",
    img: "https://picsum.photos/seed/knowhere-qa/440/330.jpg",
    desc: "Manual and automated quality assurance so releases ship with confidence — regression suites, UAT support and bug triage.",
    inc: [
      "Test strategy & planning",
      "Manual QA cycles",
      "Automated regression suites",
      "API & load testing",
      "UAT facilitation",
    ],
    stack: ["Playwright", "Cypress", "Postman", "Jest", "k6"],
  },
  {
    num: "11",
    name: "ERP & Integrations",
    tag: "CRM · ERP · APIs",
    img: "https://picsum.photos/seed/knowhere-erp/440/330.jpg",
    desc: "Connect the tools you already run — CRM, ERP, accounting and custom systems talking through reliable integrations.",
    inc: [
      "CRM / ERP implementation",
      "Third-party API integrations",
      "Zapier / custom middleware",
      "Data migration",
      "SSO & identity wiring",
    ],
    stack: ["Salesforce", "Odoo", "REST APIs", "Webhooks", "Zapier"],
  },
  {
    num: "12",
    name: "IT Consulting & Support",
    tag: "STRATEGY · SLAS · TRAINING",
    img: "https://picsum.photos/seed/knowhere-consult/440/330.jpg",
    desc: "Strategy, managed IT and honest second opinions — with SLAs in writing and humans on the phone.",
    inc: [
      "Technology strategy & audits",
      "Managed IT with SLAs",
      "Vendor & hosting management",
      "Staff training",
      "Emergency support",
    ],
    stack: ["SLA-backed", "24/7 monitoring", "<4h response"],
  },
];

export const SERVICE_OPTIONS = SVC.map((s) => s.name).concat(["Something else"]);

export const CASES: CaseStudy[] = [
  {
    no: "C-01",
    title: "Meridian Retail",
    sector: "RETAIL & E-COMMERCE",
    loc: "KARACHI, PK",
    year: "2024",
    tags: ["web", "commerce"],
    homeTag: "E-COMMERCE — 2024",
    img: "https://picsum.photos/seed/meridian-retail/1200/800.jpg",
    blurb: "Full replatform of a 12,000-SKU storefront to a headless build.",
    ch: "Product pages took nine seconds to load on 3G, and every campaign launch was a two-week engineering event.",
    bd: "A headless Next.js storefront with a structured CMS, edge caching, and a design system marketing can launch campaigns with — without touching code.",
    outs: [
      ["+38%", "CONVERSION RATE"],
      ["-71%", "PAGE LOAD TIME"],
      ["2H", "CAMPAIGN LAUNCH, WAS 2 WEEKS"],
    ],
    stack: ["Next.js", "Node.js", "Headless CMS", "Stripe", "Edge CDN"],
  },
  {
    no: "C-02",
    title: "Pulse Health",
    sector: "HEALTHCARE",
    loc: "DUBAI, UAE",
    year: "2024",
    tags: ["mobile"],
    homeTag: "MOBILE — 2024",
    img: "https://picsum.photos/seed/pulse-health/1200/800.jpg",
    blurb:
      "Patient portal and appointment app for a three-clinic group — 40,000 patients, zero phone queues.",
    ch: "Every appointment was booked by phone during office hours; staff spent four hours a day scheduling.",
    bd: "A Flutter app with live slot availability, WhatsApp and SMS reminders, and an admin panel staff actually enjoy.",
    outs: [
      ["60K", "APPOINTMENTS IN YEAR ONE"],
      ["-4H/DAY", "STAFF TIME ON SCHEDULING"],
      ["4.7★", "APP STORE RATING"],
    ],
    stack: ["Flutter", "Firebase", "Node.js", "WhatsApp API"],
  },
  {
    no: "C-03",
    title: "Sona Textiles",
    sector: "MANUFACTURING & B2B",
    loc: "FAISALABAD, PK",
    year: "2023",
    tags: ["web"],
    homeTag: "B2B WEB — 2023",
    img: "https://picsum.photos/seed/sona-textiles/1200/800.jpg",
    blurb:
      "B2B order portal replacing WhatsApp-order chaos for a mill with 300+ trade buyers.",
    ch: "Orders arrived as voice notes and screenshots; re-entry errors were eating the margin on every third order.",
    bd: "A role-based order portal with live inventory, buyer-specific pricing, credit limits, and export-ready history for accounts.",
    outs: [
      ["-71%", "ORDER ENTRY ERRORS"],
      ["3×", "ORDER VOLUME CAPACITY"],
      ["300+", "ACTIVE BUYERS ONBOARDED"],
    ],
    stack: ["React", "Laravel", "MySQL", "RBAC", "Excel Export"],
  },
  {
    no: "C-04",
    title: "LedgerLine",
    sector: "FINTECH",
    loc: "LONDON, UK",
    year: "2023",
    tags: ["web", "cloud"],
    homeTag: "FINTECH · CLOUD — 2023",
    img: "https://picsum.photos/seed/ledgerline/1200/800.jpg",
    blurb:
      "Operations platform and public API for a payments startup handling 4.2M transactions a month.",
    ch: "Ops ran on spreadsheets and a shared inbox; month-end reconciliation took two full days.",
    bd: "Real-time reconciliation tooling and a versioned public API with monitoring, docs and a sandbox for partners.",
    outs: [
      ["4.2M", "MONTHLY TRANSACTIONS"],
      ["20MIN", "MONTH-END RECON, WAS 2 DAYS"],
      ["99.98%", "API UPTIME"],
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Terraform"],
  },
  {
    no: "C-05",
    title: "Agha Freight",
    sector: "LOGISTICS",
    loc: "HYDERABAD, PK",
    year: "2025",
    tags: ["mobile", "cloud"],
    homeTag: "LOGISTICS — 2025",
    img: "https://picsum.photos/seed/agha-freight/1200/800.jpg",
    blurb:
      "Live tracking platform for a 1,200-vehicle fleet across Sindh and Punjab — built to work on 2G.",
    ch: "Customers called dispatch for location updates; dispatch called the drivers. Nobody knew where anything was.",
    bd: "Offline-first driver check-ins, live GPS ingestion, geofenced alerts, and a tracking page that loads on 2G.",
    outs: [
      ["1,200", "VEHICLES TRACKED LIVE"],
      ["-80%", "“WHERE IS MY TRUCK?” CALLS"],
      ["2G", "WORKS ON 2G NETWORKS"],
    ],
    stack: ["Flutter", "Node.js", "WebSockets", "Redis", "DigitalOcean"],
  },
];

export const FILTERS: Filter[] = [
  { k: "all", l: "ALL / 05" },
  { k: "web", l: "WEB / 03" },
  { k: "mobile", l: "MOBILE / 02" },
  { k: "commerce", l: "COMMERCE / 01" },
  { k: "cloud", l: "CLOUD / 02" },
];

export const STEPS: Step[] = [
  {
    n: "01",
    t: "Discover",
    d: "A focused week of calls and honest analysis — what exists, what it must become, what it will take.",
    m: "WEEK 0–1",
  },
  {
    n: "02",
    t: "Design",
    d: "Wireframes, then working prototypes. You approve flows you can click, not 60-page PDFs.",
    m: "WEEK 1–3",
  },
  {
    n: "03",
    t: "Build",
    d: "Weekly demo builds on a staging link — you watch it grow instead of waiting for a reveal that misses.",
    m: "SPRINTS",
  },
  {
    n: "04",
    t: "Ship",
    d: "Rehearsed launch day: rollback plans, monitoring on, backups verified.",
    m: "LAUNCH",
  },
  {
    n: "05",
    t: "Support",
    d: "Response times and update windows in writing — and a phone number a human answers.",
    m: "ONGOING",
  },
];

export const ENGAGE: Engage[] = [
  {
    t: "Fixed-scope project",
    d: "A defined outcome with a defined price. Scope, milestones and payment schedule agreed upfront in writing.",
    m: "BEST FOR: DEFINED SCOPE",
  },
  {
    t: "Dedicated team",
    d: "Our engineers and designers embedded in your roadmap, billed monthly. You steer priorities weekly; we handle hiring, tooling and quality.",
    m: "BEST FOR: ONGOING ROADMAPS",
  },
  {
    t: "Care plan",
    d: "A retainer covering monitoring, updates, backups, security patches and priority support with an SLA.",
    m: "BEST FOR: LIVE SYSTEMS",
  },
];

export const PRINCIPLES: Principle[] = [
  {
    t: "Ship opinions, not options",
    d: "We’ll tell you what we would do — then build what you decide.",
  },
  {
    t: "Small team, senior hands",
    d: "The people you meet on the first call are the people who write the code.",
  },
  {
    t: "Boring tech, exciting results",
    d: "Proven stacks, maintained properly. The innovation budget goes to your product.",
  },
  {
    t: "Secure from line one",
    d: "Auth, backups and audits are baseline, not add-ons.",
  },
  {
    t: "Answer the phone",
    d: "Support with a name and a number. Under four hours, in writing.",
  },
];

export const TIMELINE: TimelineItem[] = [
  { y: "2020", d: "Founded in a rented house in Al-Waheed Colony, Hyderabad." },
  { y: "2022", d: "25th project shipped. The design practice launches." },
  { y: "2023", d: "First international clients — the UAE and UK." },
  { y: "2024", d: "Managed services and 24/7 support plans launch." },
  {
    y: "2025",
    d: "80+ projects delivered — still answering our own phones.",
  },
];

export const STATS: Stat[] = [
  { n: 80, suf: "+", label: "Projects shipped" },
  { n: 6, suf: "", label: "Countries served" },
  { n: 92, suf: "%", label: "Client retention" },
  { n: 24, suf: "/7", label: "Support coverage" },
];

export const MQ_ITEMS = [
  "WEB DEVELOPMENT",
  "CUSTOM WEB APPS",
  "MOBILE APPS",
  "UI/UX DESIGN",
  "E-COMMERCE",
  "CLOUD & DEVOPS",
  "CYBERSECURITY",
  "AI & AUTOMATION",
  "DATA & ANALYTICS",
  "QA & TESTING",
  "ERP & INTEGRATIONS",
  "IT CONSULTING",
];

export const NAVLINKS: NavLink[] = [
  { href: "/", key: "home", label: "Home" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/work", key: "work", label: "Work" },
  { href: "/about", key: "about", label: "About" },
  { href: "/contact", key: "contact", label: "Contact" },
];

export const ICONS = {
  ne: "M6 18L18 6M8 6h10v10",
  r: "M3 12h18M14 5l7 7-7 7",
  dn: "M12 3v18M5 14l7 7 7-7",
  up: "M12 21V3M5 10l7-7 7 7",
  x: "M5 5l14 14M19 5L5 19",
  plus: "M12 4v16M4 12h16",
} as const;

export const CONTACT = {
  email: "Info@knowheresystems.com",
  phone: "+92 313 3054378",
  phoneTel: "+923133054378",
  whatsapp: "https://wa.me/923133054378",
  address: "House 279/5-6, Al-Waheed Colony",
  city: "Hyderabad 71000, Sindh, Pakistan",
  addressLines: [
    "House 279/5-6, Al-Waheed Colony",
    "Hyderabad 71000, Sindh, Pakistan",
  ],
  hours: "Mon–Sat, 09:00–18:00 PKT",
} as const;
