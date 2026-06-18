import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Epicware — AI-Powered Growth Platform for Local Businesses",
    template: "%s | Epicware",
  },
  description:
    "Epicware helps local businesses in Singapore rank higher on Google Maps, get more reviews, and grow with AI-powered SEO services and software.",
  metadataBase: new URL("https://www.epicware.ai"),
  openGraph: { type: "website", locale: "en_SG", url: "https://www.epicware.ai", siteName: "Epicware" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preload LCP hero image with high priority so browser fetches it immediately */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fassets%2FHeroBanner.png&w=750&q=75"
          // @ts-expect-error fetchpriority is a valid HTML attribute not yet in React types
          fetchpriority="high"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <SpeedInsights />
      </body>
    </html>
  );
}
