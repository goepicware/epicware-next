"use client";

import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

export default function DashboardScreenshot() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Awaiting real EpicMap dashboard screenshot — replace this placeholder when available */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 shadow-premium bg-muted" style={{ aspectRatio: "16/9" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground">
              <Monitor className="w-12 h-12 opacity-30" />
              <p className="text-sm font-medium opacity-50">EpicMap Dashboard Screenshot — awaiting real asset</p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-muted-foreground mt-5 text-base"
          >
            One dashboard. Every outlet. Real-time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
