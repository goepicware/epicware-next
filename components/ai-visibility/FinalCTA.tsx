"use client";

import { motion } from "framer-motion";
import { fadeUp, PhotoPlaceholder } from "./shared";
import LeadstackForm from "./LeadstackForm";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function FinalCTA() {
  return (
    <section id="audit-form" className="py-20 lg:py-28 section-gradient-1 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2 {...fadeUp()} className="font-display text-foreground mb-8">
            {AI_VISIBILITY.finalCta.headline}
          </motion.h2>
          {/*
            Photo research came up short on an authentic "relief/good news"
            candidate for this slot — see docs/superpowers/plans/
            2026-08-28-ai-visibility-landing-v2.md Task 14. Left as a labeled
            placeholder rather than forcing a generic staged pick.
          */}
          <motion.div {...fadeUp(0.1)} className="hidden lg:block">
            <PhotoPlaceholder label="Relieved business owner looking at phone/laptop — no authentic candid photo found" className="aspect-[4/3]" />
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.15)} className="bg-card border border-border/60 rounded-3xl p-6 lg:p-8 shadow-card">
          <LeadstackForm />
        </motion.div>
      </div>
    </section>
  );
}
