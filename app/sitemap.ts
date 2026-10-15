import type { MetadataRoute } from 'next';
import data from '@/lib/page-data.json';
import { noindexPages, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';
const lastModified = new Date(process.env.SITEMAP_LASTMOD || '2026-10-15');
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(data).filter(([key]) => !noindexPages.includes(key)).map(([key, page]) => ({
    url: `${siteUrl}${page.path}`, lastModified,
    changeFrequency: key === 'blogs' ? 'weekly' : 'monthly',
    priority: page.path === '/' ? 1 : key.includes('-') && !['logo-and-branding', 'website-development', 'video-animation', 'app-development', 'search-engine-optimization', 'social-media-marketing', 'affordable-logo-design-cleveland'].includes(key) ? 0.5 : 0.8,
  }));
}
