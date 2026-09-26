import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // 文章没有日期，按原稿顺序倒着来（最后写的在最前）
  const essays = (await getCollection('essays', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.n - a.data.n
  );

  return rss({
    title: '00:52',
    description: '影像与文字的存档',
    site: context.site,
    items: essays.map((e) => ({
      title: e.data.title,
      description: e.data.summary ?? '',
      link: `/essays/${e.id}/`,
    })),
  });
}
