import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Google Review Removal Policy — What Can Be Removed",
  description:
    "Which Singapore Google reviews can be removed under Google's content policies? Free assessment before any payment. $200 per review removed, pay on success.",
  alternates: { canonical: "https://www.epicware.ai/bad-review-removal-singapore/google-review-removal-policy" },
  openGraph: {
    title: "Google Review Removal Policy Singapore | Epicware",
    description: "Which reviews can be removed under Google's content policies? Free assessment first.",
    url: "https://www.epicware.ai/bad-review-removal-singapore/google-review-removal-policy",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Review Removal Policy Singapore",
  serviceType: "Google Review Removal",
  description: "Expert guidance on Google's review removal policy for Singapore businesses. Free assessment to identify removable reviews.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/bad-review-removal-singapore/google-review-removal-policy",
};

export default function GoogleReviewRemovalPolicyPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GOOGLE REVIEW POLICY · SINGAPORE"
      h1="Google Review Removal Policy — Which Singapore Reviews Can Be Challenged"
      subtitle="Google has specific content policies that determine which reviews can be removed. Understanding these policies is the difference between a successful removal and wasting time on one that will fail."
      trustSignals={["Policy Experts", "$200/Review Pay on Success", "Singapore-Built", "Free Assessment"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Most Singapore SMB owners who try to remove a bad review click the flag button, get a generic rejection, and assume nothing can be done. In most cases, the rejection happened because the request didn't cite the correct policy violation. Epicware knows which violation to cite — and how to document it correctly."
      whenTitle="Google's Content Policy — What Qualifies"
      whenContent={
        <div className="space-y-4">
          <p>
            Google&apos;s review removal policy lists specific content violations that make a review eligible for
            removal. Reviews that qualify include: spam (fake reviews, reviews created by bots), off-topic content
            (reviews that don&apos;t reflect a real customer experience), restricted content (personal attacks,
            obscene language), conflict of interest (reviews from employees, competitors, or people with a vested
            interest), and impersonation (reviews pretending to be someone else).
          </p>
          <p>
            Reviews that do NOT qualify for removal: negative reviews from real customers who had a genuine
            experience, opinions you disagree with, and reviews that are harsh but factually accurate.
          </p>
        </div>
      }
      howTitle="How Epicware Handles the Removal Process"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware starts with a free policy assessment of the reviews you want to challenge. We identify which
            reviews have a clear policy violation basis and which don&apos;t — so you don&apos;t spend $200 on a
            case that will fail.
          </p>
          <p>
            For reviews that do qualify, we submit the removal request with the specific policy citation, correct
            documentation, and through the correct Google channel for the violation type. The process and timeline
            vary depending on the violation type — spam reviews are typically processed faster than
            conflict-of-interest violations that require more documentation.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Free assessment to confirm which reviews qualify before any payment.{" "}
          <strong>$200 per review removed, pay on success only.</strong> No upfront fees. See full platform pricing
          at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
        </p>
      }
      parentHref="/bad-review-removal-singapore"
      parentLabel="Bad Review Removal Singapore"
      parentSentence={
        <>
          This guide is part of Epicware&apos;s{" "}
          <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
            Bad Review Removal Singapore
          </Link>{" "}
          service. Start with a{" "}
          <Link href="/audit" className="text-primary font-medium hover:underline">free assessment</Link>{" "}
          to identify which of your reviews are removable.
        </>
      }
    />
  );
}
