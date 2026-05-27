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

const researchesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/researches' }),
  schema: z.object({
    title: z.string(),
    academicTitle: z.string(),
    journal: z.string(),
    date: z.coerce.date(),
    authors: z.string(),
    doi: z.string(),
    doiUrl: z.string().url(),
    pdfUrl: z.string().optional(),
    pdfSize: z.string().optional(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = {
  updates: updatesCollection,
  projects: projectsCollection,
  researches: researchesCollection,
};
