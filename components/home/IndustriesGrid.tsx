"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const INDUSTRIES = [
  { emoji: "🍜", label: "F&B / Restaurants", href: "/industries/restaurants" },
  { emoji: "🏥", label: "Medical Clinics", href: "/industries/healthcare-clinics" },
  { emoji: "💇", label: "Hair & Beauty Salons", href: "/industries/nail-hair-salons" },
  { emoji: "🦷", label: "Dental Clinics", href: "/industries/dental-clinics" },
  { emoji: "🚗", label: "Car Workshops", href: "/industries/car-workshops" },
  { emoji: "📚", label: "Tuition Centres", href: "/industries/tuition-centres" },
  { emoji: "💆", label: "Spas & Wellness", href: "/industries/wellness-centres" },
  { emoji: "🛍️", label: "Retail Stores", href: "/industries/retail-stores" },
];

export default function IndustriesGrid() {
  return (
    <section className="py-24 lg:py-32 section-gradient-3">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Industries
          </span>
          <h2 className="font-display text-foreground">Built for Your Industry</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={industry.href}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border/50 hover-lift hover:border-primary/20 hover:shadow-elegant transition-all duration-500 text-center"
              >
                <span className="text-3xl">{industry.emoji}</span>
                <span className="text-xs font-semibold text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
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
