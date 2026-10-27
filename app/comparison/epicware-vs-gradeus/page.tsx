import type { Metadata } from "next";
import Link from "next/link";
import ComparisonPage from "@/components/content/ComparisonPage";

export const metadata: Metadata = {
  title: "Epicware vs Grade.us — Review Management Comparison",
  description: "Compare Epicware and Grade.us for review management. Features, pricing, bad review removal, and Singapore market suitability compared.",
  alternates: { canonical: "https://www.epicware.ai/comparison/epicware-vs-gradeus" },
  openGraph: {
    title: "Epicware vs Grade.us — Review Management Platform Comparison",
    description: "Compare Epicware and Grade.us for review management. Features, pricing, bad review removal, and Singapore market suitability compared.",
    url: "https://www.epicware.ai/comparison/epicware-vs-gradeus",
  },
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
  { feature: "Bad review removal", epicware: "$200/review, refunded if not removed in 3 months", competitor: false },
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
      epicwareSummary={
        <>
          Epicware is a direct-to-SMB platform built for Singapore's market. WhatsApp review campaigns,{" "}
          <Link href="/locations/singapore/review-removal">bad review removal</Link>, hyperlocal rank tracking, and{" "}
          <Link href="/locations/singapore/google-business-profile">GBP optimisation</Link> are all included. Epicware's own team does the work, as an{" "}
          <Link href="/">AI-powered digital marketing agency in Singapore</Link> with its own review software.
        </>
      }
      competitorSummary="Grade.us is a white-label review management platform primarily used by agencies to manage clients' review programs. Individual businesses typically access Grade.us's capabilities through an agency that has purchased the platform and resells access — adding a layer between the business and the tool."
      features={features}
      verdict={
        <p>Grade.us is a capable review platform but its agency-first model means Singapore SMBs pay an intermediary. Epicware gives direct access to the same capabilities plus bad review removal and Singapore-specific GBP optimisation — without the agency layer. See <a href="/pricing">pricing</a> or <a href="/book-demo#form">book a free demo</a>.</p>
      }
      faqHeading="Common questions about Epicware vs Grade.us"
      faqs={[
        {
          q: "What is the main difference between Epicware and Grade.us for Singapore businesses?",
          a: "Grade.us is a white-label review platform sold primarily through agencies — Singapore SMBs typically access it via an agency intermediary who adds their own margin. Epicware is a direct-to-business platform: connect your Google Business Profile, and the platform runs review campaigns, GBP optimisation, and bad review removal without an agency layer.",
        },
        {
          q: "Does Grade.us offer bad review removal?",
          a: "No. Grade.us does not offer bad review removal. Epicware's service identifies policy-violating Google reviews, submits formal removal requests, and escalates through Google's support channels — at $200/review, charged upfront and refunded in full if the review isn't removed within 3 months.",
        },
        {
          q: "Does Grade.us work with WhatsApp for review requests in Singapore?",
          a: "No. Grade.us uses SMS and email for review requests. In Singapore, WhatsApp is the dominant messaging channel, with significantly higher open and conversion rates than SMS. Epicware uses WhatsApp as its primary review request channel.",
        },
        {
          q: "Does Grade.us include GBP rank tracking or GBP optimisation?",
          a: (
            <>
              No. Grade.us is focused on review management and does not include GBP hyperlocal rank tracking or a 19-point GBP audit and optimisation service. Epicware includes EpicMap for district-level rank tracking across Singapore and a 19-point GBP audit as part of the platform. Our reports pair{" "}
              <Link href="/services/local-seo/rank-tracking">local rank tracking</Link> with review data.
            </>
          ),
        },
      ]}
    />
  );
}
