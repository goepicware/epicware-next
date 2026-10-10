import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Free SEO & Google Business Profile Audit | Epicware" },
  description:
    "Get a free audit of your Google rankings, Google Business Profile, reviews and AI search visibility. See your biggest gaps and quick wins. No signup.",
  alternates: { canonical: "https://www.epicware.ai/free-audit" },
  openGraph: {
    title: "Free SEO & Google Business Profile Audit | Epicware",
    description:
      "Get a free audit of your Google rankings, Google Business Profile, reviews and AI search visibility. See your biggest gaps and quick wins. No signup.",
    url: "https://www.epicware.ai/free-audit",
  },
  robots: { index: true, follow: true },
};

// Standalone layout — no global header, footer, or chat widget
export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
