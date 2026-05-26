import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const updatesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    project: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    github: z.string().url(),
    status: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = {
  updates: updatesCollection,
  projects: projectsCollection,
};
