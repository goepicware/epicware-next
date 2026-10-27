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

export async function POST(req: NextRequest) {
  const limited = rateLimitResponse(req, "audit-lead");
  if (limited) return limited;

  const isTest = req.headers.get("x-epicware-test") === "1";

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
  } = body as {
    name?: string; email?: string; phone?: string; leadType?: string;
    businessName?: string; businessAddress?: string; websiteUrl?: string;
    placeId?: string; keywords?: string[]; radiusKm?: number;
  };

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ success: false, error: "Name and email are required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[audit-lead] RESEND_API_KEY not set — lead backed up to logs only, not emailed");
    return NextResponse.json({ success: true, emailSent: false });
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
