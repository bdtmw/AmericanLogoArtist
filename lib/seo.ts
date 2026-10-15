import data from '@/lib/page-data.json';

export const siteUrl = (process.env.SITE_URL || 'https://www.americanlogoartist.com').replace(/\/$/, '');
export const noindexPages = ['terms-condition', 'privacy-policy'];
export const blogImages: Record<string, string> = {
  'guide-for-clothing-brand': '/assets/images/Clothing-Brand-min.jpg',
  'affordable-effective-modern-law-firm-logo-redesigns-attorney-logo-packages': '/assets/images/Law-min.jpg',
  'nature-weddings-minimalism-designing-the-perfect-photography-logo': '/assets/images/Photography-min.jpg',
};
export const defaultImage = '/assets/img/logo.webp';
const pages: Record<string, { title: string; description: string; path: string }> = data;
const serviceKeys = ['logo-and-branding', 'affordable-logo-design-cleveland', 'website-development', 'video-animation', 'app-development', 'search-engine-optimization', 'social-media-marketing'];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'American Logo Artist', url: siteUrl,
      logo: `${siteUrl}${defaultImage}`, email: 'info@americanlogoartist.com', telephone: '+1-307-218-3240',
      sameAs: ['https://www.facebook.com/americanlogoartist', 'https://instagram.com/americanlogoartist', 'https://www.linkedin.com/company/american-logo-artist/'],
    },
    {
      '@type': 'ProfessionalService', '@id': `${siteUrl}/#localbusiness`, name: 'American Logo Artist', url: siteUrl, image: `${siteUrl}${defaultImage}`,
      telephone: '+1-307-218-3240', email: 'info@americanlogoartist.com', priceRange: '$$', areaServed: 'US',
      address: { '@type': 'PostalAddress', streetAddress: '1309 Coffeen Avenue', addressLocality: 'Sheridan', addressRegion: 'WY', postalCode: '82801', addressCountry: 'US' },
    },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'American Logo Artist', publisher: { '@id': `${siteUrl}/#organization` } },
  ],
};

export function pageSchema(key: string) {
  const page = pages[key];
  if (!page || key === 'home') return null;
  const url = `${siteUrl}${page.path}`;
  const graph: object[] = [{
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      ...(blogImages[key] ? [{ '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blogs` }] : []),
      { '@type': 'ListItem', position: blogImages[key] ? 3 : 2, name: page.title.split(' | ')[0], item: url },
    ],
  }];
  if (serviceKeys.includes(key)) graph.push({ '@type': 'Service', name: page.title.split(' | ')[0], description: page.description, url, provider: { '@id': `${siteUrl}/#organization` }, areaServed: 'US' });
  if (blogImages[key]) graph.push({ '@type': 'BlogPosting', headline: page.title.split(' | ')[0], description: page.description, url, mainEntityOfPage: url, image: `${siteUrl}${blogImages[key]}`, author: { '@id': `${siteUrl}/#organization` }, publisher: { '@id': `${siteUrl}/#organization` } });
  return { '@context': 'https://schema.org', '@graph': graph };
}
