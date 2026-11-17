# fixxmyresume.com — marketing site and articles

Static site for **fixxmyresume.com**: the one-page home and the `/articles` section.
It is deployed by Cloudflare (Workers static assets) on every push to `main`.

The software itself (free check, payment, generator, admin, legal pages) is a separate
Lovable project served at **app.fixxmyresume.com**. This site only links to it; neither
depends on the other at build or run time.

| Address | What | Where it's built |
| --- | --- | --- |
| https://fixxmyresume.com | One-pager, /articles, sitemap, RSS, llms.txt | This repo → Cloudflare |
| https://app.fixxmyresume.com | /check, /login, /pay, /app, /admin, /privacy, /terms, /refund | Lovable |

## Add or edit an article

1. Create `src/content/articles/<slug>.md`. The file name is the URL: `/articles/<slug>/`.
2. Copy the front matter from any existing article and fill it in:

```yaml
---
title: "Under 110 characters"
description: "50–170 characters, shown in Google results"
answer: "40–420 characters: the direct answer, shown first and quoted by AI answer engines"
region: india            # india | global
category: resume-writing # see src/site.ts for the list
format: guide            # guide | how-to | checklist | examples | comparison | quick-answer | glossary | list | myths
keywords: ["main search term", "second term"]
published: 2026-11-17
updated: 2026-12-01      # optional
lang: en                 # en | hi-Latn (Hinglish)
faq:                     # optional, becomes FAQ rich results
  - q: "Question?"
    a: "Answer."
---
```

3. Write the body in Markdown. Link to other articles as `/articles/<slug>/`.
4. Commit and push to `main`. Cloudflare builds and publishes in a minute or two.

The build fails if front matter breaks the rules above, so a broken article can't go live.

## SEO and AEO built in

- Article, FAQPage, BreadcrumbList, Organization, WebSite and SoftwareApplication structured data
- Sitemap (`/sitemap-index.xml`), RSS (`/rss.xml`), `robots.txt` allowing all crawlers
- `/llms.txt`: a plain-text map of the site and every article's short answer for AI assistants
- "Short answer" box at the top of every article, India / Global and topic hub pages, related articles

## Brand, links and price

All in `src/site.ts`. **`priceInr` must match `price_inr` in the app's Admin → Settings and the Dodo product price.**

## Local development

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Cloudflare settings: build command `npm run build`, deploy command `npx wrangler deploy`, root `/`.
