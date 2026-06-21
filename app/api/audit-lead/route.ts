import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to CRM / n8n webhook
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, whatsapp, businessType } = body;

    if (!businessName || !whatsapp || !businessType) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    console.log("[audit-lead]", { businessName, whatsapp, businessType, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
