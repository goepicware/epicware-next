import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Review Monitoring Singapore — Real-Time Alerts",
  description:
    "Never miss a review across any outlet. Real-time Google review monitoring with instant alerts via dashboard, email, or WhatsApp for Singapore SMBs.",
  alternates: { canonical: "https://www.epicware.ai/review-management-singapore/review-monitoring" },
  openGraph: {
    title: "Review Monitoring Singapore | Epicware",
    description: "Real-time Google review monitoring with instant alerts for Singapore SMBs.",
    url: "https://www.epicware.ai/review-management-singapore/review-monitoring",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Review Monitoring Singapore",
  serviceType: "Review Monitoring",
  description: "Real-time Google review monitoring with instant alerts for Singapore SMBs.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/review-management-singapore/review-monitoring",
};

export default function ReviewMonitoringPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="REVIEW MONITORING · SINGAPORE"
      h1="Review Monitoring Singapore — Never Miss a Review Across Any Outlet"
      subtitle="A negative review left unanswered for 48 hours is visible to hundreds of potential customers. Epicware monitors every Google Business Profile in your portfolio in real time and alerts you instantly."
      trustSignals={["Real-Time Alerts", "Multi-Outlet Dashboard", "WhatsApp + Email Alerts", "Singapore-Built"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Review monitoring matters most when you are managing more than one outlet, when your business is in a competitive local category, or when you have previously had a bad review go unnoticed for days. Monitoring manually across multiple GBP profiles is impractical — it means logging into each account separately, every day."
      whenTitle="When Review Monitoring Matters Most"
      whenContent={
        <div className="space-y-4">
          <p>
            Singapore&apos;s dense geography means one unanswered negative review is visible to your entire local
            catchment area. The speed of your response signals to both the reviewer and every reader whether your
            business is run by people who care.
          </p>
          <p>
            For multi-outlet businesses, manual monitoring means logging into each Google account separately, every
            day, and checking for new reviews. With 5 profiles, that&apos;s 5 separate checks, 5 separate inboxes,
            and 5 sets of alerts to miss. Without a centralised system, reviews are inevitably missed.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Review Monitoring"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware connects to your Google Business Profiles via API and monitors every new review as it is
            posted. Alert settings let you receive instant notifications via dashboard, email, or WhatsApp for new
            reviews, low-star reviews only, or reviews containing specific keywords.
          </p>
          <p>
            The centralised review inbox shows all reviews from all outlets in one view, filtered by date, rating,
            outlet, or response status. Any review that has been unanswered for more than a configured time window
            triggers a reminder. The AI response module is integrated — a suggested response is ready the moment
            you open the alert.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Review Monitoring is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/review-management-singapore"
      parentLabel="Review Management Singapore"
      parentSentence={
        <>
          Review Monitoring is part of Epicware&apos;s{" "}
          <Link href="/review-management-singapore" className="text-primary font-medium hover:underline">
            Review Management Singapore
          </Link>{" "}
          service and{" "}
          <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
            Reputation Management Singapore
          </Link>{" "}
          suite.
        </>
      }
    />
  );
}
