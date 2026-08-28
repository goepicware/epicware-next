"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function ObjectionHandling() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Before you ask</span>
          <h2 className="font-display text-foreground">Common questions</h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="bg-card border border-border/50 rounded-3xl px-6 lg:px-10 py-4 shadow-card">
          <Accordion type="single" collapsible className="w-full">
            {AI_VISIBILITY.objections.map((item, i) => (
              <AccordionItem key={i} value={`objection-${i}`} className="border-border/50 last:border-b-0">
                <AccordionTrigger className="text-left font-semibold text-foreground py-5 text-[0.95rem] hover:no-underline hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
