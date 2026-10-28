"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import TrackedCta from "./TrackedCta";

/**
 * Bottom sticky CTA bar, mobile only (<768px). Appears once the user
 * scrolls past the hero (#pe-hero-end sentinel leaves the viewport) and
 * hides again while the Final CTA section (#pe-final-cta) is in view, so
 * it never competes with that section's own full-width CTAs. Shares
 * StickyMobileCTA's height/offset shape (h-12 button, py-3 wrapper,
 * border-t) so the global ChatWidget's existing bottom-offset fix
 * (components/layout/ChatWidget.tsx, bottom-[calc(92px+...)] at
 * lg:hidden) continues to clear it without any change there.
 */
export default function PatientEngineStickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [finalCtaInView, setFinalCtaInView] = useState(false);

  useEffect(() => {
    const heroEnd = document.getElementById("pe-hero-end");
    const finalCta = document.getElementById("pe-final-cta");
    if (!heroEnd || !finalCta) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    const finalCtaObserver = new IntersectionObserver(([entry]) => setFinalCtaInView(entry.isIntersecting), {
      threshold: 0,
    });

    heroObserver.observe(heroEnd);
    finalCtaObserver.observe(finalCta);

    return () => {
      heroObserver.disconnect();
      finalCtaObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !finalCtaInView;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      // inert (not aria-hidden) while off-screen — aria-hidden on a
      // container with a focusable Link inside is itself an a11y
      // violation (axe: aria-hidden-focus) when that link stays tabbable.
      inert={!visible}
    >
      <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 px-4 py-3">
        <TrackedCta
          href="#audit-form"
          ctaType="audit"
          ctaLocation="sticky"
          className="flex items-center justify-center gap-2 h-12 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
        >
          Get My Free Audit <ArrowRight className="w-4 h-4" />
        </TrackedCta>
      </div>
    </div>
  );
}
