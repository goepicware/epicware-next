"use client";

// Collapsed-by-default for cold visitors; this exact section is used live
// on sales calls: do not change its position or single-open behavior
// without checking with Vignesh first.

import { useId, useState, type ComponentType } from "react";
import { ChevronDown } from "lucide-react";
import GBPFoundationSection from "./GBPFoundationSection";
import ReviewGrowthSection from "./ReviewGrowthSection";
import LocalSEOMappingSection from "./LocalSEOMappingSection";
import WebsiteAISection from "./WebsiteAISection";
import SocialContentSection from "./SocialContentSection";

type Step = {
  num: string;
  title: string;
  benefit: string;
  badgeBg: string;
  Panel: ComponentType;
};

// Title + benefit line + badge color are pulled verbatim from each panel's
// own step-marker/H3 — not new copy. Panel components are rendered as-is,
// with no internal edits.
const STEPS: Step[] = [
  {
    num: "01",
    title: "Google Business Profile Foundation",
    benefit: "Optimise the Google Profile Customers Already Trust",
    badgeBg: "bg-violet-600",
    Panel: GBPFoundationSection,
  },
  {
    num: "02",
    title: "Review Growth & Reputation Management",
    benefit: "Turn Every Customer Visit Into Reputation Growth",
    badgeBg: "bg-orange-500",
    Panel: ReviewGrowthSection,
  },
  {
    num: "03",
    title: "Local SEO Visibility Mapping",
    benefit: "Map Where Customers Can Actually Find You",
    badgeBg: "bg-orange-500",
    Panel: LocalSEOMappingSection,
  },
  {
    num: "04",
    title: "Website + AI Visibility Engine",
    benefit: "Make Your Website Easier For Google And AI To Trust",
    badgeBg: "bg-blue-600",
    Panel: WebsiteAISection,
  },
  {
    num: "05",
    title: "Social Content Distribution Engine",
    benefit: "Turn Local SEO Insights Into Social Content",
    badgeBg: "bg-rose-500",
    Panel: SocialContentSection,
  },
];

export default function WorkflowAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="bg-white border-y border-gray-100 divide-y divide-gray-100">
      {STEPS.map((step, i) => {
        const isOpen = openIndex === i;
        const headerId = `${baseId}-header-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        const Panel = step.Panel;

        return (
          <div key={step.title}>
            <h3 className="m-0">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full min-h-11 text-left hover:bg-gray-50/70 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
              >
                <div className="mx-auto max-w-7xl px-6 flex items-center gap-4 py-5 lg:py-6">
                  <span
                    className={`w-9 h-9 rounded-full ${step.badgeBg} text-white text-[0.875rem] font-bold shrink-0 flex items-center justify-center`}
                  >
                    {step.num}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-gray-950 text-[1.05rem] leading-tight">
                      {step.title}
                    </span>
                    <span className="block text-gray-500 text-sm mt-0.5 truncate">{step.benefit}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <Panel />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
