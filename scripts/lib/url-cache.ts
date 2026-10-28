import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Disk-cached HTTP status checks for scripts/check-page-substance.ts's
 * sourceUrl requirement. A build with many marketFacts would otherwise
 * re-fetch every source on every run; results are cached for 7 days so
 * repeated local/CI runs on the same checkout stay fast. Not a substitute
 * for the gate re-checking eventually — stale 200s just mean a dead link
 * won't be caught until the cache expires.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_PATH = path.join(__dirname, "..", "..", ".cache", "url-status-cache.json");
const TTL_MS = 7 * 24 * 60 * 60 * 1000;
const TIMEOUT_MS = 10_000;

interface CacheEntry {
  status: number | null;
  checkedAt: number;
}

let cache: Record<string, CacheEntry> | null = null;
let dirty = false;

function loadCache(): Record<string, CacheEntry> {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"));
  } catch {
    return {};
  }
}

export function persistUrlCache(): void {
  if (!dirty || !cache) return;
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
  dirty = false;
}

async function fetchStatus(url: string): Promise<number | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    // Some servers (e.g. support.google.com) don't support HEAD properly
    // and return 404 for it while the page is genuinely live on GET —
    // confirmed against real URLs during the USA review-removal build
    // (2026-10-28). 403/405 were already retried as a real method
    // rejection; 404 needs the same treatment since HEAD vs GET can't be
    // trusted to agree on every host.
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal });
    if (res.status === 405 || res.status === 403 || res.status === 404) {
      res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    }
    return res.status;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/** Returns the HTTP status for `url`, using a 7-day disk cache. null means the request failed/timed out. */
export async function checkUrlStatus(url: string): Promise<number | null> {
  if (!cache) cache = loadCache();
  const cached = cache[url];
  if (cached && Date.now() - cached.checkedAt < TTL_MS) {
    return cached.status;
  }
  const status = await fetchStatus(url);
  cache[url] = { status, checkedAt: Date.now() };
  dirty = true;
  return status;
}
