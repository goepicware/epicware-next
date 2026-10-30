"use client";

import { useEffect } from "react";
import { captureClickIdsFromUrl } from "@/lib/tracking/click-ids";

/** Mounted once in the root layout — captures gclid/gbraid/wbraid off the landing URL into first-party storage. Renders nothing. */
export default function ClickIdCapture() {
  useEffect(() => {
    captureClickIdsFromUrl();
  }, []);
  return null;
}
