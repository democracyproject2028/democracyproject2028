import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/chapters' }),
  schema: z.object({
    title: z.string(),
    section: z.enum([
      'governing-with-integrity',
      'national-security',
      'general-welfare',
      'the-economy',
      'regulatory-agencies',
      'democracy-infrastructure',
      'technology-and-future',
    ]),
    sectionNumber: z.number().min(1).max(7),
    chapterNumber: z.number().min(1).max(45),
    agency: z.string(),
    status: z.enum(['draft', 'review', 'published', 'needs-update']),
    authors: z.array(z.string()),
    reviewers: z.array(z.string()).default([]),
    lastUpdated: z.date(),
    summary: z.string().max(1200),
    sources: z.number().default(0),
    p2025Response: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const briefs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/briefs' }),
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    status: z.enum(['draft', 'review', 'published']),
    author: z.string(),
    date: z.date(),
    summary: z.string(),
    relatedChapters: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const principles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/principles' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    icon: z.string(),
    summary: z.string(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    organization: z.string(),
    bio: z.string(),
    expertise: z.array(z.string()),
    photo: z.string().optional(),
  }),
});

const actionPlans = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/action-plans' }),
  schema: z.object({
    title: z.string(),
    chapterNumber: z.number(),
    chapterSlug: z.string(),
    focus: z.string(),                    // e.g. "Federal HR Directors", "Congressional Staff"
    contributor: z.string(),
    contributorTitle: z.string().optional(),
    contributorOrg: z.string().optional(),
    status: z.enum(['submitted', 'review', 'published']),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { chapters, briefs, principles, authors, actionPlans };
