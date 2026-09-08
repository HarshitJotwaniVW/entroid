# GEO / AI Search Analysis — Entroid (entroid-website.vercel.app)
 
**Date:** 2026-09-08
**Site audited:** https://entroid-website.vercel.app/
**Framework:** Google's AI Optimization Guide (2026-05-15) — GEO/AEO treated as SEO fundamentals applied to AI-search surfaces, not a separate discipline.
 
**Note:** this is a different build/deployment than a previously-audited Entroid property (a client-side-rendered SPA with a Cloudflare-managed AI-crawler block). This one runs on Next.js with proper server-side prerendering and no crawler blocks — a materially different technical starting point. Treated here as its own standalone site.
 
---
 
## 1. GEO Readiness Score: 47/100
 
| Criterion | Weight | Score | Weighted |
|---|---|---|---|
| Citability Score | 25% | 55/100 | 13.75 |
| Structural Readability | 20% | 65/100 | 13.0 |
| Multi-Modal Content | 15% | 45/100 | 6.75 |
| Authority & Brand Signals | 20% | 10/100 | 2.0 |
| Technical Accessibility | 20% | 55/100 | 11.0 |
| **Total** | | | **46.5 ≈ 47/100** |
 
**Read:** the technical foundation here is fundamentally sound — real server-rendered content, no crawler blocks, clean heading structure — which puts this well ahead of a CSR-blocked build of the same site. But it's missing nearly all of the basic technical-SEO scaffolding (no robots.txt, no sitemap, no structured data at all) and has zero external brand presence, so there's substantial low-effort headroom before this needs any content strategy work.
 
---
 
## 2. Platform Breakdown
 
| Platform | Score | Why |
|---|---|---|
| **Google AI Overviews** | ~55/100 | No indexing block, decent real content — but the total absence of a sitemap and structured data slows discovery and limits how confidently Google can parse the page's entities. |
| **Google AI Mode** | ~50/100 | Same technical gaps apply; broader citation pool doesn't help without any freshness/authority signals to draw on. |
| **ChatGPT** | ~15/100 | No robots.txt block (defaults to allow, better than a domain-name-collision property checked previously), but ChatGPT's top citation sources — Wikipedia (47.9%), Reddit (11.3%) — are both absent for this brand. |
| **Perplexity** | ~15/100 | Same brand-presence gap, weighted even more toward Reddit (46.7%). |
| **Bing Copilot** | Untested | Not checked in this pass. |
 
---
 
## 3. AI Crawler Access Status: no robots.txt at all
 
`https://entroid-website.vercel.app/robots.txt` returns a genuine **HTTP 404** (not a fake 200 shell — this Next.js deployment returns real 404s for missing routes). With no robots.txt present, the default behavior for virtually all crawlers — including GPTBot, ClaudeBot, PerplexityBot, and OAI-SearchBot — is to assume full crawl permission.
 
**This is functionally fine but not deliberate.** No crawler is being blocked, which is a real point in this build's favor. But there's no explicit signal either — no `Sitemap:` directive to aid discovery, and no documented stance on `Content-Signal` (search/ai-input/ai-train use permissions). **Recommendation:** add an explicit robots.txt that allows GPTBot, OAI-SearchBot, ClaudeBot, and PerplexityBot by name and references a real sitemap, rather than relying on the absence of the file.
 
---
 
## 4. llms.txt Status: Missing (genuine 404, not a fake shell)
 
`https://entroid-website.vercel.app/llms.txt` returns a real HTTP 404. Per Google's official guidance (2026-05-15/06-15), this has no effect on Google Search, AI Overviews, or AI Mode visibility — it's not a ranking or citation lever there. It may still be worth creating for other AI crawlers/agents that consume the convention, especially since the site nav already references rich resource sections (Blogs, Videos, FAQ, Glossary) that would translate well into an llms.txt primary-pages table.
 
**Template to use**, given what the homepage nav reveals:
```
# Entroid
 
> Entroid — the unified, governed operating layer for the autonomous enterprise.
 
## Main sections
- [Home](https://entroid-website.vercel.app/): Unified Intelligence for Governed Autonomous Enterprises
- [Blogs](.../blogs): Insights on enterprise AI and governed autonomy
- [Videos](.../videos): Product and platform video content
- [FAQ](.../faq): Frequently asked questions
- [Glossary](.../glossary): Key term definitions
- [Why Us](.../why-us): Platform differentiation, founding team, build philosophy
```
 
---
 
## 5. Brand Mention Analysis: no external presence found
 
