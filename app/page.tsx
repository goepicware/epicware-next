import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import UrgencySection from "@/components/home/UrgencySection";

// Below-fold sections loaded as async chunks to free the main thread for LCP paint
const SocialProof = dynamic(() => import("@/components/home/SocialProof"));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"));
const DashboardScreenshot = dynamic(() => import("@/components/home/DashboardScreenshot"));
const CoreServices = dynamic(() => import("@/components/home/CoreServices"));
const NoRemovalNoFee = dynamic(() => import("@/components/home/NoRemovalNoFee"));
const MidPageCTA = dynamic(() => import("@/components/home/MidPageCTA"));
const IndustriesGrid = dynamic(() => import("@/components/home/IndustriesGrid"));
const AboutCredentials = dynamic(() => import("@/components/home/AboutCredentials"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const LocationsStrip = dynamic(() => import("@/components/home/LocationsStrip"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export const metadata: Metadata = {
  title: "Local SEO Agency & Reputation Management Singapore",
  description:
    "Rank higher on Google Maps, build 5-star reviews, and remove fake ones. Epicware is Singapore's AI-powered local SEO Agency & reputation management platform.",
  openGraph: {
    title: "Local SEO Agency & Reputation Management Singapore | Epicware",
    description:
      "Rank higher on Google Maps, build 5-star reviews, and remove fake ones. Epicware is Singapore's AI-powered local SEO Agency & reputation management platform.",
    url: "https://www.epicware.ai",
    images: [
      {
        url: "https://www.epicware.ai/assets/og-homepage.png",
        width: 1200,
        height: 630,
        alt: "Epicware — Local SEO & Reputation Management Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://www.epicware.ai",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Epicware Pte. Ltd.",
  alternateName: "Epicware",
  url: "https://www.epicware.ai",
  logo: "https://www.epicware.ai/assets/epicware-logo.png",
  description:
    "Singapore's #1 Local SEO and Reputation Management platform for SMBs. GBP optimisation, review management, bad review removal, and AI GEO visibility — all in one self-serve dashboard.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Singapore",
    addressCountry: "SG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@epicware.ai",
    telephone: "+6590013157",
    contactType: "customer service",
    areaServed: ["SG", "MY", "AE", "GB", "US"],
  },
  areaServed: ["Singapore", "Malaysia", "United Arab Emirates", "United Kingdom", "United States"],
  sameAs: [
    "https://www.youtube.com/@EpicwareAI/shorts",
    "https://www.instagram.com/epicwareai/",
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

      {/* 3. Social Proof — review widget (deduplicated, 6 unique) */}
      <SocialProof />

      {/* 4. Platform differentiation — 4 premium light cards */}
      <WhyChooseUs />

      {/* 5. Dashboard Screenshot */}
      <DashboardScreenshot />

      {/* 6. Core Services — Bad Review Removal, GBP Optimisation, Review Management */}
      <CoreServices />

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
