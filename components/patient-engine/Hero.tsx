import { ArrowRight } from "lucide-react";
import TrackedCta from "./TrackedCta";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="pt-28 pb-10 lg:pt-32 lg:pb-16 hero-gradient">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text column — renders first in source order, so it's what's
              above the fold on mobile; the visual stacks below it there
              and sits beside it from lg up. */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary tracking-wide mb-5">
              The 90-Day Patient Engine · For Singapore Aesthetic Clinics
            </span>

            <h1 className="font-display font-bold text-foreground mb-5 leading-[1.08]">
              More Patient Enquiries in 90 Days, Starting Week Two.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Ads bring patients in now. Google Maps and AI search keep them coming later. The system is built
              so your ads can pay for themselves from week two while your free channels grow underneath.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
              <TrackedCta
                href="#audit-form"
                ctaType="audit"
                ctaLocation="hero"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-colors w-full sm:w-auto"
              >
                Get My Free Missed-Revenue Audit <ArrowRight className="w-4 h-4" />
              </TrackedCta>
              <TrackedCta
                href="/book-demo?service=full-stack&country=singapore#form"
                ctaType="strategy_call"
                ctaLocation="hero"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full border border-border font-semibold text-base hover:border-primary/40 transition-colors w-full sm:w-auto"
              >
                Book a Strategy Call
              </TrackedCta>
            </div>

            <p className="text-sm text-muted-foreground">
              Measured in calls, bookings and WhatsApp enquiries, not rankings. Only 5 new clinics onboarded per
              month.
            </p>
          </div>

          <HeroVisual />
        </div>
      </div>
      {/* Sentinel for PatientEngineStickyCTA — marks where "past the hero" begins. */}
      <div id="pe-hero-end" aria-hidden="true" />
    </section>
  );
}
