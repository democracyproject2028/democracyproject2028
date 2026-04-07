# Democracy 2028 — Claude Code Project Plan

## Overview

This is a step-by-step plan for using Claude Code to bootstrap the Democracy 2028 project: a grassroots, evidence-based, pro-democracy policy platform published as a living website. The plan covers site architecture, content framework, tooling, and a phased build-out you can execute incrementally.

---

## Phase 0: Project Scaffolding

### Step 1 — Initialize the Project

```
Create a new project using Astro (static site generator) with the following:
- Astro v4+ with content collections
- Tailwind CSS for styling
- MDX support for rich content authoring
- TypeScript
- Deploy target: Netlify or Vercel (static)
- Package manager: pnpm

Directory structure:
democracy2028/
├── src/
│   ├── content/
│   │   ├── chapters/          # Policy chapters (MDX)
│   │   ├── briefs/            # Shorter policy briefs (MDX)
│   │   ├── principles/        # Core principles (MDX)
│   │   ├── authors/           # Author bios (MDX)
│   │   └── config.ts          # Content collection schemas
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ChapterLayout.astro
│   │   ├── BriefLayout.astro
│   │   └── LandingLayout.astro
│   ├── pages/
│   │   ├── index.astro        # Landing / manifesto
│   │   ├── framework.astro    # Full table of contents
│   │   ├── principles.astro   # Core principles page
│   │   ├── chapters/[...slug].astro
│   │   ├── briefs/[...slug].astro
│   │   ├── contribute.astro   # How to contribute
│   │   ├── about.astro
│   │   └── search.astro
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── TableOfContents.astro
│   │   ├── CitationBlock.astro
│   │   ├── ProgressTracker.astro
│   │   ├── ChapterCard.astro
│   │   ├── SearchBar.astro     # Client-side search (Pagefind)
│   │   ├── ShareButtons.astro
│   │   ├── AuthorCard.astro
│   │   ├── SourcesList.astro
│   │   ├── P2025Comparison.astro  # Side-by-side comparison widget
│   │   └── Newsletter.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── og-image.png
│   ├── favicon.svg
│   └── fonts/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### Step 2 — Design System & Brand Identity

```
Create the Democracy 2028 design system with these specifications:

Brand Direction:
- Tone: Authoritative but accessible. Think "The Atlantic meets a civic handbook."
- NOT generic political red/blue. This is a democracy project, not a party project.

