import { NextRequest, NextResponse } from "next/server";
import { rateLimitResponse } from "@/lib/rate-limit";

/**
 * Durable capture, logged before anything that can fail (validation,
 * Resend). A lead must never be lost silently — if Supabase env vars
 * ever get configured (lib/supabase.ts exists but NEXT_PUBLIC_SUPABASE_URL/
 * NEXT_PUBLIC_SUPABASE_ANON_KEY are not set as of 2026-10-28), this is the
 * place to also insert into a `leads` table. Until then, the structured
 * log is the durability guarantee: greppable, and captured by Vercel's
 * runtime logs regardless of what happens afterward in this handler.
 */
function backupLead(body: unknown, isTest: boolean) {
  try {
    console.log("[LEAD_BACKUP]", JSON.stringify({ source: "audit-lead", isTest, receivedAt: new Date().toISOString(), body }));
  } catch (err) {
    console.error("[LEAD_BACKUP] failed to log lead — this should never happen", err);
  }
}

/**
 * Shared sender for ServiceLeadCTA (components/site/ServiceLeadCTA.tsx)
 * leads — local-seo and gbp-audit today. review-removal predates this
 * helper and keeps its own inline branch below rather than being
 * refactored onto it, since that one's already live in production.
 */
async function sendCtaLeadEmail(opts: {
  apiKey: string;
  isTest: boolean;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  pageLabel: string;
  pagePath: string;
  color: string;
  emoji: string;
  extraFields: { label: string; value?: string }[];
}): Promise<NextResponse> {
  const { apiKey, isTest, name, email, phone, country, pageLabel, pagePath, color, emoji, extraFields } = opts;

  const extraRowsHtml = extraFields
    .map(
      (f) =>
        `<tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 0; color: #6b7280; width: 160px; font-size: 14px;">${f.label}</td><td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${f.value || "—"}</td></tr>`
    )
    .join("");
  const extraRowsText = extraFields.map((f) => `${f.label}: ${f.value || "—"}`).join("\n");

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <div style="background: ${color}; padding: 20px 24px; border-radius: 12px 12px 0 0;">
        <h2 style="color: white; margin: 0; font-size: 18px;">${emoji} New ${pageLabel} Lead</h2>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; width: 160px; font-size: 14px;">Name</td>
            <td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email</td>
            <td style="padding: 10px 0; font-weight: 600; font-size: 14px;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone</td>
            <td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${phone || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Country</td>
            <td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${country || "—"}</td>
          </tr>
          ${extraRowsHtml}
        </table>
        <p style="margin: 20px 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
          Submitted ${new Date().toLocaleString("en-SG", { timeZone: "Asia/Singapore" })} SGT via epicware.ai/locations/${country || "unknown"}/${pagePath}
        </p>
      </div>
    </div>
  `;
  const text = `New ${pageLabel} Lead\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nCountry: ${country || "—"}\n${extraRowsText}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from: "Epicware Audit <noreply@epicware.ai>",
        to: ["vignesh@epicware.ai"],
        reply_to: email,
        subject: `${isTest ? "[TEST] " : ""}${pageLabel} Lead — ${name} (${country || "unknown"})`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error(`[audit-lead] Resend error (${pagePath}):`, await res.text());
      return NextResponse.json({ success: true, emailSent: false });
    }
  } catch (err) {
    console.error(`[audit-lead] Resend request threw (${pagePath}):`, err);
    return NextResponse.json({ success: true, emailSent: false });
  }
  return NextResponse.json({ success: true, emailSent: true });
}

