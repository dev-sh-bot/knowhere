import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const caseDetailsPath = path.join(root, "src/lib/case-details.ts");
const source = await readFile(caseDetailsPath, "utf8");

const cases = {
  "ai-sales-distribution": {
    brand: "AI Sales & Distribution",
    accent: "#6855f5",
    deep: "#111936",
    nav: ["Overview", "Sales", "Inventory", "Orders", "Field operations"],
    cover: {
      title: "AI sales operations",
      subtitle: "Sales, stock, deliveries and field activity in one view",
      items: ["Sales insights", "Inventory planning", "Delivery tracking"],
      kind: "dashboard",
    },
    features: {
      insights: { title: "Sales insights", subtitle: "Patterns and forecasts across sales activity", items: ["Sales trends", "Demand forecast", "Opportunity signals"], kind: "analytics" },
      inventory: { title: "Inventory planning", subtitle: "Stock visibility across products and locations", items: ["Stock levels", "Reorder planning", "Product movement"], kind: "inventory" },
      "route-tracking": { title: "Route tracking", subtitle: "Field routes, delivery progress and location updates", items: ["Planned routes", "Delivery stops", "Live progress"], kind: "map" },
      orders: { title: "Order management", subtitle: "A clear path from order placement to delivery", items: ["New orders", "Processing", "Ready for delivery"], kind: "table" },
      attendance: { title: "Field attendance", subtitle: "Check-ins and field activity for daily operations", items: ["Attendance", "Check-ins", "Activity log"], kind: "mobile" },
      dashboard: { title: "Operations dashboard", subtitle: "Sales, inventory and field operations together", items: ["Sales overview", "Stock status", "Field activity"], kind: "dashboard" },
    },
  },
  propela: {
    brand: "Propela",
    accent: "#d4952f",
    deep: "#231c17",
    nav: ["Overview", "Products", "Proposals", "Templates", "Access control"],
    cover: {
      title: "Proposal management",
      subtitle: "Create, review and track proposals from one workspace",
      items: ["Proposal builder", "Product catalogue", "Review workflow"],
      kind: "dashboard",
    },
    features: {
      dashboard: { title: "Proposal workspace", subtitle: "An at-a-glance view of proposal activity", items: ["Drafts", "In review", "Approved"], kind: "dashboard" },
      proposals: { title: "Proposal pipeline", subtitle: "Create proposals and follow each review stage", items: ["Proposal details", "Review", "Decision"], kind: "table" },
      products: { title: "Product catalogue", subtitle: "Keep proposal products, modules and pricing organized", items: ["Products", "Modules", "Pricing"], kind: "catalog" },
      roles: { title: "Roles and access", subtitle: "Manage workspace permissions for each role", items: ["Administrator", "Editor", "Reviewer"], kind: "permissions" },
    },
  },
  "audio-mixing-mastering": {
    brand: "Audio Studio",
    accent: "#97d84a",
    deep: "#071b19",
    nav: ["Services", "Upload", "Projects", "Samples", "Delivery"],
    cover: {
      title: "Audio production workflow",
      subtitle: "Choose a service, submit audio and receive finished masters",
      items: ["Mixing & mastering", "Secure upload", "Project delivery"],
      kind: "audio",
    },
    features: {
      services: { title: "Mixing and mastering services", subtitle: "Browse studio services and choose the right package", items: ["Mixing", "Mastering", "Dolby Atmos"], kind: "catalog" },
      upload: { title: "Secure audio upload", subtitle: "Send stems, references and project notes together", items: ["Audio files", "Reference tracks", "Project notes"], kind: "upload" },
      samples: { title: "Before-and-after samples", subtitle: "Compare original tracks with finished studio masters", items: ["Original audio", "Processed audio", "Waveform preview"], kind: "audio" },
      projects: { title: "Project and revision tracking", subtitle: "Keep status, feedback and versions in one place", items: ["Project status", "Revision requests", "Engineer feedback"], kind: "table" },
      delivery: { title: "Final audio delivery", subtitle: "Download approved, master-ready files", items: ["Master WAV", "MP3 export", "Alternate versions"], kind: "delivery" },
    },
  },
  rackline: {
    brand: "Rackline",
    accent: "#13a681",
    deep: "#102c25",
    nav: ["Community", "Map", "Scoring", "Outfitters", "Trophy room"],
    cover: {
      title: "Deer scoring in the field",
      subtitle: "Capture measurements, review scores and save trophy records",
      items: ["Antler scoring", "Field measurements", "Trophy room"],
      kind: "field",
    },
    features: {
      scoring: { title: "Guided deer scoring", subtitle: "Record antler measurements in a consistent scoring flow", items: ["Scoring guide", "Measurement points", "Score summary"], kind: "field" },
      measurements: { title: "Antler measurements", subtitle: "Capture spread, tine length and circumference", items: ["Inside spread", "Tine length", "Circumference"], kind: "field" },
      "trophy-room": { title: "Trophy room", subtitle: "Save scored deer and review hunting records", items: ["Saved records", "Score details", "Field notes"], kind: "gallery" },
    },
  },
  "intelligent-erp": {
    brand: "Intelligent ERP",
    accent: "#3277eb",
    deep: "#111e38",
    nav: ["Overview", "Sales", "Purchasing", "Inventory", "Finance", "People"],
    cover: {
      title: "Connected business operations",
      subtitle: "Sales, purchasing, stock, finance and HR in one ERP",
      items: ["Business dashboard", "Inventory forecast", "AI assistant"],
      kind: "dashboard",
    },
    features: {
      dashboard: { title: "Business operations dashboard", subtitle: "Monitor sales, purchasing, stock and finance together", items: ["Sales", "Purchasing", "Inventory"], kind: "dashboard" },
      assistant: { title: "ERP AI assistant", subtitle: "Ask questions about business records and workflows", items: ["Ask about operations", "Review business data", "Explore next steps"], kind: "assistant" },
      sales: { title: "Sales management", subtitle: "Connect customer activity, orders and sales records", items: ["Sales pipeline", "Customer records", "Order activity"], kind: "table" },
      finance: { title: "Finance workspace", subtitle: "Bring account activity, expenses and reporting together", items: ["Accounts", "Expenses", "Financial reports"], kind: "finance" },
      roles: { title: "Role-based access", subtitle: "Give each user access to the tools their role requires", items: ["Administrator", "Finance", "Operations"], kind: "permissions" },
    },
  },
  "smartly-ai": {
    brand: "Smartly AI",
    accent: "#8564ff",
    deep: "#18142c",
    nav: ["Chat", "Files", "Camera", "Assistants", "Voice"],
    cover: {
      title: "AI tools in one workspace",
      subtitle: "Chat, file analysis, camera assistance, image tools and voice",
      items: ["AI chat", "File analysis", "Image & voice tools"],
      kind: "assistant",
    },
    features: {
      compare: { title: "Compare AI models", subtitle: "Review model responses side by side", items: ["Prompt", "Model response", "Compare results"], kind: "compare" },
      files: { title: "File analysis", subtitle: "Ask questions and find insights in uploaded files", items: ["Add a file", "Extract key points", "Ask follow-up questions"], kind: "assistant" },
      camera: { title: "Camera assistance", subtitle: "Use a photo to ask a question or get guidance", items: ["Capture image", "Describe what you see", "Ask Smartly AI"], kind: "camera" },
      assistants: { title: "Specialized assistants", subtitle: "Choose an assistant for a focused task", items: ["Writing helper", "Study guide", "Research assistant"], kind: "catalog" },
      generate: { title: "AI image generation", subtitle: "Turn a written prompt into a visual concept", items: ["Describe an image", "Choose a style", "Create image"], kind: "generate" },
      edit: { title: "AI image editing", subtitle: "Refine an image with a clear text instruction", items: ["Choose an image", "Describe an edit", "Review result"], kind: "edit" },
      voice: { title: "Real-time voice", subtitle: "Speak naturally and hear an AI response", items: ["Start voice", "Listening", "Response ready"], kind: "voice" },
    },
  },
  colearnix: {
    brand: "CoLearnix",
    accent: "#7954ef",
    deep: "#21184b",
    nav: ["Home", "Projects", "Create", "Messages", "Profile"],
    cover: {
      title: "A connected campus experience",
      subtitle: "Projects, mentors, messages and career tools for students",
      items: ["Project discovery", "Mentor matching", "Student community"],
      kind: "mobile-showcase",
    },
    features: {
      onboarding: { title: "Student onboarding", subtitle: "A guided path from welcome to a verified account", items: ["Welcome", "Sign in", "Verify email"], kind: "onboarding" },
      home: { title: "Personalized student home", subtitle: "Bring skill matches, projects and mentors together", items: ["AI skill matches", "Recommended projects", "Mentor discovery"], kind: "mobile" },
      projects: { title: "Project discovery and creation", subtitle: "Find collaborators and publish campus opportunities", items: ["Browse projects", "Find collaborators", "Create opportunity"], kind: "mobile" },
      messaging: { title: "Messages and student profile", subtitle: "Keep conversations and professional details connected", items: ["Project messages", "Student profile", "Career tools"], kind: "mobile" },
    },
  },
  "temp-mail": {
    brand: "Temp Mail",
    accent: "#9338f5",
    deep: "#25123a",
    nav: ["Inbox", "Addresses", "Forwarding", "Attachments", "Privacy"],
    cover: {
      title: "Private temporary email",
      subtitle: "Create disposable addresses and manage messages securely",
      items: ["Temporary address", "Private inbox", "Forwarding controls"],
      kind: "mobile-showcase",
    },
    features: {
      create: { title: "Create a temporary address", subtitle: "Generate a disposable address when you need one", items: ["Create address", "Copy address", "Open private inbox"], kind: "mobile" },
      mailboxes: { title: "Multiple mailboxes", subtitle: "Keep temporary inboxes separate and easy to manage", items: ["Inbox list", "Unread messages", "Address controls"], kind: "mobile" },
      notifications: { title: "Private message notifications", subtitle: "Know when a new message reaches a temporary inbox", items: ["New message", "Private alert", "Open inbox"], kind: "mobile" },
      custom: { title: "Custom temporary addresses", subtitle: "Choose an available address for a specific purpose", items: ["Choose alias", "Select domain", "Create address"], kind: "mobile" },
      forwarding: { title: "Email forwarding", subtitle: "Forward selected messages while keeping your personal address private", items: ["Forwarding rule", "Destination protected", "Delivery status"], kind: "mobile" },
      outbound: { title: "Outbound email", subtitle: "Send a message from a temporary address", items: ["Compose message", "Temporary sender", "Send securely"], kind: "mobile" },
      attachments: { title: "Email attachments", subtitle: "Review files received in a temporary inbox", items: ["Message attachment", "File details", "Download control"], kind: "mobile" },
      "private-mail": { title: "Private mailbox controls", subtitle: "Manage message retention and address privacy", items: ["Privacy settings", "Mailbox lifetime", "Clear messages"], kind: "mobile" },
    },
  },
};

