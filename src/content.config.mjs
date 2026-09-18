import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const volumes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/volumes' }),
  schema: z.object({
    title: z.string(),
    place: z.string().optional(),
    date: z.coerce.date(),
    photos: z.array(
      z.object({
        file: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
        wide: z.boolean().default(false),
      })
    ),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays, volumes };
