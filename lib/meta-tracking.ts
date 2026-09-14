"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function generateEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback for older environments
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export interface TrackEventOptions {
  userData?: {
    em?: string;
    ph?: string;
  };
  customData?: Record<string, unknown>;
}

export function trackEvent(eventName: string, options: TrackEventOptions = {}): void {
  if (typeof window === "undefined") return;

  const eventId = generateEventId();
  const eventSourceUrl = window.location.href;
  const { userData, customData } = options;

  // 1. Browser pixel — fires first so the cookie/session is captured immediately
  if (window.fbq) {
    window.fbq("track", eventName, customData ?? {}, { eventID: eventId });
  }

  // 2. Server-side CAPI — same event_id for deduplication
  fetch("/api/meta-capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: eventSourceUrl,
      user_data: {
        ...(userData?.em ? { em: userData.em } : {}),
        ...(userData?.ph ? { ph: userData.ph } : {}),
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
      },
      ...(customData ? { custom_data: customData } : {}),
    }),
  }).catch(() => {}); // tracking must never break UX
}

export function trackPageView(): void {
  trackEvent("PageView");
}