const xml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
const text = (x, y, value, size = 18, color = "#263044", weight = 500, extra = "") => `<text x="${x}" y="${y}" fill="${color}" font-family="Inter,Arial,sans-serif" font-size="${size}" font-weight="${weight}" ${extra}>${xml(value)}</text>`;
const rect = (x, y, width, height, fill, radius = 12, extra = "") => `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" ${extra}/>`;

function pill(x, y, label, theme, width = 128) {
  return `${rect(x, y - 24, width, 36, `${theme.accent}16`, 18)}${text(x + 14, y, label, 14, theme.accent, 700)}`;
}

function svgFrame(w, h, theme, body, title) {
  const viewH = Math.round((1200 * h) / w);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 1200 ${viewH}" fill="none">
  <title>${xml(title)}</title>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="${viewH}" gradientUnits="userSpaceOnUse"><stop stop-color="${theme.deep}"/><stop offset="1" stop-color="#080d18"/></linearGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#f2f5fa"/></linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${theme.accent}"/><stop offset="1" stop-color="${theme.deep}"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#000" flood-opacity=".28"/></filter>
  </defs>
  <rect width="1200" height="${viewH}" rx="36" fill="url(#bg)"/>
  <circle cx="1030" cy="${Math.round(viewH * 0.14)}" r="240" fill="${theme.accent}" opacity=".12"/>
  <circle cx="145" cy="${Math.round(viewH * 0.88)}" r="210" fill="${theme.accent}" opacity=".08"/>
  ${body}
  </svg>`;
}

function appHeader(x, y, width, brand, theme, dark = false) {
  const fg = dark ? "#f5f7ff" : "#172136";
  const muted = dark ? "#aeb8d0" : "#7d889d";
  return `${rect(x, y, width, 64, dark ? "#121a2a" : "#ffffff", 18, `stroke="${dark ? "#2b3749" : "#e7ebf2"}"`)}${rect(x + 18, y + 17, 30, 30, theme.accent, 9)}${text(x + 27, y + 38, brand.slice(0, 1), 17, "#fff", 800)}${text(x + 62, y + 39, brand, 17, fg, 750)}${rect(x + width - 128, y + 20, 86, 24, dark ? "#202a3c" : "#f3f5f9", 12)}${rect(x + width - 31, y + 24, 8, 8, theme.accent, 4)}${text(x + width - 110, y + 37, "Workspace", 11, muted, 600)}`;
}

function navSidebar(x, y, width, height, labels, theme, activeIndex = 0, dark = false) {
  const fill = dark ? "#111927" : "#f9fafc";
  const fg = dark ? "#b9c4d6" : "#6c778a";
  const active = dark ? "#252247" : `${theme.accent}15`;
  let out = rect(x, y, width, height, fill, 14);
  const rowH = Math.min(58, (height - 44) / Math.max(labels.length, 1));
  labels.forEach((label, i) => {
    const yy = y + 24 + i * rowH;
    if (i === activeIndex) out += rect(x + 10, yy - 25, width - 20, 42, active, 9);
    out += `<circle cx="${x + 31}" cy="${yy - 5}" r="6" fill="${i === activeIndex ? theme.accent : (dark ? "#58667e" : "#b2bac8")}"/>`;
    out += text(x + 49, yy, label, 13, i === activeIndex ? (dark ? "#fff" : theme.accent) : fg, i === activeIndex ? 700 : 500);
  });
  return out;
}

