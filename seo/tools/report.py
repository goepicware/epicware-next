"""Summarise crawl.json into a list of SEO issues."""
import json
import sys
from collections import Counter, defaultdict

MAX_TITLE = 60
MAX_DESC = 160
THIN_WORDS = 300
SLOW_MS = 1500

data = json.load(open(sys.argv[1]))
pages = data["pages"]
issues = defaultdict(list)
inbound = Counter()
for p in pages:
    for l in p.get("links", []):
        if l != p["url"].rstrip("/"):
            inbound[l] += 1

titles = Counter(p.get("title") for p in pages if p.get("title"))
descs = Counter(p.get("desc") for p in pages if p.get("desc"))
for p in pages:
    u = p["url"]
    if p["status"] != 200:
        issues["non-200"].append(f"{u} -> {p['status']} {p['hops']}")
        continue
    if p["hops"]:
        issues["redirects in sitemap"].append(f"{u} {p['hops']}")
    can = (p.get("canonical") or "").rstrip("/")
    if not can:
        issues["missing canonical"].append(u)
    elif can != u.rstrip("/"):
        issues["canonical elsewhere"].append(f"{u} -> {can}")
    if p.get("robots") and "noindex" in p["robots"].lower():
        issues["noindex in sitemap"].append(u)
    t = p.get("title") or ""
    if not t:
        issues["missing title"].append(u)
    elif titles[t] > 1:
        issues["duplicate title"].append(f"{u} | {t}")
    elif len(t) > MAX_TITLE:
        issues["long title"].append(f"{len(t)} {u} | {t}")
    d = p.get("desc") or ""
    if not d:
        issues["missing description"].append(u)
    elif descs[d] > 1:
        issues["duplicate description"].append(u)
    if len(p.get("h1", [])) != 1:
        issues["h1 count != 1"].append(f"{u} {p.get('h1')}")
    if p.get("words", 0) < THIN_WORDS:
        issues["thin server html"].append(f"{p.get('words')} {u}")
    if p["ms"] > SLOW_MS:
        issues["slow"].append(f"{p['ms']}ms {u}")
    if inbound[u.rstrip("/") or u] == 0 and u.rstrip("/") != "https://www.epicware.ai":
        issues["orphan (no internal links)"].append(u)
for e in data["linked_not_in_sitemap"]:
    if e["status"] != 200 or e["hops"]:
        issues["broken/redirecting internal link target"].append(f"{e['url']} -> {e['status']} {e['hops']}")
    else:
        issues["linked page missing from sitemap"].append(e["url"])
for k, v in issues.items():
    print(f"\n## {k} ({len(v)})")
    for line in v[:40]:
        print("-", line)
print(f"\npages crawled: {len(pages)}, extra linked: {len(data['linked_not_in_sitemap'])}")
