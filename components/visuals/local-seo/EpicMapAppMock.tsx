"use client";

import { motion } from "framer-motion";
import AppWindowFrame from "../AppWindowFrame";
import { Geogrid } from "../Geogrid";
import { IllustrativeCaption } from "../SourceCaption";
import { useScrollReveal } from "../useScrollReveal";

const KEYWORDS = [
  { term: "local seo agency", rank: 2 },
  { term: "google maps ranking", rank: 4 },
  { term: "citation building", rank: 1 },
  { term: "local rank tracker", rank: 6 },
];

/**
 * L10 — software block. A stylised EpicMap app window with a grid and a
 * keyword-rank list, built entirely in HTML/CSS/SVG. Not a screenshot of
 * real client data.
 */
export default function EpicMapAppMock() {
  const reveal = useScrollReveal();
  return (
    <motion.div {...reveal} className="mx-auto w-full max-w-md">
      <AppWindowFrame title="EpicMap — rank tracking">
        <div
          role="img"
          aria-label="EpicMap product interface showing a rank grid and a list of tracked keywords with their current rank"
          className="grid grid-cols-2 gap-4"
        >
          <div aria-hidden="true">
            <Geogrid size={5} coverage={0.3} cellClassName="w-5 h-5" />
          </div>
          <div className="space-y-1.5" aria-hidden="true">
            {KEYWORDS.map((k) => (
              <div key={k.term} className="flex items-center justify-between text-[10px]">
                <span className="text-muted-foreground truncate pr-2">{k.term}</span>
                <span
                  className={`font-bold shrink-0 ${k.rank <= 3 ? "text-emerald-600" : "text-amber-600"}`}
                >
                  #{k.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AppWindowFrame>
      <IllustrativeCaption />
    </motion.div>
  );
}
