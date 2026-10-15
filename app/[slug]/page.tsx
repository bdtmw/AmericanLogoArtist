import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/page-registry';
import data from '@/lib/page-data.json';
import { blogImages, defaultImage, noindexPages, pageSchema } from '@/lib/seo';

type PageData = { title: string; description: string; path: string };
const metadataMap: Record<string, PageData> = data;
const normalize = (slug: string) => slug === 'index.php' || slug === 'index' ? 'home' : slug.replace(/\.php$/, '');

export const dynamicParams = false;
export function generateStaticParams() {
  return [...Object.keys(pages).filter(key => key !== 'home').flatMap(slug => [{ slug }, { slug: `${slug}.php` }]), { slug: 'index.php' }, { slug: 'index' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = metadataMap[normalize(slug)];
  if (!page) return {};
  const key = normalize(slug);
  const image = blogImages[key] || defaultImage;
  const isBlog = key in blogImages;
  return {
    title: page.title, description: page.description, alternates: { canonical: page.path },
    ...(noindexPages.includes(key) ? { robots: { index: false, follow: true } } : {}),
    openGraph: { title: page.title, description: page.description, url: page.path, type: isBlog ? 'article' : 'website', images: [{ url: image }] },
    twitter: { card: isBlog ? 'summary_large_image' : 'summary', title: page.title, description: page.description, images: [image] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const Content = pages[normalize(slug)];
  if (!Content) notFound();
  const schema = pageSchema(normalize(slug));
  return <>
    {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />}
    <Content />
  </>;
}
