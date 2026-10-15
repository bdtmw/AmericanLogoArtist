import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteProvider from '@/components/SiteProvider';
import { organizationSchema } from '@/lib/seo';

const preview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === 'true';
const siteUrl = process.env.SITE_URL || 'https://www.americanlogoartist.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Custom Logo Design for US Businesses | American Logo Artist',
  description: 'Professional custom logo design and branding for US small businesses. Unlimited revisions, full ownership and a money-back guarantee.',
  icons: { icon: '/assets/img/favicon.webp' },
  robots: { index: !preview, follow: !preview },
  openGraph: { siteName: 'American Logo Artist', type: 'website', locale: 'en_US', images: [{ url: '/assets/img/logo.webp', alt: 'American Logo Artist' }] },
  twitter: { card: 'summary', images: ['/assets/img/logo.webp'] },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#003566' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  return <html lang="en"><head>
    <link rel="preload" href="/assets/fonts/VisbyHeavy.woff" as="font" type="font/woff" crossOrigin="anonymous" />
    <link rel="preload" href="/assets/fonts/VisbyMedium.woff" as="font" type="font/woff" crossOrigin="anonymous" />
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
    <link rel="stylesheet" href="/assets/css/oswald.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    <link rel="stylesheet" href="/assets/css/responsive.css" />
    <link rel="stylesheet" href="/assets/css/next.css" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
  </head><body className="page-loaded">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <SiteProvider><Header /><main id="main-content">{children}</main><Footer /></SiteProvider>
    {ga && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga)}`} strategy="lazyOnload" /><Script id="google-analytics" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(ga)});`}</Script></>}
  </body></html>;
}
