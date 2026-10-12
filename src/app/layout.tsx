import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  axes: ["wdth"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Knowhere Systems — IT Services & Software",
    template: "%s — Knowhere Systems",
  },
  description:
    "Knowhere Systems builds web apps, mobile apps, UI/UX, cloud systems and AI products, with cybersecurity, data analytics, QA and consulting services.",
  metadataBase: new URL("https://knowheresystems.com"),
  openGraph: {
    title: "Knowhere Systems — IT Services & Software",
    description:
      "Web, mobile, cloud, AI, security and consulting services from Knowhere Systems.",
    type: "website",
  },
  icons: {
    icon: {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230D0E0A'/%3E%3Ccircle cx='16' cy='16' r='8.4' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
      type: "image/svg+xml",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0E0A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Knowhere Systems",
  description:
    "IT services company — web development, custom software, mobile apps, UI/UX, cloud & DevOps, cybersecurity, AI & automation, data analytics, QA testing and IT consulting.",
  email: "Info@knowheresystems.com",
  telephone: "",
  url: "https://knowheresystems.com",
};

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WWF4RLWF');`;

const clarityScript = `(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ywgvwzxnsg");`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
      </head>
      <body className="lock" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWF4RLWF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <script dangerouslySetInnerHTML={{ __html: clarityScript }} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
