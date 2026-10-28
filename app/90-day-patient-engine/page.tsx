import type { Metadata } from "next";
import { PRICING } from "@/lib/site/proof";
import { EPICWARE_PROVIDER } from "@/lib/seo-config";
import Hero from "@/components/patient-engine/Hero";
import Problem from "@/components/patient-engine/Problem";
import HowItWorks from "@/components/patient-engine/HowItWorks";
import Timeline from "@/components/patient-engine/Timeline";
import ROISection from "@/components/patient-engine/ROISection";
import ValueStackPrice from "@/components/patient-engine/ValueStackPrice";
import Guarantee from "@/components/patient-engine/Guarantee";
import Proof from "@/components/patient-engine/Proof";
import WhoFor from "@/components/patient-engine/WhoFor";
import FAQ, { PATIENT_ENGINE_FAQS } from "@/components/patient-engine/FAQ";
import PatientEngineFinalCTA from "@/components/patient-engine/PatientEngineFinalCTA";
import PatientEngineStickyCTA from "@/components/patient-engine/PatientEngineStickyCTA";

const PAGE_URL = "https://www.epicware.ai/90-day-patient-engine";
const TITLE = "The 90-Day Patient Engine for Aesthetic Clinics | Epicware";
const DESCRIPTION =
  "More patient enquiries in 90 days, starting week two. Ads, Google Maps, AI search and an AI WhatsApp Assistant run as one system for Singapore aesthetic clinics.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The 90-Day Patient Engine",
  serviceType: "Full Stack marketing system for aesthetic clinics",
  description:
    "Paid ads, Google Maps and local SEO, AI search citation, and an AI WhatsApp Assistant run as one system for Singapore aesthetic clinics, with a written 90-day enquiry guarantee.",
  provider: EPICWARE_PROVIDER,
  areaServed: { "@type": "Country", name: "Singapore" },
  offers: {
    "@type": "Offer",
    price: String(PRICING.plans.fullStack.monthly),
    priceCurrency: "SGD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(PRICING.plans.fullStack.monthly),
      priceCurrency: "SGD",
      unitText: "MONTH",
    },
    url: PAGE_URL,
  },
  url: PAGE_URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PATIENT_ENGINE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function PatientEnginePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />
      <Problem />
      <HowItWorks />
      <Timeline />
      <ROISection />
      <ValueStackPrice />
      <Guarantee />
      <Proof />
      <WhoFor />
      <FAQ />
      <PatientEngineFinalCTA />
      <PatientEngineStickyCTA />
      <div className="h-20 md:hidden" />
    </>
  );
}
