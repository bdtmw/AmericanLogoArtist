import type { MetadataRoute } from 'next';
import data from '@/lib/page-data.json';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.SITE_URL || 'https://www.americanlogoartist.com').replace(/\/$/, '');
  return Object.values(data).map(page => ({ url: `${base}${page.path}`, changeFrequency: 'monthly', priority: page.path === '/' ? 1 : 0.7 }));
}