function drawDashboard(w, h, theme, config, brand, nav, variant = "dashboard") {
  const H = Math.round((1200 * h) / w);
  const outerX = 42, outerY = 42, outerW = 1116, outerH = H - 84;
  const headerH = 68, sidebarW = 218, contentX = outerX + sidebarW + 28, contentW = outerW - sidebarW - 54;
  const contentY = outerY + headerH + 28;
  const featureItems = [...config.items];
  while (featureItems.length < 4) featureItems.push("Activity overview");
  let body = `${rect(outerX, outerY, outerW, outerH, "url(#panel)", 28, 'filter="url(#shadow)"')}`;
  body += appHeader(outerX, outerY, outerW, brand, theme);
  body += navSidebar(outerX + 16, outerY + headerH + 16, sidebarW - 26, outerH - headerH - 32, nav, theme, Math.max(0, nav.findIndex((item) => config.title.toLowerCase().includes(item.toLowerCase().split(" ")[0]))));
  body += text(contentX, contentY + 8, config.title, 30, "#182236", 780);
  body += text(contentX, contentY + 38, config.subtitle, 15, "#758097", 500);
  body += pill(outerX + outerW - 178, contentY + 28, "Overview", theme, 110);
  const gap = 16, cardY = contentY + 66, cardH = Math.max(84, Math.min(122, H * 0.15)), cardW = (contentW - gap * 2) / 3;
  for (let i = 0; i < 3; i++) {
    const x = contentX + i * (cardW + gap);
    body += rect(x, cardY, cardW, cardH, "#ffffff", 14, 'stroke="#e9edf3"');
    body += rect(x + 18, cardY + 18, 30, 30, `${theme.accent}18`, 9);
    body += `<path d="M${x + 27} ${cardY + 34}l6-8 6 8" stroke="${theme.accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    body += text(x + 18, cardY + 68, featureItems[i], 15, "#1d2940", 700);
    body += rect(x + 18, cardY + cardH - 24, cardW - 36, 5, "#edf0f5", 3);
    body += rect(x + 18, cardY + cardH - 24, (cardW - 36) * (0.44 + i * 0.13), 5, theme.accent, 3);
  }
  const lowerY = cardY + cardH + 18;
  const mainW = Math.floor(contentW * 0.62), sideW = contentW - mainW - 16;
  const lowerH = Math.max(180, outerY + outerH - lowerY - 24);
  body += rect(contentX, lowerY, mainW, lowerH, "#ffffff", 16, 'stroke="#e9edf3"');
  body += text(contentX + 20, lowerY + 31, variant === "analytics" ? "Activity trends" : variant === "map" ? "Route overview" : "Workflow overview", 16, "#202b40", 730);
  if (variant === "map" || variant === "field") {
    const mapX = contentX + 22, mapY = lowerY + 54, mapW = mainW - 44, mapH = lowerH - 76;
    body += rect(mapX, mapY, mapW, mapH, "#eef4ef", 12);
    for (let i = 0; i < 5; i++) body += `<path d="M${mapX + 15} ${mapY + 25 + i * 32} C${mapX + mapW * .32} ${mapY + i * 29},${mapX + mapW * .64} ${mapY + 63 + i * 18},${mapX + mapW - 12} ${mapY + 30 + i * 29}" stroke="#d8e5dd" stroke-width="2"/>`;
    body += `<path d="M${mapX + 55} ${mapY + mapH * .72} C${mapX + mapW * .35} ${mapY + mapH * .66},${mapX + mapW * .45} ${mapY + mapH * .2},${mapX + mapW * .84} ${mapY + mapH * .32}" stroke="${theme.accent}" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 12"/>`;
    for (const [i, p] of [[0, 0.72], [1, 0.45], [2, 0.32]]) body += `<circle cx="${mapX + mapW * (0.2 + i * .29)}" cy="${mapY + mapH * p}" r="11" fill="${theme.accent}" stroke="#fff" stroke-width="5"/>`;
    body += text(mapX + 18, mapY + mapH - 17, config.items[0], 13, "#44536a", 700);
  } else if (variant === "audio" || variant === "delivery") {
    const ax = contentX + 24, ay = lowerY + 78, waveW = mainW - 48;
    body += text(ax, lowerY + 60, variant === "delivery" ? "Approved master" : "Audio preview", 13, "#657187", 600);
    body += rect(ax, ay + 34, waveW, 58, "#f5f7fa", 10);
    for (let i = 0; i < 76; i++) { const ht = 8 + ((i * 29 + 17) % 32); body += `<rect x="${ax + 12 + i * ((waveW - 24) / 76)}" y="${ay + 63 - ht / 2}" width="4" height="${ht}" rx="2" fill="${i < 38 ? theme.accent : "#cbd2dc"}" opacity="${i < 38 ? .9 : .72}"/>`; }
    body += pill(ax, ay + 126, config.items[0], theme, 148);
    body += pill(ax + 166, ay + 126, config.items[1], theme, 148);
  } else {
    const gx = contentX + 28, gy = lowerY + 72, graphW = mainW - 56, graphH = lowerH - 98;
    for (let i = 0; i < 4; i++) body += `<path d="M${gx} ${gy + i * graphH / 4}H${gx + graphW}" stroke="#edf0f4" stroke-width="2"/>`;
    const count = 12, barGap = 9, barW = (graphW - barGap * (count - 1)) / count;
    for (let i = 0; i < count; i++) {
      const barH = graphH * (0.25 + ((i * 17 + 9) % 53) / 100);
      body += rect(gx + i * (barW + barGap), gy + graphH - barH, barW, barH, i > 8 ? `${theme.accent}70` : `${theme.accent}35`, 5);
    }
  }
  body += rect(contentX + mainW + 16, lowerY, sideW, lowerH, "#ffffff", 16, 'stroke="#e9edf3"');
  body += text(contentX + mainW + 34, lowerY + 31, variant === "permissions" ? "Access by role" : "Included in this view", 15, "#202b40", 730);
  const sideItems = config.items.slice(0, Math.min(4, config.items.length));
  sideItems.forEach((item, i) => {
    const yy = lowerY + 66 + i * Math.min(54, (lowerH - 82) / sideItems.length);
    body += rect(contentX + mainW + 32, yy - 17, 27, 27, `${theme.accent}18`, 8);
    body += `<path d="M${contentX + mainW + 40} ${yy - 3}h11" stroke="${theme.accent}" stroke-width="3" stroke-linecap="round"/>`;
    body += text(contentX + mainW + 68, yy + 2, item, 13, "#354158", 650);
    if (i < sideItems.length - 1) body += `<path d="M${contentX + mainW + 32} ${yy + 17}H${outerX + outerW - 28}" stroke="#eff1f5"/>`;
  });
  return svgFrame(w, h, theme, body, config.title);
}

