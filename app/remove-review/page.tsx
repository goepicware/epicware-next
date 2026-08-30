import type { Metadata } from "next";
import RemoveReviewPage from "@/components/remove-review/RemoveReviewPage";

export const metadata: Metadata = {
  title: "Remove a Bad Google Review | Epicware Singapore",
  description:
    "Got an unfair Google review? Epicware assesses it for free and files for removal through official Google channels. Pay only if the review is removed.",
  alternates: {
    canonical: "https://www.epicware.ai/remove-review",
  },
  openGraph: {
    title: "Remove a Bad Google Review | Epicware Singapore",
    description:
      "Free assessment. Pay only if the review is removed. Singapore-based team helping clinics, F&B, and service businesses.",
    url: "https://www.epicware.ai/remove-review",
    siteName: "Epicware",
    type: "website",
    images: [
      {
        url: "https://www.epicware.ai/assets/epicmap-screen.png",
        width: 1200,
        height: 630,
        alt: "Epicware — Bad Review Removal Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remove a Bad Google Review | Epicware Singapore",
    description:
      "Free assessment. Pay only if the review is removed. Singapore-based team.",
    images: ["https://www.epicware.ai/assets/epicmap-screen.png"],
  },
};

// FAQPage JSON-LD — mirrors the FAQ accordion rendered in RemoveReviewPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it legal to request a Google review removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We only pursue removals through Google's official policy channels — specifically by flagging reviews that violate Google's content policies: fake reviews, spam, conflicts of interest, off-topic content, or hate speech. There is no hacking, no suppression, and no undisclosed workarounds. If a review doesn't violate policy, we tell you upfront.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the removal process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary depending on the review type and whether escalation is required. We keep you updated at each stage rather than leaving you in the dark.",
      },
    },
    {
      "@type": "Question",
      name: "What if the review is from a genuine customer who had a bad experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We'll tell you that in the assessment — free of charge. A genuine negative experience from a real customer generally can't be removed through policy-based channels. If that's the case, we'll outline the most effective way to address it: a well-worded response, a review velocity strategy to dilute its impact, or both.",
      },
    },
    {
      "@type": "Question",
      name: "Will the reviewer be notified that I flagged their review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Google's review flagging and removal process is not visible to the reviewer. They are not notified when a flag is submitted or when a review is reviewed by Google. There is no counter-notification system for reviewers.",
      },
    },
    {
      "@type": "Question",
      name: "What if new bad reviews appear after one is removed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Removal is a one-time action on a specific review. If a pattern of targeted fake reviews emerges, we can discuss an ongoing monitoring arrangement. Preventatively, the most durable protection is building genuine review volume so a single negative review carries less weight.",
      },
    },
    {
      "@type": "Question",
      name: "What types of businesses do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primarily clinics, dental practices, aesthetics and wellness centres, F&B restaurants and cafés, car workshops, and retail businesses in Singapore. The service works for any Singapore-registered business with a Google Business Profile.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with multiple bad reviews at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each review is assessed individually because different reviews may violate different policies. We can assess several at once, and if multiple qualify for removal, we handle them together. Pricing applies per review successfully removed.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bad Google Review Removal",
  provider: {
    "@type": "Organization",
    name: "Epicware",
    url: "https://www.epicware.ai",
  },
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  description:
    "Official Google policy-based review removal service for Singapore businesses. Free assessment, pay only if removed.",
  serviceType: "Reputation Management",
};

export default function RemoveReviewRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RemoveReviewPage />
    </>
  );
}
