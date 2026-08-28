"use client";

import { motion } from "framer-motion";
import { fadeUp, Verify } from "./shared";
import { AI_VISIBILITY, TODO_AGENCY_PRICE_LOW, TODO_AGENCY_PRICE_HIGH } from "@/lib/ai-visibility-constants";

export default function FeatureGrid() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">What you get</span>
          <h2 className="font-display text-foreground">What the free audit shows</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {AI_VISIBILITY.features.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(0.1 * i)} className="bg-card border border-border/60 rounded-2xl p-6 shadow-card">
              <div className="text-3xl mb-4">{f.emoji}</div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.2)} className="text-center text-muted-foreground">
          {TODO_AGENCY_PRICE_LOW && TODO_AGENCY_PRICE_HIGH ? (
            <>An agency charges S${TODO_AGENCY_PRICE_LOW}–S${TODO_AGENCY_PRICE_HIGH} for this. Yours is free and takes 60 seconds.</>
          ) : (
            <>An agency charges <Verify text="agency price range (S$X–S$Y)" /> for this. Yours is free and takes 60 seconds.</>
          )}
        </motion.p>
      </div>
    </section>
  );
}
