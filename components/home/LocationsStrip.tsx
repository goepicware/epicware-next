"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface LocationStripItem {
  flag: string;
  label: string;
  href: string;
}

/**
 * Locations shown here must have real, non-draft content — this strip
 * links out from the homepage, so a draft hub (no market proof yet)
 * showing up here would be exactly the "claiming a market without proof"
 * problem the Phase 3 restructure correction flagged. The caller (a
 * server component, since draft status is read from the filesystem)
 * computes the list and passes it in.
 */
export default function LocationsStrip({ locations }: { locations: LocationStripItem[] }) {
  return (
    <section className="py-14 lg:py-20 bg-card border-t border-border/40">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center mb-6">
            Serving SMBs Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {locations.map((loc, i) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <span className="text-xl">{loc.flag}</span>
                <span>{loc.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
