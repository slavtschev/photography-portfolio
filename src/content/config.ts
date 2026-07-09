import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** 'projects' = main work, 'playground' = experimental/casual */
    section: z.enum(['projects', 'playground']).default('projects'),
    order: z.number().default(99),
    /** Short paragraph shown on the project page header */
    description: z.string().optional(),
    /** Year string, e.g. "2024" or "2023–2024" */
    year: z.string().optional(),
    /** Full date for the project header, e.g. "January 2024" */
    date: z.string().optional(),
    /** Per-project accent color */
    accent: z.string().default('var(--color-text)'),
    /** 1x1 cover image path relative to /public/, shown on homepage strip */
    cover: z.string().optional(),
    /** Gallery image paths relative to /public/images/ */
    images: z.array(z.string()).default([]),
    alts: z.array(z.string()).default([]),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { projects, notes };
