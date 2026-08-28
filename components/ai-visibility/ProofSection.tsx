"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { PROOF_STAT } from "@/lib/ai-visibility-constants";

// Only rendered when SHOW_PROOF_SECTION is true AND PROOF_STAT is filled in —
// gated in app/ai-visibility/page.tsx. Never hardcode example numbers here;
// wait for a real client stat, per the build spec's explicit "don't guess"
// instruction for this section.
export default function ProofSection() {
  if (!PROOF_STAT) return null;
  return (
    <section className="py-20 lg:py-28 section-gradient-3">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fadeUp()} className="bg-card border border-border/60 rounded-3xl p-8 lg:p-10 shadow-card">
          <p className="text-2xl font-display font-bold text-foreground mb-3">{PROOF_STAT.headline}</p>
          <p className="text-muted-foreground leading-relaxed">{PROOF_STAT.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
