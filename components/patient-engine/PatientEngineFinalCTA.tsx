import { ArrowRight } from "lucide-react";
import TrackedCta from "./TrackedCta";

export default function PatientEngineFinalCTA() {
  return (
    <section id="pe-final-cta" className="py-16 lg:py-24 section-dark">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="font-display font-bold text-white mb-5">
          Find Out How Many Patients You&apos;re Losing Right Now, Free.
        </h2>
        <p className="text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
          Our missed-revenue audit shows where you rank on Google Maps against nearby clinics, whether AI
          search mentions you, and roughly what that&apos;s costing you each month.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <TrackedCta
            href="/free-audit"
            ctaType="audit"
            ctaLocation="final"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-foreground font-semibold text-base hover:bg-white/90 transition-colors w-full sm:w-auto"
          >
            Get My Free Missed-Revenue Audit <ArrowRight className="w-4 h-4" />
          </TrackedCta>
          <TrackedCta
            href="/book-demo?service=full-stack&country=singapore#form"
            ctaType="strategy_call"
            ctaLocation="final"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Book a Strategy Call
          </TrackedCta>
        </div>

        <p className="text-sm text-white/60">
          5 new clinics a month. When this month&apos;s slots are gone, the next opening is next month.
        </p>
      </div>
    </section>
  );
}
