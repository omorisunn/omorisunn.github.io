import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import AsciiField from "@/components/ascii-field";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { SITE } from "@/lib/site";
import { displayFont } from "./fonts";

import "./globals.css";

const themeScript = [
  "(function(){",
  "try{",
  "var saved=localStorage.getItem('theme');",
  "var theme=saved;",
  "if(saved!=='light'&&saved!=='dark'){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}",
  "document.documentElement.dataset.theme=theme;",
  "}catch(e){}",
  "})();",
].join("");

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: "%s — " + SITE.name,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.github }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    types: {
      "application/rss+xml": SITE.url + "/rss.xml",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0F" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={displayFont.variable} suppressHydrationWarning>
      <body id="top" className="site-body">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <AsciiField />
        <SiteHeader />
        <main id="content" className="site-main">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
