"""Crawl every sitemap URL and report SEO health issues as JSON."""
import json
import re
import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from urllib.parse import urljoin, urldefrag, urlparse

HOST = "www.epicware.ai"
UA = "Mozilla/5.0 (compatible; EpicwareSEOAutopilot/1.0)"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title, self.desc, self.canonical, self.robots = None, None, None, None
        self.h1 = []
        self.links = set()
        self._in = None
        self._skip = 0
        self.text = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("script", "style", "noscript"):
            self._skip += 1
        if tag == "title":
            self._in = "title"
        elif tag == "h1":
            self._in = "h1"
            self.h1.append("")
        elif tag == "meta":
            name = (a.get("name") or "").lower()
            if name == "description":
                self.desc = a.get("content")
            elif name == "robots":
                self.robots = a.get("content")
        elif tag == "link" and (a.get("rel") or "").lower() == "canonical":
            self.canonical = a.get("href")
        elif tag == "a" and a.get("href"):
            self.links.add(a["href"])

    def handle_endtag(self, tag):
        if tag in ("script", "style", "noscript") and self._skip:
            self._skip -= 1
        if tag in ("title", "h1"):
            self._in = None

    def handle_data(self, data):
        if self._in == "title" and self.title is None:
            self.title = data.strip()
        elif self._in == "h1":
            self.h1[-1] += data
        if not self._skip:
            self.text.append(data)


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


OPENER = urllib.request.build_opener(NoRedirect)


def fetch(url, max_hops=5):
    hops = []
    current = url
    for _ in range(max_hops):
        req = urllib.request.Request(current, headers={"User-Agent": UA})
        start = time.time()
        try:
            resp = OPENER.open(req, timeout=30)
            body = resp.read().decode("utf-8", "replace")
            return {"status": resp.status, "hops": hops, "final": current,
                    "ms": int((time.time() - start) * 1000), "body": body}
        except urllib.error.HTTPError as err:
            if err.code in (301, 302, 307, 308):
                nxt = urljoin(current, err.headers.get("Location", ""))
                hops.append((err.code, nxt))
                current = nxt
                continue
            return {"status": err.code, "hops": hops, "final": current, "ms": 0, "body": ""}
        except Exception as err:  # network failure: report, never hide
            return {"status": f"error: {err}", "hops": hops, "final": current, "ms": 0, "body": ""}
    return {"status": "too many redirects", "hops": hops, "final": current, "ms": 0, "body": ""}


def norm(href, base):
    full, _ = urldefrag(urljoin(base, href))
    p = urlparse(full)
    if p.netloc not in (HOST, "epicware.ai") or p.scheme not in ("http", "https"):
        return None
    path = p.path.rstrip("/") or "/"
    return f"https://{HOST}{path}"


def analyse(url):
    r = fetch(url)
    page = {"url": url, "status": r["status"], "hops": r["hops"], "ms": r["ms"]}
    if r["status"] != 200:
        return page
    p = PageParser()
    p.feed(r["body"])
    words = len(re.findall(r"\w+", " ".join(p.text)))
    page.update({
        "title": p.title, "desc": p.desc, "canonical": p.canonical, "robots": p.robots,
        "h1": [h.strip() for h in p.h1], "words": words,
        "links": sorted({n for n in (norm(h, r["final"]) for h in p.links) if n}),
    })
    return page


def main(urls_file, out_file):
    urls = [u.strip() for u in open(urls_file) if u.strip()]
    with ThreadPoolExecutor(8) as pool:
        pages = list(pool.map(analyse, urls))
    known = {u.rstrip("/") or u for u in urls}
    linked = set()
    for pg in pages:
        linked.update(pg.get("links", []))
    extra = sorted(l for l in linked if l not in known and l.rstrip("/") not in known)
    with ThreadPoolExecutor(8) as pool:
        extra_pages = list(pool.map(analyse, extra))
    json.dump({"pages": pages, "linked_not_in_sitemap": extra_pages}, open(out_file, "w"), indent=1)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
