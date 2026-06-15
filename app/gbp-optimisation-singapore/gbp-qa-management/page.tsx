import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "GBP Q&A Management Singapore — Profile Optimisation | Epicware",
  description:
    "Seed keyword-rich Q&A, answer public questions, and remove competitor-planted content from your Google Business Profile Q&A section.",
  alternates: { canonical: "https://www.epicware.ai/gbp-optimisation-singapore/gbp-qa-management" },
  openGraph: {
    title: "GBP Q&A Management Singapore | Epicware",
    description: "Keyword-rich Q&A seeding, public question responses, and spam removal for your GBP.",
    url: "https://www.epicware.ai/gbp-optimisation-singapore/gbp-qa-management",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Q&A Management Singapore",
  serviceType: "GBP Q&A Management",
  description: "Google Business Profile Q&A management for Singapore SMBs — keyword seeding, public answers, spam removal.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/gbp-optimisation-singapore/gbp-qa-management",
};

export default function GbpQaManagementPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GBP Q&A · GBP OPTIMISATION"
      h1="GBP Q&A Management Singapore — Answers That Rank and Convert Customers"
      subtitle="Google's Q&A section on your Business Profile is a keyword-rich, rankable content area most Singapore SMBs completely ignore. Epicware seeds, manages, and optimises your Q&A to capture more search terms and pre-answer customer questions."
      trustSignals={["Keyword-Rich Q&A", "Pre-Answer Objections", "Singapore-Built", "Spam Q&A Removal"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="Most Singapore SMBs have either an empty Q&A section or questions from the public that have never been answered. This is a missed opportunity: unanswered questions look like neglect, competitor-posted misleading questions can sit on your profile for months, and the Q&A section is indexable by Google."
      whenTitle="Why the Q&A Section Matters"
      whenContent={
        <div className="space-y-4">
          <p>
            Unanswered questions look like neglect. Competitor-posted misleading questions can sit on your profile
            for months. And the Q&amp;A section is indexable by Google, meaning well-written answers to common
            questions can appear directly in search results.
          </p>
          <p>
            For businesses in categories where customers have predictable questions — pricing, availability,
            parking, services offered — the Q&amp;A section is an SEO asset that almost nobody is using.
          </p>
        </div>
      }
      howTitle="How Epicware Handles GBP Q&A Management"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware seeds your Q&amp;A section with the most common questions for your business category in
            Singapore, then writes answers that include your target keywords naturally. Questions are framed the
            way customers actually ask them — &ldquo;Do you have parking at the Jurong outlet?&rdquo; not
            &ldquo;parking&rdquo; — so they are more likely to match real searches.
          </p>
          <p>
            Public questions from customers are answered promptly to show responsiveness. Spam Q&amp;A,
            competitor-planted misleading questions, and duplicate questions are flagged for removal. The section
            is reviewed monthly to add new questions and update existing answers.
          </p>
        </div>
      }
      pricingContent={
        <p>
          GBP Q&amp;A Management is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/gbp-optimisation-singapore"
      parentLabel="GBP Optimisation Singapore"
      parentSentence={
        <>
          GBP Q&amp;A Management is part of Epicware&apos;s{" "}
          <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
            GBP Optimisation Singapore
          </Link>{" "}
          service.
        </>
      }
    />
  );
}
