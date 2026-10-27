import { NextResponse } from "next/server";

/**
 * In-memory, per-IP rate limiter for the /free-audit wizard's API routes.
 * No paid service, no Redis — a Map scoped to the serverless function
 * instance's lifetime. This is best-effort: Vercel can route a client's
 * requests to a different warm instance (or a fresh cold start) between
 * calls, so it doesn't give a perfectly accurate global count across a
 * fleet under heavy traffic. It still meaningfully blocks the realistic
 * abuse case (a script hammering one endpoint in a tight loop, which
 * mostly lands on the same warm instance) without adding infrastructure.
 * If this needs to be exact, it has to move to Vercel KV or similar —
 * that's a real paid-service tradeoff, not something to fake here.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 10_000; // bound memory; see cleanup() below

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

function cleanup(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/**
 * `routeName` scopes the bucket so each route gets its own 5-per-10min
 * budget per IP, rather than one shared budget across the whole wizard.
 */
export function checkRateLimit(ip: string, routeName: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  if (buckets.size > MAX_TRACKED_KEYS) cleanup(now);

  const key = `${routeName}:${ip}`;
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count++;
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Returns a ready-to-return 429 NextResponse, or null if the request is within budget. */
export function rateLimitResponse(req: Request, routeName: string): NextResponse | null {
  const ip = getClientIp(req);
  const { allowed, retryAfterSeconds } = checkRateLimit(ip, routeName);
  if (allowed) return null;

  return NextResponse.json(
    { success: false, error: "Too many requests — please wait a few minutes and try again." },
    { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } }
  );
}
