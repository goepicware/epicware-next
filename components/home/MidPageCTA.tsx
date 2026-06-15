"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MidPageCTA() {
  return (
    <section className="py-16 lg:py-20 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-4">
            See it live on your business
          </h2>
          <p className="text-muted-foreground mb-8 text-base leading-relaxed">
            We&apos;ll run a live GBP audit on your business and show you exactly what&apos;s
            costing you customers right now — no obligation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background h-13 px-8 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 group"
          >
            <Link href="/book-demo#form" className="flex items-center gap-2">
              Book a Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
