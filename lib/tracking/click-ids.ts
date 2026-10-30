"use client";

/**
 * First-party gclid/gbraid/wbraid capture for offline conversion import
 * (e.g. importing a closed deal into Google Ads weeks after the click).
 * No existing attribution-storage precedent in this repo — this is new.
 *
 * Every function here is wrapped so a storage failure (private browsing,
 * blocked storage, quota) never throws — the page and the form it's used
 * from must keep working exactly as if this file didn't exist.
 */

const STORAGE_KEY = "epicware_click_ids";
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

interface StoredClickIds {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  storedAt: number;
}

export interface ClickIds {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
}

/**
 * Reads gclid/gbraid/wbraid from the current URL and, if any are present,
 * persists them to localStorage for 90 days — overwriting whatever was
 * stored before (last-touch, not first-touch). Call once on page load;
 * see components/tracking/ClickIdCapture.tsx for where that happens.
 */
export function captureClickIdsFromUrl(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid") ?? undefined;
    const gbraid = params.get("gbraid") ?? undefined;
    const wbraid = params.get("wbraid") ?? undefined;
    if (!gclid && !gbraid && !wbraid) return;

    const record: StoredClickIds = { gclid, gbraid, wbraid, storedAt: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage unavailable — never block the page for this.
  }
}

/** Reads back stored click ids, if any are still within the 90-day window. Returns {} (not null) so callers can always spread the result into a payload. */
export function getStoredClickIds(): ClickIds {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const record: StoredClickIds = JSON.parse(raw);
    if (!record.storedAt || Date.now() - record.storedAt > TTL_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    const { gclid, gbraid, wbraid } = record;
    return { gclid, gbraid, wbraid };
  } catch {
    return {};
  }
}
