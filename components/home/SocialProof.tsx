"use client";

import { motion } from "framer-motion";
import GoogleReviewsWidget from "@/components/home/GoogleReviewsWidget";

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Social Proof
          </span>
          <h2 className="font-display text-foreground">
            Trusted by Singapore SMBs
          </h2>
        </motion.div>

        {/* Google Reviews — EpicReview Wall of Love widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <GoogleReviewsWidget />
        </motion.div>
      </div>
    </section>
  );
}
