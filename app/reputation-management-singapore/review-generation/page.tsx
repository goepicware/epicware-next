import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Review Generation Singapore — Automated WhatsApp & Email Campaigns | Epicware",
  description:
    "Turn happy customers into Google reviews automatically. WhatsApp and email review request campaigns timed perfectly for Singapore SMBs.",
  alternates: { canonical: "https://www.epicware.ai/reputation-management-singapore/review-generation" },
  openGraph: {
    title: "Review Generation Singapore | Epicware",
    description: "Turn happy customers into Google reviews automatically with timed WhatsApp and email campaigns.",
    url: "https://www.epicware.ai/reputation-management-singapore/review-generation",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Review Generation Singapore",
  serviceType: "Review Generation",
  description: "Automated WhatsApp and email review request campaigns for Singapore SMBs.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/reputation-management-singapore/review-generation",
};

export default function ReviewGenerationPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="REVIEW GENERATION · SINGAPORE"
      h1="Review Generation Singapore — Turn Happy Customers Into Google Reviews"
      subtitle="Most Singapore SMBs collect reviews by accident. The ones with 200+ reviews got there by system. Epicware's automated WhatsApp and email campaigns ask at exactly the right moment."
      trustSignals={["WhatsApp + Email Campaigns", "Timing Optimised", "Singapore-Built", "No Agency Retainer"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Review count is a credibility signal. A business with 8 reviews and a 4.9 star rating does not feel as trustworthy as one with 150 reviews and a 4.6. Singapore customers judge volume alongside rating. Businesses that ask for reviews at the right moment convert far more often than those who ask days later or never ask at all."
      whenTitle="When You Need Review Generation"
      whenContent={
        <div className="space-y-4">
          <p>
            If your review count has been flat for more than 3 months, or if you are seeing customers choose a
            competitor with more reviews despite your better quality, you need a systematic approach to asking
            for reviews. Most businesses collect reviews by accident — a happy customer who remembered to leave one.
            That is not a strategy.
          </p>
          <p>
            Singapore customers judge volume alongside rating. A 4.9 with 11 reviews does not outperform a 4.5 with
            200 in the minds of most searchers. Volume signals credibility that a perfect rating alone cannot.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Review Generation"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware triggers review request campaigns automatically. After a visit, appointment, or order completion,
            the platform sends a personalised WhatsApp message or email to the customer with a direct Google review
            link. The message uses the customer&apos;s name and references the interaction.
          </p>
          <p>
            Timing is set per business type — a restaurant sends the request 30 minutes after the customer leaves;
            a clinic sends it the next morning. Multi-outlet businesses run campaigns across all locations
            simultaneously. Review request conversion rates typically run between 15–30% for WhatsApp and 8–15%
            for email when timed correctly.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Review Generation is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/reputation-management-singapore"
      parentLabel="Reputation Management Singapore"
      parentSentence={
        <>
          Review Generation is part of Epicware&apos;s{" "}
          <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
            Reputation Management Singapore
          </Link>{" "}
          suite.
        </>
      }
    />
  );
}
