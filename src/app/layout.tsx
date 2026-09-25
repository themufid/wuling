import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { concept } from "@/data/content";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: concept.title,
  description: concept.description,
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Wuling Electric Experience",
  description: concept.description,
  creator: {
    "@type": "Organization",
    name: "HINAI Tech",
    url: concept.hinai,
  },
  about: "Independent website redesign concept for Wuling Motors Indonesia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
