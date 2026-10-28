import type { Metadata } from "next";
import Link from "next/link";
import ComparisonPage from "@/components/content/ComparisonPage";

export const metadata: Metadata = {
  title: "Epicware vs Yext — Local SEO & Listings Comparison",
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
  { feature: "Bad review removal", epicware: "$200/review, refunded if not removed in 3 months", competitor: false },
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
      epicwareSummary={
        <>
          Epicware focuses on the channels that matter for Singapore SMBs — primarily{" "}
          <Link href="/locations/singapore/google-business-profile">Google Maps and GBP</Link>. Review generation, bad review removal, rank tracking, and GBP optimisation are all built specifically for Singapore&apos;s market dynamics. Yext sells software; Epicware is an{" "}
          <Link href="/">AI marketing agency in Singapore</Link> that runs your listings, reviews and rankings.
        </>
      }
      competitorSummary="Yext is an enterprise listings management platform that synchronises business data across hundreds of global directories. It's designed for large brands managing hundreds of locations across multiple countries. Its strength is breadth of directory coverage, not deep optimisation of any single channel."
      features={features}
      verdict={
        <p>Yext is the right tool for enterprise brands managing hundreds of locations across global directories. For Singapore SMBs, Epicware delivers better results on the channel that matters most: Google Maps. See <a href="/locations/singapore/local-seo">local SEO services</a> or <a href="/book-demo#form">book a free demo</a>.</p>
      }
      faqHeading="Common questions about Epicware vs Yext"
      faqs={[
        {
          q: "What is the main difference between Epicware and Yext for Singapore SMBs?",
          a: "Yext is an enterprise listings platform designed for large brands managing hundreds of locations across global directories. It optimises for breadth — syncing business data worldwide. Epicware optimises for depth — focusing on Google Maps, which drives 90%+ of local search in Singapore, with review generation, bad review removal, and hyperlocal rank tracking as core features.",
        },
        {
          q: "Is Yext designed for small businesses in Singapore?",
          a: "No. Yext is designed for enterprise customers — its pricing and onboarding complexity are enterprise-scale. For a Singapore SMB managing 1–5 locations, Yext's enterprise tooling and USD pricing is disproportionate to the need. Epicware is built for Singapore SMBs, starting at $299/month in SGD with no setup fees.",
        },
        {
          q: "Does Yext offer bad review removal for Google reviews in Singapore?",
          a: "No. Yext's focus is syncing and managing listing data across directories. It does not offer bad review removal. Epicware's Bad Review Removal service handles policy-violating Google reviews at $200/review, charged upfront and refunded in full if the review isn't removed within 3 months.",
        },
        {
          q: "Does Yext support Singapore-specific directories and citations?",
          a: "Yext's directory network is primarily US and global. Singapore-specific local business directories are less comprehensively covered. Epicware's citation building focuses on Singapore's relevant business directories and NAP consistency signals that affect Google Maps rank specifically in Singapore.",
        },
      ]}
    />
  );
}
