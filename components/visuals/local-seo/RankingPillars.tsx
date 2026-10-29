"use client";

import { motion } from "framer-motion";
import { Target, MapPinned, Star } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

const PILLARS = [
  { icon: Target, name: "Relevance", labels: ["Categories", "Services", "Description"] },
  { icon: MapPinned, name: "Distance", labels: ["Searcher's location", "Your service area"] },
  { icon: Star, name: "Prominence", labels: ["Reviews", "Citations", "Links"] },
];

/**
 * L3 — Google's three-factor local ranking model (relevance, distance,
 * prominence), scannable in three seconds, sitting above the ranking
 * factors table.
 */
export default function RankingPillars() {
  return (
    <div
      role="img"
      aria-label="Google's three local ranking factors: Relevance (categories, services, description), Distance (searcher's location, your service area), and Prominence (reviews, citations, links)"
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
    >
      {PILLARS.map((pillar, i) => (
        <Pillar key={pillar.name} pillar={pillar} index={i} />
      ))}
    </div>
  );
}

function Pillar({ pillar, index }: { pillar: (typeof PILLARS)[number]; index: number }) {
  const reveal = useScrollReveal(index * 0.1);
  const Icon = pillar.icon;
  return (
    <motion.div
      {...reveal}
      aria-hidden="true"
      className="rounded-2xl border border-border/60 bg-card p-5 text-center"
    >
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h4 className="font-display font-semibold text-foreground text-sm mb-2">{pillar.name}</h4>
      <ul className="space-y-1">
        {pillar.labels.map((label) => (
          <li key={label} className="text-[11px] text-muted-foreground">
            {label}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