export async function POST(req: NextRequest) {
  const limited = rateLimitResponse(req, "audit-lead");
  if (limited) return limited;

  const isTest = req.headers.get("x-epicware-test") === "1";
  // A test request validates the payload and Resend config but skips the
  // actual send by default — only the daily smoke-test run sets this too,
  // so there's exactly one real inbox confirmation per day instead of one
  // per deploy.
  const sendAnyway = req.headers.get("x-epicware-test-send") === "1";
  const shouldSkipSend = isTest && !sendAnyway;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  // Log first, before any validation or send attempt can fail — this is
  // the one line in this handler that must always run.
  backupLead(body, isTest);

  const {
    name, email, phone, leadType,
    businessName, businessAddress, websiteUrl,
    placeId, keywords, radiusKm,
    country, reviewProfileUrl, notes,
    businessNameOrMapsLink, cityMetro, gbpMapsLink,
    reviewManagementProfileLink,
  } = body as {
    name?: string; email?: string; phone?: string; leadType?: string;
    businessName?: string; businessAddress?: string; websiteUrl?: string;
    placeId?: string; keywords?: string[]; radiusKm?: number;
    country?: string; reviewProfileUrl?: string; notes?: string;
    businessNameOrMapsLink?: string; cityMetro?: string; gbpMapsLink?: string;
    reviewManagementProfileLink?: string;
  };

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ success: false, error: "Name and email are required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[audit-lead] RESEND_API_KEY not set — lead backed up to logs only, not emailed");
    return NextResponse.json({ success: true, emailSent: false });
  }

  if (shouldSkipSend) {
    console.log("[audit-lead] X-Epicware-Test set without X-Epicware-Test-Send — payload and Resend config validated, send skipped");
    return NextResponse.json({ success: true, emailSent: false, skipped: true });
  }

  // Review-removal CTA leads (components/site/ServiceLeadCTA.tsx) carry a
  // Google/Yelp profile URL and an optional note instead of a GBP audit's
  // business/keyword fields — distinct enough to warrant their own email
  // shape rather than forcing them through the audit template below.
  if (leadType === "review-removal") {
    const reviewRemovalHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: #DC2626; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h2 style="color: white; margin: 0; font-size: 18px;">🗑️ New Review Removal Lead</h2>
        </div>
        <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; width: 160px; font-size: 14px;">Name</td>
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone</td>
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${phone || "—"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Country</td>
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${country || "—"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Profile URL</td>
              <td style="padding: 10px 0; font-size: 14px;">${reviewProfileUrl ? `<a href="${reviewProfileUrl}" style="color: #2563EB;">${reviewProfileUrl}</a>` : "—"}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #fef2f2; border-radius: 8px; border: 1px solid #fecaca;">
            <p style="margin: 0 0 8px; font-weight: 700; font-size: 14px; color: #991b1b;">Which review(s)?</p>
            <p style="margin: 0; font-size: 14px; color: #374151; white-space: pre-wrap;">${notes || "Not specified"}</p>
          </div>
          <p style="margin: 20px 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
            Submitted ${new Date().toLocaleString("en-SG", { timeZone: "Asia/Singapore" })} SGT via epicware.ai/locations/${country || "unknown"}/review-removal
          </p>
        </div>
      </div>
    `;
    const reviewRemovalText = `New Review Removal Lead\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nCountry: ${country || "—"}\nProfile URL: ${reviewProfileUrl || "—"}\n\nWhich review(s)?\n${notes || "Not specified"}`;

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          from: "Epicware Audit <noreply@epicware.ai>",
          to: ["vignesh@epicware.ai"],
          reply_to: email,
          subject: `${isTest ? "[TEST] " : ""}Review Removal Lead — ${name} (${country || "unknown"})`,
          text: reviewRemovalText,
          html: reviewRemovalHtml,
        }),
      });
      if (!res.ok) {
        console.error("[audit-lead] Resend error (review-removal):", await res.text());
        return NextResponse.json({ success: true, emailSent: false });
      }
    } catch (err) {
      console.error("[audit-lead] Resend request threw (review-removal):", err);
      return NextResponse.json({ success: true, emailSent: false });
    }
    return NextResponse.json({ success: true, emailSent: true });
  }

  if (leadType === "local-seo") {
    return sendCtaLeadEmail({
      apiKey, isTest, name, email, phone, country,
      pageLabel: "Local SEO",
      pagePath: "local-seo",
      color: "#7C3AED",
      emoji: "📍",
      extraFields: [
        { label: "Business / Maps link", value: businessNameOrMapsLink },
        { label: "City / metro", value: cityMetro },
      ],
    });
  }

  if (leadType === "gbp-audit") {
    return sendCtaLeadEmail({
      apiKey, isTest, name, email, phone, country,
      pageLabel: "GBP Audit",
      pagePath: "google-business-profile",
      color: "#059669",
      emoji: "📋",
      extraFields: [{ label: "Google Maps link", value: gbpMapsLink }],
    });
  }

  if (leadType === "review-management") {
    return sendCtaLeadEmail({
      apiKey, isTest, name, email, phone, country,
      pageLabel: "Review Health Check",
      pagePath: "review-management",
      color: "#DB2777",
      emoji: "💬",
      extraFields: [{ label: "Google or Yelp link", value: reviewManagementProfileLink }],
    });
  }

  if (leadType === "seo-audit") {
    return sendCtaLeadEmail({
      apiKey, isTest, name, email, phone, country,
      pageLabel: "SEO Audit",
      pagePath: "seo",
      color: "#2563EB",
      emoji: "🔍",
      extraFields: [{ label: "Website URL", value: websiteUrl }],
    });
  }

  if (leadType === "ai-visibility") {
    return sendCtaLeadEmail({
      apiKey, isTest, name, email, phone, country,
      pageLabel: "AI Visibility Check",
      pagePath: "ai-search-visibility",
      color: "#8B5CF6",
      emoji: "🤖",
      extraFields: [
        { label: "Business name", value: businessName },
        { label: "Website URL", value: websiteUrl },
      ],
    });
  }

  const kwList = Array.isArray(keywords) && keywords.length > 0
    ? keywords.map((k) => `• ${k}`).join("\n")
    : "None selected";

  const htmlBody = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <div style="background: #2563EB; padding: 20px 24px; border-radius: 12px 12px 0 0;">
        <h2 style="color: white; margin: 0; font-size: 18px;">🔍 New Free Audit Lead</h2>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; width: 160px; font-size: 14px;">Name</td>
            <td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email</td>
            <td style="padding: 10px 0; font-weight: 600; font-size: 14px;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone</td>
            <td style="padding: 10px 0; font-weight: 600; font-size: 14px;">${phone || "—"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Type</td>
            <td style="padding: 10px 0; font-size: 14px;">
              <span style="background: ${leadType === "agency" ? "#7c3aed" : "#2563EB"}; color: white; padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;">
                ${leadType === "agency" ? "Marketing Agency" : "Business Owner"}
              </span>
            </td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
          <p style="margin: 0 0 10px; font-weight: 700; font-size: 14px; color: #0f172a;">Business Details</p>
          <p style="margin: 4px 0; font-size: 14px; color: #374151;"><strong>Name:</strong> ${businessName || "—"}</p>
          <p style="margin: 4px 0; font-size: 14px; color: #374151;"><strong>Address:</strong> ${businessAddress || "—"}</p>
          <p style="margin: 4px 0; font-size: 14px; color: #374151;"><strong>Website:</strong> ${websiteUrl ? `<a href="${websiteUrl}" style="color: #2563EB;">${websiteUrl}</a>` : "—"}</p>
          ${placeId ? `<p style="margin: 4px 0; font-size: 12px; color: #9ca3af;">Place ID: ${placeId}</p>` : ""}
        </div>

        <div style="margin-top: 16px; padding: 16px; background: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe;">
          <p style="margin: 0 0 10px; font-weight: 700; font-size: 14px; color: #1e40af;">Audit Settings</p>
          <p style="margin: 0 0 6px; font-size: 14px; color: #374151;"><strong>Radius:</strong> ${radiusKm ?? 5}km</p>
          <p style="margin: 0 0 4px; font-size: 14px; color: #374151;"><strong>Keywords:</strong></p>
          ${Array.isArray(keywords) && keywords.length > 0
            ? keywords.map((k) => `<p style="margin: 2px 0 2px 12px; font-size: 14px; color: #1d4ed8; font-weight: 500;">• ${k}</p>`).join("")
            : `<p style="margin: 2px 0 2px 12px; font-size: 14px; color: #9ca3af;">None</p>`
          }
        </div>

        <p style="margin: 20px 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
          Submitted ${new Date().toLocaleString("en-SG", { timeZone: "Asia/Singapore" })} SGT via epicware.ai/free-audit
        </p>
      </div>
    </div>
  `;

  const textBody = `New Free Audit Lead\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nType: ${leadType}\n\nBusiness: ${businessName}\nAddress: ${businessAddress}\nWebsite: ${websiteUrl || "—"}\n\nRadius: ${radiusKm ?? 5}km\nKeywords:\n${kwList}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Epicware Audit <noreply@epicware.ai>",
        to: ["vignesh@epicware.ai"],
        reply_to: email,
        subject: `${isTest ? "[TEST] " : ""}Free Audit Lead — ${name} (${businessName || email})`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[audit-lead] Resend error:", err);
      return NextResponse.json({ success: true, emailSent: false });
    }
  } catch (err) {
    // Network/Resend failure — the lead is already durably logged above,
    // so this is still a success for the client: we have the lead.
    console.error("[audit-lead] Resend request threw:", err);
    return NextResponse.json({ success: true, emailSent: false });
  }

  return NextResponse.json({ success: true, emailSent: true });
}
