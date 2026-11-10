import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://theopenspace.pages.dev',
  image: {
    // 照片一律先转 sRGB 并生成多尺寸，具体格式在 <Picture> 上指定
    responsiveStyles: true,
  },
  markdown: {
    smartypants: false, // 中文排版下关掉英文智能引号
  },
});

// 部署记录：2026-11-09 重新触发 Cloudflare 构建
