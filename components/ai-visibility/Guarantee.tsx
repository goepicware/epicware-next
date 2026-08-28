"use client";

import { motion } from "framer-motion";
import { fadeUp, Verify } from "./shared";
import { TODO_GUARANTEE_TEXT } from "@/lib/ai-visibility-constants";

export default function Guarantee() {
  return (
    <section className="py-14 bg-primary/5 border-y border-primary/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fadeUp()}>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Our guarantee</p>
          <p className="text-2xl lg:text-3xl font-display font-bold text-foreground leading-[1.2]">
            {TODO_GUARANTEE_TEXT ?? <Verify text="confirm exact 90-Day Top-3 Guarantee wording before shipping" />}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
