import type { Metadata } from "next";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: "Local SEO for Spas & Wellness Centres Singapore",
  description:
    "Epicware helps Singapore spas and wellness centres rank higher on Google Maps, generate more reviews from satisfied clients, and manage their online reputation.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/wellness-centres",
  },
  openGraph: {
    title: "Local SEO for Spas & Wellness Centres Singapore | Epicware",
    description:
      "Epicware helps Singapore spas and wellness centres rank higher on Google Maps and generate more reviews from satisfied clients.",
    url: "https://www.epicware.ai/industries/wellness-centres",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore spas and wellness centres.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Post-appointment WhatsApp review requests that capture positive client experiences.",
  },
  {
    label: "GBP Photo Management",
    href: "/gbp-optimisation-singapore/gbp-photo-management",
    description:
      "Interior photos, treatment room shots, and team photos that convert profile views into bookings.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success for fake or policy-violating reviews.",
  },
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "Complete profile optimisation including treatment categories, attributes, and booking links.",
  },
  {
    label: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description: "Professional, personalised responses to every client review.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "Track your Maps rank for every wellness keyword across Singapore districts.",
  },
];

const locationLinks = [
  { label: "Orchard", href: "/locations/singapore/orchard" },
  { label: "Buona Vista", href: "/locations/singapore/buona-vista" },
  { label: "Jurong", href: "/locations/singapore/jurong" },
  { label: "Tampines", href: "/locations/singapore/tampines" },
  { label: "Ang Mo Kio", href: "/locations/singapore/ang-mo-kio" },
  { label: "Toa Payoh", href: "/locations/singapore/toa-payoh" },
];

export default function WellnessCentresPage() {
  return (
    <IndustryPage
      schema={schema}
      badge="WELLNESS CENTRES · LOCAL SEO"
      h1="Local SEO for Spas & Wellness Centres Singapore — Fill Your Appointment Book"
      subtitle="Wellness decisions are personal and trust-driven. Singapore customers looking for a massage, facial, or wellness programme read reviews, look at photos, and compare therapists before booking. Epicware ensures they find you first."
      trustSignals={[
        "Therapist Reviews",
        "Ambiance Photos",
        "Singapore-Built",
        "No Agency Retainer",
      ]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="A spa with a luxurious interior and skilled therapists that doesn't appear in Google Maps searches for 'massage near me in Singapore' is invisible to its most valuable customers — first-time visitors who haven't been recommended by a friend. In the wellness category, the customer's decision is driven by photos (does this look like the experience I want?) and reviews (do therapists here actually deliver?). Epicware manages both dimensions: GBP photo optimisation that showcases your space, and review generation that captures positive client experiences before they fade."
      challengesTitle="The Reputation Challenge for Wellness Businesses"
      challengesContent={
        <p>
          Wellness businesses are disproportionately affected by negative reviews
          because the service experience is highly subjective. A client who expected
          more pressure from a massage, or who had a therapist mismatch, may leave a
          2-star review that brings down an otherwise excellent rating. Without a
          systematic positive review generation process, one bad week can move the
          needle on your average rating significantly. For centres with multiple
          therapists, reviews that name specific staff help convert new clients — but
          only if those reviews are being actively generated.
        </p>
      }
      howEpicwareHelps={
        <p>
          EpicReview generates review requests after every appointment, capturing
          positive experiences before customers leave the building. The GBP Photo
          Management service ensures your profile has high-quality interior photos,
          treatment room shots, and team photos that set expectations accurately. For
          multi-branch wellness groups, Epicware manages every location from one
          dashboard. Bad Review Removal handles genuine policy-violating reviews — the
          ones posted by competitors or by clients who have never visited.
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
