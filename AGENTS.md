<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deployment

Production deploys only via Git (push to `main`). Never run `vercel --prod`
locally. Two CLI-sourced production deployments on 2026-10-05 bypassed git
entirely — whatever was on that laptop's disk went live with no commit,
no review, and no way to audit it afterward from git history.
