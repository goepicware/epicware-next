"use client";

import { motion } from "framer-motion";
import { X, Check, Search } from "lucide-react";
import { SourceCaption } from "../SourceCaption";
import { useScrollReveal } from "../useScrollReveal";

/**
 * L4 — category choice as the #1 local ranking factor (Whitespark 2026),
 * shown as a weak-match vs strong-match category pair against the same
 * search. Not a copy of any real search engine's results UI.
 */
export default function CategoryComparisonCard() {
  const reveal = useScrollReveal();
  return (
    <motion.div
      {...reveal}
      role="img"
      aria-label="For the search 'ramen near me', the category 'Restaurant' is a weak match while 'Ramen Restaurant' is a strong match"
      className="mx-auto w-full max-w-md rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <div className="flex items-center gap-1.5 mb-4 text-xs font-medium text-muted-foreground" aria-hidden="true">
        <Search className="w-3.5 h-3.5" />
        <span>Search: &ldquo;ramen near me&rdquo;</span>
      </div>

      <div className="grid grid-cols-2 gap-3" aria-hidden="true">
        <div className="rounded-xl border border-border/60 bg-background p-3 opacity-60">
          <div className="flex items-center gap-1.5 mb-1.5">
            <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="text-xs font-semibold text-foreground">Restaurant</span>
          </div>
          <p className="text-[10px] text-muted-foreground">Weak category match</p>
        </div>
        <div className="rounded-xl border-2 border-primary bg-primary/5 p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="text-xs font-semibold text-foreground">Ramen Restaurant</span>
          </div>
          <p className="text-[10px] text-muted-foreground">Strong category match</p>
        </div>
      </div>

      <SourceCaption
        href="https://whitespark.ca/google-business-profile-guide/categories/"
        label="Whitespark's 2026 Local Search Ranking Factors survey"
      />
    </motion.div>
  );
}
