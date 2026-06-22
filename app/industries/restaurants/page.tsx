import type { Metadata } from "next";
import Link from "next/link";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: "Local SEO for F&B Restaurants Singapore — More Reviews",
  description:
    "Epicware helps Singapore restaurants generate more Google reviews, rank higher on Maps, and remove fake bad reviews. Multi-outlet dashboard for restaurant groups.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/restaurants",
  },
  openGraph: {
    title: "Local SEO for F&B Restaurants Singapore | Epicware",
    description:
      "Epicware helps Singapore restaurants generate more Google reviews, rank higher on Maps, and remove fake bad reviews.",
    url: "https://www.epicware.ai/industries/restaurants",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore F&B restaurants. Review generation, GBP optimisation, and bad review removal.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "Review Generation Campaigns",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Automated WhatsApp and email review requests timed 30 minutes after a meal.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Removes fake, competitor-posted, or policy-violating reviews.",
  },
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "19-point audit covering every rank factor from categories to photo count to post frequency.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "See exactly where your restaurant ranks on Google Maps across every Singapore district.",
  },
  {
    label: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description:
      "Personalised AI-generated replies to every review — ready in seconds.",
  },
  {
    label: "Multi-Outlet Management",
    href: "/review-management-singapore",
    description:
      "Manage every outlet's reviews, rank, and reputation from one dashboard.",
  },
];

const locationLinks = [
  { label: "Jurong", href: "/locations/singapore/jurong" },
  { label: "Tampines", href: "/locations/singapore/tampines" },
  { label: "Woodlands", href: "/locations/singapore/woodlands" },
  { label: "Ang Mo Kio", href: "/locations/singapore/ang-mo-kio" },
  { label: "Toa Payoh", href: "/locations/singapore/toa-payoh" },
  { label: "Clementi", href: "/locations/singapore/clementi" },
  { label: "Bedok", href: "/locations/singapore/bedok" },
  { label: "Yishun", href: "/locations/singapore/yishun" },
  { label: "Orchard", href: "/locations/singapore/orchard" },
];

export default function RestaurantsPage() {
  return (
    <IndustryPage
      schema={schema}
      badge="F&B RESTAURANTS · LOCAL SEO"
      h1="Local SEO for F&B Restaurants Singapore — Rank First, Fill Tables"
      subtitle="In Singapore's F&B market, the difference between a full restaurant and an empty one is often two positions on Google Maps. Epicware helps restaurant owners and groups rank higher, generate more reviews, and protect their rating."
      trustSignals={[
        "Multi-Outlet Dashboard",
        "Bad Review Removal Guaranteed",
        "Singapore-Built",
        "500+ Outlets Managed",
      ]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="A food court stall, a single-outlet restaurant, and an F&B group with eight locations all face the same problem: Singapore diners search Google Maps before they decide where to eat. The business that appears in the top three for 'restaurant near me' in the diner's location gets most of the clicks. Epicware manages every factor that determines that rank — reviews, GBP completeness, post frequency, and citation consistency — so your restaurant shows up when hungry customers are looking."
      challengesTitle="The Challenges Singapore Restaurants Face Online"
      challengesContent={
        <p>
          Multi-outlet groups manage 3–10 separate GBP profiles manually, logging in
          to each separately to check reviews, respond, and update hours. A single
          Friday night bad review — from a difficult customer, a competitor, or
          someone who got the wrong restaurant — can spread to hundreds of potential
          diners searching on the same weekend. F&B categories are among the most
          competitive on Singapore Google Maps, with 20+ restaurants competing for 3
          visible spots per keyword. Review velocity (how many new reviews per week)
          is a key ranking signal — restaurants that ask systematically generate 3–5x
          more reviews than those that don&apos;t ask at all.
        </p>
      }
      howEpicwareHelps={
        <p>
          Epicware&apos;s EpicReview module runs automated post-meal review requests via
          WhatsApp and email — triggered 30 minutes after a meal at the moment
          satisfaction is highest. The AI response module replies to every review with
          a personalised response that acknowledges what the customer said. For fake,
          competitor-posted, or policy-violating reviews, Epicware&apos;s Bad Review
          Removal service removes them at $200/review with no charge if the review
          stays up. EpicMap tracks your Maps rank across every Singapore district where
          your restaurant appears in searches, showing you exactly which keywords and
          locations to improve. For restaurant groups, all outlets are managed from one
          dashboard.{" "}
          <Link href="/resources/guides/restaurant-digital-growth-guide" className="text-primary font-medium hover:underline">
            Read the Restaurant Digital Growth Guide →
          </Link>
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
