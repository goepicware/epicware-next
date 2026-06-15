import type { Metadata } from "next";
import ComparisonPage from "@/components/content/ComparisonPage";

export const metadata: Metadata = {
  title: "Epicware vs Yext — Singapore Local SEO & Listings Management | Epicware",
  description: "Compare Epicware and Yext for Singapore SMBs. Listing management, review management, and pricing model compared.",
  alternates: { canonical: "https://www.epicware.ai/comparison/epicware-vs-yext" },
  openGraph: {
    title: "Epicware vs Yext — Singapore Local SEO & Listings Management",
    description: "Compare Epicware and Yext for Singapore SMBs. Listing management, review management, and pricing model compared.",
    url: "https://www.epicware.ai/comparison/epicware-vs-yext",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Epicware vs Yext — Singapore Local SEO & Listings Management",
  "description": "Compare Epicware and Yext for Singapore SMBs. Listing management, review management, and pricing model compared.",
  "datePublished": "2026-06-01",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/comparison/epicware-vs-yext"
};

const features = [
  { feature: "Built for Singapore market", epicware: true, competitor: false },
  { feature: "Target customer", epicware: "Singapore SMBs", competitor: "Enterprise / large brands" },
  { feature: "Listings management", epicware: "Google-focused", competitor: "Broad global directories" },
  { feature: "WhatsApp review requests", epicware: true, competitor: false },
  { feature: "Automated review generation", epicware: true, competitor: "Limited" },
  { feature: "Bad review removal", epicware: "$200/review, pay on success", competitor: false },
  { feature: "GBP hyperlocal rank tracking", epicware: true, competitor: "Basic" },
  { feature: "AI review response", epicware: true, competitor: true },
  { feature: "Pricing model", epicware: "SMB-accessible, SGD", competitor: "Enterprise pricing, USD" },
  { feature: "Singapore local support", epicware: true, competitor: false },
  { feature: "Implementation complexity", epicware: "Low (self-serve)", competitor: "High (enterprise onboarding)" },
];

export default function Page() {
  return (
    <ComparisonPage
      schema={schema}
      badge="COMPARISON · LISTINGS & LOCAL SEO"
      h1="Epicware vs Yext — Which Is Right for Singapore SMBs?"
      subtitle="A feature comparison of Epicware and Yext for Singapore businesses managing local search presence and reputation."
      trustSignals={["SMB vs Enterprise", "Singapore-First", "Google-Focused", "Bad Review Removal"]}
      competitorName="Yext"
      epicwareSummary="Epicware focuses on the channels that matter for Singapore SMBs — primarily Google Maps and GBP. Review generation, bad review removal, rank tracking, and GBP optimisation are all built specifically for Singapore's market dynamics."
      competitorSummary="Yext is an enterprise listings management platform that synchronises business data across hundreds of global directories. It's designed for large brands managing hundreds of locations across multiple countries. Its strength is breadth of directory coverage, not deep optimisation of any single channel."
      features={features}
      verdict={
        <p>Yext is the right tool for enterprise brands managing hundreds of locations across global directories. For Singapore SMBs, Epicware delivers better results on the channel that matters most: Google Maps. See <a href="/local-seo-singapore">local SEO Singapore</a> or <a href="/book-demo">book a free demo</a>.</p>
      }
    />
  );
}
