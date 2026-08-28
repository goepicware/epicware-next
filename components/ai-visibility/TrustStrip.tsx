"use client";

import { Check } from "lucide-react";
import { Verify } from "./shared";
import { AI_VISIBILITY, TODO_AUDIT_COUNT } from "@/lib/ai-visibility-constants";

export default function TrustStrip() {
  return (
    <div className="border-y border-border/40 bg-muted/30 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5 text-sm text-muted-foreground text-center">
        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
        {TODO_AUDIT_COUNT ? <span>{TODO_AUDIT_COUNT}</span> : <Verify text="audit count" />}
        <span>{AI_VISIBILITY.trustStrip.suffix}</span>
      </div>
    </div>
  );
}
