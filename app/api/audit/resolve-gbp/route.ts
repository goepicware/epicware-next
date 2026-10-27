import { NextRequest, NextResponse } from "next/server";

const PLACES_API = "https://maps.googleapis.com/maps/api/place";
const SG_CENTER = "1.3521,103.8198";

function formatCategory(raw: string) {
  return raw.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

async function getPlaceDetails(placeId: string, key: string) {
  const res = await fetch(
    `${PLACES_API}/details/json?place_id=${placeId}` +
      `&fields=name,formatted_address,geometry,rating,user_ratings_total,types,website,photos` +
      `&key=${key}`
  );
  const data = await res.json();
  if (data.status !== "OK" || !data.result) return null;
  const p = data.result;
  return {
    placeId,
    snapshot: {
      businessName: p.name ?? "",
      address: p.formatted_address ?? "",
      category: formatCategory(p.types?.[0] ?? "establishment"),
      rawTypes: p.types ?? [],
      rating: p.rating ?? 0,
      reviewCount: p.user_ratings_total ?? 0,
      lat: p.geometry?.location?.lat ?? 0,
      lng: p.geometry?.location?.lng ?? 0,
      photoCount: (p.photos as unknown[])?.length ?? 0,
    },
    businessName: p.name ?? "",
    websiteUrl: p.website ?? "",
  };
}

async function textSearch(query: string, key: string) {
  const res = await fetch(
    `${PLACES_API}/textsearch/json?query=${encodeURIComponent(query)}` +
      `&location=${SG_CENTER}&radius=50000&key=${key}`
  );
  const data = await res.json();
  const placeId = data.results?.[0]?.place_id;
  if (!placeId) return null;
  return getPlaceDetails(placeId, key);
}

export async function POST(req: NextRequest) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "Maps API key not configured" }, { status: 500 });
  }

  let body: { url?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const url = body.url?.trim();
  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  // Step 1 — follow redirects to get the final URL
  let finalUrl = url;
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
      signal: AbortSignal.timeout(5000),
    });
    finalUrl = response.url;
  } catch {
    // keep original URL if redirect fails
  }

  // Step 2 — extract a search query from the final URL
  let searchQuery = "";
  let extractedName = "";

  try {
    const u = new URL(finalUrl);

    // CID: ?cid=12345 → use as "cid:12345" text search
    const cid = u.searchParams.get("cid");
    if (cid) {
      searchQuery = `cid:${cid}`;
    }

    // /maps/place/Business+Name/@...
    if (!searchQuery) {
      const m = u.pathname.match(/\/maps\/place\/([^/@?]+)/);
      if (m) {
        extractedName = decodeURIComponent(m[1].replace(/\+/g, " "));
        searchQuery = extractedName;
      }
    }

    // /maps/search/Query
    if (!searchQuery) {
      const m = u.pathname.match(/\/maps\/search\/([^/@?]+)/);
      if (m) {
        extractedName = decodeURIComponent(m[1].replace(/\+/g, " "));
        searchQuery = extractedName;
      }
    }

    // ?q=... fallback
    if (!searchQuery) {
      const q = u.searchParams.get("q");
      if (q) { extractedName = q; searchQuery = q; }
    }
  } catch {
    // URL parsing failed
  }

  if (!searchQuery) {
    return NextResponse.json(
      { error: "Could not extract business name from link", businessName: "" },
      { status: 422 }
    );
  }

  // Step 3 — Places Text Search → Details
  const result = await textSearch(searchQuery, key);
  if (!result) {
    return NextResponse.json(
      { error: "No matching business found", businessName: extractedName },
      { status: 404 }
    );
  }

  return NextResponse.json(result);
}
