import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Review Management Singapore — Real-Time Monitoring",
  description:
    "Monitor every Google review across all your outlets in real time. Instant alerts, centralised inbox, AI responses. Singapore's review management platform.",
  alternates: { canonical: "https://www.epicware.ai/reputation-management-singapore/review-management" },
  openGraph: {
    title: "Review Management Singapore | Epicware",
    description: "Monitor every Google review across all your outlets in real time.",
    url: "https://www.epicware.ai/reputation-management-singapore/review-management",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Review Management Singapore",
  serviceType: "Review Management",
  description: "Real-time Google review monitoring and management for Singapore SMBs across all outlets.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/reputation-management-singapore/review-management",
};

export default function ReviewManagementPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="REVIEW MANAGEMENT · SINGAPORE"
      h1="Review Management Singapore — Monitor Every Review in Real Time"
      subtitle="Missing a negative review for 48 hours in Singapore's dense market can cost you dozens of customers. Epicware monitors every Google Business Profile in your portfolio and alerts you instantly."
      trustSignals={["Real-Time Alerts", "Multi-Outlet Dashboard", "Singapore-Built", "No Agency Retainer"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Your Google reviews are live marketing material. Every response you give — or don't give — is visible to every future customer who reads your profile. Epicware monitors every review across all your outlets so nothing slips through."
      whenTitle="When You Need Review Management"
      whenContent={
        <div className="space-y-4">
          <p>
            You need review management when you are running more than one location, when you are manually checking
            Google every few days, or when a review has sat unanswered for more than 24 hours. Singapore&apos;s
            concentrated geography means a single unanswered 1-star review is visible to your entire local catchment
            area. Customers who see no response assume no one is in charge.
          </p>
          <p>
            Multi-outlet businesses face this at scale — five GBP profiles means five review inboxes to monitor,
            five sets of alerts to miss, and five sets of responses to write. Without a centralised system, the
            gaps compound.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Review Management"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware connects to your GBP profiles and shows every new review in one real-time dashboard. Alert
            settings let you get notified instantly via dashboard notification, email, or WhatsApp. You can view
            reviews by outlet, by date, by rating, or by response status. Filters show every unanswered review so
            nothing is missed.
          </p>
          <p>
            Alongside monitoring, the AI Review Response module drafts personalised replies to every review as they
            arrive — ready for one-click approval or auto-publish. Reviews are archived with full history so you
            can track rating changes over time.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Review Management is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/reputation-management-singapore"
      parentLabel="Reputation Management Singapore"
      parentSentence={
        <>
          Review Management is part of Epicware&apos;s full{" "}
          <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
            Reputation Management Singapore
          </Link>{" "}
          service suite.
        </>
      }
    />
  );
}
