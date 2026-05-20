import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Epicware — AI-Powered Growth Platform for Local Businesses",
    template: "%s | Epicware",
  },
  description:
    "Epicware helps local businesses in Singapore rank higher on Google Maps, get more reviews, and grow with AI-powered SEO services and software.",
  metadataBase: new URL("https://www.epicware.ai"),
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.epicware.ai",
    siteName: "Epicware",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
