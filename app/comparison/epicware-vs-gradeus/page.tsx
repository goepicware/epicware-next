import type { Metadata } from "next";
import ComparisonPage from "@/components/content/ComparisonPage";

export const metadata: Metadata = {
  title: "Epicware vs Grade.us — Review Management Platform Comparison | Epicware",
  description: "Compare Epicware and Grade.us for review management. Features, pricing, bad review removal, and Singapore market suitability compared.",
  alternates: { canonical: "https://www.epicware.ai/comparison/epicware-vs-gradeus" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Epicware vs Grade.us — Review Management Platform Comparison",
  "description": "Compare Epicware and Grade.us for review management. Features, pricing, bad review removal, and Singapore market suitability compared.",
  "datePublished": "2026-06-01",
  "author": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://epicware.ai" },
  "url": "https://epicware.ai/comparison/epicware-vs-gradeus"
};

const features = [
  { feature: "Built for Singapore market", epicware: true, competitor: false },
  { feature: "Primary model", epicware: "Direct to SMB", competitor: "Agency / white-label" },
  { feature: "WhatsApp review requests", epicware: true, competitor: false },
  { feature: "SMS review requests", epicware: "Available", competitor: true },
  { feature: "Email review requests", epicware: true, competitor: true },
  { feature: "Bad review removal", epicware: "$200/review, pay on success", competitor: false },
  { feature: "GBP rank tracking", epicware: "Hyperlocal grid", competitor: false },
  { feature: "GBP optimisation", epicware: "19-point audit", competitor: false },
  { feature: "AI review response", epicware: true, competitor: "Basic" },
  { feature: "Multi-outlet dashboard", epicware: true, competitor: true },
  { feature: "White-label available", epicware: false, competitor: true },
  { feature: "Singapore pricing", epicware: "SGD, SMB-accessible", competitor: "USD, agency pricing" },
];

export default function Page() {
  return (
    <ComparisonPage
      schema={schema}
      badge="COMPARISON · REVIEW MANAGEMENT"
      h1="Epicware vs Grade.us — Review Management Compared"
      subtitle="A feature comparison of Epicware and Grade.us for Singapore businesses managing Google reviews and reputation."
      trustSignals={["Direct SMB vs Agency", "WhatsApp Campaigns", "Bad Review Removal", "Singapore-Built"]}
      competitorName="Grade.us"
      epicwareSummary="Epicware is a direct-to-SMB platform built for Singapore's market. WhatsApp review campaigns, bad review removal, hyperlocal rank tracking, and GBP optimisation are all included. No agency intermediary required."
      competitorSummary="Grade.us is a white-label review management platform primarily used by agencies to manage clients' review programs. Individual businesses typically access Grade.us's capabilities through an agency that has purchased the platform and resells access — adding a layer between the business and the tool."
      features={features}
      verdict={
        <p>Grade.us is a capable review platform but its agency-first model means Singapore SMBs pay an intermediary. Epicware gives direct access to the same capabilities plus bad review removal and Singapore-specific GBP optimisation — without the agency layer. See <a href="/pricing">pricing</a> or <a href="/book-demo">book a free demo</a>.</p>
      }
    />
  );
}
