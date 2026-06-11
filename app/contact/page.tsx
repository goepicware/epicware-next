import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Contact Epicware | Book a Strategy Call",
  description:
    "Get in touch with the Epicware team. Book a free strategy call to discuss Local SEO, review management, and reputation growth for your Singapore business.",
  alternates: { canonical: "https://www.epicware.ai/contact" },
  openGraph: {
    title: "Contact Epicware | Book a Strategy Call",
    description: "Book a free strategy call. We'll assess your current growth stage and recommend the right plan.",
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