function drawPhone(w, h, theme, config, brand, cover = false) {
  const H = Math.round((1200 * h) / w);
  const phoneH = Math.min(H - 120, 1800);
  const phoneW = Math.min(1040, phoneH * 0.52);
  const x = (1200 - phoneW) / 2, y = (H - phoneH) / 2;
  let body = `${rect(x - 11, y - 11, phoneW + 22, phoneH + 22, "#070a10", 58, 'filter="url(#shadow)" stroke="#738198" stroke-opacity=".45" stroke-width="3"')}${rect(x, y, phoneW, phoneH, "#fbfcff", 48)}${rect(x + phoneW * .36, y + 12, phoneW * .28, 18, "#10141a", 9)}`;
  body += text(x + 35, y + 46, "9:41", 16, "#182036", 700);
  body += text(x + 34, y + 98, brand, 19, theme.accent, 750);
  body += text(x + 34, y + 150, config.title, 27, "#1b2338", 760);
  body += text(x + 34, y + 179, config.subtitle, 14, "#768197", 500);
  body += rect(x + 28, y + 208, phoneW - 56, 72, `${theme.accent}12`, 16);
  body += text(x + 46, y + 240, config.items[0], 15, "#27324a", 720);
  body += text(x + 46, y + 261, config.items[1] || "Workspace tools", 12, "#69758c", 550);
  const itemY = y + 303;
  const cardH = Math.min(124, (phoneH - 435) / Math.max(config.items.length, 1));
  config.items.forEach((item, i) => {
    const cy = itemY + i * (cardH + 12);
    if (cy + cardH > y + phoneH - 90) return;
    body += rect(x + 28, cy, phoneW - 56, cardH, "#ffffff", 15, 'stroke="#e9edf3"');
    body += rect(x + 44, cy + 17, 35, 35, `${theme.accent}18`, 11);
    body += `<path d="M${x + 53} ${cy + 35}h17m-8-8v16" stroke="${theme.accent}" stroke-width="2.5" stroke-linecap="round"/>`;
    body += text(x + 93, cy + 35, item, 14, "#2b3650", 700);
    body += rect(x + 93, cy + 49, phoneW - 150, 5, "#edf0f5", 3);
    body += rect(x + 93, cy + 49, (phoneW - 150) * (0.53 + i * .12), 5, theme.accent, 3);
    if (cardH > 78) body += text(x + 93, cy + 79, i === 0 ? "Open workspace" : "Review details", 11, "#7b8699", 500);
  });
  const buttonY = y + phoneH - 91;
  body += rect(x + 28, buttonY, phoneW - 56, 45, theme.accent, 13);
  body += text(x + phoneW / 2, buttonY + 28, config.items[0], 14, "#fff", 750, 'text-anchor="middle"');
  body += `<path d="M${x + phoneW * .36} ${y + phoneH - 20}H${x + phoneW * .64}" stroke="#121722" stroke-width="5" stroke-linecap="round"/>`;
  if (cover && H < 1100) {
    const sideCards = [[54, H * .30, config.items[1] || "Private inbox"], [894, H * .63, config.items[2] || "Privacy controls"]];
    for (const [cx, cy, label] of sideCards) {
      body += rect(cx, cy, 252, 76, "#ffffff", 14, 'filter="url(#shadow)"');
      body += rect(cx + 14, cy + 16, 34, 34, `${theme.accent}18`, 10);
      body += `<path d="M${cx + 22} ${cy + 33}h18" stroke="${theme.accent}" stroke-width="3" stroke-linecap="round"/>`;
      body += text(cx + 58, cy + 34, label, 13, "#27324a", 720);
      body += rect(cx + 58, cy + 47, 152, 4, "#e8ebf2", 2);
    }
  }
  return svgFrame(w, h, theme, body, config.title);
}

