"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function WhoItsFor() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 {...fadeUp()} className="font-display text-foreground mb-6">Who it&apos;s for</motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-muted-foreground leading-relaxed text-[1.05rem]">
          {AI_VISIBILITY.whoItsFor.body}
        </motion.p>
      </div>
    </section>
  );
}
