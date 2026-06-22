import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Reputation Analytics Singapore — Reviews & Sentiment",
  description:
    "Live reputation analytics dashboard for Singapore SMBs. Track review velocity, rating trends, response rates, and competitor comparison across all outlets.",
  alternates: { canonical: "https://www.epicware.ai/reputation-management-singapore/reputation-analytics" },
  openGraph: {
    title: "Reputation Analytics Singapore | Epicware",
    description: "Live reputation analytics dashboard — review velocity, rating trends, competitor comparison.",
    url: "https://www.epicware.ai/reputation-management-singapore/reputation-analytics",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reputation Analytics Singapore",
  serviceType: "Reputation Analytics",
  description: "Live reputation analytics dashboard for Singapore SMBs — review velocity, rating trends, sentiment, and competitor comparison.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/reputation-management-singapore/reputation-analytics",
};

export default function ReputationAnalyticsPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="REPUTATION ANALYTICS · SINGAPORE"
      h1="Reputation Analytics Singapore — See Your Full Review Picture in One Dashboard"
      subtitle="Most SMBs check their Google rating occasionally and respond when they remember. Epicware's Reputation Analytics Dashboard gives you a live view of review velocity, rating trends, and competitor comparison — not a monthly report."
      trustSignals={["Live Dashboard", "Competitor Comparison", "Singapore-Built", "Multi-Outlet Analytics"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="If you manage more than one outlet, you cannot check each GBP profile individually every day and still run your business. Reputation analytics give you the visibility to manage by exception — focus where the data says you need to."
      whenTitle="When You Need Reputation Analytics"
      whenContent={
        <div className="space-y-4">
          <p>
            If you don&apos;t know your review velocity (how many new reviews per week), your response rate, or how
            your rating compares to the top 3 competitors in your district, you are managing your reputation blind.
          </p>
          <p>
            Reputation analytics matter most when you are running campaigns — whether review generation or promotions
            — and you need to see whether the campaign is actually moving your rating and review count. Without data,
            you are guessing.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Reputation Analytics"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware&apos;s dashboard aggregates review data across all your GBP profiles. You see total reviews,
            average rating, review velocity over time, and response rate per outlet. Sentiment analysis flags
            recurring themes in reviews — positive mentions of specific staff, food items, or wait times help you
            understand what to reinforce; negative patterns flag what to fix.
          </p>
          <p>
            Competitor comparison pulls ranking data from EpicMap and shows how your rating, review count, and rank
            compare against the top businesses in your category per district.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Reputation Analytics is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/reputation-management-singapore"
      parentLabel="Reputation Management Singapore"
      parentSentence={
        <>
          Reputation Analytics is part of Epicware&apos;s{" "}
          <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
            Reputation Management Singapore
          </Link>{" "}
          suite.
        </>
      }
    />
  );
}
