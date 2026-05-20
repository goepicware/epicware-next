"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const INDUSTRIES = [
  { emoji: "🍜", label: "Restaurants", href: "/industries/restaurants" },
  { emoji: "✂️", label: "Nail & Hair Salons", href: "/industries/nail-hair-salons" },
  { emoji: "🏥", label: "Healthcare Clinics", href: "/industries/healthcare-clinics" },
  { emoji: "📚", label: "Tuition Centres", href: "/industries/tuition-centres" },
  { emoji: "🧘", label: "Wellness Centres", href: "/industries/wellness-centres" },
];

export default function IndustriesGrid() {
  return (
    <section className="py-24 lg:py-32 section-gradient-2">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Who We Serve
          </span>
          <h2 className="font-display text-foreground">
            Built for Singapore&apos;s local businesses
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={industry.href}
                className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-card border border-border/50 hover-lift hover:border-primary/20 hover:shadow-elegant transition-all duration-500 text-center"
              >
                <span className="text-4xl">{industry.emoji}</span>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                  {industry.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
