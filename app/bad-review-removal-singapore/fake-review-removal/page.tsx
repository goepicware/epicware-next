import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Fake Review Removal Singapore — Remove Bot Reviews | Epicware",
  description:
    "Remove fake Google reviews posted by competitors, bots, or non-customers. $200 per review, pay on success. Singapore's only guaranteed removal service.",
  alternates: { canonical: "https://www.epicware.ai/bad-review-removal-singapore/fake-review-removal" },
  openGraph: {
    title: "Fake Review Removal Singapore | Epicware",
    description: "Remove fake Google reviews posted by competitors, bots, or non-customers. $200, pay on success.",
    url: "https://www.epicware.ai/bad-review-removal-singapore/fake-review-removal",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fake Review Removal Singapore",
  serviceType: "Fake Review Removal",
  description: "Remove fake Google reviews from competitors, bots, or non-customers. $200 per review, pay on success only.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/bad-review-removal-singapore/fake-review-removal",
};

export default function FakeReviewRemovalPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="FAKE REVIEW REMOVAL · SINGAPORE"
      h1="Fake Review Removal Singapore — Remove Reviews Posted by Non-Customers"
      subtitle="Competitor-posted reviews, bot reviews, and reviews from people who have never visited your business are removable under Google's content policies. Epicware identifies and removes them. $200 per review, pay on success."
      trustSignals={["$200/Review · Pay on Success", "Competitor Attack Removal", "Singapore-Built", "24-Hour Initiation"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Fake reviews are a real problem for Singapore businesses competing in dense local categories. A competitor can post a fake 1-star review on a Friday night, and by Monday it is visible to every potential customer in your district. Epicware identifies, documents, and removes them."
      whenTitle="How to Identify a Fake Review"
      whenContent={
        <div className="space-y-4">
          <p>
            Fake reviews are posted by people who have never had a genuine customer relationship with your business.
            Common patterns: reviewer has 1–2 reviews on their Google profile and both are for businesses in the same
            area (competitor-linked accounts), reviewer posted the review within hours of another bad review
            (coordinated attack), review references services or products your business doesn&apos;t offer, or the
            review mentions staff by name but no transaction record exists.
          </p>
          <p>
            In Singapore, competitor-posted fake reviews are most common in F&amp;B, clinics, salons, and tuition
            sectors where businesses compete for the same local customers.
          </p>
        </div>
      }
      howTitle="How Epicware Removes Fake Reviews"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware reviews the suspicious review, collects evidence of the policy violation (reviewer profile
            history, lack of business relationship, content that violates Google&apos;s guidelines), and submits a
            formal removal request with the correct violation framing.
          </p>
          <p>
            For coordinated fake review attacks (multiple fake reviews posted within a short window), Epicware
            submits batch removal requests and escalates through Google&apos;s business channels. If Google rejects
            the first request, we escalate with additional evidence. You pay $200 per review removed — nothing if
            the review stays.
          </p>
        </div>
      }
      pricingContent={
        <p>
          <strong>$200 per fake review removed, pay on success only.</strong> No upfront fees. No retainer. You pay
          only when the review is gone. See full platform pricing at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
        </p>
      }
      parentHref="/bad-review-removal-singapore"
      parentLabel="Bad Review Removal Singapore"
      parentSentence={
        <>
          Fake Review Removal is part of Epicware&apos;s{" "}
          <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
            Bad Review Removal Singapore
          </Link>{" "}
          service. See also{" "}
          <Link href="/review-management-singapore" className="text-primary font-medium hover:underline">
            Review Management Singapore
          </Link>{" "}
          for ongoing monitoring.
        </>
      }
    />
  );
}
