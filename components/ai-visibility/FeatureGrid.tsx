"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import AuditReportMock from "./AuditReportMock";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function FeatureGrid() {
  const { features } = AI_VISIBILITY;
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp()}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">{features.kicker}</span>
          <h2 className="font-display text-foreground max-w-xl">{features.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {features.items.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(0.1 * i)} className="bg-card border border-border/60 rounded-2xl p-6 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl mb-4">{f.emoji}</div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.2)} className="mt-11">
          <AuditReportMock />
          <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-2xl">
            {features.reportCaption}{" "}
            <em className="not-italic text-muted-foreground/70">(Illustrative mock — replaced with your live audit on submission.)</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
