export type Service = {
  num: string;
  name: string;
  tag: string;
  img?: string;
  desc: string;
  inc: string[];
  stack: string[];
};

export type CaseStudy = {
  no: string;
  title: string;
  sector: string;
  loc: string;
  tags: string[];
  homeTag: string;
  img: string;
  blurb: string;
  ch: string;
  bd: string;
  outs: [string, string][];
  stack: string[];
  pos?: string;
  slug?: string;
};

export type Filter = { k: string; l: string };
export type Step = { n: string; t: string; d: string; m: string };
export type Engage = { t: string; d: string; m: string };
export type Principle = { t: string; d: string };
export type Stat = { n: number; suf: string; label: string };
export type NavLink = { href: string; key: string; label: string };

export const SVC: Service[] = [
  {
    num: "01",
    name: "Web Development",
    tag: "SITES · CMS · SEO",
    img: "/work/case-mockups/propela/cover.webp",
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
    img: "/work/case-mockups/intelligent-erp/cover.webp",
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
    img: "/work/case-mockups/colearnix/cover.webp",
    desc: "Cross-platform apps that feel native, shipped to both stores — with the backend, sync, push and offline behavior to match.",
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
    img: "/work/case-mockups/smartly-ai/cover.webp",
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
    img: "/work/case-mockups/ai-sales-distribution/cover.webp",
    desc: "Storefronts and commerce platforms that convert — catalog, cart, payments, inventory and fulfillment wired end to end.",
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
    img: "/work/case-mockups/temp-mail/cover.webp",
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
    desc: "Pipelines, warehouses and dashboards that turn operational noise into decisions your organization can act on every Monday.",
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
    desc: "Technology strategy, managed IT and clear support plans — scoped around the systems your organization relies on.",
    inc: [
      "Technology strategy & audits",
      "Managed IT with SLAs",
      "Vendor & hosting management",
      "Staff training",
      "Emergency support",
    ],
    stack: ["Technology strategy", "Managed IT", "Support planning"],
  },
];

export const SERVICE_OPTIONS = SVC.map((s) => s.name).concat(["Something else"]);

