"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import AuditReportMock from "./AuditReportMock";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function SampleReport() {
  return (
    <section className="py-20 lg:py-28 section-gradient-2">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">See it for yourself</span>
          <h2 className="font-display text-foreground">A real audit, not a template</h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="relative">
          <AuditReportMock />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </motion.div>

        <motion.p {...fadeUp(0.15)} className="text-center text-lg text-foreground leading-relaxed mt-8">
          {AI_VISIBILITY.sampleReport.line}
        </motion.p>
      </div>
    </section>
  );
}
