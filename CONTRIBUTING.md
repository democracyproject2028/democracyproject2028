# Contributing to Democracy 2028

Democracy 2028 is an open-source policy framework. We welcome contributions from practitioners, researchers, academics, advocates, and informed citizens. This guide explains how the project works, what we accept, and how to get your work published.

---

## How the project is structured

Democracy 2028 operates on a two-tier model:

**The analytical layer** — the chapters themselves — is written and maintained by the Democracy 2028 editorial team and invited chapter authors. Chapters provide the evidence base, diagnose the problem, describe what Project 2025 proposes (where applicable), and make specific policy recommendations. The analytical layer is not a collection of opinions; it is a sourced, reviewed policy document. Changes to chapter analysis require editorial approval.

**The implementation layer** — action plans — is written by contributors: practitioners with direct, relevant experience. Action plans translate chapter recommendations into concrete steps for a specific audience. An action plan for a chapter on federal ethics law might target agency ethics officers, congressional staff, state-level advocates, or nonprofit watchdogs — each audience gets a different guide. Action plans do not repeat the analysis in the chapter; they assume the reader has read it and focus entirely on what to *do*.

This separation matters. It keeps the analytical layer rigorous and consistent while opening the implementation layer to distributed expertise. You do not need to be a policy researcher to contribute a valuable action plan. You need to know, in practical terms, how something actually works inside the institution the chapter covers.

---

## Three ways to contribute

### 1. Submit an action plan

Action plans are the primary contribution path. To submit one:

- Read the relevant chapter at [democracyproject2028.org](https://democracyproject2028.org)
- Draft your action plan using the standard structure (see below)
- Open a GitHub issue using the **Submit an Action Plan** template, or submit a pull request directly to `src/content/action-plans/`

**Action plan structure:**
- **Who This Is For** — define your audience precisely
- **What You Can Do Now** — actions within existing authority; no legislation required
- **What Requires Leadership Buy-In** — steps that need institutional support but not new law
- **What Requires Legislation** — so readers understand where their advocacy energy fits
- **Resources** — links, citations, contacts

Action plans should be 600–1,200 words. They are practical guides, not essays. Use numbered or bulleted lists where they help. Write for someone who has 20 minutes and a specific job to do.

### 2. Flag a factual issue

If you find an inaccurate statistic, outdated figure, or claim that lacks a source, open a **Flag a Factual Issue** GitHub issue. Include the chapter, the exact claim, what is wrong, and your source. We take fact-checks seriously — if you are right, the chapter gets corrected and you receive attribution.

### 3. Propose yourself as a chapter author

Several chapters in the 45-chapter framework are still in development. If you have deep subject-matter expertise and want to write or co-write a chapter, open a **Propose a Chapter Author** GitHub issue. Chapter authorship is a significant commitment (4,000–8,000 words, fully sourced, following the chapter template) and requires editorial agreement before you begin. We will not accept unsolicited full chapter drafts.

---

## Content standards

### Citation requirements

Every factual claim requires a source. No exceptions. We follow this preference order:

1. Peer-reviewed research
2. Government data and official reports
3. Established think tanks (across the political spectrum)
4. Quality journalism with named sources

Use the `<Citation>` MDX component for inline citations. Include access dates for all web sources. When citing Project 2025, include specific page numbers.

### Voice and tone

- Write for an intelligent general reader, not a specialist audience
- Be solutions-oriented; do not just diagnose problems
- Acknowledge complexity and trade-offs honestly
- Avoid: "common sense," "clearly," "everyone knows," "simply"
- Use "public servants," not "bureaucrats"; "administration," not "regime"

Action plans may be more direct and instructional in tone than chapters. First-person plural ("Here is what we recommend") is acceptable in action plans.

### MDX components

Content is written in MDX (Markdown + JSX). When writing or editing chapter content, use the standard component set:

- `<Citation>` — inline citation with hover preview
- `<DataPoint>` — highlighted statistic
- `<P2025Compare>` — side-by-side comparison with Project 2025's position
- `<Quote>` — attributed blockquote
- `<DayOneAction>` — executive action item
- `<CallToAction>` — engagement prompt

Action plans do not need these components unless you are adding data points that benefit from visual treatment. Plain markdown is fine for most action plans.

### Frontmatter

Every content file requires complete, valid frontmatter. For action plans, the required fields are: `title`, `chapterNumber`, `chapterSlug`, `focus`, `contributor`, `status`, `date`, `summary`, and `tags`. See the schema in `src/content.config.ts` and the sample action plan at `src/content/action-plans/ch03-agency-ethics-officers.mdx`.

---

## The review process

1. **Submit** — open an issue or pull request using the appropriate template
2. **Editorial triage** — within two weeks, an editor will confirm whether the contribution is in scope and assign a reviewer
3. **Review** — substantive review for accuracy, completeness, and fit with the chapter; you may be asked for revisions
4. **Final check** — fact-check pass and copy edit
5. **Publication** — merged to `main` and deployed; you receive attribution in the frontmatter and on the site

We aim to complete the full review cycle in four to six weeks. Complex contributions or those requiring significant revision may take longer. We will communicate with you throughout the process.

---

## Licensing

All contributions are published under **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**. By submitting a contribution, you agree to these terms. This means:

- Anyone can share and adapt the work, including for commercial purposes
- Attribution to the original authors is required
- Derivative works must use the same license

If your contribution includes material from other sources, ensure that material is compatible with CC BY-SA 4.0 before submitting.

---

## Code of conduct

Democracy 2028 is committed to maintaining a respectful, substantive contribution environment. We do not tolerate harassment, personal attacks, or bad-faith engagement. We welcome disagreement about policy — that is the point — but it must be grounded in evidence and expressed constructively.

Contributors who violate these norms will be asked to correct their behavior; repeated violations will result in removal from the project. If you experience or witness a conduct issue, contact the editorial team directly.

---

*Questions not answered here? Open a GitHub issue with the label `question` and we will respond.*
