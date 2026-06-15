import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "EpicSocial Social Scheduling Singapore — AI Posts | Epicware",
  description:
    "AI-generated social posts scheduled across Facebook, Instagram, and GBP from one dashboard. A full week of content in one click for Singapore SMBs.",
  alternates: { canonical: "https://www.epicware.ai/growth-tools/epicsocial-social-scheduling" },
  openGraph: {
    title: "EpicSocial Social Scheduling Singapore | Epicware",
    description: "AI-generated social posts scheduled across Facebook, Instagram, and GBP from one dashboard.",
    url: "https://www.epicware.ai/growth-tools/epicsocial-social-scheduling",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EpicSocial Social Scheduling Singapore",
  serviceType: "Social Media Scheduling",
  description: "AI social media content generation and scheduling for Singapore SMBs across Facebook, Instagram, and GBP.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/growth-tools/epicsocial-social-scheduling",
};

export default function EpicSocialSchedulingPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="EPICSOCIAL · GROWTH TOOLS"
      h1="EpicSocial Social Scheduling Singapore — Post Consistently Without the Grind"
      subtitle="Singapore SMBs know they should post regularly on Facebook, Instagram, and Google Business Profile. Most don't, because they don't have time. EpicSocial generates the content and schedules the posts — you just approve."
      trustSignals={["AI Content Generation", "Facebook + Instagram + GBP", "Singapore-Built", "Content Calendar"]}
      imageSrc="/assets/how-it-works-campaigns.png"
      openingParagraph="A business that hasn't posted on Facebook in 3 months looks closed to a potential customer checking their page. A Google Business Profile with no recent posts loses rank advantage to competitors who post weekly. Social media consistency matters for both appearance and algorithm."
      whenTitle="When You Need Social Scheduling"
      whenContent={
        <div className="space-y-4">
          <p>
            Singapore SMB owners run tight operations and rarely have dedicated marketing staff. The choice is between
            irregular, rushed posting and a systematic approach that keeps the business visible without consuming
            staff time.
          </p>
          <p>
            If your last Facebook post was more than 3 weeks ago, or your GBP profile hasn&apos;t had a post in
            over a month, you are losing freshness signals that could be supporting your rank and keeping customers
            engaged between visits.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Social Scheduling"
      howContent={
        <div className="space-y-4">
          <p>
            EpicSocial generates social posts from your business data — your services, recent Google reviews,
            promotions, and locations. The PostForMe feature produces a full week of content in one click, which
            you review and approve in minutes. Scheduling sends posts at optimal times across Facebook, Instagram,
            and GBP simultaneously.
          </p>
          <p>
            The content calendar shows all scheduled posts across all your outlets so you always know what is going
            out. Multi-outlet operators can have different content schedules per location from one account. See also
            the{" "}
            <Link href="/products/epicsocial" className="text-primary font-medium hover:underline">EpicSocial product page</Link>.
          </p>
        </div>
      }
      pricingContent={
        <p>
          EpicSocial is available on Epicware&apos;s Growth plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/growth-tools"
      parentLabel="Growth Tools"
      parentSentence={
        <>
          EpicSocial Social Scheduling is part of Epicware&apos;s{" "}
          <Link href="/growth-tools" className="text-primary font-medium hover:underline">
            Growth Tools
          </Link>{" "}
          service category. See also the{" "}
          <Link href="/products/epicsocial" className="text-primary font-medium hover:underline">EpicSocial</Link>{" "}
          product page.
        </>
      }
    />
  );
}
