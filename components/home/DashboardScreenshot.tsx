"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor } from "lucide-react";

const PRODUCTS = [
  {
    id: "epicmap",
    name: "EpicMap",
    tagline: "Google Maps rank tracking & grid intelligence",
    image: "/assets/epicmap-screen.png",
  },
  {
    id: "epicreview",
    name: "EpicReview",
    tagline: "Review collection, responses & reputation management",
    image: "/assets/epicreview-screen.png",
  },
  {
    id: "epicengage",
    name: "EpicEngage",
    tagline: "Email, SMS & WhatsApp broadcast campaigns",
    image: null,
  },
  {
    id: "epicsocial",
    name: "EpicSocial",
    tagline: "Social media scheduling & content management",
    image: null,
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
                {p.image === null && (
                  <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide bg-amber-100 text-amber-700 border border-amber-200">
                    SOON
                  </span>
                )}
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
              {current.image ? (
                <Image
                  src={current.image}
                  alt={`${current.name} dashboard screenshot`}
                  fill
                  className="object-cover object-top"
                  priority={active === "epicmap"}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground">
                  <Monitor className="w-12 h-12 opacity-30" />
                  <p className="text-sm font-medium opacity-50">
                    {current.name} Dashboard — screenshot coming soon
                  </p>
                </div>
              )}
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
