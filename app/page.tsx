import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import UrgencySection from "@/components/home/UrgencySection";
import SocialProof from "@/components/home/SocialProof";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NoRemovalNoFee from "@/components/home/NoRemovalNoFee";
import DashboardScreenshot from "@/components/home/DashboardScreenshot";
import CoreServices from "@/components/home/CoreServices";
import MidPageCTA from "@/components/home/MidPageCTA";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import AboutCredentials from "@/components/home/AboutCredentials";
import FAQSection from "@/components/home/FAQSection";
import LocationsStrip from "@/components/home/LocationsStrip";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Local SEO & Reputation Management Platform for SMBs | Epicware",
  description:
    "Singapore's #1 Local SEO & Reputation Management platform for SMBs. Rank higher on Google Maps, generate more reviews, and remove bad ones — all in one dashboard.",
  openGraph: {
    title: "Local SEO & Reputation Management Platform for SMBs | Epicware",
    description:
      "Rank higher on Google Maps, generate more reviews, and remove bad ones — all from one dashboard built for Singapore businesses.",
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
