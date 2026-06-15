import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Negative Review Response Singapore — Build Trust | Epicware",
  description:
    "Professional, AI-personalised responses to negative Google reviews. Show future customers you take service seriously — and convert readers who see your response.",
  alternates: { canonical: "https://www.epicware.ai/review-management-singapore/negative-review-response" },
  openGraph: {
    title: "Negative Review Response Singapore | Epicware",
    description: "Professional, AI-personalised responses to negative Google reviews.",
    url: "https://www.epicware.ai/review-management-singapore/negative-review-response",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Negative Review Response Singapore",
  serviceType: "Negative Review Response",
  description: "AI-personalised responses to negative Google reviews for Singapore SMBs.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/review-management-singapore/negative-review-response",
};

export default function NegativeReviewResponsePage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="NEGATIVE REVIEW RESPONSE · SINGAPORE"
      h1="Negative Review Response Singapore — Respond to Bad Reviews Professionally"
      subtitle="A professional response to a negative review can recover a customer and reassure every future reader. Most Singapore SMBs respond with copy-paste apologies. Epicware's AI writes responses that actually convert."
      trustSignals={["AI-Personalised Responses", "Brand-Consistent", "Singapore-Built", "Converts Reviewers"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Future customers read negative reviews before they decide whether to visit. What they judge is not just the negative review — they judge your response to it. A defensive or copy-paste response confirms the reviewer's complaint. A professional, empathetic response turns a liability into a trust signal."
      whenTitle="Why Negative Review Responses Matter"
      whenContent={
        <div className="space-y-4">
          <p>
            Businesses that respond to all reviews — including negative ones — convert better than businesses that
            only respond to positive ones. Future customers read the negative reviews first and judge you by your
            response. A thoughtful, professional response to a 1-star review can recover a customer and show every
            future reader that you take service seriously.
          </p>
          <p>
            The most common mistake: copy-pasting &ldquo;Sorry to hear that, please contact us&rdquo; to every
            negative review. This response signals that no one read the review, no one is addressing the issue, and
            the business is on autopilot.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Negative Review Response"
      howContent={
        <div className="space-y-4">
          <p>
            When a negative review arrives, Epicware&apos;s AI reads the content and drafts a personalised response
            that acknowledges the specific experience described, uses a professional but human tone, does not get
            defensive or dismissive, offers a resolution path where appropriate, and is ready to publish with one
            click.
          </p>
          <p>
            Brand voice settings keep the tone consistent across all responses and all outlets. For reviews that may
            qualify for removal (fake, malicious, or policy-violating), see{" "}
            <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
              Bad Review Removal Singapore
            </Link>
            .
          </p>
        </div>
      }
      pricingContent={
        <p>
          Negative Review Response is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/review-management-singapore"
      parentLabel="Review Management Singapore"
      parentSentence={
        <>
          Negative Review Response is part of Epicware&apos;s{" "}
          <Link href="/review-management-singapore" className="text-primary font-medium hover:underline">
            Review Management Singapore
          </Link>{" "}
          service.
        </>
      }
    />
  );
}
