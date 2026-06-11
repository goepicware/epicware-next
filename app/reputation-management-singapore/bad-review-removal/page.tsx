import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Bad Review Removal Singapore — Remove Fake & Unfair Google Reviews | Epicware",
  description:
    "Remove fake, malicious, or policy-violating Google reviews. $200 per review, pay only on success. Singapore's only guaranteed bad review removal service.",
  alternates: { canonical: "https://www.epicware.ai/reputation-management-singapore/bad-review-removal" },
  openGraph: {
    title: "Bad Review Removal Singapore | Epicware",
    description: "Remove fake, malicious, or policy-violating Google reviews. $200/review, pay on success.",
    url: "https://www.epicware.ai/reputation-management-singapore/bad-review-removal",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bad Review Removal Singapore",
  serviceType: "Bad Review Removal",
  description: "Remove fake, malicious, or policy-violating Google reviews. $200 per review, pay on success only.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/reputation-management-singapore/bad-review-removal",
};

export default function BadReviewRemovalPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="BAD REVIEW REMOVAL · REPUTATION"
      h1="Bad Review Removal Singapore — Remove Reviews That Shouldn't Be There"
      subtitle="Not every negative review deserves to stay on your profile. Fake reviews, competitor attacks, and policy-violating content can be removed. Epicware handles the process end-to-end — $200 per review, pay only on success."
      trustSignals={["$200/Review · Pay on Success", "Singapore-Built", "Removal Within 24 Hours", "Policy-Based Removal"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="One fake review from a competitor or a disgruntled non-customer can drop your Google rating below 4.0 and cost you thousands in lost business. Most SMB owners try the flag button, get a generic rejection, and give up. Epicware doesn't give up."
      whenTitle="When a Review Qualifies for Removal"
      whenContent={
        <div className="space-y-4">
          <p>
            A review qualifies for removal when it violates Google&apos;s content policies. This includes reviews from
            non-customers (competitors, bots, ex-employees), reviews containing false factual claims, reviews with
            offensive or threatening language, and reviews that name someone who was never a customer.
          </p>
          <p>
            It does NOT include reviews from genuine customers who had a bad experience — even if you disagree with
            their assessment. Epicware&apos;s free assessment step identifies exactly which of your reviews are
            removable and which are not, so you don&apos;t spend $200 on a case that will fail.
          </p>
        </div>
      }
      howTitle="How Epicware Removes Bad Reviews"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware identifies the specific content policy the review violates, submits a formal removal request
            through Google&apos;s channels with the correct legal and procedural framing, and escalates if the first
            request is rejected. The process typically initiates within 24 hours and resolves within 7–21 days.
          </p>
          <p>
            You pay $200 only when the review is successfully removed. If Google issues a final rejection after all
            escalation paths are exhausted, you pay nothing.
          </p>
        </div>
      }
      pricingContent={
        <p>
          <strong>$200 per review, pay on success only.</strong> No upfront fees. No retainer. You pay only when the
          review is removed. For businesses with multiple reviews to challenge, each review is assessed individually.
          See platform pricing at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
        </p>
      }
      parentHref="/reputation-management-singapore"
      parentLabel="Reputation Management Singapore"
      parentSentence={
        <>
          This is part of Epicware&apos;s{" "}
          <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
            Reputation Management Singapore
          </Link>{" "}
          suite. See also the full{" "}
          <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
            Bad Review Removal Singapore
          </Link>{" "}
          service page for the complete details.
        </>
      }
    />
  );
}