function drawOnboarding(w, h, theme, config, brand) {
  const H = Math.round((1200 * h) / w);
  const panelY = Math.max(90, H * .19), panelH = Math.min(480, H * .58), panelW = 325, gap = 28;
  const total = panelW * 3 + gap * 2, start = (1200 - total) / 2;
  let body = text(600, panelY - 30, config.title, 31, "#fff", 760, 'text-anchor="middle"');
  body += text(600, panelY + 2, config.subtitle, 15, "#c4cce1", 500, 'text-anchor="middle"');
  config.items.forEach((item, i) => {
    const x = start + i * (panelW + gap), y = panelY + 42;
    body += `${rect(x, y, panelW, panelH, "#fbfcff", 22, 'filter="url(#shadow)"')}${rect(x, y, panelW, 48, "#f0efff", 22)}${rect(x, y + 26, panelW, 22, "#f0efff", 0)}`;
    body += text(x + 22, y + 31, brand, 14, theme.accent, 760);
    body += text(x + 22, y + 93, item, 21, "#222d43", 750);
    body += text(x + 22, y + 121, i === 0 ? "A clear first step" : i === 1 ? "Secure account access" : "Verified account setup", 13, "#758096", 500);
    body += rect(x + 22, y + 151, panelW - 44, 40, "#f5f6fa", 9, 'stroke="#e5e8ef"');
    body += text(x + 38, y + 177, i === 0 ? "Explore the student community" : i === 1 ? "Email and password" : "Check your inbox", 12, "#8791a3", 500);
    body += rect(x + 22, y + 211, panelW - 44, 40, theme.accent, 10);
    body += text(x + panelW / 2, y + 237, item, 13, "#fff", 730, 'text-anchor="middle"');
    body += pill(x + 22, y + panelH - 28, `0${i + 1} / 03`, theme, 82);
  });
  return svgFrame(w, h, theme, body, config.title);
}

