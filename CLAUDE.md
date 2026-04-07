# CLAUDE.md — Democracy 2028 Project Context

## What This Project Is

Democracy 2028 is a grassroots, open-source, evidence-based policy framework for strengthening American democracy and governance. It is structured as a comprehensive, chapter-by-chapter blueprint covering every federal agency and major policy area — modeled on the scope of the Heritage Foundation's "Project 2025: Mandate for Leadership" but grounded in democratic values, empirical evidence, and constructive governance.

This is NOT a partisan document. It draws on research and principles from across the political spectrum. The frame is "good governance and democratic accountability" not "left vs. right."

## Tech Stack

- **Framework**: Astro v4+ with content collections
- **Styling**: Tailwind CSS
- **Content**: MDX (Markdown + JSX components)
- **Language**: TypeScript
- **Search**: Pagefind (client-side static search)
- **Deploy**: Netlify (static site)
- **License**: CC BY-SA 4.0

## Project Structure

```
src/
  content/
    chapters/     — Full policy chapters (MDX, 4000-8000 words each)
    briefs/       — Shorter policy briefs (MDX, 1000-2000 words)
    principles/   — Core principles (MDX)
    authors/      — Author bios (MDX)
  layouts/        — Astro layouts (Base, Chapter, Brief, Landing)
  pages/          — Route pages
  components/     — Reusable Astro/React components
  styles/         — Global CSS and design tokens
```

## Design System

### Colors
- Primary (navy): #1B2A4A
- Accent (gold): #C5973B
- Secondary (slate): #475569
- Background: #FAFAF5
- Success: #2D6A4F
- Alert: #D97706

### Typography
- Display: Fraunces (Google Fonts, variable)
- Body: Source Serif 4 (Google Fonts)
- UI: DM Sans (Google Fonts)
- Mono: JetBrains Mono (Google Fonts)

### Design Principles
- Reading-optimized: 65ch max line length for body text
- Generous whitespace, warm and approachable
- Section color-coding (each of 7 sections has a distinct accent)
- Print-friendly stylesheets on every chapter
- Mobile-first responsive design

## Content Standards

### Voice & Tone
- Authoritative but accessible — write for an intelligent general reader
- Solutions-oriented, not just diagnostic
- Acknowledge complexity and trade-offs honestly
- Patriotic without jingoism: "we can do better" not "we're failing"
- When discussing Project 2025 proposals, be factual and fair before being critical
- Cite evidence, not ideology

### Citation Requirements
- EVERY factual claim must have a source
- Preference order: peer-reviewed research > government data > established think tanks > quality journalism
- Always include access dates for web sources
- When citing Project 2025, use specific page numbers
- Minimum 15 sources per chapter; target 30+

### Chapter Structure (every chapter follows this template)
1. Executive Summary (150-250 words)
2. Current State of Affairs
3. What Project 2025 Proposes (factual, where applicable)
4. What the Evidence Says
5. Democracy 2028 Recommendations (specific, actionable)
6. Day One Actions
7. Sources & Further Reading

### Terminology
- "Democracy 2028" in body text (not "D2028")
- "Project 2025" in body text (not "P2025")
- "Public servants" not "bureaucrats"
- "Administration" not "regime"
- Avoid: "common sense," "clearly," "everyone knows," "simply"

## Content Collection Schemas

### chapters frontmatter
```yaml
title: string
section: one of [governing-with-integrity, national-security, general-welfare, the-economy, regulatory-agencies, democracy-infrastructure, technology-and-future]
sectionNumber: number (1-7)
chapterNumber: number (1-45)
agency: string
status: one of [draft, review, published, needs-update]
authors: string[]
reviewers: string[]
lastUpdated: date
summary: string (max 200 words)
sources: number
p2025Response: boolean
tags: string[]
```

## Custom MDX Components

When writing chapter content, use these components:

- `<Citation author="" title="" publication="" year="" url="" />` — inline citation with hover preview
- `<DataPoint stat="" source="" url="" />` — highlighted statistic
- `<P2025Compare p2025="" d2028="" />` — side-by-side comparison box
- `<Quote text="" attribution="" source="" />` — attributed blockquote
- `<DayOneAction title="" description="" authority="" />` — executive action item
- `<CallToAction text="" link="" />` — engagement prompt

## Commands

```bash
pnpm dev          # Local development server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm check        # Astro type checking
```

## Important Context

The full text of Project 2025's "Mandate for Leadership" is available in the project for reference. When writing chapters that respond to P2025 proposals, always:
1. Quote or cite P2025 accurately and fairly
2. Present their argument before critiquing it
3. Ground the response in evidence, not ideology
4. Offer constructive alternatives, not just opposition

## 45-Chapter Framework

### Section 1: Governing With Integrity (Ch 1-4)
### Section 2: National Security & Global Engagement (Ch 5-10)
### Section 3: The General Welfare (Ch 11-21)
### Section 4: The Economy (Ch 22-26)
### Section 5: Independent Regulatory Agencies (Ch 27-30)
### Section 6: Strengthening Democracy (Ch 31-37) — NEW, not in P2025
### Section 7: Technology, AI & the Future (Ch 38-45) — NEW, not in P2025
