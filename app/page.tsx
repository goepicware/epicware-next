import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import CoreSolutions from "@/components/home/CoreSolutions";
import ResultsCarousel from "@/components/home/ResultsCarousel";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import ResourcesPreview from "@/components/home/ResourcesPreview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "AI-Powered Growth Platform for Local Businesses in Singapore",
  description:
    "Epicware helps local businesses in Singapore rank higher on Google Maps, get more Google reviews, and grow with AI-powered SEO services and software.",
  openGraph: {
    title: "Epicware — AI-Powered Growth Platform for Local Businesses",
    description:
      "Rank higher on Google Maps. Get more reviews. Grow your business with AI-powered Local SEO and reputation management.",
    url: "https://www.epicware.ai",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Epicware",
            url: "https://www.epicware.ai",
            logo: "https://www.epicware.ai/assets/epicware-logo.png",
            description:
              "AI-powered Local SEO, reputation management, and growth platform for local businesses in Singapore.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Singapore",
              addressCountry: "SG",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "hello@epicware.ai",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.youtube.com/@EpicwareAI/shorts",
              "https://www.instagram.com/epicwareai/",
            ],
          }),
        }}
      />

      <HeroSection />
      <TrustBar />
      <CoreSolutions />
      <ResultsCarousel />
      <IndustriesGrid />
      <ResourcesPreview />
      <FinalCTA />
    </>
  );
}
