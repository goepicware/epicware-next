"use client";

import { Verify } from "./shared";
import { AI_VISIBILITY, TODO_AUDIT_COUNT } from "@/lib/ai-visibility-constants";

// Sits directly under the dark hero, continuing the same dark band per the
// mockup (trust strip and hero read as one continuous zone).
export default function TrustStrip() {
  return (
    <div className="relative bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d] pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 pt-5 border-t border-white/10">
          <p className="text-[13.5px] text-white/60">
            {TODO_AUDIT_COUNT ? (
              <b className="text-white font-bold">{TODO_AUDIT_COUNT}</b>
            ) : (
              <Verify text="audit count" />
            )}{" "}
            Singapore businesses audited
          </p>
          {AI_VISIBILITY.trustStrip.map((item) => (
            <p key={item.label} className="text-[13.5px] text-white/60">
              <b className="text-white font-bold">{item.value}</b> {item.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
