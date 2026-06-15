import type { Metadata } from "next";
import ComparisonPage from "@/components/content/ComparisonPage";

export const metadata: Metadata = {
  title: "Epicware vs Birdeye — Singapore Local SEO Platform | Epicware",
  description: "Compare Epicware and Birdeye for Singapore SMBs. Platform origin, pricing model, bad review removal, and Singapore-specific local SEO features compared.",
  alternates: { canonical: "https://www.epicware.ai/comparison/epicware-vs-birdeye" },
  openGraph: {
    title: "Epicware vs Birdeye — Singapore Local SEO & Reputation Management",
    description: "Compare Epicware and Birdeye for Singapore SMBs. Platform origin, pricing model, bad review removal, and Singapore-specific local SEO features compared.",
    url: "https://www.epicware.ai/comparison/epicware-vs-birdeye",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Epicware vs Birdeye — Singapore Local SEO & Reputation Management",
  "description": "Compare Epicware and Birdeye for Singapore SMBs. Platform origin, pricing model, bad review removal, and Singapore-specific local SEO features compared.",
  "datePublished": "2026-06-01",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/comparison/epicware-vs-birdeye"
};

const features = [
  { feature: "Built for Singapore market", epicware: true, competitor: false },
  { feature: "WhatsApp review requests", epicware: true, competitor: false },
  { feature: "SMS review requests", epicware: "Available", competitor: "Primary channel" },
  { feature: "Bad review removal service", epicware: "$200/review, pay on success", competitor: false },
  { feature: "GBP hyperlocal rank tracking", epicware: "Grid-level, per district", competitor: "Basic rank monitoring" },
  { feature: "AI review response", epicware: true, competitor: true },
  { feature: "Multi-outlet dashboard", epicware: true, competitor: true },
  { feature: "GBP 19-point audit", epicware: true, competitor: "Partial" },
  { feature: "Singapore pricing", epicware: "SGD pricing available", competitor: "USD pricing" },
  { feature: "Local support team", epicware: "Singapore-based", competitor: "US-based" },
  { feature: "Social media management", epicware: "EpicSocial (add-on)", competitor: true },
];

export default function Page() {
  return (
    <ComparisonPage
      schema={schema}
      badge="COMPARISON · REPUTATION PLATFORMS"
      h1="Epicware vs Birdeye — Which Is Better for Singapore SMBs?"
      subtitle="A feature-by-feature comparison of Epicware and Birdeye for Singapore businesses managing Google reviews, local SEO, and reputation."
      trustSignals={["WhatsApp vs SMS", "Bad Review Removal", "Singapore Market", "Hyperlocal Rank Tracking"]}
      competitorName="Birdeye"
      epicwareSummary="Epicware is built specifically for the Singapore and Southeast Asian market. WhatsApp is the primary review request channel (Singapore's dominant messaging platform), bad review removal is a first-class product, and GBP optimisation is calibrated for Singapore's hyperlocal geography."
      competitorSummary="Birdeye is a US-based reputation management platform with strong SMS and email review generation, AI responses, and broad CRM integrations. Primarily designed for the US market, with limited adaptation for Singapore-specific channels and local SEO requirements."
      features={features}
      verdict={
        <p>Birdeye is a capable platform for US businesses. For Singapore SMBs, Epicware&apos;s advantages are meaningful: WhatsApp is Singapore&apos;s dominant messaging channel (Birdeye uses SMS), bad review removal is productised (Birdeye doesn&apos;t offer it), and the GBP optimisation is built for Singapore&apos;s hyperlocal environment. See <a href="/pricing">pricing</a> or <a href="/book-demo#form">book a free demo</a>.</p>
      }
    />
  );
}
