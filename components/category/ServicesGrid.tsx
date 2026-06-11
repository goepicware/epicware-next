"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ServiceCard {
  name: string;
  description: string;
  href: string;
}

interface ServicesGridProps {
  heading?: string;
  services: ServiceCard[];
}

export default function ServicesGrid({
  heading = "Explore All Services",
  services,
}: ServicesGridProps) {
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-foreground text-center mb-12"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={service.href} className="card-feature group block h-full">
                <div className="card-feature-inner p-7 flex flex-col gap-4 h-full">
                  <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary pt-3 border-t border-border/30">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
