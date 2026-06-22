import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Google Reviews Singapore — Manage & Generate Reviews",
  description:
    "Build your Google rating systematically. Review generation, real-time monitoring, and AI responses across all your Singapore outlets.",
  alternates: { canonical: "https://www.epicware.ai/review-management-singapore/google-reviews" },
  openGraph: {
    title: "Google Reviews Singapore | Epicware",
    description: "Build your Google rating systematically with review generation, monitoring, and AI responses.",
    url: "https://www.epicware.ai/review-management-singapore/google-reviews",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Reviews Singapore",
  serviceType: "Google Reviews Management",
  description: "Google review generation, monitoring, and response management for Singapore SMBs.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/review-management-singapore/google-reviews",
};

export default function GoogleReviewsPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GOOGLE REVIEWS · REVIEW MANAGEMENT"
      h1="Google Reviews Singapore — Build Your Rating Systematically"
      subtitle="Your Google Reviews are the first thing potential customers see. Epicware helps Singapore SMBs generate more 5-star reviews, respond to every one professionally, and monitor all outlets in real time."
      trustSignals={["Review Generation", "Real-Time Monitoring", "Singapore-Built", "AI Responses"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Google Reviews are the most visible trust signal for any Singapore local business. They appear in Google Search results, Google Maps, and increasingly in AI-generated answers when someone asks where to go for a specific service. A business with 200 reviews and a 4.6 rating wins clicks over a competitor with 15 reviews and a 4.9 — volume signals credibility."
      whenTitle="Why Google Reviews Are Your Most Valuable Asset"
      whenContent={
        <div className="space-y-4">
          <p>
            Google Reviews are the most visible trust signal for any Singapore local business. They appear in Google
            Search results, Google Maps, and increasingly in AI-generated answers when someone asks for a local
            service recommendation. For multi-outlet operators, the challenge is maintaining consistent ratings
            across every location. One outlet dragging down the group average affects the whole brand.
          </p>
          <p>
            A business with 200 reviews and a 4.6 rating wins clicks over a competitor with 15 reviews and a 4.9 —
            volume signals credibility that a perfect rating alone cannot achieve.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Google Reviews"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware&apos;s Google Reviews management covers the full cycle: automated review request campaigns
            (WhatsApp and email) that generate new reviews consistently; real-time monitoring that alerts you the
            moment a new review arrives on any of your GBP profiles; AI-generated personalised responses that are
            ready to publish in seconds; and review analytics that track your rating trend, review velocity, and
            response rate over time.
          </p>
          <p>
            Multi-outlet businesses see all reviews across all locations in one dashboard.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Google Reviews management is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/review-management-singapore"
      parentLabel="Review Management Singapore"
      parentSentence={
        <>
          Google Reviews management is part of Epicware&apos;s{" "}
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