function drawShowcase(w, h, theme, config, brand, nav) {
  const H = Math.round((1200 * h) / w);
  const desktopConfig = { ...config, items: config.items.slice(0, 3) };
  let body = drawDashboard(w, h, theme, desktopConfig, brand, nav, "dashboard").replace(/^.*?<svg[^>]*>/s, "").replace(/<\/svg>\s*$/s, "");
  const phoneW = 320, phoneH = Math.min(H * .78, 700), x = 815, y = H - phoneH - 50;
  body += `${rect(x - 10, y - 10, phoneW + 20, phoneH + 20, "#080b11", 38, 'filter="url(#shadow)" stroke="#8994a6" stroke-opacity=".55"')}${rect(x, y, phoneW, phoneH, "#fbfcff", 30)}${rect(x + 105, y + 10, 110, 13, "#10141a", 7)}`;
  body += text(x + 22, y + 54, brand, 13, theme.accent, 700);
  body += text(x + 22, y + 91, config.items[0], 19, "#212b41", 750);
  config.items.slice(1).forEach((item, i) => {
    const yy = y + 119 + i * 72;
    body += rect(x + 18, yy, phoneW - 36, 56, `${theme.accent}12`, 12);
    body += text(x + 32, yy + 24, item, 13, "#303b53", 700);
    body += rect(x + 32, yy + 35, phoneW - 74, 4, "#e7eaf0", 2);
    body += rect(x + 32, yy + 35, (phoneW - 74) * .64, 4, theme.accent, 2);
  });
  body += `<path d="M${x + 105} ${y + phoneH - 17}H${x + 215}" stroke="#151a23" stroke-width="4" stroke-linecap="round"/>`;
  return svgFrame(w, h, theme, body, config.title);
}

