"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import AuditInput from "./AuditInput";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function FinalCTA() {
  const { hero, finalCta } = AI_VISIBILITY;
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2 {...fadeUp()} className="font-display text-foreground mb-10">
          {finalCta.headline}
        </motion.h2>
        <motion.div {...fadeUp(0.1)} className="flex justify-center">
          <AuditInput ctaLabel={hero.ctaLabel} microCopy={hero.microCopy} />
        </motion.div>
      </div>
    </section>
  );
}
