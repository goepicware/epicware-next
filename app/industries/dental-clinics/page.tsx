import type { Metadata } from "next";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: "Local SEO for Dental Clinics Singapore — More Patients | Epicware",
  description:
    "Epicware helps Singapore dental clinics rank higher on Google Maps, generate patient reviews, and remove fake bad reviews. Build trust before patients visit.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/dental-clinics",
  },
  openGraph: {
    title: "Local SEO for Dental Clinics Singapore | Epicware",
    description:
      "Epicware helps Singapore dental clinics rank higher on Google Maps for procedure-specific searches and generate patient reviews.",
    url: "https://www.epicware.ai/industries/dental-clinics",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore dental clinics. Procedure-specific GBP optimisation and patient review generation.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "GBP Category Optimisation",
    href: "/gbp-optimisation-singapore/gbp-category-optimisation",
    description:
      "Primary and secondary categories configured for every procedure you offer.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Protect your clinic's reputation from fake reviews.",
  },
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Post-appointment review requests that convert satisfied patients into reviewers.",
  },
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "19-point audit covering every factor that affects your dental clinic's Maps rank.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "Track your rank for every dental keyword across Singapore districts.",
  },
  {
    label: "Reputation Analytics",
    href: "/reputation-management-singapore/reputation-analytics",
    description:
      "Monitor your rating trends and review velocity across all clinic branches.",
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

export default function DentalClinicsPage() {
  return (
    <IndustryPage
      schema={schema}
      badge="DENTAL CLINICS · LOCAL SEO"
      h1="Local SEO for Dental Clinics Singapore — Visible When Patients Search for Treatment"
      subtitle="Patients searching for Invisalign, wisdom tooth removal, or a simple dental checkup in Singapore choose based on Google Maps rank and reviews. Epicware ensures your dental clinic appears first — and converts that visibility into booked appointments."
      trustSignals={[
        "Procedure-Specific Keywords",
        "Patient Trust Critical",
        "Singapore-Built",
        "Bad Review Protection",
      ]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="Dental patients are among the most research-intensive healthcare consumers in Singapore. Before a wisdom tooth extraction or Invisalign consultation, they read every review, compare clinic prices, look at before-and-after photos, and check whether a dentist specialises in their needed procedure. A dental clinic that ranks in the top 3 for 'Invisalign clinic Tampines' or 'emergency dentist Jurong' captures patients who are ready to book. Without that visibility, even the most skilled dentist loses patients to a competitor with better Google Maps presence."
      challengesTitle="The Dental Clinic Reputation Challenge"
      challengesContent={
        <p>
          Dental anxiety makes patients especially sensitive to negative reviews. A
          review mentioning pain during a procedure, billing disputes, or unfriendly
          staff can deter dozens of potential patients who are already nervous about
          dental visits. Dental clinics also face procedure-specific search intent — a
          patient looking for Invisalign is not searching the same terms as one looking
          for a crown, and without the right GBP categories and service listings, you
          miss both. Multi-location dental groups face all of this at scale.
        </p>
      }
      howEpicwareHelps={
        <p>
          Epicware&apos;s GBP Optimisation service configures your dental clinic&apos;s profile
          with the correct primary and secondary categories, procedure-specific
          services listed, and attributes like &apos;accepts insurance&apos; and &apos;wheelchair
          accessible&apos;. Review generation campaigns send post-appointment review requests
          at the moment a patient is most satisfied — after a successful procedure or a
          routine checkup that went smoothly. For fake or policy-violating reviews
          (particularly common in healthcare), Bad Review Removal handles the
          assessment and removal process.
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
