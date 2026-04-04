import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { InterestProvider } from "@/components/interest-provider";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Cura | Concierge Wellness and Modern Medical Care",
  description:
    "Cura is a premium concierge health and wellness brand offering medical weight loss, longevity care, concierge primary care, aesthetics, IV therapy, hormone support, and personalized wellness consultations."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <InterestProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </InterestProvider>
      </body>
    </html>
  );
}
