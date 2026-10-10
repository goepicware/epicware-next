import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: { absolute: "Contact Epicware | Singapore SEO & Digital Marketing Team" },
  description:
    "Talk to Epicware's Singapore team about SEO, Google Maps, AI search or reviews. Email hello@epicware.ai, WhatsApp us or book a free strategy call.",
  alternates: { canonical: "https://www.epicware.ai/contact" },
  openGraph: {
    title: "Contact Epicware | Singapore SEO & Digital Marketing Team",
    description: "Talk to Epicware's Singapore team about SEO, Google Maps, AI search or reviews. Email hello@epicware.ai, WhatsApp us or book a free strategy call.",
    url: "https://www.epicware.ai/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient pt-28 pb-12">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            STRATEGY CALL · FREE · 30 MIN
          </div>
          <h1 className="font-display font-bold text-foreground mb-4 leading-tight">
            Book a Strategy Call
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We'll assess your current visibility, your Google rating, and your competitors — and tell you exactly what to prioritise.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
