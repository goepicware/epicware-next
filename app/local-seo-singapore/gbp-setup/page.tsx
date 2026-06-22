import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "GBP Setup Singapore — Business Profile Creation",
  description:
    "Full Google Business Profile creation, verification, and optimisation for new or unclaimed Singapore business profiles. Get it right from day one.",
  alternates: { canonical: "https://www.epicware.ai/local-seo-singapore/gbp-setup" },
  openGraph: {
    title: "GBP Setup Singapore | Epicware",
    description: "Full GBP creation, verification, and optimisation for Singapore businesses.",
    url: "https://www.epicware.ai/local-seo-singapore/gbp-setup",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Setup Singapore",
  serviceType: "GBP Setup",
  description: "Full Google Business Profile creation, verification, and initial optimisation for Singapore businesses.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/local-seo-singapore/gbp-setup",
};

export default function GbpSetupPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="GBP SETUP · LOCAL SEO"
      h1="GBP Setup Singapore — Get Your Google Business Profile Right the First Time"
      subtitle="A Google Business Profile with missing information, wrong categories, or unverified status loses rank before you even start. Epicware handles full setup, verification, and onboarding — correctly."
      trustSignals={["Full Setup + Verification", "Category Optimised", "Singapore-Built", "Onboarded Within 48 Hours"]}
      imageSrc="/assets/epicmap-before-after.png"
      openingParagraph="An unclaimed GBP can be edited by anyone, shows incomplete information, and ranks poorly. A profile claimed by the wrong person can lock the business out of their own listing. Getting the GBP right from day one prevents months of rank disadvantage."
      whenTitle="When You Need GBP Setup"
      whenContent={
        <div className="space-y-4">
          <p>
            New businesses, businesses that have never claimed their GBP, businesses with duplicate profiles, or
            businesses that have changed address or ownership often need a clean GBP setup. For businesses launching
            in a new Singapore location, getting the GBP right from day one prevents months of rank disadvantage.
          </p>
          <p>
            An unclaimed profile can be edited by anyone, shows incomplete information, and ranks poorly. A profile
            claimed by the wrong person can lock the business out of their own listing.
          </p>
        </div>
      }
      howTitle="How Epicware Handles GBP Setup"
      howContent={
        <div className="space-y-4">
          <p>
            Epicware creates or claims your Google Business Profile, sets the correct primary and secondary categories
            (which are the most important rank factor after proximity and relevance), adds all business details,
            uploads initial photos, sets up products and services, configures attributes, and initiates Google
            verification.
          </p>
          <p>
            Verification typically takes 3–7 days via Google&apos;s postcard or video verification process. Once
            verified, the profile is connected to Epicware&apos;s platform for ongoing optimisation and monitoring.
          </p>
        </div>
      }
      pricingContent={
        <p>
          GBP Setup is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/local-seo-singapore"
      parentLabel="Local SEO Singapore"
      parentSentence={
        <>
          GBP Setup is part of Epicware&apos;s{" "}
          <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
            Local SEO Singapore
          </Link>{" "}
          service category.
        </>
      }
    />
  );
}
