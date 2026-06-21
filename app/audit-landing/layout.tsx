import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Local SEO Audit Singapore | Epicware",
  description:
    "See exactly where your business ranks on Google Maps — block by block. Free EpicMap geogrid scan for Singapore SMBs. Claim yours in 30 seconds.",
  metadataBase: new URL("https://www.epicware.ai"),
  openGraph: {
    title: "Free Local SEO Audit Singapore | Epicware",
    description:
      "See exactly where your business ranks on Google Maps — block by block. Free EpicMap geogrid scan for Singapore SMBs. Claim yours in 30 seconds.",
    url: "https://www.epicware.ai/audit-landing",
    siteName: "Epicware",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

// Standalone layout — no global nav, footer, or chat widget
export default function AuditLandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