Color Palette (CSS custom properties):
- Primary: Deep navy (#1B2A4A) — authority, stability
- Accent: Warm gold (#C5973B) — aspiration, the "2028" future
- Secondary: Slate (#475569) — body text, substance
- Background: Warm off-white (#FAFAF5) — approachable, readable
- Success green (#2D6A4F) — for progress indicators
- Alert amber (#D97706) — for urgency callouts
- Subtle borders and card backgrounds using warm grays

Typography:
- Display/headings: "Fraunces" (variable, from Google Fonts) — distinctive,
  editorial, has gravitas without being stuffy
- Body: "Source Serif 4" — highly readable for long-form policy content
- UI/Navigation/Labels: "DM Sans" — clean, modern contrast
- Monospace for citations/data: "JetBrains Mono"

Key Design Elements:
- A subtle star motif (abstracted, geometric) as a recurring visual element
- Chapter pages use generous margins and reading-optimized line lengths (65ch)
- Progress bar showing how much of the framework is complete
- Color-coded section badges (Defense = navy, Economy = gold, etc.)
- Print stylesheet for each chapter (people will want to print these)
```

### Step 3 — Content Collection Schemas

```
Define Astro content collection schemas in src/content/config.ts:

chapters:
  - title: string
  - section: enum [
      "governing-with-integrity",
      "national-security",
      "general-welfare",
      "the-economy",
      "regulatory-agencies",
      "democracy-infrastructure",
      "technology-and-future"
    ]
  - sectionNumber: number
  - chapterNumber: number
  - agency: string (e.g., "Department of Education")
  - status: enum ["draft", "review", "published", "needs-update"]
  - authors: string[]
  - reviewers: string[]
  - lastUpdated: date
  - summary: string (200 words max, for cards and SEO)
  - sources: number (count of cited sources)
  - p2025Response: boolean (does this chapter directly respond to a P2025 chapter?)
  - tags: string[]
  - readingTime: number (minutes, auto-calculated)

briefs:
  - title: string
  - topic: string
  - status: enum ["draft", "review", "published"]
  - author: string
  - date: date
  - summary: string
  - relatedChapters: string[] (slugs)
  - tags: string[]

principles:
  - title: string
  - order: number
  - icon: string (emoji or lucide icon name)
  - summary: string

authors:
  - name: string
  - title: string
  - organization: string
  - bio: string
  - expertise: string[]
  - photo: string (optional)
```

---

## Phase 1: Core Content Framework

### Step 4 — The Manifesto / Landing Page

```
Create the landing page (src/pages/index.astro) with the following content
structure. Write the actual copy for this — it's the most important page:

1. HERO SECTION
   Headline: "Democracy 2028: A Blueprint for the Country We Can Be"
   Subhead: "An open-source, evidence-based framework for strengthening
   American democracy, governance, and the common good."
   CTA buttons: "Read the Framework" | "Contribute"

2. THE CASE (why this exists)
   - 3-4 paragraphs explaining the need
   - Frame: not anti-Project 2025, but pro-democracy
   - Emphasize: evidence-based, nonpartisan where possible, open-source,
     built in public

3. CORE PRINCIPLES (summary cards linking to full principles page)
   - Democratic Accountability
   - Rule of Law & Constitutional Governance
   - Evidence-Based Policymaking
   - Transparency & Anti-Corruption
   - Rights & Liberties for All
   - Competent, Effective Government
   - Future-Readiness (tech, climate, emerging challenges)

4. FRAMEWORK OVERVIEW (visual table of contents)
   - Show all 7 sections with chapter cards
   - Visual indicator of status (published / in progress / planned)
   - Progress bar showing overall completion

5. HOW THIS IS DIFFERENT
   - Open-source vs. closed-door
   - Evidence-based vs. ideological
   - Constructive vs. deconstructive
   - Invites disagreement and debate

6. GET INVOLVED
   - Contribute expertise
   - Review and comment
   - Share and spread
   - Newsletter signup

7. FOOTER
   - Creative Commons license notice
   - GitHub link
   - Contact
```

### Step 5 — Framework Table of Contents

```
Create the full framework page (src/pages/framework.astro) with the complete
table of contents. This is the "here's what we intend to cover" page that
shows the full ambition even before all chapters are written.

SECTION 1: GOVERNING WITH INTEGRITY
  Ch 1.  The White House & Executive Office
  Ch 2.  Civil Service & Government Personnel
  Ch 3.  Ethics, Transparency & Anti-Corruption
  Ch 4.  Regulatory Process & Administrative Law

SECTION 2: NATIONAL SECURITY & GLOBAL ENGAGEMENT
  Ch 5.  Department of Defense
  Ch 6.  Department of Homeland Security
  Ch 7.  Department of State & Diplomacy
  Ch 8.  Intelligence Community & Oversight
  Ch 9.  International Development (USAID)
  Ch 10. Media, Information & Public Diplomacy

SECTION 3: THE GENERAL WELFARE
  Ch 11. Department of Agriculture & Food Security
  Ch 12. Department of Education
  Ch 13. Department of Energy & Clean Energy Transition
  Ch 14. Environmental Protection Agency
  Ch 15. Department of Health & Human Services
  Ch 16. Department of Housing & Urban Development
  Ch 17. Department of the Interior & Public Lands
  Ch 18. Department of Justice & Civil Rights
  Ch 19. Department of Labor & Workers
  Ch 20. Department of Transportation & Infrastructure
  Ch 21. Department of Veterans Affairs

SECTION 4: THE ECONOMY
  Ch 22. Department of Commerce & Industrial Policy
  Ch 23. Department of the Treasury & Tax Policy
  Ch 24. The Federal Reserve & Monetary Policy
  Ch 25. Small Business & Entrepreneurship
  Ch 26. Trade Policy

SECTION 5: INDEPENDENT REGULATORY AGENCIES
  Ch 27. Financial Regulation (SEC, CFPB)
  Ch 28. Federal Communications Commission
  Ch 29. Federal Election Commission
  Ch 30. Federal Trade Commission

SECTION 6: STRENGTHENING DEMOCRACY (NEW — not in P2025)
  Ch 31. Voting Rights & Election Administration
  Ch 32. Redistricting & Representation
  Ch 33. Campaign Finance & Political Corruption
  Ch 34. Congressional Reform & Legislative Process
  Ch 35. Judicial Independence & Court Reform
  Ch 36. State & Local Democracy
  Ch 37. Civic Engagement & Democratic Culture

SECTION 7: TECHNOLOGY, AI & THE FUTURE (NEW — not in P2025)
  Ch 38. AI Governance & Safety
  Ch 39. Data Privacy & Digital Rights
  Ch 40. Cybersecurity & Critical Infrastructure
  Ch 41. Social Media, Platforms & Information Integrity
  Ch 42. Science, Research & Innovation Policy
  Ch 43. Space, Quantum & Emerging Technology
  Ch 44. Climate Adaptation & Resilience
  Ch 45. Pandemic Preparedness & Biosecurity

Each entry shows: title, assigned author (or "seeking author"),
status badge, and a 1-2 sentence description.
```

### Step 6 — Chapter Template & First Chapters

```
Create the standard chapter template (src/layouts/ChapterLayout.astro)
with this structure that every chapter follows:

CHAPTER PAGE LAYOUT:
─────────────────────────────────────
  Section Badge    Chapter Number
  CHAPTER TITLE
  Author(s) | Last Updated | Sources Cited | Reading Time
─────────────────────────────────────

  EXECUTIVE SUMMARY (boxed, ~200 words)
  For general readers. What does this chapter recommend and why?

  TABLE OF CONTENTS (auto-generated from headings)

  I. CURRENT STATE OF AFFAIRS
     What does this agency/area do? What is its mission?
     What is working? What isn't?
     Key data and trends.

  II. WHAT PROJECT 2025 PROPOSES (where applicable)
     Factual summary of P2025's recommendations for this area.
     Evidence-based analysis of likely outcomes.
     (Use the P2025Comparison component for side-by-side)

  III. WHAT THE EVIDENCE SAYS
     Research findings, international comparisons, historical lessons.
     All claims cited to peer-reviewed or authoritative sources.

  IV. DEMOCRACY 2028 RECOMMENDATIONS
     Specific, actionable policy proposals.
     Organized by: Executive actions (Day 1), Regulatory changes,
     Legislative proposals, Long-term structural reforms.

  V. DAY ONE ACTIONS
     What a President committed to these principles could do
     immediately upon taking office.

  VI. SOURCES & FURTHER READING
     Full bibliography. Links to primary sources.

─────────────────────────────────────
  SIDEBAR (on wide screens):
  - Chapter navigation (sticky)
  - Related briefs
  - "Suggest an edit" link (to GitHub)
  - Share buttons
  - Download as PDF button
─────────────────────────────────────

Then write the first 3 starter chapters as real MDX content.
Recommended starters (richest existing research base):

1. Chapter 31: Voting Rights & Election Administration
   Key sources: Brennan Center, EAC, MIT Election Lab, Bipartisan
   Policy Center

2. Chapter 38: AI Governance & Safety
   Key sources: NIST AI RMF, EU AI Act, White House AI EO (2023),
   OECD AI Principles, AI safety research

3. Chapter 3: Ethics, Transparency & Anti-Corruption
   Key sources: CREW, POGO, OGE data, Volcker Alliance,
   international transparency indices
```

---

## Phase 2: Infrastructure & Tooling

### Step 7 — Search & Navigation

```
Add Pagefind for client-side static search:
- pnpm add -D pagefind
- Configure in astro.config.mjs to index all content
- Build search UI component with keyboard shortcuts (Cmd+K)
- Index chapter titles, summaries, body content, tags, and authors

Add breadcrumb navigation:
  Home > Section Name > Chapter Title

Add prev/next chapter navigation at bottom of each chapter.

Add a "reading progress" indicator (thin bar at top of page showing
scroll position within a chapter).
```

### Step 8 — Citation System

```
Build a robust citation system for MDX content:

Create a custom MDX component <Citation> that:
- Accepts: author, title, publication, year, url, accessDate
- Renders as a superscript number inline
- Collects into a numbered bibliography at page bottom
- Supports hover-preview of the citation
- Exports to BibTeX format

Create a <SourcesList> component that:
- Renders the full bibliography at the end of each chapter
- Groups by type: Academic, Government, Journalistic, Think Tank
- Each source is a clickable link
- Shows access date for web sources

Create a <Quote> component for blockquotes with attribution:
- Source name, title, date
- Styled distinctly from body text
- Includes source link

Create a <DataPoint> component for inline statistics:
- Renders the stat prominently
- Includes source citation
- Has a "verify" link to the original data

Create a <P2025Compare> component:
- Two-column comparison: "Project 2025 says..." vs "Democracy 2028 proposes..."
- Neutral, factual tone in the P2025 column
- Sources for both sides
```

### Step 9 — GitHub Integration & Contribution Workflow

```
Set up the GitHub repository:

Repository: democracy2028/democracy2028
License: CC BY-SA 4.0 (Creative Commons Attribution-ShareAlike)

Create:
- README.md with project overview and quick start
- CONTRIBUTING.md with detailed contribution guidelines:
  - How to propose a new chapter
  - How to suggest edits to existing content
  - Style guide and citation standards
  - Review process (PR-based)
  - Code of conduct
- .github/
  - ISSUE_TEMPLATE/
    - chapter-proposal.md
    - fact-check.md
    - policy-suggestion.md
    - bug-report.md
  - PULL_REQUEST_TEMPLATE.md
  - workflows/
    - deploy.yml (auto-deploy on merge to main)
    - link-check.yml (verify all source links still work, weekly)
    - word-count.yml (track project progress)

Branch strategy:
- main: published content
- draft/*: chapters in progress
- review/*: chapters under peer review

Add "Edit this page on GitHub" link to every chapter page.
Add "Suggest a correction" link that opens a pre-filled GitHub issue.
```

### Step 10 — Newsletter & Audience Building

```
Integrate a newsletter signup:

Option A (free to start): Buttondown
Option B (more features): ConvertKit free tier

Create a <Newsletter> component that appears:
- In the site footer
- As a gentle banner after reading 50% of any chapter
- On the /contribute page

Newsletter segments to set up:
- "New chapter published" (content updates)
- "Weekly digest" (news analysis through D2028 lens)
- "Contributor updates" (for people who want to help write)

Create an RSS feed for all published content (Astro has built-in support).
```

### Step 11 — Analytics & Progress Tracking

```
Add privacy-respecting analytics:
- Plausible Analytics (privacy-first, no cookies, GDPR-compliant)
  OR
- Umami (self-hosted, open-source alternative)

Create a public /progress page that shows:
- Total chapters planned: 45
- Chapters published: X
- Chapters in draft: X
- Chapters seeking authors: X
- Total sources cited across all chapters
- Total contributors
- A visual progress bar / grid

This transparency is part of the brand — building in public.
```

---

## Phase 3: Content Production System

### Step 12 — Research & Writing Workflow with Claude

```
Create a standardized research-and-drafting workflow you can use with
Claude for each chapter:

STEP A: Research Brief
  Prompt Claude: "I'm writing Chapter [X]: [Topic] for Democracy 2028.
  Create a research brief that includes:
  1. The current state of [agency/topic] — key facts, data, recent history
  2. Summary of what Project 2025 proposes for this area (cite specific
     page numbers from the P2025 document)
  3. Existing policy proposals from major think tanks and researchers
  4. International comparisons — what do other democracies do?
  5. Key academic research findings
  6. List of 20+ sources I should read and cite
  Provide this in a structured format I can use as an outline."

STEP B: First Draft
  Prompt Claude: "Using this research brief [paste], write a first draft
  of Chapter [X] following the Democracy 2028 chapter template:
  - Executive Summary (200 words)
  - Current State of Affairs
  - What Project 2025 Proposes (factual, neutral summary)
  - What the Evidence Says
  - Democracy 2028 Recommendations (specific, actionable)
  - Day One Actions
  - Sources
  Use the citation format [Author, Year] inline. Maintain an authoritative
  but accessible tone. Target 4,000-6,000 words."

STEP C: Fact-Check & Source Verification
  Prompt Claude: "Review this draft for:
  1. Any claims that need stronger sourcing
  2. Potential factual errors or outdated information
  3. Places where the argument is weak or one-sided
  4. Missing counterarguments that should be addressed
  5. Suggestions for additional evidence"

STEP D: Convert to MDX
  Prompt Claude: "Convert this chapter draft into MDX format using the
  Democracy 2028 component system: <Citation>, <DataPoint>,
  <P2025Compare>, <Quote>. Add frontmatter matching the content
  collection schema."

Save these prompts as template files in the repo:
  /templates/research-brief-prompt.md
  /templates/first-draft-prompt.md
  /templates/fact-check-prompt.md
  /templates/mdx-conversion-prompt.md
```

### Step 13 — Style Guide

```
Create a comprehensive style guide at /src/content/pages/style-guide.mdx:

VOICE & TONE:
- Write for an intelligent general reader, not policy wonks
- Authoritative but not condescending
- Solutions-oriented, not just diagnostic
- Acknowledge complexity and trade-offs honestly
- Patriotic without being jingoistic — "we can do better" not "we're failing"
- Cite evidence, not ideology
- When discussing P2025 proposals, be factual and fair before being critical

CITATION STANDARDS:
- Every factual claim must have a source
- Prefer: peer-reviewed research > government data > established think tanks
  > quality journalism > other
- Always include access dates for web sources
- When citing P2025, use specific page numbers
- Minimum 15 sources per chapter; aim for 30+

FORMATTING:
- Chapters: 4,000–8,000 words
- Briefs: 1,000–2,000 words
- Executive summaries: 150–250 words
- Use subheadings every 400–600 words
- Use data points and statistics to anchor arguments
- Include at least one P2025 comparison per chapter (where applicable)

TERMINOLOGY:
- "Democracy 2028" not "D2028" in body text
- "Project 2025" not "P2025" in body text (use in component props)
- "Evidence suggests" not "studies show" (be specific about which evidence)
- "Public servants" not "bureaucrats"
- "Administration" not "regime"
- Avoid: "common sense" (subjective), "clearly" (dismissive),
  "everyone knows" (assumption), "simply" (nothing in policy is simple)
```

---

## Phase 4: Growth & Community

### Step 14 — Social Sharing & SEO

```
Implement for every page:
- Open Graph meta tags (title, description, image)
- Twitter Card meta tags
- Structured data (JSON-LD) for articles
- Auto-generated OG images per chapter using @vercel/og or a custom
  SVG template (chapter title + section color + D2028 branding)
- Canonical URLs
- Sitemap.xml (Astro built-in)
- robots.txt

Create shareable "cards" for key statistics and recommendations:
- A component that renders a beautifully designed quote card
- Sized for Twitter/X, Instagram, LinkedIn
- Includes the D2028 URL and branding
- Can be downloaded as PNG from any chapter page
```

### Step 15 — Comparison Tool

```
Build an interactive comparison page at /compare:

A searchable, filterable interface where users can:
- Select a federal agency or topic
- See side-by-side: P2025's proposal vs. D2028's proposal
- Each side includes source citations
- Filter by: section, status, topic tag

This becomes a powerful shareable resource and a reason for
journalists and researchers to link to the site.
```

### Step 16 — PDF Export

```
Add per-chapter PDF export:
- Use Astro's SSR mode + Puppeteer or @react-pdf/renderer
- Styled PDF with D2028 branding, proper headers/footers
- Includes full bibliography
- "Downloaded from democracy2028.org — CC BY-SA 4.0"

Add full-document PDF compilation:
- Combine all published chapters into a single PDF
- Auto-generate table of contents
- Include manifesto as foreword
- Version-stamped with date
```

---

## Execution Order (What to Tell Claude Code)

Here's the sequence of commands to give Claude Code:

```
Phase 0 (Day 1):
1. "Initialize an Astro project with Tailwind, MDX, and TypeScript
    using the structure in this plan. Set up the design system with
    the specified colors, fonts, and components."

2. "Create the content collection schemas for chapters, briefs,
    principles, and authors as specified."

3. "Build the base layout, navigation, and footer components with
    the Democracy 2028 branding."

Phase 1 (Week 1):
4. "Create the landing page with the manifesto content, principles
    cards, framework overview, and newsletter signup."

5. "Build the framework page showing the full 45-chapter table of
    contents with status indicators."

6. "Create the chapter layout template with all specified sections,
    sidebar navigation, citation system, and P2025 comparison component."

7. "Write the first chapter: Voting Rights & Election Administration.
    Research thoroughly and cite real sources."

Phase 2 (Week 2-3):
8. "Set up Pagefind search, breadcrumbs, reading progress indicator,
    and prev/next navigation."

9. "Create the GitHub repository structure with contribution guidelines,
    issue templates, and CI/CD workflow."

10. "Add Plausible analytics, RSS feed, and the public progress page."

Phase 3 (Week 3-4):
11. "Create the research and writing prompt templates."

12. "Write Chapter 38: AI Governance & Safety."

13. "Write Chapter 3: Ethics, Transparency & Anti-Corruption."

Phase 4 (Month 2+):
14. "Build the comparison tool page."

15. "Add OG image generation and social sharing cards."

16. "Add PDF export for individual chapters and the full document."
```

---

## Domain & Hosting Checklist

```
□ Register democracy2028.org (and .com if available)
□ Set up Netlify or Vercel (free tier is fine to start)
□ Connect GitHub repo for auto-deploy
□ Set up Plausible or Umami analytics
□ Set up Buttondown or ConvertKit for newsletter
□ Create social accounts: Twitter/X, Bluesky, LinkedIn, Threads
□ Set up Google Search Console
□ Submit sitemap
```

---

## Cost Estimate (Grassroots Budget)

```
Domain name:           ~$12/year
Hosting (Netlify):     $0 (free tier handles significant traffic)
Analytics (Plausible): $9/month (or free with self-hosted Umami)
Newsletter:            $0 (Buttondown free tier up to 100 subscribers)
Fonts:                 $0 (Google Fonts)
SSL:                   $0 (included with Netlify/Vercel)
GitHub:                $0 (public repo)
Claude Pro:            $20/month (for research and drafting)

Total to launch:       ~$30/month
```

---

## Success Metrics

```
Month 1:  Site live, manifesto published, 3 chapters, framework visible
Month 3:  10 chapters published, 5 contributors, 500 newsletter subscribers
Month 6:  20 chapters, 15 contributors, 2,000 subscribers, press coverage
Month 12: 35+ chapters, advisory board formed, organizational partnerships,
          first complete PDF edition, 10,000+ subscribers
Month 18: Full 45-chapter document, print publication consideration,
          cited in policy discussions
```
