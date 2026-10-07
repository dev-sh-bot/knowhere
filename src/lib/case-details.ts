export type Shot = {
  src: string;
  w: number;
  h: number;
  alt: string;
};
export type Item = { t: string; d: string };

export type CaseDetail = {
  headline: string;
  intro: string;
  website?: string;
  hero: Shot;
  facts: [string, string][];
  overview: { title: string; body: string[]; cards: [string, string][] };
  journey: Item[];
  challenges: { title: string; lead?: string; items: Item[] };
  solution: {
    title: string;
    body: string[];
    center: Item;
    nodes: Item[];
  };
  features: {
    t: string;
    d: string;
    points: string[];
    shot: Shot;
    wide?: boolean;
  }[];
  tech: string[];
  process?: { title: string; steps: Item[] };
  results?: { title: string; items: Item[] };
  roadmap?: {
    title: string;
    lead: string;
    progress: [string, string][];
    next: string[];
  };
};

export const CASE_DETAILS: Record<string, CaseDetail> = {
  socialsyncc: {
    headline: "Mobile-first publishing and scheduling across social channels",
    intro:
      "SocialSyncc brings account connections, content creation, scheduling and publishing visibility into one mobile-first workspace for creators, marketers and businesses.",
    website: "https://socialsyncc.com/",
    hero: {
      src: "/work/case-mockups/socialsyncc/cover.webp",
      w: 1536,
      h: 1024,
      alt: "SocialSyncc teal welcome screen and publishing analytics in transparent phone mockups",
    },
    facts: [
      ["Product", "Omnichannel social publishing"],
      ["Interface", "Mobile-first web and mobile"],
      ["Core stack", "Flutter · NestJS · PostgreSQL"],
      ["Infrastructure", "DigitalOcean · AWS S3 · CloudFront"],
    ],
    overview: {
      title: "One workspace from post creation to publishing visibility",
      body: [
        "SocialSyncc addresses the repeated work of opening separate social platforms, re-entering content and checking each publishing result. Users connect supported accounts, create a post, choose destinations and publish immediately or schedule it for later.",
        "A content calendar, publishing queue, notifications and activity dashboard keep upcoming content and delivery states visible. The product combines a Flutter interface with backend services that handle account authorization, destination requirements and publishing operations.",
      ],
      cards: [
        ["Product type", "Social media publishing and scheduling platform"],
        ["Primary audience", "Content creators, marketers and businesses"],
        ["Core workflow", "Connect · compose · preview · publish or schedule"],
        ["Delivery foundation", "Flutter interface with cloud-hosted API and media storage"],
      ],
    },
    journey: [
      { t: "Sign in", d: "Access a personal workspace" },
      { t: "Connect", d: "Authorize supported social accounts" },
      { t: "Compose", d: "Prepare text and media" },
      { t: "Choose", d: "Select and customize destinations" },
      { t: "Publish", d: "Send now or schedule for later" },
      { t: "Monitor", d: "Review states and publishing activity" },
    ],
    challenges: {
      title: "A consistent publishing flow across different platform rules",
      lead: "A unified interface needed to simplify content creation while retaining the account permissions, media requirements and delivery states of each destination.",
      items: [
        { t: "Repeated platform switching", d: "The same publishing task required separate tools and repeated content entry across social accounts." },
        { t: "Destination-specific requirements", d: "Media formats, authorization scopes and publishing rules vary across the connected platforms." },
        { t: "Scheduled delivery", d: "Future posts needed a stored publishing time, a central queue and a visible place in the content calendar." },
        { t: "Account authorization", d: "Connections needed OAuth authorization and backend handling of the credentials required for permitted API operations." },
        { t: "Failures and reconnection", d: "Expired connections and publishing errors needed clear states so users could understand what required attention." },
        { t: "Mobile clarity", d: "Composing, choosing destinations, previewing and reviewing activity needed to remain usable on smaller screens." },
      ],
    },
    solution: {
      title: "A layered mobile, API and publishing architecture",
      body: [
        "Flutter and Dart provide the mobile-first interface. A modular NestJS API on Node.js handles authentication, connected accounts, posts, scheduling and publishing operations; TypeORM manages the related PostgreSQL records.",
        "The backend and database run on a DigitalOcean VPS. AWS S3 stores media, with CloudFront supporting its delivery. OAuth connections allow the publishing services to communicate with supported social media APIs from one centralized workflow.",
      ],
      center: { t: "SocialSyncc", d: "Create · schedule · publish · monitor" },
      nodes: [
        { t: "User interface", d: "Flutter · Dart" },
        { t: "Application API", d: "NestJS · Node.js" },
        { t: "Structured data", d: "PostgreSQL · TypeORM" },
        { t: "Media delivery", d: "AWS S3 · CloudFront" },
        { t: "Infrastructure", d: "DigitalOcean VPS" },
        { t: "Publishing integrations", d: "OAuth · social media APIs" },
      ],
    },
    features: [
      {
        t: "A clear entry into the publishing workspace",
        d: "The welcome and authentication screens introduce the product and provide sign-in, account creation and password recovery entry points before users move into their publishing workspace.",
        points: ["Consistent teal and white product identity", "Email and password sign-in flow", "Account creation and recovery entry points", "Mobile-first navigation across the publishing workflow"],
        shot: {
          src: "/work/case-mockups/socialsyncc/onboarding.webp",
          w: 1254,
          h: 1254,
          alt: "SocialSyncc product introduction and sign-in interface",
        },
      },
      {
        t: "Connected accounts and one post composer",
        d: "Users authorize social accounts through OAuth, prepare text and supported media, select publishing destinations and review the content before submitting it. Destination-specific customization and validation fit within the same guided flow.",
        points: ["Write, Platforms, Schedule and Preview steps", "Text and media preparation in one composer", "Destination selection and content customization", "Supported destinations include Facebook Pages, Instagram, TikTok, YouTube, Pinterest, Google Business and LinkedIn Pages or Profiles"],
        shot: {
          src: "/work/case-mockups/socialsyncc/publishing.webp",
          w: 1254,
          h: 1254,
          alt: "SocialSyncc post composer and connected publishing destination selection",
        },
      },
      {
        t: "Scheduling with a central content calendar",
        d: "Posts can be published immediately or stored for a future date and time. The calendar organizes planned content, while the backend publishing queue processes scheduled operations for the selected destinations.",
        points: ["Publish-now and scheduled-post workflows", "Future publishing date and time selection", "Calendar view of planned publishing activity", "Backend scheduling and a shared publishing queue"],
        shot: {
          src: "/work/case-mockups/socialsyncc/scheduling.webp",
          w: 1254,
          h: 1254,
          alt: "SocialSyncc scheduling form and content calendar presentation",
        },
      },
      {
        t: "Publishing states and account reconnection",
        d: "A centralized post view makes scheduled, published, draft and failed content easier to review. Publishing-status records and notifications communicate delivery progress and flag accounts that require authorization again.",
        points: ["Searchable posts with publishing-state filters", "Visible scheduled, publishing, published and failed states", "Notifications for publishing and account events", "Account reconnection when authorization expires"],
        shot: {
          src: "/work/case-mockups/socialsyncc/status.webp",
          w: 1024,
          h: 1536,
          alt: "SocialSyncc post status cards and an account reconnection notice",
        },
      },
      {
        t: "Publishing activity in a focused analytics view",
        d: "The activity dashboard brings reporting periods, post-state totals, a publishing trend, network distribution and posting frequency together. Users can review their publishing activity from the same app.",
        points: ["7-day, 30-day and 90-day period selection", "Total, published, scheduled and failed post summaries", "Publishing-trend and platform-mix charts", "Posting frequency by weekday"],
        shot: {
          src: "/work/case-mockups/socialsyncc/analytics.webp",
          w: 1254,
          h: 1254,
          alt: "SocialSyncc publishing activity, network mix and posting-frequency analytics",
        },
      },
    ],
    tech: ["Flutter", "Dart", "NestJS", "Node.js", "TypeORM", "PostgreSQL", "DigitalOcean VPS", "AWS S3", "CloudFront", "OAuth", "Social media APIs"],
    results: {
      title: "Connected publishing with visible delivery states",
      items: [
        { t: "One publishing workflow", d: "Account connections, composition, destination selection, previewing and submission share one application." },
        { t: "Organized future content", d: "A calendar and publishing queue connect planned posts to their selected delivery times." },
        { t: "Actionable publishing visibility", d: "Post states, notifications, reconnection handling and basic activity charts provide context around publishing operations." },
      ],
    },
  },
  colearnix: {
    headline:
      "Campus collaboration platform for projects, mentorship & career growth",
    intro:
      "A student-focused Flutter mobile app that brings projects, mentors, community, messaging and career growth into one connected campus experience.",
    hero: {
      src: "/work/case-mockups/colearnix/cover.webp",
      w: 1536,
      h: 1024,
      alt: "CoLearnix interface for A connected campus experience",
    },
    facts: [
      ["Product", "Student collaboration app"],
      ["Status", "Private MVP / demo"],
      ["Platforms", "Android & iOS"],
      ["Core stack", "Flutter · Firebase · Supabase · Gemini AI"],
    ],
    overview: {
      title: "One mobile app for student collaboration and career growth",
      body: [
        "CoLearnix unifies project discovery, mentorship, community updates, messaging, student profiles and career tools — so students can move through campus opportunities without switching between disconnected platforms.",
      ],
      cards: [
        ["Product type", "Campus-focused mobile application"],
        ["Primary audience", "University students, mentors and project participants"],
        ["Main goal", "Unify collaboration, mentorship and career growth"],
        [
          "Delivery model",
          "Flutter app with Firebase, Supabase and AI services",
        ],
      ],
    },
    journey: [
      { t: "Welcome", d: "Brand introduction" },
      { t: "Sign in", d: "Email or Google" },
      { t: "Verify", d: "Trusted account" },
      { t: "Home", d: "Personalized dashboard" },
      { t: "Explore", d: "Projects & create hub" },
      { t: "Connect", d: "Messages & profile" },
    ],
    challenges: {
      title: "Turning fragmented student tools into one connected campus experience",
      lead: "Students often rely on separate tools for networking, project chat, mentorship and employability. The product challenge was to create one structured experience without losing simplicity.",
      items: [
        {
          t: "Fragmented student experience",
          d: "Networking, project collaboration, mentorship and career tools were spread across separate platforms.",
        },
        {
          t: "Finding the right projects",
          d: "Students needed a better way to discover projects, find collaborators and build relevant campus connections.",
        },
        {
          t: "Trust & onboarding",
          d: "Secure sign-in, email verification and a clear onboarding flow were important for a student-focused environment.",
        },
        {
          t: "Modular product scope",
          d: "Projects, mentorship, feed, messaging, profile and career tools had to feel like parts of one consistent app.",
        },
        {
          t: "Cross-platform foundation",
          d: "The MVP needed a scalable architecture that could grow toward a public Android and iOS release.",
        },
        {
          t: "AI-assisted discovery",
          d: "Recommendations and career tools needed server-side AI integration without exposing model credentials in the client.",
        },
      ],
    },
    solution: {
      title: "A unified student collaboration platform built for mobile",
      body: [
        "The app uses a feature-first Flutter architecture with dedicated modules for authentication, home, projects, mentorship, messaging, profile and career tools — connected to secure cloud services and server-side AI.",
      ],
      center: { t: "CoLearnix", d: "Flutter mobile app" },
      nodes: [
        { t: "Authentication", d: "Firebase Auth" },
        { t: "State & routing", d: "BLoC · Freezed · go_router" },
        { t: "Data & storage", d: "Supabase PostgreSQL · Storage" },
        { t: "Backend", d: "Edge Functions · RPCs" },
        { t: "AI", d: "Gemini via server-side Edge Functions" },
        {
          t: "Analytics",
          d: "Firebase Analytics · Crashlytics · App Check",
        },
      ],
    },
    features: [
      {
        t: "Secure onboarding & student authentication",
        d: "A guided entry flow introduces the product, supports email/password and Google sign-in, creates student accounts and verifies email before the user enters the main experience.",
        points: [
          "Welcome screen with the campus value proposition",
          "Email/password authentication",
          "Google sign-in",
          "Student registration",
          "Email verification",
          "Onboarding-ready account flow",
        ],
        shot: {
          src: "/work/case-mockups/colearnix/onboarding.webp",
          w: 1536,
          h: 1024,
          alt: "Student onboarding interface",
        },
        wide: true,
      },
      {
        t: "Personalized home dashboard with AI skill matches",
        d: "The home experience brings relevant opportunities forward with AI skill matches, recommended projects and mentor discovery in one student-centred dashboard.",
        points: [
          "AI skill matches — people and projects aligned with the student’s goals",
          "Recommended projects — relevant campus projects and open project roles",
          "Recommended mentors — found without leaving the home flow",
          "Unified navigation across Home, Projects, Create, Messages and Profile",
        ],
        shot: {
          src: "/work/case-mockups/colearnix/home.webp",
          w: 1024,
          h: 1536,
          alt: "Personalized student home interface",
        },
      },
      {
        t: "Projects, discovery & creation hub",
        d: "Students can discover and search projects, find collaborators and open a central creation hub for posts, projects, mentorship offers, achievements and portfolio items.",
        points: [
          "Browse and search campus projects",
          "Find collaborators for active project ideas",
          "Create posts and project opportunities",
          "Offer mentorship or publish achievements",
          "Add portfolio items from one create menu",
        ],
        shot: {
          src: "/work/case-mockups/colearnix/projects.webp",
          w: 1254,
          h: 1254,
          alt: "Project discovery and creation interface",
        },
      },
      {
        t: "Messaging, student profiles & career growth",
        d: "CoLearnix connects direct, project and mentorship conversations with a structured student profile containing education, skills, projects and portfolio content.",
        points: [
          "Messaging — direct, project and mentorship conversations",
          "Student profile — education, skills, projects and portfolio tabs",
          "Career tools — AI resume review, portfolio builder and reputation",
          "Settings — account, notifications, privacy and developer tools",
        ],
        shot: {
          src: "/work/case-mockups/colearnix/messaging.webp",
          w: 1254,
          h: 1254,
          alt: "Messages and student profile interface",
        },
      },
    ],
    tech: [
      "Flutter 3.x",
      "Clean Architecture",
      "BLoC + Freezed",
      "go_router",
      "Firebase Auth",
      "Supabase PostgreSQL",
      "Supabase Storage",
      "Edge Functions",
      "Gemini AI",
      "Crashlytics",
    ],
    process: {
      title: "From product definition to MVP launch prep",
      steps: [
        {
          t: "Product discovery",
          d: "Defined student journeys and core collaboration needs.",
        },
        {
          t: "Architecture",
          d: "Planned feature-first modules, state and routing.",
        },
        { t: "Flutter build", d: "Implemented mobile UI and core product modules." },
        {
          t: "Cloud & AI",
          d: "Connected Firebase, Supabase and server-side Gemini.",
        },
        {
          t: "Testing",
          d: "Validated auth, navigation, data and mobile flows.",
        },
        {
          t: "Launch prep",
          d: "Prepared compliance, testing and store readiness.",
        },
      ],
    },
    roadmap: {
      title: "A strong MVP foundation ready for the next product stage",
      lead: "The current build combines completed core foundations with MVP modules for projects, mentorship, posts and admin workflows. Public store release is planned after testing, compliance and launch preparation.",
      progress: [
        ["Auth & onboarding", "Complete"],
        ["Home & navigation shell", "Complete"],
        ["Projects", "MVP"],
        ["Create post", "MVP"],
        ["Mentorship", "MVP"],
        ["Messages", "Core UI built"],
        ["Profile & settings", "Complete"],
        ["Resume AI & portfolio", "Integrated"],
        ["Admin panel", "MVP"],
      ],
      next: [
        "Public launch on Google Play and the Apple App Store",
        "Project tasks, files and in-project chat",
        "Event creation and RSVP",
        "University-verified badges",
        "Enhanced AI recommendations",
        "Portfolio export for recruiters",
      ],
    },
  },

  "temp-mail": {
    headline: "AI-powered privacy utility for secure temporary email",
    intro:
      "Protect your personal inbox with instantly generated disposable email addresses. Built for Android and iOS, Temp Mail provides real-time inbox access, custom addresses, email forwarding, outbound email and a privately managed mail infrastructure.",
    hero: {
      src: "/work/case-mockups/temp-mail/cover.webp",
      w: 1536,
      h: 1024,
      alt: "Temp Mail interface for Private temporary email",
    },
    facts: [
      ["Industry", "Consumer privacy & digital utilities"],
      ["Product", "AI-powered mobile application"],
      ["Platforms", "Android and iOS"],
      ["Services", "Development, backend, deployment, testing"],
      ["Duration", "12 weeks"],
      ["Status", "Public and live"],
    ],
    overview: {
      title: "Turning temporary email into secure private communication",
      body: [
        "Temp Mail was developed to help users avoid spam, unwanted marketing emails and unnecessary exposure of their personal inboxes. Instead of using a permanent address for registrations, free trials and account verification, users instantly generate disposable addresses and receive mail in a secure temporary mailbox.",
        "The solution combines Flutter mobile development with a private Python mail server running on VPS infrastructure — giving complete control over email domains, mailbox management, storage and future scalability.",
      ],
      cards: [
        ["Product type", "Cross-platform disposable email application"],
        [
          "Primary audience",
          "Privacy-focused users, developers & QA testers, online shoppers, frequent sign-up users",
        ],
        [
          "Main goal",
          "Protect personal inboxes with instant temporary addresses for registrations, verification codes and short-term communication",
        ],
        [
          "Delivery model",
          "Flutter app powered by a private Python mail server, backend APIs, cloud storage and real-time notifications",
        ],
      ],
    },
    journey: [
      { t: "Generate", d: "Create a temporary address in one tap" },
      { t: "Register", d: "Use it on a website instead of a personal inbox" },
      { t: "Verify", d: "Receive the verification message inside the app" },
    ],
    challenges: {
      title: "The main product challenges",
      items: [
        {
          t: "Personal inbox exposure",
          d: "Users frequently shared permanent addresses for one-time registrations, leading to spam, promotional mail and long-term inbox clutter.",
        },
        {
          t: "Limited temporary email features",
          d: "Existing disposable email services lacked multiple inboxes, forwarding, custom addresses, attachments and outbound email.",
        },
        {
          t: "Third-party dependency",
          d: "Most solutions relied on public APIs, limiting domain control, customization and infrastructure ownership.",
        },
        {
          t: "Cross-platform synchronization",
          d: "Mailboxes, notifications, backend services and private mail infrastructure had to stay in sync across Android and iOS.",
        },
        {
          t: "Scalable infrastructure",
          d: "The backend had to support reliable mailbox generation, message delivery, cloud storage and future expansion while maintaining privacy.",
        },
      ],
    },
    solution: {
      title: "A complete cross-platform disposable email ecosystem",
      body: [
        "The solution delivers much more than temporary address generation. Users instantly create disposable addresses, manage multiple inboxes, receive mail in real time, forward messages, compose outbound email, open attachments and switch between mailboxes.",
        "A private Python mail server hosted on VPS infrastructure powers the whole email system — for greater flexibility, reliability and long-term infrastructure control.",
      ],
      center: { t: "Backend API", d: "Mailbox services" },
      nodes: [
        { t: "Flutter apps", d: "Android + iOS" },
        { t: "Private Python mail server", d: "Hosted on VPS" },
        { t: "Temporary domains", d: "Mailbox generation" },
        { t: "Mailbox + account", d: "Data store" },
        { t: "Cloud message", d: "Attachment storage" },
        { t: "Mobile", d: "Notification service" },
      ],
    },
    features: [
      {
        t: "Instant temporary email creation",
        d: "Generate disposable email addresses with a single tap for registrations, verification codes and temporary online activity.",
        points: ["One-tap address generation", "Copy the address straight to the clipboard"],
        shot: {
          src: "/work/case-mockups/temp-mail/create.webp",
          w: 1024,
          h: 1536,
          alt: "Create a temporary address interface",
        },
      },
      {
        t: "Multiple temporary mailboxes",
        d: "Manage several temporary inboxes at the same time, with organized mailbox switching and unread indicators.",
        points: ["Email manager with active mailbox", "Copy, switch or delete per address"],
        shot: {
          src: "/work/case-mockups/temp-mail/mailboxes.webp",
          w: 1024,
          h: 1536,
          alt: "Multiple mailboxes interface",
        },
      },
      {
        t: "Real-time email notifications",
        d: "Incoming emails arrive instantly through synchronized notifications — ideal for verification codes and important messages.",
        points: ["Verification codes surfaced in the message", "Synchronized push notifications"],
        shot: {
          src: "/work/case-mockups/temp-mail/notifications.webp",
          w: 1024,
          h: 1536,
          alt: "Private message notifications interface",
        },
      },
      {
        t: "Custom email addresses",
        d: "Create personalized temporary addresses using available usernames and supported domains.",
        points: ["Choose a username", "Pick from supported domains"],
        shot: {
          src: "/work/case-mockups/temp-mail/custom.webp",
          w: 1024,
          h: 1536,
          alt: "Custom temporary addresses interface",
        },
      },
      {
        t: "Email forwarding",
        d: "Automatically forward incoming temporary emails to another preferred address whenever needed.",
        points: ["Set up auto-forwarding", "Manage existing forwarders"],
        shot: {
          src: "/work/case-mockups/temp-mail/forwarding.webp",
          w: 1024,
          h: 1536,
          alt: "Email forwarding interface",
        },
      },
      {
        t: "Outbound email support",
        d: "Compose and send emails directly from supported temporary mailboxes without revealing your permanent address.",
        points: ["Recipient, subject and message", "Attach files to outgoing mail"],
        shot: {
          src: "/work/case-mockups/temp-mail/outbound.webp",
          w: 1024,
          h: 1536,
          alt: "Outbound email interface",
        },
      },
      {
        t: "Attachments & cloud storage",
        d: "Open attachments, store messages securely and access email history through cloud-based mailbox storage.",
        points: ["In-app attachment viewing", "Mailbox history kept in cloud storage"],
        shot: {
          src: "/work/case-mockups/temp-mail/attachments.webp",
          w: 1024,
          h: 1536,
          alt: "Email attachments interface",
        },
      },
      {
        t: "Private mail infrastructure",
        d: "Powered by a dedicated Python mail server deployed on VPS infrastructure, for complete domain ownership and backend control.",
        points: ["Own domains, no public API dependency", "Inbox with verification-code labels"],
        shot: {
          src: "/work/case-mockups/temp-mail/private-mail.webp",
          w: 1024,
          h: 1536,
          alt: "Private mailbox controls interface",
        },
      },
    ],
    tech: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Python",
      "VPS",
      "Hostinger",
      "Cloud Storage",
      "REST API",
    ],
    process: {
      title: "From idea to app-store launch",
      steps: [
        {
          t: "Product discovery",
          d: "Defined the user journey, privacy goals, mailbox lifecycle and features.",
        },
        {
          t: "Requirements planning",
          d: "Designed the mail flow, forwarding, storage, notifications and mailbox management.",
        },
        {
          t: "System architecture",
          d: "Planned the Flutter app, backend services, mail server and database workflow.",
        },
        {
          t: "Development",
          d: "Built Android, iOS, backend services and the Python mail infrastructure together.",
        },
        {
          t: "Testing",
          d: "Validated mailbox creation, synchronization, notifications, forwarding, attachments and performance.",
        },
        {
          t: "Deployment",
          d: "Configured VPS infrastructure, deployed backend services and released production builds.",
        },
      ],
    },
    results: {
      title: "Results and business value",
      items: [
        {
          t: "Better privacy protection",
          d: "Users no longer expose personal email addresses during temporary registrations.",
        },
        {
          t: "Faster verification workflow",
          d: "Instant mailbox creation and real-time notifications significantly speed up verification.",
        },
        {
          t: "Centralized mail management",
          d: "Multiple inboxes, forwarding rules, attachments and sending — all from one app.",
        },
        {
          t: "Complete infrastructure ownership",
          d: "The private mail server gives full control over domains, deployment and feature expansion.",
        },
        {
          t: "Cross-platform experience",
          d: "A single Flutter codebase delivers a consistent experience on Android and iOS.",
        },
        {
          t: "Future-ready foundation",
          d: "The architecture supports additional domains, advanced mailbox controls and product growth.",
        },
      ],
    },
  },

  "smartly-ai": {
    headline:
      "All-in-one AI assistant for chat, files, images, learning and voice",
    intro:
      "Smartly AI brings multiple AI models and creative tools into one mobile application. Users compare AI responses, analyze documents, solve problems from photos, generate and edit images, explore specialized AI bots and speak with AI in real time.",
    hero: {
      src: "/work/case-mockups/smartly-ai/cover.webp",
      w: 1536,
      h: 1024,
      alt: "Smartly AI interface for AI tools in one workspace",
    },
    facts: [
      ["Industry", "AI productivity & learning"],
      ["Product", "Mobile application"],
      ["Platforms", "Android and iOS"],
      ["Services", "Development, AI integration, backend, QA and deployment support"],
      ["Duration", "16 weeks"],
      ["Status", "Public and live"],
    ],
    overview: {
      title: "One mobile application for everyday AI tasks",
      body: [
        "Smartly AI was developed as a unified mobile assistant for people who regularly depend on AI for learning, research, professional work, content creation, visual design and problem solving. The delivered solution combines these capabilities in one Flutter application for Android and iOS.",
        "Students, professionals, business owners, creators and everyday users move between chat, files, camera solving, image tools and voice without switching products.",
      ],
      cards: [
        ["Product type", "All-in-one AI-powered mobile application"],
        [
          "Primary audience",
          "Students, professionals, business owners, creators and everyday users",
        ],
        ["Main goal", "Simplify everyday AI tasks in one application"],
        ["Delivery model", "Flutter mobile app with cloud backend and AI integrations"],
      ],
    },
    journey: [
      { t: "Chat", d: "Choose and compare models" },
      { t: "Files", d: "Upload and analyze documents" },
      { t: "Camera solving", d: "Capture questions" },
      { t: "Image generation", d: "Create and edit visuals" },
      { t: "Voice", d: "Speak with AI in real time" },
    ],
    challenges: {
      title: "Turning multiple AI services into one consistent product",
      lead: "Before: a chat app, a document summarizer, an image generator, an equation solver and a voice assistant. After: one mobile application.",
      items: [
        {
          t: "Fragmented AI experiences",
          d: "Users relied on separate apps for writing, research, document analysis, image generation, photo editing and voice. Constant switching interrupts the workflow and creates inconsistent experiences.",
        },
        {
          t: "Different AI provider behaviours",
          d: "Each provider uses different request formats, response structures, processing times, capabilities and error messages — all of which had to sit behind one consistent interface.",
        },
        {
          t: "Complex input types",
          d: "Text, documents, camera images, uploaded photos, generated visuals and live voice each needed a different workflow while still feeling like one product.",
        },
        {
          t: "Mobile performance and reliability",
          d: "Long processing times, large files, media uploads and external-service limits called for clear loading states, recoverable errors, responsive navigation and predictable cross-platform behavior.",
        },
      ],
    },
    solution: {
      title: "A unified multi-model AI experience built for mobile",
      body: [
        "A Flutter application brings different AI capabilities together in one consistent product experience.",
        "A user can start with a question, document, image, camera capture, prompt template or voice conversation. The app routes the request to the right AI service through a shared backend and integration layer.",
        "A modular structure keeps the major capabilities separate while sharing navigation, conversation patterns, loading behavior, file handling and response presentation.",
        "The result makes advanced AI accessible and gives the product a technical foundation for more models, tools and use cases in the future.",
      ],
      center: { t: "Smartly AI", d: "Mobile application" },
      nodes: [
        { t: "AI chat models", d: "Pick and compare" },
        { t: "Document processing", d: "Chat with files" },
        { t: "Camera & visual understanding", d: "Snap and solve" },
        { t: "Prompt library", d: "Ready-made starters" },
        { t: "AI image generation", d: "Text to image" },
        { t: "Image editing", d: "Instruction-based edits" },
        { t: "Voice conversation", d: "Real-time speech" },
        { t: "Specialized AI bots", d: "100+ assistants" },
      ],
    },
    features: [
      {
        t: "Ask once and compare multiple AI answers",
        d: "Submit one question and receive responses from several AI models. The comparison view helps users weigh explanations, writing styles, recommendations and problem-solving approaches without repeating the request across platforms.",
        points: [
          "Clearly separated answer cards",
          "Copy and expand actions",
          "Faster model comparison",
        ],
        shot: {
          src: "/work/case-mockups/smartly-ai/compare.webp",
          w: 1024,
          h: 1536,
          alt: "Compare AI models interface",
        },
      },
      {
        t: "Understand documents through conversational file analysis",
        d: "Upload a supported document and ask questions in natural language. Instead of searching long files, request summaries, explanations, key points, comparisons, action items or answers based on the material.",
        points: [
          "Document upload and processing status",
          "Suggested questions",
          "Answers grounded in the file",
        ],
        shot: {
          src: "/work/case-mockups/smartly-ai/files.webp",
          w: 1024,
          h: 1536,
          alt: "File analysis interface",
        },
      },
      {
        t: "Capture a question and solve it with AI",
        d: "Snap and Solve lets users photograph a question, worksheet, handwritten problem or printed material and ask for help — no typing complex questions by hand. Especially useful for education, maths and visual problems.",
        points: [
          "Camera capture and crop",
          "Step-by-step explanation",
          "Built for education and maths",
        ],
        shot: {
          src: "/work/case-mockups/smartly-ai/camera.webp",
          w: 1024,
          h: 1536,
          alt: "Camera assistance interface",
        },
      },
      {
        t: "More than 100 task-specific AI assistants",
        d: "A library of specialized bots built around common goals — writing, studying, planning, business communication, marketing, idea generation and problem solving — so users don’t start every request from scratch.",
        points: [
          "Browse by category or search",
          "Guided interaction with prompt starters",
          "Faster results",
        ],
        shot: {
          src: "/work/case-mockups/smartly-ai/assistants.webp",
          w: 1024,
          h: 1536,
          alt: "Specialized assistants interface",
        },
      },
      {
        t: "Generate original images from written ideas",
        d: "Turn text descriptions into original visuals directly in the app — for social content, creative exploration, presentation visuals, concept development, marketing ideas and personal projects.",
        points: [
          "Text-to-image prompts",
          "Multiple creative styles",
          "In-app preview and saving",
          "Fast visual iteration",
        ],
        shot: {
          src: "/work/case-mockups/smartly-ai/generate.webp",
          w: 1024,
          h: 1536,
          alt: "AI image generation interface",
        },
      },
      {
        t: "Edit existing photos with simple AI instructions",
        d: "Upload an image and describe the change in everyday language. Users can request adjustments, object changes, background edits, enhancements or creative transformations.",
        points: [
          "Before-and-after comparison",
          "Simple text-based instructions",
          "Save and retry options",
        ],
        shot: {
          src: "/work/case-mockups/smartly-ai/edit.webp",
          w: 1254,
          h: 1254,
          alt: "AI image editing interface",
        },
      },
      {
        t: "Speak naturally with AI in real time",
        d: "Real-time voice lets users talk to Smartly AI — for hands-free questions, language practice, brainstorming, learning, accessibility and moments when typing is inconvenient.",
        points: [
          "Animated waveform and live status",
          "Microphone and speaker controls",
          "Visible transcript preview",
        ],
        shot: {
          src: "/work/case-mockups/smartly-ai/voice.webp",
          w: 1024,
          h: 1536,
          alt: "Real-time voice interface",
        },
      },
    ],
    tech: [
      "Flutter",
      "Android",
      "iOS",
      "Multi-model AI integration",
      "ChatGPT",
      "Gemini",
      "DeepSeek",
      "AI image tools",
      "Voice AI",
      "Cloud backend",
    ],
  },

  "ai-sales-distribution": {
    headline: "AI Powered Sales & Distribution Platform",
    intro:
      "A centralized platform that brings together sales, inventory, deliveries, attendance, and field operations with AI-driven insights to help businesses operate faster, smarter, and grow with confidence.",
    hero: {
      src: "/work/case-mockups/ai-sales-distribution/cover.webp",
      w: 1536,
      h: 1024,
      alt: "AI Sales & Distribution interface for AI sales operations",
    },
    facts: [
      ["Industry", "ERP software · AI development · SaaS"],
      ["Product", "Web and mobile SaaS for modern businesses"],
      ["Platforms", "Web and mobile"],
      ["Capabilities", "Inventory management · Field sales"],
    ],
    overview: {
      title: "Web and mobile SaaS for modern businesses",
      body: [
        "The platform is built as AI-powered SaaS for sales and field operations — bringing sales, inventory, deliveries, attendance and field staff into one connected system.",
        "AI-driven insights sit alongside live operational data so employees can track performance, control stock, run routes and grow with a clearer picture of the business.",
      ],
      cards: [
        ["Product type", "AI-powered sales and distribution SaaS"],
        ["Primary audience", "Businesses running sales, inventory and field operations"],
        [
          "Main goal",
          "Operate faster and smarter with AI-driven insights across sales and the field",
        ],
        [
          "Delivery model",
          "Web and mobile platform on Flutter, Next.js, React, Python AI, Firebase and AWS",
        ],
      ],
    },
    journey: [
      { t: "Insights", d: "AI-powered sales analytics" },
      { t: "Inventory", d: "Stock, warehouses and alerts" },
      { t: "Routes", d: "GPS retailer check-ins" },
      { t: "Orders", d: "Placement through delivery" },
      { t: "Attendance", d: "Field staff check-in" },
      { t: "Reports", d: "Executive dashboards" },
    ],
    challenges: {
      title: "One platform for sales, stock, deliveries and the field",
      lead: "The product is designed to bring sales, inventory, deliveries, attendance and field operations together — with AI-driven insights for faster, more confident decisions.",
      items: [
        {
          t: "Sales visibility",
          d: "Turn sales data into actionable insights with AI-driven analytics, performance tracking, recommendations and smart reports.",
        },
        {
          t: "Inventory control",
          d: "Track stock levels, monitor warehouse inventory and receive intelligent low-stock alerts.",
        },
        {
          t: "Field execution",
          d: "Track retailer visits with GPS-enabled check-ins and monitor daily field activities.",
        },
        {
          t: "Order to delivery",
          d: "Manage customer orders from placement to successful delivery through one connected workflow.",
        },
        {
          t: "Workforce control",
          d: "Monitor attendance, leave and employee activities across field operations.",
        },
        {
          t: "Operational reporting",
          d: "View sales, inventory, attendance and operational performance through interactive dashboards.",
        },
      ],
    },
    solution: {
      title: "A web and mobile SaaS stack with AI in the operational loop",
      body: [
        "The platform connects a web operations console with a mobile app for field staff — covering sales, customers, inventory, orders, attendance, route tracking, reports and AI insights.",
        "The stack combines Flutter, Next.js, React, Python AI, Firebase and AWS, delivered through a six-step process from project discovery to deployment and launch.",
      ],
      center: { t: "S&D Software", d: "Web and mobile SaaS" },
      nodes: [
        { t: "Flutter", d: "Mobile field app" },
        { t: "Next.js", d: "Web application" },
        { t: "React", d: "Interface layer" },
        { t: "Python AI", d: "Insights and forecasting" },
        { t: "Firebase", d: "Realtime services" },
        { t: "AWS", d: "Cloud infrastructure" },
      ],
    },
    features: [
      {
        t: "AI Powered Sales Insights",
        d: "Turn sales data into actionable insights with AI-driven analytics — sales analytics, performance tracking, AI recommendations and smart reports.",
        points: [
          "Sales analytics",
          "Performance tracking",
          "AI recommendations",
          "Smart reports",
        ],
        shot: {
          src: "/work/case-mockups/ai-sales-distribution/insights.webp",
          w: 1536,
          h: 1024,
          alt: "Sales insights interface",
        },
      },
      {
        t: "Smart Inventory Management",
        d: "Track stock levels, monitor warehouse inventory, and receive intelligent low-stock alerts.",
        points: [
          "Live inventory",
          "Stock alerts",
          "Product forecasting",
          "Warehouse tracking",
        ],
        shot: {
          src: "/work/case-mockups/ai-sales-distribution/inventory.webp",
          w: 1536,
          h: 1024,
          alt: "Inventory planning interface",
        },
      },
      {
        t: "Retailer Check In & Route Tracking",
        d: "Track retailer visits with GPS enabled check-ins and monitor daily field activities.",
        points: [
          "GPS tracking",
          "Route monitoring",
          "Retail visits",
          "Check-in reports",
        ],
        shot: {
          src: "/work/case-mockups/ai-sales-distribution/route-tracking.webp",
          w: 1254,
          h: 1254,
          alt: "Route tracking interface",
        },
      },
      {
        t: "Order & Delivery Management",
        d: "Manage customer orders from placement to successful delivery through one connected workflow.",
        points: [
          "Sales orders",
          "Rider assignment",
          "Delivery tracking",
          "Order status",
        ],
        shot: {
          src: "/work/case-mockups/ai-sales-distribution/orders.webp",
          w: 1536,
          h: 1024,
          alt: "Order management interface",
        },
      },
      {
        t: "Attendance & Workforce Management",
        d: "Monitor attendance, leave and employee activities across field operations.",
        points: [
          "Attendance",
          "Leave management",
          "Daily activity",
          "Staff activity monitoring",
        ],
        shot: {
          src: "/work/case-mockups/ai-sales-distribution/attendance.webp",
          w: 1254,
          h: 1254,
          alt: "Field attendance interface",
        },
      },
      {
        t: "Business Dashboard & Reports",
        d: "View sales, inventory, attendance, and operational performance through interactive dashboards.",
        points: [
          "Executive dashboard",
          "Sales reports",
          "Performance metrics",
          "Business analytics",
        ],
        shot: {
          src: "/work/case-mockups/ai-sales-distribution/dashboard.webp",
          w: 1536,
          h: 1024,
          alt: "Operations dashboard interface",
        },
      },
    ],
    tech: [
      "Flutter",
      "Next.js",
      "React",
      "Python AI",
      "Firebase",
      "AWS",
    ],
    process: {
      title: "From project discovery to deployment and launch",
      steps: [
        {
          t: "Project Discovery",
          d: "Understand goals and requirements.",
        },
        {
          t: "System Planning",
          d: "Map features, roles, and architecture.",
        },
        {
          t: "UI/UX & Development",
          d: "Design and build modern interfaces.",
        },
        {
          t: "Backend & AI Integration",
          d: "Connect services and integrate AI.",
        },
        {
          t: "Testing & Optimization",
          d: "Ensure performance and reliability.",
        },
        {
          t: "Deployment & Launch",
          d: "Go live with support and monitoring.",
        },
      ],
    },
    results: {
      title: "Built for a smarter tomorrow",
      items: [
        {
          t: "Higher sales visibility",
          d: "AI-powered analytics, recommendations and reports on how the business is selling.",
        },
        {
          t: "Smarter inventory control",
          d: "Live stock, warehouse tracking, forecasting and low-stock alerts.",
        },
        {
          t: "Faster field operations",
          d: "GPS check-ins, route monitoring and a connected order-to-delivery workflow.",
        },
        {
          t: "Data-driven business growth",
          d: "Interactive dashboards for sales, inventory, attendance and operational performance.",
        },
      ],
    },
  },

  "audio-mixing-mastering": {
    headline: "Professional Audio Mixing & Mastering Platform",
    intro:
      "A custom web platform that enables artists to purchase mixing and mastering services, upload audio files securely, manage projects, and receive studio-quality masters through a seamless online workflow.",
    hero: {
      src: "/work/case-mockups/audio-mixing-mastering/cover.webp",
      w: 1536,
      h: 1024,
      alt: "Audio Studio interface for Audio production workflow",
    },
    facts: [
      ["Industry", "Music production"],
      ["Product", "SaaS software"],
      ["Platforms", "Responsive web app"],
      ["Services", "UI UX design, development, cloud integration"],
      ["Duration", "2 months"],
      ["Status", "Public and live"],
    ],
    overview: {
      title: "Bringing professional audio services online",
      body: [
        "A modern web platform that simplifies service selection, secure file uploads, subscriptions, project management, revisions, and final delivery for musicians and producers. Everything needed for professional audio mixing and mastering sits in one seamless experience.",
      ],
      cards: [
        ["Product type", "Professional audio service platform"],
        [
          "Primary audience",
          "Musicians, producers, bands, studios, record labels",
        ],
        ["Main goal", "Simplify online audio mixing and mastering"],
        [
          "Delivery model",
          "Responsive web platform with cloud storage, customer dashboard, and admin panel",
        ],
      ],
    },
    journey: [
      { t: "Choose", d: "Pick mixing, mastering or both" },
      { t: "Upload", d: "Drop stems, notes and references" },
      { t: "Compare", d: "Hear before-and-after samples" },
      { t: "Track", d: "Follow progress and revisions" },
      { t: "Download", d: "Collect master-ready files" },
    ],
    challenges: {
      title: "A studio workflow that has to live on the web",
      lead: "Artists need to buy mixing and mastering, send files safely, follow revisions, and collect finished masters without leaving a single online workflow.",
      items: [
        {
          t: "Service selection",
          d: "Browse mixing, mastering, Dolby Atmos, album packages, monthly plans and add-on services from one catalog.",
        },
        {
          t: "Secure file intake",
          d: "Upload WAV, MP3, AIFF and stems — including large files up to 5GB — with project notes and reference tracks.",
        },
        {
          t: "Project and revision tracking",
          d: "Status tracking, revision requests, engineer feedback and version history have to stay in one dashboard.",
        },
        {
          t: "Final delivery",
          d: "Approved files need to download in organized formats after project completion.",
        },
      ],
    },
    solution: {
      title: "A responsive web platform with cloud storage and an admin panel",
      body: [
        "The product is a professional audio service platform: customers choose a service, upload audio, manage projects and revisions, and download finished files. An admin dashboard keeps projects, customers and activity in one place.",
        "Confirmed technologies are React, Laravel, Amazon S3, DigitalOcean, REST API and a responsive web front end.",
      ],
      center: { t: "Audio Mixing Mastering", d: "Web platform" },
      nodes: [
        { t: "Service Selection", d: "Mixing, mastering, album packages and more" },
        { t: "Secure File Upload", d: "Stems, references and project notes" },
        { t: "Project Management", d: "Progress, communication and revisions" },
        { t: "Subscriptions", d: "One-time orders or monthly plans" },
        { t: "Quality Processing", d: "Industry-standard mixing and mastering" },
        { t: "Revisions & Feedback", d: "Requests and notes in one place" },
        { t: "Final Delivery", d: "High-quality files in multiple formats" },
        { t: "Secure & Reliable", d: "Encryption and cloud storage" },
      ],
    },
    features: [
      {
        t: "Professional mixing and mastering services",
        d: "Browse multiple audio services including Mixing, Mastering, Dolby Atmos, Album Packages, and Monthly Plans.",
        points: [
          "Multiple service types",
          "Monthly subscriptions",
          "Album packages",
          "Add-on services",
        ],
        shot: {
          src: "/work/case-mockups/audio-mixing-mastering/services.webp",
          w: 1536,
          h: 1024,
          alt: "Mixing and mastering services interface",
        },
      },
      {
        t: "Secure Audio File Upload",
        d: "Upload WAV files, stems, and reference tracks securely with project instructions. Drag-and-drop intake supports WAV, MP3, AIFF and more, up to 5GB per file.",
        points: [
          "Drag-and-drop upload",
          "Large file support",
          "Reference tracks",
          "Project notes",
        ],
        shot: {
          src: "/work/case-mockups/audio-mixing-mastering/upload.webp",
          w: 1536,
          h: 1024,
          alt: "Secure audio upload interface",
        },
      },
      {
        t: "Before-and-after samples",
        d: "Compare original and professionally processed tracks before ordering, with audio preview, a waveform player, genre samples and quality comparison.",
        points: [
          "Audio preview",
          "Waveform player",
          "Genre samples",
          "Quality comparison",
        ],
        shot: {
          src: "/work/case-mockups/audio-mixing-mastering/samples.webp",
          w: 1536,
          h: 1024,
          alt: "Before-and-after samples interface",
        },
      },
      {
        t: "Project and Revision Management",
        d: "Track project progress, submit revision requests, download final audio files, and manage everything from one centralized dashboard.",
        points: [
          "Status tracking — monitor progress in real-time",
          "Revision requests — submit and track revisions",
          "Engineer feedback — get expert input and updates",
          "Version history — access all project versions",
          "Admin dashboard — manage everything centrally",
        ],
        shot: {
          src: "/work/case-mockups/audio-mixing-mastering/projects.webp",
          w: 1536,
          h: 1024,
          alt: "Project and revision tracking interface",
        },
      },
      {
        t: "Final Audio Delivery",
        d: "Download all approved files in organized formats after project completion — master-ready files from the same workflow.",
        points: [
          "Final audio delivery in multiple formats",
          "Master WAV, MP3 and additional exports",
          "Download master-ready files",
        ],
        shot: {
          src: "/work/case-mockups/audio-mixing-mastering/delivery.webp",
          w: 1254,
          h: 1254,
          alt: "Final audio delivery interface",
        },
      },
    ],
    tech: [
      "React",
      "Laravel",
      "Amazon S3",
      "DigitalOcean",
      "REST API",
      "Responsive web",
    ],
    process: {
      title: "From product definition to deployment",
      steps: [
        {
          t: "Project Discovery",
          d: "Understood business workflow and user requirements.",
        },
        {
          t: "System Planning",
          d: "Created information architecture and project structure.",
        },
        {
          t: "UI UX and Development",
          d: "Designed a modern and responsive user experience.",
        },
        {
          t: "Development",
          d: "Built the frontend, backend, and cloud integration.",
        },
        {
          t: "Testing and Optimization",
          d: "Tested uploads, orders, subscriptions, and responsive behavior.",
        },
        {
          t: "Deployment and Launch",
          d: "Launched the application with secure cloud storage.",
        },
      ],
    },
    results: {
      title: "Delivering real benefits",
      items: [
        {
          t: "Better user experience",
          d: "A smoother ordering process for artists and producers.",
        },
        {
          t: "Faster project submission",
          d: "Quick and secure audio uploads with fewer manual steps.",
        },
        {
          t: "Organized workflow",
          d: "Projects, revisions, and deliveries remain centralized.",
        },
        {
          t: "Scalable storage",
          d: "Amazon S3 enables reliable management of large audio files.",
        },
      ],
    },
  },

  "intelligent-erp": {
    headline: "AI Powered ERP Platform for Modern Business Management",
    intro:
      "A unified ERP platform designed to streamline sales, purchasing, inventory, finance, HR, and business operations. Built with AI powered insights, smart inventory forecasting, and scalable cloud architecture to help businesses make faster, data driven decisions.",
    hero: {
      src: "/work/case-mockups/intelligent-erp/cover.webp",
      w: 1536,
      h: 1024,
      alt: "Intelligent ERP interface for Connected business operations",
    },
    facts: [
      ["Industry", "ERP software · AI development · SaaS"],
      ["Product", "Unified ERP platform"],
      ["Platforms", "Web and mobile"],
      ["Architecture", "Scalable cloud · SaaS"],
    ],
    overview: {
      title: "All-in-one business operations with AI-powered insights",
      body: [
        "The platform unifies sales, purchasing, inventory, finance, HR and reporting so employees work from one operational picture instead of disconnected modules.",
        "AI-powered insights, smart inventory forecasting and a scalable cloud architecture are built in — all-in-one, AI-powered, scalable and secure, and designed for business growth.",
      ],
      cards: [
        ["Product type", "AI-powered ERP SaaS"],
        ["Primary audience", "Organizations running sales, purchasing, inventory, finance and HR"],
        [
          "Main goal",
          "Faster, data-driven decisions across core business operations",
        ],
        [
          "Delivery model",
          "Web and mobile ERP — Flutter, Next.js, NestJS, PostgreSQL, AWS S3 and DigitalOcean",
        ],
      ],
    },
    journey: [
      { t: "Monitor", d: "Live dashboards across modules" },
      { t: "Ask", d: "Natural-language business queries" },
      { t: "Sell & buy", d: "Quotes through procurement" },
      { t: "Run finance & HR", d: "Ledgers, payroll and attendance" },
      { t: "Control access", d: "Roles by department" },
    ],
    challenges: {
      title: "Core operations, forecasting and access in one ERP",
      lead: "The platform is built to streamline sales, purchasing, inventory, finance, HR and business operations — with AI insights, demand forecasting and role-based access across the product.",
      items: [
        {
          t: "Live operational picture",
          d: "Track sales, purchases, inventory and business performance through live dashboards with real-time analytics and reporting.",
        },
        {
          t: "Questions in plain language",
          d: "Ask business questions in natural language and get instant insights from operational data.",
        },
        {
          t: "Stock that stays ahead of demand",
          d: "Forecast future demand using AI to reduce stock shortages and optimize inventory levels.",
        },
        {
          t: "Quote to payment",
          d: "Manage quotations, orders, invoices, suppliers, purchase orders and procurement in one connected system.",
        },
        {
          t: "Finance and people in the same system",
          d: "Connect accounting, expenses, ledgers, payroll, employees and attendance in one centralized ERP.",
        },
        {
          t: "The right people, the right access",
          d: "Assign permissions based on departments and responsibilities while maintaining secure access across the platform.",
        },
      ],
    },
    solution: {
      title: "A unified ERP on web, mobile and a NestJS backend",
      body: [
        "Six-plus core modules cover Sales, Purchase, Inventory, Finance, HR and more, on a 100% cloud-ready architecture that is described as secure and scalable.",
        "The confirmed stack is Flutter, Next.js, NestJS, PostgreSQL, AWS S3 and DigitalOcean, with AI integration for the assistant and inventory forecasting.",
      ],
      center: { t: "Intelligent ERP", d: "Web and mobile SaaS" },
      nodes: [
        { t: "Flutter", d: "Mobile application" },
        { t: "Next.js", d: "Web application" },
        { t: "NestJS", d: "API and services" },
        { t: "PostgreSQL", d: "Operational data" },
        { t: "AWS S3", d: "Object storage" },
        { t: "DigitalOcean", d: "Cloud hosting" },
        { t: "AI assistant", d: "Natural-language insights" },
        { t: "Role-based access", d: "Admin, manager, employee, auditor" },
      ],
    },
    features: [
      {
        t: "Real Time Business Monitoring",
        d: "Track sales, purchases, inventory, and business performance through live dashboards with real-time analytics and reporting. Get the insights needed to make faster, data-driven decisions.",
        points: [
          "Executive dashboard",
          "Business analytics",
          "Performance charts",
          "Activity monitoring",
        ],
        shot: {
          src: "/work/case-mockups/intelligent-erp/dashboard.webp",
          w: 1536,
          h: 1024,
          alt: "Business operations dashboard interface",
        },
      },
      {
        t: "AI Assistant & Inventory Forecasting",
        d: "Ask business questions in natural language and get instant insights from operational data. Forecast future demand using AI to reduce stock shortages and optimize inventory levels.",
        points: [
          "AI chat",
          "Business queries",
          "Demand forecasting",
          "Reorder suggestions",
        ],
        shot: {
          src: "/work/case-mockups/intelligent-erp/assistant.webp",
          w: 1254,
          h: 1254,
          alt: "ERP AI assistant interface",
        },
      },
      {
        t: "Sales & Purchase Management",
        d: "Manage quotations, orders, invoices, suppliers, purchase orders, and procurement workflows in one connected system. Streamline sales and purchasing with real-time visibility, automation, and control from quote to payment.",
        points: [
          "Sales orders",
          "Invoice tracking",
          "Supplier records",
          "Procurement workflow",
        ],
        shot: {
          src: "/work/case-mockups/intelligent-erp/sales.webp",
          w: 1536,
          h: 1024,
          alt: "Sales management interface",
        },
      },
      {
        t: "Finance & HR Management",
        d: "Connect accounting, expenses, ledgers, payroll, employees, and attendance in one centralized ERP system for financial and human-resources operations.",
        points: [
          "Financial reports",
          "Expense tracking",
          "Payroll",
          "Attendance",
        ],
        shot: {
          src: "/work/case-mockups/intelligent-erp/finance.webp",
          w: 1536,
          h: 1024,
          alt: "Finance workspace interface",
        },
      },
      {
        t: "Secure Role Based Access",
        d: "Assign permissions based on departments and responsibilities while maintaining secure access across the entire platform.",
        points: [
          "User roles",
          "Department permissions",
          "Approval workflows",
          "Secure authentication",
        ],
        shot: {
          src: "/work/case-mockups/intelligent-erp/roles.webp",
          w: 1024,
          h: 1536,
          alt: "Role-based access interface",
        },
      },
    ],
    tech: [
      "Flutter",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "AWS S3",
      "DigitalOcean",
      "AI integration",
      "SaaS",
    ],
  },

  propela: {
    headline: "Proposal Management System",
    intro:
      "A modern platform for creating, managing and tracking business proposals.",
    hero: {
      src: "/work/case-mockups/propela/cover.webp",
      w: 1536,
      h: 1024,
      alt: "Propela interface for Proposal management",
    },
    facts: [
      ["Product", "Full stack web application"],
      ["Platforms", "Web"],
      ["Stack", "React · Next.js · PostgreSQL"],
      ["Architecture", "Dynamic workflows · Role based access · PDF ready"],
    ],
    overview: {
      title: "Create, manage and track business proposals in one workspace",
      body: [
        "Propela is a full-stack web application for proposal work: a dashboard of activity and value, a searchable proposal list, reusable products and modules, and separate administrator and staff access.",
        "The architecture is a scalable React and PostgreSQL application with a structured API layer — built for maintainability, secure access and professional proposal output.",
      ],
      cards: [
        ["Product type", "Full stack proposal management web app"],
        ["Primary audience", "Administrators and proposal staff"],
        [
          "Main goal",
          "Create, manage and track business proposals with consistent product structures",
        ],
        [
          "Delivery model",
          "React 18 + Vite front end, Next.js + Express API, Prisma ORM and PostgreSQL",
        ],
      ],
    },
    journey: [
      { t: "Sign in", d: "Administrator or staff workspace" },
      { t: "Configure", d: "Products, modules and templates" },
      { t: "Draft", d: "Build proposals from the catalog" },
      { t: "Track", d: "Search, status and value" },
      { t: "Output", d: "PDF-ready proposal generation" },
    ],
    challenges: {
      title: "Proposal work that stays structured, visible and controlled",
      lead: "The product is built around centralized proposal records, reusable product structures, separate administrator and staff experiences, and PDF-ready output.",
      items: [
        {
          t: "Activity at a glance",
          d: "A clear view of proposal activity, statuses and value — metrics, status tracking and a value overview.",
        },
        {
          t: "Centralized records",
          d: "Proposal records with search, status and workflow visibility, plus search and filter, status tracking and proposal actions.",
        },
        {
          t: "Consistent structures",
          d: "Reusable product structures that make proposal creation faster and consistent, including a product catalog and module management designed for multiple products and independent module sets.",
        },
        {
          t: "Separate workspace access",
          d: "Separate experiences for administrators and proposal staff, with admin workspace, staff workflow and user roles.",
        },
      ],
    },
    solution: {
      title: "A scalable React and PostgreSQL application with a structured API layer",
      body: [
        "The front end is React 18 + Vite. The API layer is Next.js + Express. Data access goes through Prisma ORM into PostgreSQL.",
        "Tailwind CSS, TypeScript, JWT and Puppeteer sit around that core — for maintainability, secure access and professional proposal output.",
      ],
      center: { t: "Propela", d: "Full stack web application" },
      nodes: [
        { t: "Frontend", d: "React 18 + Vite" },
        { t: "API layer", d: "Next.js + Express" },
        { t: "Data layer", d: "Prisma ORM" },
        { t: "Database", d: "PostgreSQL" },
        { t: "UI & language", d: "Tailwind CSS · TypeScript" },
        { t: "Access & output", d: "JWT · Puppeteer" },
      ],
    },
    features: [
      {
        t: "Business Proposal Dashboard",
        d: "A clear view of proposal activity, statuses and value at a glance.",
        points: ["Proposal metrics", "Status tracking", "Value overview"],
        shot: {
          src: "/work/case-mockups/propela/dashboard.webp",
          w: 1536,
          h: 1024,
          alt: "Proposal workspace interface",
        },
        wide: true,
      },
      {
        t: "Proposal Management",
        d: "Centralized proposal records with search, status and workflow visibility.",
        points: ["Search & filter", "Status tracking", "Proposal actions"],
        shot: {
          src: "/work/case-mockups/propela/proposals.webp",
          w: 1536,
          h: 1024,
          alt: "Proposal pipeline interface",
        },
        wide: true,
      },
      {
        t: "Products and Modules",
        d: "Reusable product structures that make proposal creation faster and consistent. Designed to support multiple products and independent module sets.",
        points: ["Product catalog", "Module management"],
        shot: {
          src: "/work/case-mockups/propela/products.webp",
          w: 1536,
          h: 1024,
          alt: "Product catalogue interface",
        },
        wide: true,
      },
      {
        t: "Role Based Workspace Access",
        d: "Separate experiences for administrators and proposal staff. Admins configure products and templates; staff build and send proposals.",
        points: ["Admin workspace", "Staff workflow", "User roles"],
        shot: {
          src: "/work/case-mockups/propela/roles.webp",
          w: 1536,
          h: 1024,
          alt: "Roles and access interface",
        },
        wide: true,
      },
    ],
    tech: [
      "React 18",
      "Vite",
      "Next.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
      "JWT",
      "Puppeteer",
    ],
  },

  rackline: {
    headline: "AI Powered Deer Scoring App for Hunters and Outfitters",
    intro:
      "Designed and developed Rackline.ai, a cross platform mobile application that helps hunters upload trail camera or harvest photos and receive AI assisted antler score estimates. The platform combines detailed measurements, Trophy Room history, community features, maps and outfitter discovery within one connected hunting experience.",
    hero: {
      src: "/work/case-mockups/rackline/cover.webp",
      w: 1536,
      h: 1024,
      alt: "Rackline interface for Deer scoring in the field",
    },
    facts: [
      ["Industry", "AI mobile app development"],
      ["Product", "Cross-platform hunting app"],
      ["Platforms", "iOS and Android"],
      ["Stack", "Flutter · Firebase · Node.js · OpenAI API"],
    ],
    overview: {
      title: "More than a score — hunt, explore, connect",
      body: [
        "Rackline.ai is a cross-platform mobile application for hunters and outfitters. Users upload trail camera or harvest photos and receive AI-assisted antler score estimates.",
        "Detailed measurements, Trophy Room history, community features, maps and outfitter discovery sit in one connected hunting experience.",
      ],
      cards: [
        ["Product type", "AI-powered cross-platform mobile app"],
        ["Primary audience", "Hunters and outfitters"],
        [
          "Main goal",
          "AI-assisted antler score estimates from trail-camera or harvest photos",
        ],
        [
          "Delivery model",
          "Flutter app for iOS and Android with Firebase, Node.js and the OpenAI API",
        ],
      ],
    },
    journey: [
      { t: "Capture", d: "Trail camera or harvest photo" },
      { t: "Score", d: "AI-assisted antler estimate" },
      { t: "Measure", d: "Beams, tines, spread and gross" },
      { t: "Save", d: "Trophy Room history and badges" },
      { t: "Share", d: "Community, maps and outfitters" },
    ],
    challenges: {
      title: "Scoring, history and community in one hunting app",
      lead: "The deck describes a mobile product that turns trail-camera or harvest photos into AI-assisted scores, then keeps those records in a Trophy Room with community, maps and outfitter discovery.",
      items: [
        {
          t: "Photo to score",
          d: "Hunters upload trail camera or harvest photos and receive AI-assisted antler score estimates through a guided mobile workflow.",
        },
        {
          t: "More than one total",
          d: "The result screen displays measurements for main beams, tines, circumferences, inside spread and the estimated gross score — more context than displaying only one total number.",
        },
        {
          t: "An ongoing hunting record",
          d: "Saved records turn one-time scoring into an ongoing social hunting experience through Trophy Room history, share-ready badges, community and messaging.",
        },
        {
          t: "One connected experience",
          d: "Maps and outfitter discovery sit with scoring and community so the product is more than a score.",
        },
      ],
    },
    solution: {
      title: "A Flutter app with Firebase, Node.js and the OpenAI API",
      body: [
        "Mobile, backend, cloud and AI responsibilities were defined before building the Flutter app and connecting Firebase, Node.js and the AI workflow.",
        "Clear photo selection, preview, processing and completion states help users understand every step of scoring. The result is prepared for iOS and Android release.",
      ],
      center: { t: "Rackline.ai", d: "Cross-platform mobile app" },
      nodes: [
        { t: "Flutter", d: "iOS and Android" },
        { t: "Firebase", d: "Cloud services" },
        { t: "Node.js", d: "Backend" },
        { t: "OpenAI API", d: "AI scoring" },
        { t: "Scoring workflow", d: "Camera, gallery, crop, result" },
        { t: "Trophy Room", d: "History, badges, community" },
      ],
    },
    features: [
      {
        t: "AI Photo Scoring",
        d: "Users can upload trail camera or harvest photos and receive an AI assisted antler score estimate through a guided mobile workflow. Clear photo selection, preview, processing and completion states help users understand every step.",
        points: [
          "Camera or gallery image selection",
          "Image preview before submission",
          "Visible AI processing state",
          "Structured score result and retry flow",
        ],
        shot: {
          src: "/work/case-mockups/rackline/scoring.webp",
          w: 1254,
          h: 1254,
          alt: "Guided deer scoring interface",
        },
      },
      {
        t: "Detailed Measurement Breakdown",
        d: "The result screen displays measurements for main beams, tines, circumferences, inside spread and the estimated gross score. This gives users more context than displaying only one total number.",
        points: [
          "Prominent estimated gross score",
          "Main beam and tine measurements",
          "Circumference and inside spread details",
          "Clear estimate language",
        ],
        shot: {
          src: "/work/case-mockups/rackline/measurements.webp",
          w: 1254,
          h: 1254,
          alt: "Antler measurements interface",
        },
      },
      {
        t: "Trophy Room and Community",
        d: "Users can save scored bucks inside a personal Trophy Room, create share ready score badges, and stay engaged through community content, post discussions and messaging. Saved records turn one time scoring into an ongoing social hunting experience.",
        points: [
          "Saved deer records and Trophy Room history",
          "Digital score badges and share assets",
          "Community feed and post engagement",
          "Messaging, profiles and notifications",
        ],
        shot: {
          src: "/work/case-mockups/rackline/trophy-room.webp",
          w: 1536,
          h: 1024,
          alt: "Trophy room interface",
        },
      },
    ],
    tech: [
      "Flutter",
      "Firebase",
      "Node.js",
      "OpenAI API",
      "iOS",
      "Android",
    ],
    process: {
      title: "From idea to app store launch",
      steps: [
        {
          t: "Product Discovery",
          d: "Defined the main users, business requirements and product priorities.",
        },
        {
          t: "User Flow Planning",
          d: "Planned scoring, Trophy Room, maps, community and outfitter journeys.",
        },
        {
          t: "UI UX Design",
          d: "Created high fidelity screens and reusable interface components.",
        },
        {
          t: "Technical Architecture",
          d: "Separated mobile, backend, cloud and AI responsibilities.",
        },
        {
          t: "Development and Integration",
          d: "Built the Flutter app and connected Firebase, Node.js and the AI workflow.",
        },
        {
          t: "Testing and Deployment",
          d: "Tested the main workflows and prepared the app for iOS and Android release.",
        },
      ],
    },
  },
};
