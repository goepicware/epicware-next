"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowDown } from "lucide-react";
import { IllustrativeCaption } from "../SourceCaption";
import { useScrollReveal } from "../useScrollReveal";
import { LOCAL_SEO_FICTIONAL_BUSINESS } from "../fixtures";

const DIRECTORIES = [
  { name: "Directory A", address: "12 Market St" },
  { name: "Directory B", address: "12 Market Street" },
  { name: "Directory C", address: "12 Mkt St, #01-02" },
  { name: "Directory D", address: "Old address, Blk 12" },
];

/**
 * L5 — #citation-building. Four directory listings with mismatched
 * address/phone details flowing into one corrected, unified profile.
 * Generic directory labels, not real platform names or UIs.
 */
export default function CitationConsistencyDiagram() {
  const reveal = useScrollReveal();
  return (
    <motion.div
      {...reveal}
      role="img"
      aria-label={`Four directory listings for ${LOCAL_SEO_FICTIONAL_BUSINESS} with mismatched addresses, flowing into one corrected, verified profile`}
      className="mx-auto w-full max-w-lg rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <div aria-hidden="true">
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          {DIRECTORIES.map((d, i) => (
            <div
              key={d.name}
              className={`rounded-lg border p-2.5 ${
                i === 1 ? "border-border/60 bg-background" : "border-red-300 bg-red-50"
              }`}
            >
              <p className="text-[10px] font-semibold text-foreground mb-1">{d.name}</p>
              <p
                className={`text-[9px] leading-snug flex items-start gap-1 ${
                  i === 1 ? "text-muted-foreground" : "text-red-600"
                }`}
              >
                {i !== 1 && <AlertCircle className="w-2.5 h-2.5 shrink-0 mt-0.5" />}
                {d.address}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-1.5">
          <ArrowDown className="w-4 h-4 text-primary/60" />
        </div>

        <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50 p-3 flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-foreground truncate">{LOCAL_SEO_FICTIONAL_BUSINESS}</p>
            <p className="text-[9px] text-emerald-700">12 Market Street, Singapore — verified everywhere</p>
          </div>
        </div>
      </div>
      <IllustrativeCaption />
    </motion.div>
  );
}
