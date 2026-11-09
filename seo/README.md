# seo/

State for the daily SEO autopilot (scheduled task `epicware-seo-autopilot`). Read `context.md` first.

Health check:

    python3 -I seo/tools/crawl.py <urls.txt> <out.json>   # urls.txt = one sitemap URL per line
    python3 -I seo/tools/report.py <out.json>
