import { NextRequest, NextResponse } from "next/server";

interface PlaceDetailsResult {
  editorial_summary?: { overview?: string };
  serves_cuisine?: string;
  serves_breakfast?: boolean;
  serves_brunch?: boolean;
  serves_lunch?: boolean;
  serves_dinner?: boolean;
  serves_vegetarian_food?: boolean;
  takeout?: boolean;
  delivery?: boolean;
}

interface PlaceDetailsResponse {
  status: string;
  result?: PlaceDetailsResult;
}

export async function POST(req: NextRequest) {
  let body: { placeId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ services: [], overview: "" });
  }

  const placeId = body.placeId?.trim();
  if (!placeId) return NextResponse.json({ services: [], overview: "" });

  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) return NextResponse.json({ services: [], overview: "" });

  try {
    const resp = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json` +
        `?place_id=${encodeURIComponent(placeId)}` +
        `&fields=editorial_summary,serves_cuisine,serves_breakfast,serves_brunch,` +
        `serves_lunch,serves_dinner,serves_vegetarian_food,takeout,delivery` +
        `&key=${key}`,
      { signal: AbortSignal.timeout(5000) }
    );

    const data: PlaceDetailsResponse = await resp.json();
    if (data.status !== "OK" || !data.result) {
      return NextResponse.json({ services: [], overview: "" });
    }

    const r = data.result;
    const services: string[] = [];
    const overview = r.editorial_summary?.overview ?? "";

    if (r.serves_cuisine) services.push(`${r.serves_cuisine} cuisine`);
    if (r.serves_breakfast) services.push("breakfast");
    if (r.serves_brunch) services.push("brunch");
    if (r.serves_lunch) services.push("lunch");
    if (r.serves_dinner) services.push("dinner");
    if (r.serves_vegetarian_food) services.push("vegetarian options");
    if (r.takeout) services.push("takeout");
    if (r.delivery) services.push("delivery");

    return NextResponse.json({ services, overview });
  } catch {
    return NextResponse.json({ services: [], overview: "" });
  }
}
