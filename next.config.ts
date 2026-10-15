import type { NextConfig } from 'next';

const staticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === 'true';

const config: NextConfig = {
  output: staticPreview ? 'export' : 'standalone',
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  ...(staticPreview ? {} : {
    async headers() {
      return [{ source: '/(.*)', headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      ] }];
    },
  }),
};

export default config;