Consistent with a prior check of this brand name: a web search for "Entroid" combined with enterprise-AI/fabric terms surfaced **no results referencing this specific product** — only unrelated enterprise-AI-fabric platforms from other companies (Equinix, Siemens, Microsoft) that happen to share category language. No Wikipedia, Reddit, YouTube, or LinkedIn presence found. This is a total-absence situation rather than a name-collision problem: nothing to disambiguate against, but also nothing to build entity trust from yet.
 
---
 
## 6. Passage-Level Citability
 
**Hero section:** "Entroid unifies organisations, enterprise knowledge, and existing systems through a governed AI core, enabling autonomous operations while aligning strategy, accelerating innovation, modernising enterprise applications, and maintaining complete governance and control." — ~36 words, one dense compound sentence. It's directly on-topic but packs too many distinct claims (strategy alignment, innovation, modernization, governance) into a single sentence to extract cleanly as a citation; the optimal 134–167 word block would let each claim breathe with its own supporting detail.
 
**H2 headings are statement-style, not question-style** (e.g. "Modernise without rebuilding your enterprise," "Own your platform. Control your future.") — good for human scanning and brand voice, but doesn't match the question-pattern AI search queries tend to use ("What is Entroid?", "How does Entroid handle governance?").
 
**No FAQ content on the homepage itself** — "FAQ" appears only as a nav link to a separate page, which wasn't in scope for this check. If that page follows a genuine Q&A format, it's likely the strongest citability asset on the site and worth auditing directly.
 
**No statistics or specific data points found** in the content reviewed — same qualitative-positioning-language pattern as the sibling CSR build of this brand.
 
---
 
## 7. Server-Side Rendering Check — Passed
 
✅ **Confirmed.** `x-nextjs-prerender: 1` in the response headers, and the full page content (1,401 words, all headings, all images) is present in the raw HTML fetched via `curl` — no JavaScript execution required for a crawler to read everything on this page. This is a fundamentally different and much healthier technical posture than a CSR-only build of the same brand would have.
 
---
 
## 8. Top 5 Highest-Impact Changes
 
1. **Add structured data.** Zero JSON-LD was found anywhere on the homepage — no `Organization`, no `WebSite`, nothing. Given the total lack of external brand presence (§5), `Organization` schema with `sameAs` (once real social profiles exist) is the fastest way to start establishing a machine-readable entity identity.
2. **Publish a real robots.txt and sitemap.xml.** Not blocking anything today, but discovery is left entirely to chance without them — especially important given the nav reveals a much larger site (blogs, videos, FAQ, glossary) than the homepage alone represents.
3. **Audit the dedicated FAQ and Glossary pages directly** — both are exactly the content types this framework identifies as strongest for AI citation (self-contained Q&A, "X is..." definitions), and they weren't in scope for this homepage-only pass.
4. **Break the dense hero sentence into a front-loaded direct answer + supporting detail**, reaching toward the 134–167 word optimal citation length instead of one 36-word compound claim.
5. **Establish external brand presence** — LinkedIn at minimum, given zero footprint was found anywhere for this brand in this or a prior check.
 
---
 
## 9. Schema Recommendations
 
- **`Organization`** — name, url, logo, `sameAs` (once profiles exist). Currently entirely absent.
- **`WebSite`** with `@id` cross-reference to `Organization`.
- **`WebPage`** for the homepage itself, with `about` linking to the Organization entity.
- If the `/faq` page contains genuine user Q&A, consider `QAPage` rather than `FAQPage` — Google retired FAQ rich results for all sites as of 2026-05-07, so `FAQPage` no longer carries SERP benefit; `QAPage` remains the more accurate schema type for genuine community/user Q&A content if that's what that page is.
- **`BreadcrumbList`** on interior pages (blog, video, glossary entries) once those are audited.
 
---
 
## 10. Content Reformatting Suggestions
 
- **Hero paragraph:** split the current 36-word, multi-claim sentence into a direct opening definition ("Entroid is..." or "Entroid unifies X, so that Y.") followed by 2–3 supporting sentences, each carrying one of the currently-bundled claims (strategy alignment, innovation acceleration, governance), reaching the 134–167 word optimal range as a self-contained block.
- **H2 headings:** consider adding a small number of question-form variants alongside the current statement-style headings where they naturally fit search intent (e.g. pairing "Governed by design. Trusted at enterprise scale." with a nearby "How does Entroid handle governance?" sub-treatment) — no need to replace the brand voice, just add matching entry points.
- **FAQ and Glossary pages:** once reviewed, these are the highest-leverage pages on the site for citability if they follow clean Q&A/definition patterns — prioritize auditing them next.