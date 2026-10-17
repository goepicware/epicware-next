import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, email, companyName, industry, revenueRange, outlets, interestedIn } = body;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const emailBody = `New Contact Form Submission\n\n` +
      `Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Company: ${companyName}\n` +
      `Industry: ${industry}\n` +
      `Monthly Revenue: ${revenueRange || "Not specified"}\n` +
      `Number of Outlets: ${outlets || "Not specified"}\n` +
      `Interested In: ${interestedIn || "Not specified"}`;

    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #1a1a2e; margin-bottom: 24px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 160px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${fullName}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0; font-weight: 600;">${phone}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; font-weight: 600;">${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0; font-weight: 600;">${companyName}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Industry</td><td style="padding: 8px 0; font-weight: 600;">${industry}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Monthly Revenue</td><td style="padding: 8px 0; font-weight: 600;">${revenueRange || "Not specified"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Outlets</td><td style="padding: 8px 0; font-weight: 600;">${outlets || "Not specified"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Interested In</td><td style="padding: 8px 0; font-weight: 600;">${interestedIn || "Not specified"}</td></tr>
        </table>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Epicware <noreply@epicware.ai>",
        to: ["vignesh@epicware.ai"],
        reply_to: email,
        subject: `Contact Form — ${fullName} (${companyName})`,
        text: emailBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
