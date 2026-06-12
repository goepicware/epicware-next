"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    id: "epicmap",
    name: "EpicMap",
    tagline: "Google Maps rank tracking & grid intelligence",
    image: "/assets/EpicMaps.png",
  },
  {
    id: "epicreview",
    name: "EpicReview",
    tagline: "Review collection, responses & reputation management",
    image: "/assets/EpicReview.png",
  },
  {
    id: "epicengage",
    name: "EpicEngage",
    tagline: "Email, SMS & WhatsApp broadcast campaigns",
    image: "/assets/EpicEngage.png",
  },
  {
    id: "epicsocial",
    name: "EpicSocial",
    tagline: "Social media scheduling & content management",
    image: "/assets/EpicSocial.png",
  },
] as const;

export default function DashboardScreenshot() {
  const [active, setActive] = useState<string>("epicmap");
  const current = PRODUCTS.find((p) => p.id === active)!;

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Tab bar */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-muted/60 border border-border/50">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === p.id
                    ? "bg-card text-foreground shadow-sm border border-border/60"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 shadow-premium bg-muted" style={{ aspectRatio: "16/9" }}>
              <Image
                src={current.image}
                alt={`${current.name} dashboard screenshot`}
                fill
                className="object-cover object-top"
                priority={active === "epicmap"}
              />
            </div>

            <p className="text-center text-muted-foreground mt-4 text-sm">
              <span className="font-semibold text-foreground">{current.name}</span>
              {" — "}
              {current.tagline}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
