import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = (await getCollection('essays', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: '00:52',
    description: '影像与文字的存档',
    site: context.site,
    items: essays.map((e) => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.summary ?? '',
      link: `/essays/${e.id}/`,
    })),
  });
}
