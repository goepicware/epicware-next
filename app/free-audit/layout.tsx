import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Google Business Profile Audit | Epicware",
  description:
    "See exactly where your business ranks across Singapore — block by block. Free GBP audit with heatmap, competitor analysis, and AI visibility score.",
  alternates: { canonical: "https://www.epicware.ai/free-audit" },
  openGraph: {
    title: "Free Google Business Profile Audit | Epicware",
    description:
      "See exactly where your business ranks across Singapore — block by block. Free GBP audit with heatmap, competitor analysis, and AI visibility score.",
    url: "https://www.epicware.ai/free-audit",
  },
  robots: { index: true, follow: true },
};

// Standalone layout — no global header, footer, or chat widget
export default function FreeAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
