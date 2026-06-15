import type { Metadata } from "next";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: "Local SEO for Car Workshops Singapore — Google Maps | Epicware",
  description:
    "Epicware helps Singapore car workshops and auto service centres rank higher on Google Maps, generate trust-building reviews, and remove fake bad reviews.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/car-workshops",
  },
  openGraph: {
    title: "Local SEO for Car Workshops Singapore | Epicware",
    description:
      "Epicware helps Singapore car workshops rank higher on Google Maps and remove fake bad reviews from competitors.",
    url: "https://www.epicware.ai/industries/car-workshops",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore car workshops and auto service centres.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Remove competitor attacks and false claims about your workshop.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Post-service WhatsApp review requests after every completed job.",
  },
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "Full service list, correct categories, and profile completeness for every auto service keyword.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "Track your rank across Singapore districts for car workshop keywords.",
  },
  {
    label: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description:
      "Professional, trust-building responses to every customer review.",
  },
  {
    label: "Review Management",
    href: "/review-management-singapore",
    description:
      "Monitor all reviews in real time across multiple workshop locations.",
  },
];

const locationLinks = [
  { label: "Jurong", href: "/locations/singapore/jurong" },
  { label: "Woodlands", href: "/locations/singapore/woodlands" },
  { label: "Tampines", href: "/locations/singapore/tampines" },
  { label: "Ang Mo Kio", href: "/locations/singapore/ang-mo-kio" },
  { label: "Bedok", href: "/locations/singapore/bedok" },
  { label: "Toa Payoh", href: "/locations/singapore/toa-payoh" },
  { label: "Yishun", href: "/locations/singapore/yishun" },
];

export default function CarWorkshopsPage() {
  return (
    <IndustryPage
      schema={schema}
      badge="CAR WORKSHOPS · LOCAL SEO"
      h1="Local SEO for Car Workshops Singapore — Rank Higher, Earn More Service Jobs"
      subtitle="Car owners searching for a trusted workshop in Singapore choose based on reviews and proximity. A workshop with 80 5-star reviews and clear service descriptions wins the customer before they even call. Epicware builds that trust profile automatically."
      trustSignals={[
        "Trust-Critical Industry",
        "Competitor Attack Removal",
        "Singapore-Built",
        "Multi-Location Support",
      ]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="When a car owner's check engine light comes on or their COE renewal is due, they open Google Maps and search 'car workshop near me'. The workshop that appears in the top 3 with the most credible reviews gets the call. In Singapore's competitive auto service market, trust is the primary purchase driver — and trust starts with Google reviews. A workshop with a 4.6 rating and 95 reviews converts dramatically better than one with 12 reviews and a 3.8, even if the quality of service is identical."
      challengesTitle="Why Auto Workshops Get Hit by Bad Reviews"
      challengesContent={
        <p>
          Car workshops are disproportionately targeted by fake or unfair reviews.
          Competitor attacks, disgruntled one-time customers who had unrealistic
          expectations about repair costs, and reviews from insurance claim disputes
          can damage a workshop&apos;s reputation quickly. In a high-trust category where
          customers are spending $1,000–$5,000+ on repairs, one 1-star review claiming
          &apos;overcharging&apos; or &apos;substandard work&apos; can cost weeks of lost business. Without a
          systematic positive review generation process, the ratio of negative to
          positive reviews tilts quickly after any difficult job.
        </p>
      }
      howEpicwareHelps={
        <p>
          Epicware&apos;s review generation sends WhatsApp review requests after every
          completed job — when the customer has their car back and is satisfied. Bad
          Review Removal handles competitor attacks, false claims, and
          policy-violating reviews at $200/review with success-only payment. GBP
          Optimisation ensures your workshop&apos;s profile lists every service type
          (servicing, tyres, aircon, bodywork, diagnostics) so you appear in the right
          searches. EpicMap tracks your rank for every relevant auto service keyword
          across your local catchment area.
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
