import type { Metadata } from "next";
import Link from "next/link";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: { absolute: "Salon SEO Singapore | Hair & Nail Salon Marketing | Epicware" },
  description:
    "Local SEO for Singapore hair and nail salons: top 3 on Google Maps, more 5-star reviews through WhatsApp and steady bookings from 'salon near me'.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/nail-hair-salons",
  },
  openGraph: {
    title: "Salon SEO Singapore | Hair & Nail Salon Marketing | Epicware",
    description:
      "Local SEO for Singapore hair and nail salons: top 3 on Google Maps, more 5-star reviews through WhatsApp and steady bookings from 'salon near me'.",
    url: "https://www.epicware.ai/industries/nail-hair-salons",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore hair salons and beauty studios.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "Review Generation Campaigns",
    href: "/services/review-management/review-generation",
    description:
      "WhatsApp review requests after every appointment — convert satisfied customers to reviewers.",
  },
  {
    label: "GBP Photo Management",
    href: "/locations/singapore/google-business-profile",
    description:
      "Before-and-after photos, salon interior shots, and regular photo refresh for GBP.",
  },
  {
    label: "GBP Optimisation",
    href: "/locations/singapore/google-business-profile",
    description:
      "19-point audit including service categories, attributes, and opening hours.",
  },
  {
    label: "Bad Review Removal",
    href: "/locations/singapore/review-removal",
    description:
      "Refunded if not removed within 3 months. Remove fake or policy-violating reviews.",
  },
  {
    label: "Social Scheduling (EpicSocial)",
    href: "/growth-tools/epicsocial-social-scheduling",
    description:
      "Showcase your work on Facebook, Instagram, and GBP without manual posting.",
  },
  {
    label: "Local Rank Tracking",
    href: "/services/local-seo/rank-tracking",
    description: "Track your Maps rank across every Singapore district.",
  },
];

const locationLinks = [
  { label: "Jurong", href: "/locations/singapore/jurong" },
  { label: "Tampines", href: "/locations/singapore/tampines" },
  { label: "Ang Mo Kio", href: "/locations/singapore/ang-mo-kio" },
  { label: "Toa Payoh", href: "/locations/singapore/toa-payoh" },
  { label: "Orchard", href: "/locations/singapore/orchard" },
  { label: "Bedok", href: "/locations/singapore/bedok" },
  { label: "Yishun", href: "/locations/singapore/yishun" },
  { label: "Clementi", href: "/locations/singapore/clementi" },
];

export default function NailHairSalonsPage() {
  return (
    <IndustryPage
      schema={schema}
      industryLabel="Hair & Beauty Salons"
      badge="HAIR & BEAUTY SALONS · LOCAL SEO"
      h1="Local SEO for Hair & Beauty Salons Singapore — Stay Booked, Stay Ranked"
      subtitle="Singapore's beauty industry is one of the most search-driven markets in the country. Customers search for specific services, specific stylists, and specific results. Epicware keeps your salon visible, reviewed, and fully booked."
      trustSignals={[
        "Appointment Booking Intent",
        "Stylist-Specific Reviews",
        "Singapore-Built",
        "Live Dashboard Included",
      ]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph={
        <>
          When someone searches 'hair colouring salon near Tampines' or 'nail art in Jurong', they are ready to book.{" "}
          Our <Link href="/locations/singapore/local-seo" className="text-primary font-medium hover:underline">local SEO services</Link> help your salon show up in those results.{" "}
          The salon that appears in the Google Maps 3-Pack with before-and-after photos, 80+ reviews, and a 4.7 rating wins that booking. Epicware's platform manages the review generation, GBP photo management, and rank tracking that keeps salons visible in the local searches that drive appointments.{" "}
          As an <Link href="/" className="text-primary font-medium hover:underline">AI marketing agency in Singapore</Link>, Epicware runs local search and reviews for salons.{" "}
          For <Link href="/use-cases/manage-multiple-gbp-locations" className="text-primary font-medium hover:underline">salon chains with multiple outlets</Link>, one dashboard manages every location.
           See our full <Link href="/locations/singapore/seo" className="text-primary font-medium hover:underline">SEO agency in Singapore</Link> services for more on ranking local businesses like yours.
        </>
      }
      challengesTitle="What Makes Salon Reputation Different"
      challengesContent={
        <p>
          Beauty services are intensely personal — and review-driven. Customers search
          for specific stylists, specific treatments, and specific results. A
          five-photo GBP profile with 12 reviews loses to a competitor with 50 photos,
          90 reviews, and recent posts showing finished hair colours. Salons also face
          a unique challenge: most satisfied customers don&apos;t leave reviews
          spontaneously, while one unsatisfied customer (who may have had unrealistic
          expectations) leaves a 1-star review immediately. Without a systematic
          review generation process, your rating drifts lower over time. Clients often
          choose a salon from photos of real results; see whether{" "}
          <Link
            href="/blog/do-photo-reviews-matter-for-local-seo"
            className="text-primary font-medium hover:underline"
          >
            photo reviews matter for local SEO
          </Link>
          .
        </p>
      }
      howEpicwareHelps={
        <p>
          EpicReview sends automated post-appointment review requests via WhatsApp —
          timed after the customer has left the salon and is still feeling great about
          their new look. The GBP Photo Management service builds your profile&apos;s photo
          library with before-and-afters, salon interior shots, and team photos.
          EpicSocial schedules weekly social posts and GBP posts showcasing your work.
          For multi-outlet salon chains, every profile is managed from one dashboard
          with combined analytics. See{" "}
          <Link
            href="/case-studies/salon-whatsapp-automation"
            className="text-primary font-medium hover:underline"
          >
            how a 4-outlet salon chain reached the top 3
          </Link>{" "}
          on Google Maps.
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
