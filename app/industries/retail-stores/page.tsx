import type { Metadata } from "next";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: "Local SEO for Retail Stores Singapore — Drive In-Store Traffic | Epicware",
  description:
    "Epicware helps Singapore retail stores rank higher on Google Maps, manage customer reviews, and stay visible when shoppers search for products and stores nearby.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/retail-stores",
  },
  openGraph: {
    title: "Local SEO for Retail Stores Singapore | Epicware",
    description:
      "Epicware helps Singapore retail stores rank higher on Google Maps and stay visible when shoppers search for products nearby.",
    url: "https://www.epicware.ai/industries/retail-stores",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore retail stores. GBP accuracy management and review generation.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "Hours accuracy, product listings, seasonal updates, and full profile completeness.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Post-purchase review requests via WhatsApp and email.",
  },
  {
    label: "Social Scheduling (EpicSocial)",
    href: "/growth-tools/epicsocial-social-scheduling",
    description:
      "New stock announcements, promotions, and seasonal content scheduled automatically.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description: "Remove fake or policy-violating reviews from competitors.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "Track your rank for product category searches across Singapore districts.",
  },
  {
    label: "GBP Post Scheduling",
    href: "/local-seo-singapore/gbp-post-scheduling",
    description:
      "Weekly GBP posts featuring new arrivals, promotions, and store updates.",
  },
];

const locationLinks = [
  { label: "Orchard", href: "/locations/singapore/orchard" },
  { label: "Jurong", href: "/locations/singapore/jurong" },
  { label: "Tampines", href: "/locations/singapore/tampines" },
  { label: "Woodlands", href: "/locations/singapore/woodlands" },
  { label: "Ang Mo Kio", href: "/locations/singapore/ang-mo-kio" },
  { label: "Bedok", href: "/locations/singapore/bedok" },
  { label: "Yishun", href: "/locations/singapore/yishun" },
  { label: "Clementi", href: "/locations/singapore/clementi" },
];

export default function RetailStoresPage() {
  return (
    <IndustryPage
      schema={schema}
      badge="RETAIL STORES · LOCAL SEO"
      h1="Local SEO for Retail Stores Singapore — Rank Higher, Drive More In-Store Visits"
      subtitle="Singapore shoppers search Google Maps before they visit. A retail store with updated hours, product photos, and strong reviews wins the visit over a competitor with an outdated profile. Epicware keeps your store profile current, reviewed, and visible."
      trustSignals={[
        "Opening Hours Accuracy",
        "Product Photos Managed",
        "Singapore-Built",
        "Multi-Location Retail",
      ]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="When a shopper searches 'mobile phone accessories near me' or 'art supplies shop in Ang Mo Kio', they use Google Maps to decide which store to visit. A retail store with accurate hours, high-quality product photos, 60+ reviews, and regular GBP posts converts that search into a walk-in. Retail is intensely location-dependent, and Google Maps rank within the immediate catchment area determines foot traffic volume. Epicware's platform manages every GBP signal that affects that rank."
      challengesTitle="Retail-Specific Reputation Challenges"
      challengesContent={
        <p>
          Retail stores face specific challenges: reviews about pricing (&apos;too
          expensive&apos;), out-of-stock complaints, and queue-related complaints are common
          — but often don&apos;t reflect the overall quality of the store. At the same time,
          happy customers rarely leave reviews unless asked. GBP hours accuracy is
          critical for retail — a wrong closing time on a public holiday sends a
          customer to a closed store and results in a 1-star review. Multi-location
          retail chains face all these challenges simultaneously across every outlet.
        </p>
      }
      howEpicwareHelps={
        <p>
          Epicware manages GBP accuracy for retail stores — hours, product listings,
          attributes, and seasonal opening hours for public holidays. Review generation
          sends WhatsApp or email requests after a purchase, converting satisfied
          customers into reviewers. EpicSocial manages social posts and GBP posts
          showcasing new stock, promotions, and seasonal collections. For fake or
          competitor-posted reviews, Bad Review Removal handles the removal process.
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
