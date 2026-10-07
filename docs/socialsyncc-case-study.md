# SocialSyncc case-study sources

Added as case C-09 at `/work/socialsyncc`, with a featured homepage card and the existing Work filters. Case counts and filter totals now derive from the project data.

## Source material

- User-provided `SWE FYP Thesis Report Sample.pdf`, 47 pages. Relevant material: PDF pages 10–12 for the problem and scope; 25 for architecture; 27–34 for technologies; 35–43 for implementation; 44–46 for results and future work.
- User-provided screenshots: `IMG_4946.PNG` (splash), `IMG_4947.PNG` (welcome), `IMG_4948.PNG` (sign-in), `IMG_4962.PNG` (publishing summaries/trend), `IMG_4961.PNG` (platform mix and weekday frequency).
- [SocialSyncc website](https://socialsyncc.com/), reviewed on 8 October 2026. The Features, Supported Channels and How It Works sections corroborate the composer, previews, destination selection, scheduling and publishing workflow. The live page initially rendered blank, then loaded successfully and was reviewed in the browser.

The original PDF, extracted text and screenshots remain local reference material. They are not included in this commit.

## Editorial decisions

The report identifies Flutter/Dart, NestJS/Node.js, TypeORM, PostgreSQL, DigitalOcean VPS, AWS S3, CloudFront and OAuth. Those technologies are used in the case study. A stray PHP paragraph in the conclusion conflicts with the detailed implementation chapter and is omitted.

The documented destination list matches the website: Google Business, Instagram, TikTok, YouTube, Facebook Pages, LinkedIn Pages, LinkedIn Profiles and Pinterest. X and Threads are not presented as confirmed integrations because the report lists them as future scope, despite some screenshot icons.

The supplied analytics screenshots establish basic publishing activity views: reporting periods, post-state totals, publishing trend, platform mix and posting frequency. Reach, engagement, audience growth, exportable reporting and AI captions remain future scope and are not described as current features. Billing, approvals and collaboration are also omitted.

Author names, student identifiers, private profiles, dummy post captions, marketing adoption figures and performance percentages are excluded. Screenshot numbers are example interface data, not customer outcomes. The website's app-store buttons resolve to `#`, so no app-store release is asserted. Its placeholder phone number is not copied.

## Images and verification

Six presentation images were generated with built-in ImageGen and exported to `public/work/case-mockups/socialsyncc/`: `cover.webp`, `onboarding.webp`, `publishing.webp`, `scheduling.webp`, `status.webp`, `analytics.webp`.

The [prompt set](socialsyncc-image-prompts.json) records each reference and full prompt. These are presentation mockups adapted from the supplied screens and report, rather than literal screen captures of a live account. All six assets have an alpha channel and fully transparent corners, recorded in [the alpha report](socialsyncc-image-alpha-check.json).

See [the mockup proof sheet](previews/socialsyncc-mockups.png), [the website preview](previews/socialsyncc-case-study.jpg) and [the source website capture](previews/socialsyncc-source.jpg).

The running local case-study page was reviewed from the hero through all five feature sections. All six images loaded successfully. The Work page shows nine cases and filter totals of five web, seven mobile, five AI and five cloud cases; its SocialSyncc card opens the new detail page. The homepage shows nine cases and features SocialSyncc first, with a working link to its detail page. Longer case titles use a smaller responsive heading size to avoid an orphaned final letter. Browser review and asset checks were completed; no production build or automated tests were run.
