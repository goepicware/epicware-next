import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "GBP Post Scheduling Singapore — AI-Generated Weekly Google Posts | Epicware",
  description:
    "Keep your Google Business Profile fresh with weekly AI-generated posts published automatically. A rank freshness signal that requires nothing from you.",
  alternates: { canonical: "https://www.epicware.ai/local-seo-singapore/gbp-post-scheduling" },
  openGraph: {
    title: "GBP Post Scheduling Singapore | Epicware",
    description: "Weekly AI-generated Google Business Profile posts published automatically.",
    url: "https://www.epicware.ai/local-seo-singapore/gbp-post-scheduling",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Post Scheduling Singapore",
  serviceType: "GBP Post Scheduling",
  description: "AI-generated weekly Google Business Profile posts for Singapore SMBs.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/local-seo-singapore/gbp-post-scheduling",
};

export default function GbpPostSchedulingPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GBP POST SCHEDULING · LOCAL SEO"
      h1="GBP Post Scheduling Singapore — Keep Your Google Profile Fresh Automatically"
      subtitle="Google Business Profile posts are a freshness signal that supports Maps rank. Most Singapore SMBs post rarely or never. Epicware generates and publishes weekly posts automatically — you just approve them."
      trustSignals={["AI-Generated Posts", "Weekly Publishing", "Singapore-Built", "GBP Native"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="Google treats GBP profiles that post regularly as more active and relevant than those that don't. A profile with no posts in 3 months signals inactivity. For Singapore SMBs competing in dense local categories, freshness signals like regular GBP posts can support rank improvement."
      whenTitle="When You Need GBP Post Scheduling"
      whenContent={
        <div className="space-y-4">
          <p>
            Most SMB owners know they should post but don&apos;t have time to create content and remember to publish
            every week. Google treats GBP profiles that post regularly as more active and relevant. A profile with no
            posts in 3 months signals to the algorithm that the business may be less active — a disadvantage in
            competitive local categories.
          </p>
          <p>
            If your competitors are posting weekly and you are not, that is a freshness gap that shows up in rank.
            GBP Post Scheduling closes that gap automatically.
          </p>
        </div>
      }
      howTitle="How Epicware Handles GBP Post Scheduling"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware generates weekly GBP posts from your business data — your services, recent reviews, offers, and
            updates. The AI drafts a post matching your brand voice and schedules it for publication at the optimal
            time. You can review and approve, or enable auto-publish.
          </p>
          <p>
            For multi-outlet operators, different posts can be generated per location — a food special at your Tampines
            outlet, a new service announcement at your Toa Payoh branch. All managed from one dashboard. See also{" "}
            <Link href="/products/epicsocial" className="text-primary font-medium hover:underline">EpicSocial</Link>{" "}
            for scheduling across Facebook, Instagram, and GBP simultaneously.
          </p>
        </div>
      }
      pricingContent={
        <p>
          GBP Post Scheduling is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/local-seo-singapore"
      parentLabel="Local SEO Singapore"
      parentSentence={
        <>
          GBP Post Scheduling is part of Epicware&apos;s{" "}
          <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
            Local SEO Singapore
          </Link>{" "}
          service category. The{" "}
          <Link href="/products/epicsocial" className="text-primary font-medium hover:underline">EpicSocial</Link>{" "}
          product also covers social post scheduling across Facebook, Instagram, and GBP from one platform.
        </>
      }
    />
  );
}
