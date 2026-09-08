Full SEO Audit — Entroid (entroid-website.vercel.app)
Date: 2026-09-08 Method note: The /seo skill's bundled Python runtime requires Python 3.10+; this machine has 3.9.6 and no Homebrew, so /seo setup cannot bootstrap. This audit was run manually (curl-based crawling of the homepage plus 5 representative subpages) covering the same categories the automated seo-audit orchestration would. No PDF report offer at the end — that also depends on the broken runtime.
Business type detected: SaaS / enterprise software platform. Signals: dedicated /product/* pages (Intelligence Hub, Trust & Governance Assurance, Corporate Drivers, Engineering, Functions, Service-as-Software), 9 /industries/* vertical pages, "Request a demo" CTA, no public /pricing page (consistent with an enterprise, sales-led motion).
SEO Health Score: 50/100
Category	Weight	Score	Weighted
Technical SEO	22%	55/100	12.1
Content Quality	23%	55/100	12.65
On-Page SEO	20%	50/100	10.0
Schema / Structured Data	10%	0/100	0.0
Performance (CWV)	10%	65/100	6.5
AI Search Readiness (GEO)	10%	47/100	4.7
Images	5%	85/100	4.25
Total	 	 	50.2 ≈ 50/100
PERCEIVE → ANALYZE → VALIDATE → ACT summary: this is a genuinely well-built site at the infrastructure level — real server-rendered content, fast TTFB, deep and substantive page content across a wide site architecture (9 industry verticals, 6 product pages, a 1,720-word glossary, a 771-word FAQ). It reads like engineering effort went into the platform and content, not yet into SEO instrumentation: zero structured data anywhere, no canonical tags on any page, and duplicate meta descriptions across at least three pages are all "hasn't been done yet" gaps rather than symptoms of a deeper problem. This is a favorable audit to act on — the fixes are additive, not corrective.
1. Technical SEO — 55/100
✅ Strong foundation:
Confirmed server-side rendering (x-nextjs-prerender: 1; full content present in raw HTML, no JS execution needed by crawlers)
Real HTTP 404s for non-existent paths (verified) — no soft-404 risk
HTTPS + HSTS (max-age=63072000; includeSubDomains; preload)
No indexing block: no <meta name="robots"> tag found anywhere, which defaults to indexable/followable
🔴 Gaps:
No canonical tag on any of the 6 pages checked (homepage, FAQ, Glossary, Intelligence Hub, Telecom, Why Us). With a www vs. apex-domain question still open (this is a .vercel.app preview domain — see §8) and no canonicals in place, any future domain/URL changes carry real duplicate-content risk with nothing declaring the authoritative version.
No robots.txt — genuine 404, not a fake shell. Not currently blocking anything (crawlers default to allow), but there's no Sitemap: directive to aid discovery and no explicit AI-crawler allowlist.
No sitemap.xml — genuine 404. With 20+ discovered URLs across products, industries, and resources, there's no single discovery path for crawlers other than following internal links.
Missing X-Content-Type-Options and any CSP/X-Frame-Options headers — HSTS is present but the rest of the security header set found on comparable properties isn't here.
2. Content Quality (E-E-A-T) — 55/100
Strong depth across the site, not just the homepage:
Page	Word count
Homepage	1,401
/resources/glossary	1,720
/resources/faq	771
/why-us	728
/industries/telecom	629
/product/intelligence-hub	585
No thin-content risk anywhere checked — this clears the quality-gate bar comfortably even before counting the additional 8 industry pages and 5 product pages not individually checked.
Gaps:
No author bylines, no publication or last-updated dates found anywhere.
Zero external brand presence (no Wikipedia, Reddit, YouTube, LinkedIn found in a prior check of this brand name) — nothing to anchor Expertise/Authoritativeness signals to outside the site itself.
Homepage hero packs several distinct claims into one dense sentence rather than a clear, quotable definition (flagged previously in the GEO-focused pass on this same URL).
3. On-Page SEO — 50/100
Titles: clean, consistent [Page] · Entroid pattern, unique per page checked. Good.
Meta descriptions — two separate problems:
🔴 Duplicated across pages: /resources/faq, /resources/glossary, and /why-us all carry the exact same 78-character description as the homepage ("Entroid — the unified, governed operating layer for the autonomous enterprise."). These pages have genuinely distinct content (771–1,720 words each) but an identical, generic meta description — a missed opportunity and a duplicate-metadata issue search engines flag.
🟡 Too long elsewhere: /product/intelligence-hub (263 chars) and /industries/telecom (285 chars) will truncate well past the ~155-character SERP display limit.
Headings: homepage has a clean single-H1 structure; the FAQ page organizes by topic (5 H2 categories: Platform, Enterprise AI and Governance, Security and Deployment, Delivery and Ownership) but the individual questions underneath don't appear to be marked up as headings (no H3s found) — likely rendered as accordion labels instead, which weakens how cleanly a crawler can parse question/answer boundaries.
Canonical tags: missing sitewide (see §1).
4. Schema / Structured Data — 0/100
No JSON-LD structured data was found on any of the 6 pages checked (homepage, FAQ, Glossary, Intelligence Hub, Telecom, Why Us). This is the single cleanest gap in the whole audit — there is nothing to validate or fix, only things to add.
Recommended build order:
Organization (name, url, logo, sameAs once real social profiles exist) — sitewide, once.
WebSite with @id cross-reference to Organization.
WebPage per page, about linking to Organization.
For /resources/faq: since the content is genuine user-facing Q&A grouped by topic, use QAPage, not FAQPage — Google retired FAQ rich results for all sites as of 2026-05-07, so FAQPage carries no SERP benefit going forward. QAPage remains the accurate schema type for real Q&A content regardless of rich-result eligibility.
BreadcrumbList on the /product/* and /industries/* pages, given the clear hierarchy already implied by the URL structure.
DefinedTermSet/DefinedTerm is schema.org's purpose-built type for glossary content — worth using on /resources/glossary rather than generic WebPage markup, given its size (1,720 words) and reference value.
5. Performance (Core Web Vitals) — 65/100 (low confidence)
TTFB: 129ms on the homepage check, with x-vercel-cache: HIT — strong signal.
No real CrUX or PageSpeed Insights field data available in this pass (would require /seo google cwv with API access, or a manual PageSpeed Insights run).
Recommendation: treat this score as a placeholder based on TTFB alone; run real CWV field data before treating Performance as settled.
6. AI Search Readiness (GEO) — 47/100
Full detail already delivered in the standalone GEO report for this exact URL (2026-09-08). Headline points, carried forward:
No crawler blocks (robots.txt is genuinely absent, not disallowing) — a real positive.
No structured data (same finding as §4).
No external brand presence anywhere.
Hero copy under-optimized for citation extraction; dedicated FAQ/Glossary pages (now confirmed substantial: 771 and 1,720 words respectively) are the strongest untapped citability assets on the site.
7. Images — 85/100
11 images on the homepage, 100% with alt text.
Not independently verified on subpages, but the pattern is likely consistent given the shared codebase.
Not verified: modern format usage beyond the .webp/.png extensions already visible in discovered asset URLs, compression levels, responsive srcset usage.
8. Domain note
This site is being served from a .vercel.app preview/default domain rather than a custom production domain. If this is meant to go live under its own domain, canonical tags, sameAs schema, and any backlink-building should target the final domain, not this one — worth confirming the intended production URL before investing further SEO work here, since a domain migration later would need its own redirect/canonical strategy regardless of what's fixed now.
Prioritized Action Plan
1. Add Organization + WebSite schema sitewide. THINK: zero structured data currently exists — this is the highest-leverage single change since it establishes a baseline machine-readable entity for every other page to reference. CONNECT-system: unblocks WebPage, QAPage, and BreadcrumbList additions below, all of which reference @ids established here. ACCEPT (falsifiable check): Google's Rich Results Test shows the Organization markup with no errors on any page it's added to. GROW (leading indicator): Search Console's "Enhancements" report begins showing structured-data item counts > 0.
2. Add self-referencing canonical tags to every page. THINK: no page currently declares its own authoritative URL — low risk today, real risk the moment this moves off the .vercel.app domain or gains URL parameters. ACCEPT: view-source on any page shows a <link rel="canonical"> pointing to itself. GROW: monitor for "Duplicate, Google chose different canonical" entries in Search Console once indexed — should stay at zero.
3. Fix duplicate meta descriptions on /resources/faq, /resources/glossary, /why-us (write unique ones matching each page's actual content); shorten the ones on /product/intelligence-hub and /industries/telecom to ~155 characters. ACCEPT: no two pages share an identical meta description; none exceed ~160 characters.
4. Publish robots.txt (with an explicit AI-crawler allowlist and a Sitemap: directive) and a real sitemap.xml. CONNECT-system: depends on nothing above; can run in parallel with #1–3. ACCEPT: both URLs return real content (not 404s), and the sitemap validates against the XML sitemap schema.
5. Add QAPage schema to /resources/faq and DefinedTermSet/DefinedTerm to /resources/glossary, and mark up individual FAQ questions as heading elements rather than unlabeled accordion text. Dependency: build after #1 (references the Organization/WebSite @ids). ACCEPT: Rich Results Test / Schema.org validator shows valid markup with no errors on both pages.
6. Confirm the intended production domain before further link-building or sameAs work, given this is currently served on a .vercel.app address (§8).