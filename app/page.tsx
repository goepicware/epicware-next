import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import UrgencySection from "@/components/home/UrgencySection";

// Below-fold sections loaded as async chunks to free the main thread for LCP paint
const VideoSection = dynamic(() => import("@/components/home/VideoSection"));
const LocalGrowthWorkflowSection = dynamic(() => import("@/components/home/LocalGrowthWorkflowSection"));
const SocialProof = dynamic(() => import("@/components/home/SocialProof"));
const CitationWall = dynamic(() => import("@/components/shared/CitationWall"));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"));
const DashboardScreenshot = dynamic(() => import("@/components/home/DashboardScreenshot"));
const CaseStudiesSlider = dynamic(() => import("@/components/home/CaseStudiesSlider"));
const CoreServices = dynamic(() => import("@/components/home/CoreServices"));
const ComparisonSection = dynamic(() => import("@/components/home/ComparisonSection"));
const NoRemovalNoFee = dynamic(() => import("@/components/home/NoRemovalNoFee"));
const MidPageCTA = dynamic(() => import("@/components/home/MidPageCTA"));
const SeoAuditCTA = dynamic(() => import("@/components/home/SeoAuditCTA"));
const IndustriesGrid = dynamic(() => import("@/components/home/IndustriesGrid"));
const AboutCredentials = dynamic(() => import("@/components/home/AboutCredentials"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const LocationsStrip = dynamic(() => import("@/components/home/LocationsStrip"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export const metadata: Metadata = {
  title: { absolute: "AI-Powered Digital Marketing Agency in Singapore | Epicware" },
  description:
    "Epicware is an AI-powered digital marketing agency in Singapore: SEO, Google Maps, AI search and reviews, run by our team on our own AI software.",
  openGraph: {
    title: "AI-Powered Digital Marketing Agency in Singapore | Epicware",
    description:
      "Epicware is an AI-powered digital marketing agency in Singapore: SEO, Google Maps, AI search and reviews, run by our team on our own AI software.",
    url: "https://www.epicware.ai",
    images: [
      {
        url: "https://www.epicware.ai/assets/HeroBanner.png",
        width: 1200,
        height: 630,
        alt: "Epicware, an AI-powered digital marketing agency in Singapore",
      },
    ],
  },
  alternates: {
    canonical: "https://www.epicware.ai",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://www.epicware.ai/#organization",
  name: "Epicware",
  legalName: "Epicware Pte Ltd",
  url: "https://www.epicware.ai/",
  logo: "https://www.epicware.ai/assets/epicware-logo.png",
  description:
    "Epicware is an AI-powered digital marketing agency in Singapore: SEO, Google Maps, AI search and reviews, run by our team on our own AI software.",
  email: "hello@epicware.ai",
  telephone: "+65 9001 3157",
  address: {
    "@type": "PostalAddress",
    streetAddress: "78 Shenton Way, #07-15",
    addressLocality: "Singapore",
    postalCode: "079120",
    addressCountry: "SG",
  },
  areaServed: ["Singapore", "Malaysia", "United Arab Emirates", "United Kingdom", "United States"],
  knowsAbout: [
    "Search engine optimisation",
    "Local SEO",
    "Google Business Profile optimisation",
    "Generative engine optimisation",
    "Online reputation management",
  ],
  sameAs: [
    "https://share.google/K1DfMHlISqq4rUWnp",
    "https://sg.linkedin.com/company/epicwareaisgL",
    "https://clutch.co/profile/epicware-0",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Epicware",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SGD",
    description: "Free GBP audit — no signup required",
  },
  description:
    "Local SEO and Reputation Management SaaS platform for SMBs. Includes GBP optimisation, review generation, bad review removal, AI GEO visibility, and multi-outlet management.",
  url: "https://www.epicware.ai",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Urgency — after hero, before review grid */}
      <UrgencySection />

      {/* 2b. Social Proof — review widget (broad, familiar proof first) */}
      <SocialProof />

      {/* 2c. Citation Wall — verified AI-search citations (specific proof, right after reviews) */}
      <CitationWall
        ctaHref="/free-audit"
        extraIntro="As a leading AI powered digital marketing agency, Epicware leverages proprietary AI tools and automated workflows to deliver faster results, total search coverage, and transparent performance metrics."
      />

      {/* 3. Click-to-play YouTube demo */}
      <VideoSection />

      {/* 4. Complete Local Growth Workflow — 6-block guided system */}
      <LocalGrowthWorkflowSection />

      {/* 4b. Case studies slider — all published case studies */}
      <CaseStudiesSlider />

      {/* 4. Platform differentiation — 4 premium light cards */}
      <WhyChooseUs />

      {/* 5. Dashboard Screenshot */}
      <DashboardScreenshot />

      {/* 6. Core Growth Services — 6 service cards */}
      <CoreServices />

      {/* 6b. Comparison — Why Epicware vs a typical SEO agency */}
      <ComparisonSection />

      {/* 6c. See what our SEO team would fix first */}
      <SeoAuditCTA />

      {/* 7. No Removal No Fee — dark navy guarantee band */}
      <NoRemovalNoFee />

      {/* 8. Mid-page CTA */}
      <MidPageCTA />

      {/* 10. Featured Verticals — 9 industries */}
      <IndustriesGrid />

      {/* 11. About / Credentials */}
      <AboutCredentials />

      {/* 12. FAQ — accordion + FAQPage schema */}
      <FAQSection />

      {/* 13. Locations Trust Strip */}
      <LocationsStrip />

      {/* 14. Final CTA */}
      <FinalCTA />
    </>
  );
}
