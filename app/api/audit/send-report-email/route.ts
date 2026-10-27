import { NextRequest, NextResponse } from "next/server";
import { rateLimitResponse } from "@/lib/rate-limit";

interface CheckItemSummary { label: string; status: "pass" | "fail" | "unknown"; detail: string }
interface Scorecard { profile: number; reviews: number; keywords: number; visibility: number; overall: number }
interface ReportPayload {
  gbpName: string; gbpCategory: string; gbpAddress: string;
  gbpRating: number; gbpReviewCount: number;
  scorecard: Scorecard; aiSummary: string;
  checkItems: CheckItemSummary[]; recommendations: string[];
  invisibleGridPoints: number; totalGridPoints: number;
  estimatedMonthlyRevenue: number; neighbourhood: string; shortBusinessName: string;
}

function scoreBand(s: number) {
  if (s >= 70) return { label: "Good", color: "#16a34a" };
  if (s >= 50) return { label: "Needs Work", color: "#ca8a04" };
  return { label: "Critical Gaps", color: "#dc2626" };
}

function statusBadge(status: "pass" | "fail" | "unknown") {
  if (status === "pass") return `<span style="background:#dcfce7;color:#15803d;padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:700;">Pass</span>`;
  if (status === "fail") return `<span style="background:#fee2e2;color:#dc2626;padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:700;">Fail</span>`;
  return `<span style="background:#f3f4f6;color:#6b7280;padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:700;">Need Access</span>`;
}

