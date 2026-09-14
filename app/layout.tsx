import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const display = Newsreader({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Gopika A K — Architecture Portfolio", template: "%s — Gopika A K" },
  description: "Architecture portfolio of Gopika A K, a Bachelor of Architecture student interested in conservation, materiality, adaptive reuse, sketching and visual storytelling.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body>
    </html>
  );
}
