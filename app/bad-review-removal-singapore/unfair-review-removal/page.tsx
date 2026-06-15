import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Unfair Review Removal Singapore — Malicious Reviews | Epicware",
  description:
    "Challenge ex-employee attacks, dispute-motivated 1-star reviews, and reviews with false factual claims. $200 per review, pay on success.",
  alternates: { canonical: "https://www.epicware.ai/bad-review-removal-singapore/unfair-review-removal" },
  openGraph: {
    title: "Unfair Review Removal Singapore | Epicware",
    description: "Challenge ex-employee attacks and reviews containing false factual claims. $200, pay on success.",
    url: "https://www.epicware.ai/bad-review-removal-singapore/unfair-review-removal",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Unfair Review Removal Singapore",
  serviceType: "Unfair Review Removal",
  description: "Remove malicious, misleading, and unfair Google reviews. $200 per review, pay on success only.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/bad-review-removal-singapore/unfair-review-removal",
};

export default function UnfairReviewRemovalPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="UNFAIR REVIEW REMOVAL · SINGAPORE"
      h1="Unfair Review Removal Singapore — Fight Reviews That Misrepresent Your Business"
      subtitle="Ex-employee attacks, dispute-motivated 1-star reviews, and reviews containing false factual claims can be challenged. Epicware identifies the policy violation and submits the removal. $200 per review, pay on success."
      trustSignals={["$200/Review · Pay on Success", "False Claim Removal", "Singapore-Built", "Ex-Employee Reviews"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Not every unfair review is removable. But several categories do violate Google's content policies — and those can be challenged. Epicware identifies whether your specific review qualifies before any work begins."
      whenTitle="Which Unfair Reviews Are Removable"
      whenContent={
        <div className="space-y-4">
          <p>
            Not every unfair review is removable. A genuine customer who had a bad experience is entitled to their
            opinion — even if you disagree with their assessment. However, several categories of unfair reviews do
            violate Google&apos;s content policies: reviews posted by ex-employees with an ulterior motive (Google
            prohibits reviews from people with a conflict of interest), reviews containing false factual claims
            (stating your business did something it provably did not do), and reviews that target the business
            personally with threats or harassment rather than describing a service experience.
          </p>
        </div>
      }
      howTitle="How Epicware Removes Unfair Reviews"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware assesses the review against Google&apos;s content policies to identify the specific violation.
            For ex-employee reviews, we document the conflict of interest and submit accordingly. For reviews
            containing false claims, we provide evidence disproving the claim (records, receipts, camera footage if
            available) as part of the submission.
          </p>
          <p>
            The formal removal request is filed through Google&apos;s correct channels with the specific policy
            citation. If rejected, we escalate through business support and re-submit with additional evidence.
            $200 if removed, zero if not.
          </p>
        </div>
      }
      pricingContent={
        <p>
          <strong>$200 per unfair review removed, pay on success only.</strong> No upfront fees. See full pricing at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
        </p>
      }
      parentHref="/bad-review-removal-singapore"
      parentLabel="Bad Review Removal Singapore"
      parentSentence={
        <>
          Unfair Review Removal is part of Epicware&apos;s{" "}
          <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
            Bad Review Removal Singapore
          </Link>{" "}
          service.
        </>
      }
    />
  );
}
