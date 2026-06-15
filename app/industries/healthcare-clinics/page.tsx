import type { Metadata } from "next";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: "Local SEO for Medical Clinics Singapore | Epicware",
  description:
    "Epicware helps Singapore GP clinics, specialist clinics, and polyclinics rank higher on Google Maps, generate verified patient reviews, and remove fake bad reviews.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/healthcare-clinics",
  },
  openGraph: {
    title: "Local SEO for Medical Clinics Singapore | Epicware",
    description:
      "Epicware helps Singapore GP clinics rank higher on Google Maps, generate verified patient reviews, and remove fake bad reviews.",
    url: "https://www.epicware.ai/industries/healthcare-clinics",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore medical clinics. Patient review generation, GBP optimisation, and bad review removal.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Critical for healthcare where one bad review costs dozens of patients.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "MOH-compliant post-appointment review requests via WhatsApp and email.",
  },
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "Complete clinic profile setup with specialties, services, and insurance accepted.",
  },
  {
    label: "Reputation Analytics",
    href: "/reputation-management-singapore/reputation-analytics",
    description:
      "Track rating trends and review velocity across all clinic branches.",
  },
  {
    label: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description:
      "Clinically appropriate AI-generated responses to every patient review.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "See where your clinic ranks for every relevant search keyword by district.",
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
];

export default function HealthcareClinicsPage() {
  return (
    <IndustryPage
      schema={schema}
      badge="MEDICAL CLINICS · LOCAL SEO"
      h1="Local SEO for Medical Clinics Singapore — Rank Higher, Build Patient Trust"
      subtitle="Patients choose clinics based on Google reviews more than any other signal. One fake bad review from a competitor can cost you dozens of new patients. Epicware protects your clinic's reputation and keeps you visible when patients search nearby."
      trustSignals={[
        "Healthcare Trust Critical",
        "Bad Review Removal Available",
        "Singapore-Built",
        "Multi-Clinic Dashboard",
      ]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="When a patient searches 'GP clinic near me' in Singapore, they are choosing someone to trust with their health. The clinic that appears first in Google Maps with 100+ reviews and a 4.7 rating earns that trust before the patient even walks in. A competitor clinic with similar quality but 15 reviews and a 3.9 rating loses that patient every time. Healthcare is the category where reputation management matters most — and where a single unfair review causes the greatest harm."
      challengesTitle="Why Clinic Reputation Needs Proactive Management"
      challengesContent={
        <p>
          Healthcare providers in Singapore face a unique challenge: MOH guidelines
          restrict incentivising reviews, yet competitor clinics may not observe the
          same constraints. Fake reviews from competitors, upset patients with
          unrealistic expectations, or disgruntled former staff can drop your rating
          below the trust threshold and affect patient decisions. Multi-branch clinic
          groups face this at scale across every location. Meanwhile, satisfied
          patients don&apos;t leave reviews unless asked — and asking at the right moment
          (after a positive consultation) makes a significant difference to conversion
          rate.
        </p>
      }
      howEpicwareHelps={
        <p>
          Epicware&apos;s review generation module sends review requests via WhatsApp and
          email after confirmed appointments, phrased to comply with healthcare review
          guidelines — no incentivisation, just a simple request at the right time.
          For fake or policy-violating reviews, the Bad Review Removal service assesses
          each case and submits removal requests at $200/review with success-only
          payment. GBP Optimisation covers healthcare-specific profile elements:
          specialties listed, services described correctly, insurance accepted,
          consultation hours complete. Multi-branch clinic groups manage all profiles
          from one dashboard.
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