export const CASES: CaseStudy[] = [
  {
    no: "C-01",
    title: "CoLearnix",
    sector: "EDUCATION",
    loc: "CAMPUS · ANDROID & iOS",
    tags: ["mobile", "ai"],
    homeTag: "MOBILE · AI",
    img: "/work/case-mockups/colearnix/cover.webp",
    pos: "78% center",
    slug: "colearnix",
    blurb:
      "A campus app that puts project groups, mentors, messaging and career tools in one Flutter experience.",
    ch: "Students were split across separate tools for networking, project chat, mentorship and employability, with no structured way to find collaborators.",
    bd: "A feature-first Flutter app on Firebase Auth and Supabase. Gemini recommendations run through server-side Edge Functions, so model credentials stay off the device. Home, projects, a create hub, messaging and a student profile share one navigation shell.",
    outs: [
      ["1 APP", "PROJECTS, MENTORS, CHAT AND CAREER"],
      ["OFF-DEVICE", "GEMINI CALLS STAY ON THE SERVER"],
      ["MVP", "AUTH, HOME, PROFILE AND RESUME IN"],
    ],
    stack: ["Flutter", "Firebase Auth", "Supabase", "Gemini", "BLoC"],
  },
  {
    no: "C-02",
    title: "Temp Mail",
    sector: "CONSUMER PRIVACY",
    loc: "ANDROID & iOS",
    tags: ["mobile", "cloud"],
    homeTag: "MOBILE",
    img: "/work/case-mockups/temp-mail/cover.webp",
    pos: "72% center",
    slug: "temp-mail",
    blurb:
      "A disposable-email app with its own mail server, so sign-ups and short-term mail never touch a personal inbox.",
    ch: "People were handing out permanent addresses for one-time sign-ups. Public disposable-email tools stopped short of multiple inboxes, forwarding, attachments and outbound mail.",
    bd: "A Flutter app for Android and iOS, backed by a private Python mail server on a VPS. Users generate an address, keep several mailboxes, get mail in real time, forward it, send from it, and open attachments — on infrastructure the product owns.",
    outs: [
      ["12 WK", "DISCOVERY THROUGH PUBLIC RELEASE"],
      ["LIVE", "ANDROID AND iOS FROM ONE CODEBASE"],
      ["OWNED", "PRIVATE PYTHON MAIL SERVER ON VPS"],
    ],
    stack: ["Flutter", "Dart", "Python", "VPS", "REST API"],
  },
  {
    no: "C-03",
    title: "Smartly AI",
    sector: "AI PRODUCTIVITY",
    loc: "ANDROID & iOS",
    tags: ["mobile", "ai"],
    homeTag: "AI · MOBILE",
    img: "/work/case-mockups/smartly-ai/cover.webp",
    pos: "70% center",
    slug: "smartly-ai",
    blurb:
      "One Flutter assistant for chat, documents, camera solving, image tools and live voice.",
    ch: "Everyday AI work was split across chat, document, image and voice products, and each provider behaved differently behind the scenes.",
    bd: "A Flutter app with one navigation, conversation and loading pattern. A shared backend sends each request — text, file, camera, prompt or voice — to the right model, and keeps provider differences out of the interface.",
    outs: [
      ["100+", "TASK-SPECIFIC ASSISTANTS"],
      ["16 WK", "BUILD, QA AND PUBLIC LAUNCH"],
      ["5 TOOLS", "CHAT, FILES, CAMERA, IMAGE, VOICE"],
    ],
    stack: ["Flutter", "ChatGPT", "Gemini", "DeepSeek", "Voice AI"],
  },
  {
    no: "C-04",
    title: "AI Sales & Distribution",
    sector: "SALES & DISTRIBUTION",
    loc: "WEB & MOBILE · SAAS",
    tags: ["web", "mobile", "ai", "cloud"],
    homeTag: "WEB · MOBILE · AI",
    img: "/work/case-mockups/ai-sales-distribution/cover.webp",
    slug: "ai-sales-distribution",
    blurb:
      "Web and mobile SaaS that brings sales, inventory, deliveries, attendance and field operations together with AI-driven insights.",
    ch: "Sales, inventory, deliveries, attendance and field operations needed to sit in one place, with AI-driven insights for faster and smarter decisions.",
    bd: "A web and mobile SaaS on Flutter, Next.js, React, Python AI, Firebase and AWS. The build covers sales insights, inventory, GPS retailer check-ins, order-to-delivery, field attendance and executive dashboards.",
    outs: [
      ["WEB + MOBILE", "SAAS FOR SALES AND FIELD OPERATIONS"],
      ["AI INSIGHTS", "ANALYTICS, FORECASTING AND RECOMMENDATIONS"],
      ["ONE PLATFORM", "SALES, INVENTORY, DELIVERIES, ATTENDANCE"],
    ],
    stack: ["Flutter", "Next.js", "React", "Python AI", "Firebase", "AWS"],
  },
  {
    no: "C-05",
    title: "Audio Mixing & Mastering",
    sector: "MUSIC PRODUCTION",
    loc: "RESPONSIVE WEB · SAAS",
    tags: ["web", "cloud"],
    homeTag: "WEB",
    img: "/work/case-mockups/audio-mixing-mastering/cover.webp",
    slug: "audio-mixing-mastering",
    blurb:
      "A custom web platform for buying mixing and mastering, uploading audio, managing revisions and downloading studio-quality masters.",
    ch: "Artists needed to purchase mixing and mastering, send files safely, follow revisions and collect finished masters in one online workflow.",
    bd: "A responsive web app on React, Laravel, Amazon S3 and DigitalOcean. Service selection, secure uploads, project tracking, an admin dashboard and multi-format delivery share one customer experience.",
    outs: [
      ["2 MONTHS", "UI/UX, DEVELOPMENT AND CLOUD INTEGRATION"],
      ["LIVE", "PUBLIC RESPONSIVE WEB APP"],
      ["S3", "SECURE AUDIO STORAGE AND DELIVERY"],
    ],
    stack: ["React", "Laravel", "Amazon S3", "DigitalOcean", "REST API"],
  },
  {
    no: "C-06",
    title: "Intelligent ERP",
    sector: "ERP & OPERATIONS",
    loc: "WEB & MOBILE · SAAS",
    tags: ["web", "mobile", "ai", "cloud"],
    homeTag: "WEB · MOBILE · AI",
    img: "/work/case-mockups/intelligent-erp/cover.webp",
    slug: "intelligent-erp",
    blurb:
      "A unified ERP for sales, purchasing, inventory, finance and HR, with an AI assistant and smart inventory forecasting.",
    ch: "Sales, purchasing, inventory, finance and HR had to run as one operational picture, with AI insights, demand forecasting and role-based access.",
    bd: "Web and mobile ERP on Flutter, Next.js, NestJS, PostgreSQL, AWS S3 and DigitalOcean. Live dashboards, natural-language queries, quote-to-payment, finance, HR and department-level permissions share one SaaS product.",
    outs: [
      ["6+", "CORE MODULES — SALES, PURCHASE, INVENTORY, FINANCE, HR"],
      ["100%", "CLOUD READY — SECURE, SCALABLE ARCHITECTURE"],
      ["AI", "ASSISTANT AND DEMAND FORECASTING"],
    ],
    stack: ["Flutter", "Next.js", "NestJS", "PostgreSQL", "AWS S3"],
  },
  {
    no: "C-07",
    title: "Propela",
    sector: "PROPOSAL MANAGEMENT",
    loc: "FULL STACK WEB",
    tags: ["web"],
    homeTag: "WEB",
    img: "/work/case-mockups/propela/cover.webp",
    slug: "propela",
    blurb:
      "A full-stack web app for creating, managing and tracking business proposals with products, modules and role-based access.",
    ch: "Proposal work needed centralized records, reusable product structures, separate admin and staff access, and PDF-ready output.",
    bd: "React 18 + Vite on the front end, Next.js + Express for the API, Prisma and PostgreSQL underneath. Tailwind, TypeScript, JWT and Puppeteer support maintainable, secure, professional proposal output.",
    outs: [
      ["PDF READY", "ARCHITECTURE FOR PROFESSIONAL PROPOSAL OUTPUT"],
      ["RBAC", "ADMIN WORKSPACE AND STAFF ACCESS FLOWS"],
      ["FULL STACK", "REACT, NEXT.JS AND POSTGRESQL"],
    ],
    stack: ["React", "Next.js", "PostgreSQL", "Prisma", "Puppeteer"],
  },
  {
    no: "C-08",
    title: "Rackline.ai",
    sector: "OUTDOORS",
    loc: "ANDROID & iOS",
    tags: ["mobile", "ai"],
    homeTag: "AI · MOBILE",
    img: "/work/case-mockups/rackline/cover.webp",
    slug: "rackline",
    blurb:
      "A Flutter app for hunters and outfitters — AI antler scores from trail-camera photos, plus Trophy Room, community, maps and outfitters.",
    ch: "Hunters needed AI-assisted antler scores from trail-camera or harvest photos, detailed measurements, and a connected Trophy Room, community, map and outfitter experience.",
    bd: "A cross-platform Flutter app with Firebase, Node.js and the OpenAI API. Scoring, measurement breakdowns, Trophy Room history, badges and community sit in one hunting product, prepared for iOS and Android release.",
    outs: [
      ["AI SCORING", "TRAIL CAMERA AND HARVEST PHOTO ESTIMATES"],
      ["iOS + ANDROID", "FLUTTER CROSS-PLATFORM APP"],
      ["TROPHY ROOM", "SAVED RECORDS, BADGES AND COMMUNITY"],
    ],
    stack: ["Flutter", "Firebase", "Node.js", "OpenAI API"],
  },

];

export const FILTERS: Filter[] = [
  { k: "all", l: "ALL / 08" },
  { k: "web", l: "WEB / 04" },
  { k: "mobile", l: "MOBILE / 06" },
  { k: "ai", l: "AI / 05" },
  { k: "cloud", l: "CLOUD / 04" },
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
    d: "Support scope, response windows and update cadence are agreed in writing.",
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
    t: "Dedicated engineering",
    d: "Engineering and design work aligned with your roadmap, billed monthly. You steer priorities weekly; delivery, tooling and quality stay organized around them.",
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
    t: "Clear ownership",
    d: "Each project has a clear point of contact from the first discussion through delivery.",
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
    t: "Support in the plan",
    d: "Maintenance, updates and support are scoped alongside the work.",
  },
];

export const STATS: Stat[] = [
  { n: 8, suf: "", label: "Case studies" },
  { n: 3, suf: "", label: "Platforms represented" },
  { n: 12, suf: "", label: "Service disciplines" },
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
  hours: "Mon–Sat, 09:00–18:00",
} as const;
