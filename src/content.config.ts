import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    project: z.string().default('general'),
    tags: z.array(z.string()).default([]),
    summary: z.string().default(''),
  }),
});

export const collections = { updates };
