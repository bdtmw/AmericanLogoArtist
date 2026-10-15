import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  const preview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === 'true';
  const base = (process.env.SITE_URL || 'https://www.americanlogoartist.com').replace(/\/$/, '');
  return { rules: [{ userAgent: '*', ...(preview ? { disallow: '/' } : { allow: '/', disallow: '/api/' }) }], ...(preview ? {} : { sitemap: `${base}/sitemap.xml` }) };
}
