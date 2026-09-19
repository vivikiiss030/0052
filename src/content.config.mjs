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

// 诗和文章分开：诗要保留原样的断行和空行，所以正文不走 Markdown 渲染，
// 直接照原文排（见 src/pages/poems/[...id].astro）。
const poems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poems' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // 写给谁 / 什么时候写的 / 一句题记，都可以放这儿，会印在标题下面
    note: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays, volumes, poems };
