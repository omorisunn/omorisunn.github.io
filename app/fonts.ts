import localFont from "next/font/local";

export const displayFont = localFont({
  src: "./fonts/bricolage-grotesque-600.woff2",
  weight: "600",
  style: "normal",
  display: "swap",
  variable: "--font-display",
});
