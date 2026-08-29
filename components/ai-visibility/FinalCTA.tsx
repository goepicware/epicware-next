"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import LeadstackForm from "./LeadstackForm";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function FinalCTA() {
  return (
    <section id="audit-form" className="py-20 lg:py-28 bg-gradient-to-b from-muted/40 to-background scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp()} className="hidden lg:block relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
          <Image
            src="/assets/ai-visibility/final-cta-relieved-owner.jpg"
            alt="A happy small-business owner"
            fill
            sizes="460px"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="bg-card border border-border/60 rounded-3xl p-8 shadow-elegant">
          <h3 className="font-display font-bold text-foreground text-xl mb-1.5">{AI_VISIBILITY.finalCta.heading}</h3>
          <p className="text-sm text-muted-foreground mb-7">{AI_VISIBILITY.finalCta.sub}</p>
          <LeadstackForm />
        </motion.div>
      </div>
    </section>
  );
}