function generateReportAttachmentHtml(report: ReportPayload, name: string, date: string): string {
  const overall = scoreBand(report.scorecard.overall);

  const scorecardRows = [
    { label: "Profile", val: report.scorecard.profile },
    { label: "Reviews", val: report.scorecard.reviews },
    { label: "Keywords", val: report.scorecard.keywords },
    { label: "Visibility", val: report.scorecard.visibility },
  ].map(({ label, val }) => {
    const b = scoreBand(val);
    return `<tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:10px 0;font-size:12px;color:#374151;width:90px;">${label}</td>
      <td style="padding:10px 0;padding-right:12px;"><div style="background:#f1f5f9;border-radius:999px;height:8px;overflow:hidden;"><div style="background:${b.color};width:${val}%;height:100%;border-radius:999px;"></div></div></td>
      <td style="padding:10px 0;font-size:12px;font-weight:700;color:${b.color};width:36px;text-align:right;">${val}</td>
    </tr>`;
  }).join("");

  const healthRows = report.checkItems.map((c) => {
    const bg = c.status === "pass" ? "#f0fdf4" : c.status === "fail" ? "#fef2f2" : "#f9fafb";
    const border = c.status === "pass" ? "#bbf7d0" : c.status === "fail" ? "#fecaca" : "#e5e7eb";
    const badgeBg = c.status === "pass" ? "#dcfce7" : c.status === "fail" ? "#fee2e2" : "#f3f4f6";
    const badgeColor = c.status === "pass" ? "#15803d" : c.status === "fail" ? "#dc2626" : "#6b7280";
    const badgeText = c.status === "pass" ? "Pass" : c.status === "fail" ? "Fail" : "Need Access";
    const icon = c.status === "pass" ? "✓" : c.status === "fail" ? "✗" : "?";
    const iconColor = c.status === "pass" ? "#16a34a" : c.status === "fail" ? "#dc2626" : "#9ca3af";
    return `<div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:8px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:4px;">
        <div style="display:flex;align-items:center;gap:6px;"><span style="color:${iconColor};font-weight:900;font-size:13px;">${icon}</span><span style="font-size:11px;font-weight:700;color:#1f2937;">${c.label}</span></div>
        <span style="background:${badgeBg};color:${badgeColor};padding:2px 8px;border-radius:9999px;font-size:10px;font-weight:700;white-space:nowrap;">${badgeText}</span>
      </div>
      <p style="margin:0 0 0 19px;font-size:10px;color:#6b7280;line-height:1.5;">${c.detail}</p>
    </div>`;
  }).join("");

  const recsHtml = report.recommendations.map((rec, i) =>
    `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px;background:#f8fafc;border-radius:8px;margin-bottom:8px;">
      <span style="background:#2563EB;color:white;min-width:20px;height:20px;border-radius:50%;font-size:10px;font-weight:700;line-height:20px;text-align:center;display:inline-block;">${i + 1}</span>
      <p style="margin:0;font-size:12px;color:#374151;line-height:1.6;">${rec}</p>
    </div>`
  ).join("");

  const passes = report.checkItems.filter((c) => c.status === "pass").length;
  const fails = report.checkItems.filter((c) => c.status === "fail").length;

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>GBP Audit — ${report.gbpName}</title>
<style>
  @page { size: A4; margin: 0; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif; font-size:12px; color:#374151; background:white; }
  .wrap { max-width:794px; margin:0 auto; }
  .section { padding:20px 28px; border-bottom:1px solid #f1f5f9; }
  table { border-collapse:collapse; width:100%; }
  h2 { font-size:14px; font-weight:700; color:#0f172a; margin-bottom:14px; }
</style>
</head><body><div class="wrap">

<div style="background:#0F1B2D;padding:24px 28px 20px;">
  <p style="font-size:10px;color:#64748b;letter-spacing:.08em;text-transform:uppercase;font-weight:600;margin-bottom:4px;">EPICWARE FREE GBP AUDIT REPORT</p>
  <h1 style="font-size:22px;font-weight:800;color:#fff;margin-bottom:6px;line-height:1.2;">${report.gbpName}</h1>
  <p style="font-size:12px;color:#94a3b8;">${report.gbpAddress} · ${date}${name ? ` · Prepared for ${name}` : ""}</p>
</div>

<div style="background:#2563EB;padding:18px 28px;">
  <p style="font-size:11px;color:#bfdbfe;font-weight:600;text-transform:uppercase;margin-bottom:4px;">Overall Score</p>
  <p style="font-size:32px;font-weight:800;color:#fff;line-height:1;">${report.scorecard.overall}<span style="font-size:14px;font-weight:400;color:#93c5fd;"> /100 — ${overall.label}</span></p>
  <p style="font-size:12px;color:#bfdbfe;margin-top:8px;">${report.gbpReviewCount} reviews · ${report.gbpRating}★ rating · Estimated missed revenue: <strong style="color:#fff;">S$${report.estimatedMonthlyRevenue.toLocaleString()}/mo</strong></p>
</div>

<div class="section">
  <p style="font-size:18px;font-weight:800;color:#0F1B2D;line-height:1.3;">${report.gbpReviewCount} reviews. ${report.gbpRating}★ rating.<br><span style="color:#dc2626;">Invisible in ${report.invisibleGridPoints} of ${report.totalGridPoints} grid points.</span></p>
</div>

<div class="section" style="background:#eff6ff;">
  <p style="font-size:11px;font-weight:700;color:#1e40af;text-transform:uppercase;margin-bottom:8px;">⚡ Your Audit Summary</p>
  <p style="font-size:13px;color:#1e3a8a;line-height:1.7;">${report.aiSummary}</p>
</div>

<div class="section">
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="padding:16px;text-align:center;">
      <p style="font-size:26px;font-weight:800;color:#2563EB;">${report.invisibleGridPoints}/${report.totalGridPoints}</p>
      <p style="font-size:11px;font-weight:700;color:#0f172a;margin-top:4px;">Grid points invisible</p>
      <p style="font-size:10px;color:#6b7280;margin-top:3px;line-height:1.4;">You rank at centre — missing from ${report.invisibleGridPoints} surrounding areas</p>
    </div>
    <div style="padding:16px;text-align:center;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
      <p style="font-size:26px;font-weight:800;color:#2563EB;">${report.gbpRating}★</p>
      <p style="font-size:11px;font-weight:700;color:#0f172a;margin-top:4px;">Rating already earned</p>
      <p style="font-size:10px;color:#6b7280;margin-top:3px;line-height:1.4;">The trust is there — SEO infrastructure to carry it isn't</p>
    </div>
    <div style="padding:16px;text-align:center;">
      <p style="font-size:26px;font-weight:800;color:#2563EB;">90</p>
      <p style="font-size:11px;font-weight:700;color:#0f172a;margin-top:4px;">Day Top-3 Guarantee</p>
      <p style="font-size:10px;color:#6b7280;margin-top:3px;line-height:1.4;">Rank Top 3 for 2 keywords in 90 days — or we extend free</p>
    </div>
  </div>
</div>

<div class="section">
  <h2>Scorecard</h2>
  <table>${scorecardRows}</table>
</div>

<div class="section">
  <h2>Profile Health Checks</h2>
  <p style="font-size:11px;color:#6b7280;margin-bottom:12px;">${passes} passing · ${fails} failing</p>
  ${healthRows}
</div>

<div class="section">
  <h2>Top Recommendations</h2>
  ${recsHtml}
</div>

<div style="background:#0F1B2D;padding:28px;text-align:center;">
  <p style="font-size:18px;font-weight:800;color:#fff;margin-bottom:6px;">Ready to fix this in 90 days?</p>
  <p style="font-size:12px;color:#94a3b8;margin-bottom:12px;">Epicware guarantees Top 3 Maps ranking for 2 keywords — or we extend free.</p>
  <p style="font-size:14px;font-weight:700;color:#60a5fa;">epicware.ai/book-demo</p>
  <p style="font-size:10px;color:#475569;margin-top:16px;">Generated ${date} · Epicware Pte. Ltd. · Singapore</p>
</div>

</div></body></html>`;
}

export async function POST(req: NextRequest) {
  const limited = rateLimitResponse(req, "send-report-email");
  if (limited) return limited;

  let body: Record<string, unknown>;
  try { body = await req.json(); }
  catch { return NextResponse.json({ success: false }, { status: 400 }); }

  const { name, email, report } = body as { name?: string; email?: string; report?: ReportPayload };
  if (!name?.trim() || !email?.trim() || !report) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ success: true });

  const overall = scoreBand(report.scorecard.overall);
  const passes = report.checkItems.filter((c) => c.status === "pass").length;
  const fails = report.checkItems.filter((c) => c.status === "fail").length;

  const scorecardRows = [
    { label: "Profile", val: report.scorecard.profile },
    { label: "Reviews", val: report.scorecard.reviews },
    { label: "Keywords", val: report.scorecard.keywords },
    { label: "Visibility", val: report.scorecard.visibility },
  ].map(({ label, val }) => {
    const b = scoreBand(val);
    return `<tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:10px 0;font-size:13px;color:#374151;width:100px;">${label}</td>
      <td style="padding:10px 0;padding-right:12px;"><div style="background:#f1f5f9;border-radius:999px;height:8px;overflow:hidden;"><div style="background:${b.color};width:${val}%;height:100%;border-radius:999px;"></div></div></td>
      <td style="padding:10px 0;font-size:13px;font-weight:700;color:${b.color};width:40px;text-align:right;">${val}</td>
    </tr>`;
  }).join("");

  const checkRows = report.checkItems.map((c) =>
    `<tr><td style="padding:10px 0;font-size:13px;color:#374151;border-bottom:1px solid #f3f4f6;">${c.label}</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;text-align:right;">${statusBadge(c.status)}</td></tr>`
  ).join("");

  const recsHtml = report.recommendations.map((rec, i) =>
    `<div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:8px;margin-bottom:8px;">
      <span style="background:#2563EB;color:white;width:22px;height:22px;border-radius:50%;font-size:11px;font-weight:700;flex-shrink:0;line-height:22px;text-align:center;display:inline-block;">${i + 1}</span>
      <p style="margin:0;font-size:13px;color:#374151;line-height:1.5;">${rec}</p>
    </div>`
  ).join("");

  const generatedDate = new Date().toLocaleString("en-SG", { timeZone: "Asia/Singapore", day: "numeric", month: "long", year: "numeric" });

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:24px;">
  <div style="background:#0F1B2D;border-radius:16px 16px 0 0;padding:28px 28px 20px;">
    <p style="margin:0 0 4px;font-size:11px;color:#64748b;letter-spacing:.08em;text-transform:uppercase;font-weight:600;">Epicware Free GBP Audit</p>
    <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#fff;">${report.gbpName}</h1>
    <p style="margin:0;font-size:13px;color:#94a3b8;">${report.gbpAddress}</p>
  </div>
  <div style="background:#2563EB;padding:20px 28px;">
    <p style="margin:0 0 2px;font-size:12px;color:#bfdbfe;font-weight:600;text-transform:uppercase;">Overall Score</p>
    <p style="margin:0;font-size:36px;font-weight:800;color:#fff;line-height:1;">${report.scorecard.overall}<span style="font-size:16px;font-weight:400;color:#93c5fd;">/100 — ${overall.label}</span></p>
    <p style="margin:8px 0 0;font-size:13px;color:#bfdbfe;">Estimated missed revenue: <strong style="color:#fff;">S$${report.estimatedMonthlyRevenue.toLocaleString()}/mo</strong></p>
  </div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 16px 16px;padding:28px;">
    <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:18px;margin-bottom:24px;">
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;">Your Audit Summary</p>
      <p style="margin:0;font-size:14px;color:#1e3a8a;line-height:1.6;">${report.aiSummary}</p>
    </div>
    <h2 style="margin:0 0 14px;font-size:16px;font-weight:700;color:#0f172a;">Scorecard</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">${scorecardRows}</table>
    <h2 style="margin:0 0 6px;font-size:16px;font-weight:700;color:#0f172a;">Profile Health Checks</h2>
    <p style="margin:0 0 10px;font-size:13px;color:#6b7280;">${passes} passing · ${fails} failing</p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">${checkRows}</table>
    <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:16px;margin-bottom:24px;">
      <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#dc2626;">Map Visibility Gap</p>
      <p style="margin:0;font-size:13px;color:#7f1d1d;">Invisible in <strong>${report.invisibleGridPoints} of ${report.totalGridPoints} grid points</strong> across ${report.neighbourhood}.</p>
    </div>
    <h2 style="margin:0 0 14px;font-size:16px;font-weight:700;color:#0f172a;">Top Recommendations</h2>
    <div style="margin-bottom:28px;">${recsHtml}</div>
    <div style="text-align:center;padding:24px;background:#0F1B2D;border-radius:12px;">
      <p style="margin:0 0 6px;font-size:18px;font-weight:800;color:#fff;">Ready to fix this in 90 days?</p>
      <p style="margin:0 0 20px;font-size:13px;color:#94a3b8;">Epicware guarantees Top 3 Maps ranking for 2 keywords — or we extend free.</p>
      <a href="https://www.epicware.ai/book-demo" style="display:inline-block;background:#2563EB;color:#fff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:10px;text-decoration:none;">Book a Free Strategy Call →</a>
    </div>
    <p style="margin:20px 0 0;font-size:11px;color:#9ca3af;text-align:center;">Generated ${generatedDate} · Epicware Pte. Ltd. · Singapore</p>
  </div>
</div>
</body></html>`;

  // ── Generate clean single-page HTML for PDF attachment ──────────────────────
  const attachmentHtml = generateReportAttachmentHtml(report, name, generatedDate);
  const attachmentBase64 = Buffer.from(attachmentHtml, "utf-8").toString("base64");
  const safeFilename = `Epicware-GBP-Audit-${report.gbpName.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").slice(0, 40)}.html`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from: "Epicware Audit <noreply@epicware.ai>",
      to: [email],
      subject: `Your Free GBP Audit Report — ${report.gbpName}`,
      html,
      attachments: [{ filename: safeFilename, content: attachmentBase64 }],
    }),
  });

  if (!res.ok) console.error("[send-report-email] Resend error:", await res.text());
  return NextResponse.json({ success: true });
}
