"use client";

import { useState, useCallback } from "react";
import BacklinkForm from "@/components/backlink/BacklinkForm";
import BacklinkLoading from "@/components/backlink/BacklinkLoading";
import BacklinkResults from "@/components/backlink/BacklinkResults";
import { toast } from "sonner";
import type { DashboardData, FormInputs } from "@/components/backlink/types";
import { hashInputs } from "@/components/backlink/types";

type PageState = "form" | "generating" | "results";
const CACHE_PREFIX = "backlink_cache_";

export default function BacklinkTool() {
  const [state, setState] = useState<PageState>("form");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [formInputs, setFormInputs] = useState<FormInputs | null>(null);

  const handleSubmit = useCallback(async (inputs: FormInputs) => {
    setFormInputs(inputs);
    const hash = hashInputs(inputs);
    const cacheKey = CACHE_PREFIX + hash;

    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached) as DashboardData;
        if (parsed.opportunities?.length > 0) {
          setDashboardData(parsed);
          setState("results");
          return;
        }
      }
    } catch {}

    setState("generating");

    try {
      const res = await fetch(
        "/api/tools/backlink", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputs),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(err.error || `Request failed (${res.status})`);
      }

      const data: DashboardData = await res.json();

      try {
        if (data.opportunities?.length > 0) localStorage.setItem(cacheKey, JSON.stringify(data));
      } catch {}

      setDashboardData(data);
      setState("results");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Please try again.";
      toast.error(message);
      setState("form");
    }
  }, []);

  const handleReset = useCallback(() => {
    setState("form");
    setDashboardData(null);
    setFormInputs(null);
  }, []);

  const storageKey = formInputs
    ? `backlink_status_${hashInputs(formInputs)}`
    : "backlink_status_default";

  return (
    <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20">
      {state === "form" && <BacklinkForm onSubmit={handleSubmit} />}
      {state === "generating" && <BacklinkLoading />}
      {state === "results" && dashboardData && formInputs && (
        dashboardData.opportunities?.length === 0 ? (
          <div className="max-w-lg mx-auto text-center py-20">
            <p className="text-lg text-muted-foreground mb-6">
              We couldn't find enough specific pages for this category. Try adding more competitors or broader category keywords.
            </p>
            <button onClick={handleReset} className="text-primary hover:underline font-medium">
              ← Edit Your Details
            </button>
          </div>
        ) : (
          <BacklinkResults data={dashboardData} inputs={formInputs} storageKey={storageKey} onReset={handleReset} />
        )
      )}
    </div>
  );
}