function drawGeneric(w, h, theme, config, brand, nav, kind) {
  if (kind === "onboarding") return drawOnboarding(w, h, theme, config, brand);
  if (kind === "mobile-showcase") return drawPhone(w, h, theme, config, brand, true);
  if (["mobile", "assistant", "camera", "generate", "edit", "voice", "field", "gallery"].includes(kind)) return drawPhone(w, h, theme, config, brand, false);
  return drawDashboard(w, h, theme, config, brand, nav, kind);
}

const casesDir = path.join(root, "public/work/case-visuals");
await mkdir(casesDir, { recursive: true });

const starts = [...source.matchAll(/^  "?([a-z0-9-]+)"?: \{$/gm)].filter((entry) => cases[entry[1]]);
let updatedCaseDetails = source;
for (let i = 0; i < starts.length; i++) {
  const slug = starts[i][1];
  const c = cases[slug];
  if (!c) continue;
  const blockStart = starts[i].index;
  const blockEnd = starts[i + 1]?.index ?? source.length;
  const block = source.slice(blockStart, blockEnd);
  const hero = block.match(/hero:\s*\{\s*src:\s*"[^"]+",\s*w:\s*(\d+),\s*h:\s*(\d+)/);
  const heroW = Number(hero?.[1] || 1536), heroH = Number(hero?.[2] || 1024);
  const theme = c;
  const cover = drawGeneric(heroW, heroH, theme, c.cover, c.brand, c.nav, c.cover.kind);
  const caseDir = path.join(casesDir, slug);
  await mkdir(caseDir, { recursive: true });
  await writeFile(path.join(caseDir, "cover.svg"), cover, "utf8");
  const oldHero = slug === "audio-mixing-mastering" ? "/work/case-covers/audio-mixing-mastering.png" : `/work/${slug}/hero.png`;
  updatedCaseDetails = updatedCaseDetails.replace(`src: "${oldHero}"`, `src: "/work/case-visuals/${slug}/cover.svg"`);
  const heroAlt = block.match(/hero:\s*\{[^}]*?alt:\s*"([^"]+)"/)?.[1];
  if (heroAlt) updatedCaseDetails = updatedCaseDetails.replace(`alt: "${heroAlt}"`, `alt: "${c.brand} interface for ${c.cover.title}"`);

  for (const match of block.matchAll(/shot:\s*\{\s*src:\s*"([^"]+)",\s*w:\s*(\d+),\s*h:\s*(\d+)/g)) {
    const oldPath = match[1];
    const w = Number(match[2]), h = Number(match[3]);
    let key = path.basename(oldPath, path.extname(oldPath));
    if (oldPath.endsWith("audio-mixing-mastering-services.png")) key = "services";
    const feature = c.features[key];
    if (!feature) throw new Error(`Missing feature config: ${slug}/${key} (${oldPath})`);
    const svg = drawGeneric(w, h, theme, feature, c.brand, c.nav, feature.kind);
    await writeFile(path.join(caseDir, `${key}.svg`), svg, "utf8");
    updatedCaseDetails = updatedCaseDetails.replace(`src: "${oldPath}"`, `src: "/work/case-visuals/${slug}/${key}.svg"`);
    const shotEnd = block.indexOf("}", match.index);
    const oldAlt = block.slice(match.index, shotEnd).match(/alt:\s*"([^"]+)"/)?.[1];
    if (oldAlt) updatedCaseDetails = updatedCaseDetails.replace(`alt: "${oldAlt}"`, `alt: "${feature.title} interface"`);
  }
}

await writeFile(caseDetailsPath, updatedCaseDetails, "utf8");
const dataPath = path.join(root, "src/lib/data.ts");
let dataSource = await readFile(dataPath, "utf8");
dataSource = dataSource.replaceAll(/\/work\/case-covers\/([a-z0-9-]+)\.png/g, (_match, slug) => `/work/case-visuals/${slug}/cover.svg`);
await writeFile(dataPath, dataSource, "utf8");

console.log("Generated eight case covers and all configured case-study feature visuals.");
