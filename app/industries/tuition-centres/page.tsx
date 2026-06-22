import type { Metadata } from "next";
import IndustryPage from "@/components/industries/IndustryPage";

export const metadata: Metadata = {
  title: "Local SEO for Tuition Centres Singapore — More Bookings",
  description:
    "Epicware helps Singapore tuition centres rank higher on Google Maps, generate parent reviews, and convert trial class searches into enrolled students.",
  alternates: {
    canonical: "https://www.epicware.ai/industries/tuition-centres",
  },
  openGraph: {
    title: "Local SEO for Tuition Centres Singapore | Epicware",
    description:
      "Epicware helps Singapore tuition centres rank higher on Google Maps and convert trial class searches into enrolled students.",
    url: "https://www.epicware.ai/industries/tuition-centres",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  description:
    "Local SEO and Reputation Management platform for Singapore tuition centres. Parent review generation and GBP optimisation.",
  areaServed: { "@type": "Country", name: "Singapore" },
};

const services = [
  {
    label: "Review Generation",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Automated review requests to parents after results and milestones.",
  },
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "List every subject, level, and programme so parents find you for the right search.",
  },
  {
    label: "Local Rank Tracking",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "Track your rank for every tuition keyword across every Singapore district.",
  },
  {
    label: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description:
      "Professional responses to parent reviews that reinforce your centre's credibility.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "Remove competitor attacks and policy-violating reviews that unfairly hurt your rating.",
  },
  {
    label: "Citation Building",
    href: "/local-seo-singapore/citation-building",
    description:
      "Consistent listings across Singapore education directories and local directories.",
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

export default function TuitionCentresPage() {
  return (
    <IndustryPage
      schema={schema}
      badge="TUITION CENTRES · LOCAL SEO"
      h1="Local SEO for Tuition Centres Singapore — Rank First When Parents Search"
      subtitle="Singapore parents searching for tuition for their children are among the most research-intensive customers in any local market. They read every review. They compare centres. The centre that ranks first with the most credible reviews wins the trial class."
      trustSignals={[
        "Parent-Driven Decision",
        "Multi-Subject Centres",
        "Singapore-Built",
        "Trial Class Conversion",
      ]}
      imageSrc="/assets/hero-image.jpg"
      openingParagraph="Every Singapore parent searching 'primary school maths tuition near Tampines' or 'secondary English tutor near me' is looking for one thing: proof that the centre they choose will help their child. Google reviews are that proof. A tuition centre with 60 reviews averaging 4.7 stars, recent posts showing student results, and a complete GBP profile with subjects listed converts trial class enquiries at a significantly higher rate than a competitor with 8 reviews and an empty profile."
      challengesTitle="Why Tuition Centre Reputation Management Is Different"
      challengesContent={
        <p>
          Parents research tuition centres more thoroughly than almost any other local
          service decision. They read all the reviews, look at the profile photos,
          check what subjects are offered and at what levels, and compare at least 3
          centres before calling for a trial. This means that winning the Google Maps
          rank is only half the battle — your profile also needs to convert the click.
          A poor review response, a generic description, or missing subject information
          loses the conversion even when the rank is right.
        </p>
      }
      howEpicwareHelps={
        <p>
          Epicware&apos;s review generation module sends WhatsApp and email review requests
          to parents after milestone moments — after a term ends, after results arrive,
          after a student achieves a breakthrough. These are the moments parents are
          most likely to recommend. GBP Optimisation ensures every subject, every
          level, and every special programme is listed and searchable. EpicMap tracks
          your rank for every relevant keyword (&apos;PSLE tuition Tampines&apos;, &apos;A level
          chemistry tutor Singapore&apos;) so you know exactly where to improve.
        </p>
      }
      services={services}
      locationLinks={locationLinks}
    />
  );
}
