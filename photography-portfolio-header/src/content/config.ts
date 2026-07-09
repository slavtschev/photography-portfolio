import { defineCollection, z } from 'astro:content';

const series = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    /** 'structured' = resolved work, 'loose' = looser/exploratory grouping — drives the Series grid's visual treatment */
    tone: z.enum(['structured', 'loose']).default('structured'),
    /** Marks the grid's single hero tile. Falls back to the first entry by order if none is set. */
    featured: z.boolean().default(false),
    /** One quiet word for the grid's index line, e.g. "Landscape" — not a category system, just a curatorial marker */
    tag: z.string().optional(),
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
    /** Optional square thumbnail — path relative to /public/ */
    image: z.string().optional(),
  }),
});

export const collections = { series, notes };
