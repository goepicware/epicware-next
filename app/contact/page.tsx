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
      images: [{ url: "/assets/HeroBanner-og.jpg", width: 1448, height: 1086, alt: "Epicware" }],
    title: "Contact Epicware | Singapore SEO & Digital Marketing Team",
    description: "Talk to Epicware's Singapore team about SEO, Google Maps, AI search or reviews. Email hello@epicware.ai, WhatsApp us or book a free strategy call.",
    url: "https://www.epicware.ai/contact",
  },
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.epicware.ai" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.epicware.ai/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
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

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-display font-bold text-foreground text-2xl mb-8 text-center">
            What Happens After You Reach Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <p className="font-display font-bold text-primary text-3xl mb-2">1</p>
              <p className="text-sm text-muted-foreground">We pull your current Google Maps ranking, review profile, and AI search visibility before the call.</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-primary text-3xl mb-2">2</p>
              <p className="text-sm text-muted-foreground">On the 30-minute call, we walk through what's holding you back and what to fix first.</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-primary text-3xl mb-2">3</p>
              <p className="text-sm text-muted-foreground">You leave with a prioritised action list — whether or not you work with us.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-1.5">How fast will I hear back?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">We reply to every form submission within one business day. For a faster response, use the WhatsApp link below.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1.5">Do I need to prepare anything for the call?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">No — just your Google Business Profile link (or business name and location) if you have it. We'll pull the rest.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1.5">What if I'm not ready to commit to a plan yet?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">That's fine — the strategy call has no obligation attached. Most businesses use it to understand where they actually stand before deciding anything.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1.5">Can I reach you outside of this form?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Yes — email <a href="mailto:hello@epicware.ai" className="text-primary font-medium hover:underline">hello@epicware.ai</a> or message us on WhatsApp directly, and we'll pick it up the same way.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
