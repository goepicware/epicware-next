import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "AI Review Response Singapore — Replies to Every Review | Epicware",
  description:
    "Auto-generate personalised, brand-consistent replies to every Google review. Not templates — AI that reads each review and writes a real response.",
  alternates: { canonical: "https://www.epicware.ai/reputation-management-singapore/ai-review-response" },
  openGraph: {
    title: "AI Review Response Singapore | Epicware",
    description: "Auto-generate personalised, brand-consistent replies to every Google review.",
    url: "https://www.epicware.ai/reputation-management-singapore/ai-review-response",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Review Response Singapore",
  serviceType: "AI Review Response",
  description: "AI-generated personalised responses to every Google review for Singapore SMBs.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/reputation-management-singapore/ai-review-response",
};

export default function AiReviewResponsePage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="AI REVIEW RESPONSE · SINGAPORE"
      h1="AI Review Response Singapore — Personalised Replies, Not Copy-Paste Templates"
      subtitle="Responding to every review with something personal — not a generic template — signals to Google and future customers that your business is attentive. Epicware's AI writes it for you in seconds."
      trustSignals={["Brand-Consistent Replies", "Auto-Publish Option", "Singapore-Built", "Multi-Outlet"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Every response to a Google review is visible to every future customer who reads your profile. A thoughtful reply to a 1-star review can recover a customer and reassure every future reader. Epicware's AI makes this possible at scale — personalised, on-brand, ready in seconds."
      whenTitle="When You Need AI Review Response"
      whenContent={
        <div className="space-y-4">
          <p>
            If your business has more than 20 reviews and you are not responding to all of them, you are leaving a
            negative signal with Google and a poor impression on customers who read your profile. The most common
            mistake: responding to 5-star reviews with &ldquo;Thank you!&rdquo; and ignoring or copy-pasting
            responses to 1-star reviews.
          </p>
          <p>
            Potential customers read the negative reviews first and judge you by your response. A thoughtful,
            professional response to a 1-star review can recover a customer and show every future reader that you
            take service seriously. For multi-outlet operators, this challenge is multiplied across every profile.
          </p>
        </div>
      }
      howTitle="How Epicware Handles AI Review Response"
      howContent={
        <div className="space-y-4">
          <p>
            When a new review arrives, Epicware&apos;s AI reads the content and drafts a personalised response that
            acknowledges the specific points the customer mentioned. For a 5-star review about the food and service
            at your Tampines outlet, it writes a response that references those details and the location. For a
            3-star review about wait times, it acknowledges the concern and explains what the business is doing
            about it.
          </p>
          <p>
            You can auto-publish all responses or review and approve individually. Brand voice settings let you keep
            the tone consistent across all responses and all outlets.
          </p>
        </div>
      }
      pricingContent={
        <p>
          AI Review Response is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/reputation-management-singapore"
      parentLabel="Reputation Management Singapore"
      parentSentence={
        <>
          AI Review Response is part of Epicware&apos;s{" "}
          <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
            Reputation Management Singapore
          </Link>{" "}
          suite.
        </>
      }
    />
  );
}
