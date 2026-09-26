import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 文章刻意不带日期 —— 这是一个存档，不是一个按时间推送的地方。
// 用 n 来定顺序（就是原稿里的先后），页面上也拿它当编号印出来。
const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    n: z.number(),
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
