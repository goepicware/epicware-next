import type { Metadata } from "next";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: "Local SEO for Physiotherapy Clinics Singapore — More Patients, Better Rank | Epicware",
  description:
    "Epicware helps Singapore physiotherapy clinics rank higher on Google Maps for condition-specific searches, generate verified patient reviews, and manage their reputation.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/physiotherapy",
  },
  openGraph: {
    title: "Local SEO for Physiotherapy Clinics Singapore | Epicware",
    description:
      "Epicware helps Singapore physiotherapy clinics rank higher on Google Maps for condition-specific searches.",
    url: "https://www.epicware.ai/industries/physiotherapy",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore physiotherapy clinics. Condition-specific GBP optimisation and patient review generation.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "Condition-specific service listings, correct categories, and complete profile for physio searches.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Post-treatment review requests that capture patient outcome stories.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "Track your rank for condition-specific physio keywords across Singapore.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "Remove fake or policy-violating reviews that undermine patient trust.",
  },
  {
    label: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description: "Clinically appropriate responses to every patient review.",
  },
  {
    label: "GBP Category Optimisation",
    href: "/gbp-optimisation-singapore/gbp-category-optimisation",
    description:
      "Speciality categories configured to capture sports, geriatric, and paediatric physio searches.",
  },
];

const locationLinks = [
  { label: "Jurong", href: "/locations/singapore/jurong" },
  { label: "Tampines", href: "/locations/singapore/tampines" },
  { label: "Ang Mo Kio", href: "/locations/singapore/ang-mo-kio" },
  { label: "Toa Payoh", href: "/locations/singapore/toa-payoh" },
  { label: "Clementi", href: "/locations/singapore/clementi" },
  { label: "Buona Vista", href: "/locations/singapore/buona-vista" },
  { label: "Orchard", href: "/locations/singapore/orchard" },
  { label: "Bedok", href: "/locations/singapore/bedok" },
];

export default function PhysiotherapyPage() {
  return (
    <IndustryPage
      schema={schema}
      badge="PHYSIOTHERAPY · LOCAL SEO"
      h1="Local SEO for Physiotherapy Clinics Singapore — Visible When Patients Search for Recovery"
      subtitle="Patients searching for physiotherapy in Singapore often come with doctor referrals — but they still choose based on Google Maps reviews and proximity. Epicware helps physio clinics rank higher and convert that visibility into booked appointments."
      trustSignals={[
        "Condition-Specific Keywords",
        "Referral + Direct Patients",
        "Singapore-Built",
        "Multi-Clinic Support",
      ]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="Physiotherapy patients in Singapore search by condition: 'knee physio near me', 'back pain physiotherapy Ang Mo Kio', 'sports injury rehab Singapore'. A physio clinic that ranks for the right condition-specific keywords in its catchment area captures both self-referred patients and doctor-referral patients who do their own research before booking. Epicware's platform optimises your GBP for the condition-specific searches your patients are using and builds the review profile that converts those searches into appointments."
      challengesTitle="The Physiotherapy Visibility Challenge"
      challengesContent={
        <p>
          Physiotherapy clinics face a dual acquisition challenge: traditional referral
          pathways from GPs and specialists, and direct patient searches on Google. The
          clinic that shows up first in both channels wins. For direct searches, GBP
          visibility and review quality are the primary conversion factors. A physio
          clinic with 50+ reviews mentioning specific conditions successfully treated
          (&apos;helped with my L4-L5 disc problem&apos;, &apos;recovered from ACL surgery faster than
          expected&apos;) converts high-intent searches more effectively than a competitor
          with generic reviews.
        </p>
      }
      howEpicwareHelps={
        <p>
          GBP Optimisation for physiotherapy clinics configures condition-specific
          service listings so your profile appears in condition-specific searches.
          Review generation campaigns send post-treatment requests at discharge or
          milestone sessions when patients are most satisfied. EpicMap tracks your rank
          for condition-specific keywords across your catchment districts. For
          multi-clinic physio groups, all locations are managed from one dashboard.
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
