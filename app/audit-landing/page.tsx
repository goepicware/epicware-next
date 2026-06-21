import Hero from "@/components/landing/Hero";
import EducationSection from "@/components/landing/EducationSection";
import MapPackSignals from "@/components/landing/MapPackSignals";
import SocialProof from "@/components/landing/SocialProof";
import CredibilityBridge from "@/components/landing/CredibilityBridge";
import AuditOffer from "@/components/landing/AuditOffer";
import LeadForm from "@/components/landing/LeadForm";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import StickyBar from "@/components/landing/StickyBar";

export default function AuditLandingPage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Education — The two games of Google */}
      <EducationSection />

      {/* 3. Map Pack signals */}
      <MapPackSignals />

      {/* 4. Social proof */}
      <SocialProof />

      {/* 5. Credibility bridge */}
      <CredibilityBridge />

      {/* 6. The offer */}
      <AuditOffer />

      {/* 7. Lead capture form */}
      <LeadForm />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Final CTA */}
      <FinalCTA />

      {/* Sticky mobile bar */}
      <StickyBar />
    </>
  );
}
