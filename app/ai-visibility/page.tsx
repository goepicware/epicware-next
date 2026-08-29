import type { Metadata } from "next";
import { MinimalHeader, MinimalFooter } from "@/components/ai-visibility/MinimalChrome";
import Hero from "@/components/ai-visibility/Hero";
import TrustStrip from "@/components/ai-visibility/TrustStrip";
import ShiftBand from "@/components/ai-visibility/ShiftBand";
import FeatureGrid from "@/components/ai-visibility/FeatureGrid";
import WhoItsFor from "@/components/ai-visibility/WhoItsFor";
import HowItWorks from "@/components/ai-visibility/HowItWorks";
import ObjectionList from "@/components/ai-visibility/ObjectionList";
import Guarantee from "@/components/ai-visibility/Guarantee";
import FinalCTA from "@/components/ai-visibility/FinalCTA";
import StickyAuditBar from "@/components/ai-visibility/StickyAuditBar";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export const metadata: Metadata = {
  title: "AI Search Visibility Check Singapore — Free 60-Second Audit",
  description:
    "See if ChatGPT, Claude, Gemini and Perplexity recommend your business. Free 60-second AI visibility + Google Maps ranking audit for Singapore SMBs.",
  alternates: { canonical: "https://www.epicware.ai/ai-visibility" },
  openGraph: {
    title: "AI Search Visibility Check Singapore — Free 60-Second Audit | Epicware",
    description:
      "See if ChatGPT, Claude, Gemini and Perplexity recommend your business. Free 60-second AI visibility + Google Maps ranking audit for Singapore SMBs.",
    url: "https://www.epicware.ai/ai-visibility",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AI_VISIBILITY.objections.map((o) => ({
    "@type": "Question",
    name: o.q,
    acceptedAnswer: { "@type": "Answer", text: o.a },
  })),
};

export default function AIVisibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <MinimalHeader />
      <Hero />
      <TrustStrip />
      <ShiftBand />
      <FeatureGrid />
      <WhoItsFor />
      <HowItWorks />
      <ObjectionList />
      <Guarantee />
      <FinalCTA />
      <MinimalFooter />
      <StickyAuditBar />
      <div className="h-20 md:hidden" />
    </>
  );
}
