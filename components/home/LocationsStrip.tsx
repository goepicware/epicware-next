"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LOCATIONS = [
  { flag: "🇸🇬", label: "Singapore", href: "/locations/singapore" },
  { flag: "🇲🇾", label: "Malaysia", href: "/locations/malaysia" },
  { flag: "🇦🇪", label: "UAE", href: "/locations/dubai" },
  { flag: "🇬🇧", label: "United Kingdom", href: "/locations/uk" },
  { flag: "🇺🇸", label: "United States", href: "/locations/usa" },
];

export default function LocationsStrip() {
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
            {LOCATIONS.map((loc, i) => (
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
