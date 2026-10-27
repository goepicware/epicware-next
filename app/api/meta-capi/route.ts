import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function normalizeEmail(em: string): string {
  return em.toLowerCase().trim();
}

function normalizePhone(ph: string): string {
  // Strip everything except digits and a leading +, then drop the + for hashing
  // Meta expects E.164 digits only (no + sign) when pre-hashing
  return ph.replace(/[^+\d]/g, "").replace(/^\+/, "");
}

interface UserDataInput {
  em?: string;
  ph?: string;
  fbp?: string;
  fbc?: string;
}

interface EventPayload {
  event_name?: string;
  event_id?: string;
  event_source_url?: string;
  user_data?: UserDataInput;
  custom_data?: Record<string, unknown>;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      return NextResponse.json({ ok: true });
    }

    const body: EventPayload = await req.json();
    const { event_name, event_id, event_source_url, user_data = {}, custom_data } = body;

    if (!event_name) {
      return NextResponse.json({ ok: true });
    }

    // Client IP — Vercel sets x-forwarded-for; take the first (real client) IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "";
    const userAgent = req.headers.get("user-agent") || "";

    // Build hashed user_data — only include fields that are present
    const hashedUserData: Record<string, string> = {};
    if (user_data.em) hashedUserData.em = sha256(normalizeEmail(user_data.em));
    if (user_data.ph) hashedUserData.ph = sha256(normalizePhone(user_data.ph));
    if (user_data.fbp) hashedUserData.fbp = user_data.fbp;
    if (user_data.fbc) hashedUserData.fbc = user_data.fbc;
    if (ip) hashedUserData.client_ip_address = ip;
    if (userAgent) hashedUserData.client_user_agent = userAgent;

    const eventData: Record<string, unknown> = {
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id,
      event_source_url,
      action_source: "website",
      user_data: hashedUserData,
    };
    if (custom_data && Object.keys(custom_data).length > 0) {
      eventData.custom_data = custom_data;
    }

    const payload: Record<string, unknown> = { data: [eventData] };

    // META_TEST_EVENT_CODE is set in both Preview and Production in Vercel
    // (it's used for local/preview testing in Meta's Test Events tool) — so
    // it must only be attached outside real production, or every live
    // conversion event gets diverted into Test Events instead of counting.
    const testCode = process.env.META_TEST_EVENT_CODE;
    if (testCode && process.env.VERCEL_ENV !== "production") {
      payload.test_event_code = testCode;
    }

    const res = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      console.error("[meta-capi] API error:", await res.text());
    }
  } catch (err) {
    console.error("[meta-capi] exception:", err);
  }

  return NextResponse.json({ ok: true });
}
