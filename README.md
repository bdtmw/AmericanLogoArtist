# American Logo Artist: Next.js conversion

A Next.js 16 App Router and TypeScript conversion of https://www.americanlogoartist.com/.

## Included

- 18 original public pages: home, seven service/landing pages, portfolio, pricing, about, contact, terms, privacy, blog index, and three articles.
- Original copy, logo, artwork, portfolio, pricing, fonts, section layouts, and color transitions.
- Shared React server components for page sections. Client components handle mobile navigation, service and pricing tabs, portfolio lightboxes, carousels, contact dialogs, and scrolling.
- Locally stored CSS, images, and fonts. No jQuery, Bootstrap JavaScript, Slick, GSAP, or HTML iframe wrapper.
- Clean URLs plus legacy `.php` page aliases. Canonical tags point to clean URLs. Page metadata, sitemap, robots, and a custom 404 are included.
- A Node.js contact API with SMTP delivery, validation, a honeypot, a per-process request limit, and honest delivery errors.

## Run locally

Use Node.js 20.9 or later.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Set `SITE_URL=http://localhost:3000` for local SMTP tests, or include this origin in `CONTACT_ALLOWED_ORIGINS`.

```bash
npm run typecheck
node --import tsx --test scripts/test-contact.ts
npm run build
npm start
```

`npm run build` creates a production Next.js server build. The default build is not a static export.

## Production deployment

Deploy to any host that supports Next.js and Node.js. The original site's PHP-only hosting cannot run this application unless Node.js hosting is enabled.

1. Copy `.env.example` to `.env.local` or configure the equivalent hosting environment variables.
2. Set `SITE_URL` to the final public origin.
3. Set the SMTP host, port, user, password, and verified sender address. `CONTACT_TO` defaults to `info@americanlogoartist.com`.
4. Set `NEXT_PUBLIC_ZENDESK_KEY` to the original account key supplied in `.env.example` if you want the existing chat widget. Set the optional Google Analytics ID when ready for production tracking.
5. Leave `NEXT_PUBLIC_STATIC_PREVIEW=false` for the server deployment.
6. Run `npm ci`, `npm run build`, then `npm start`.

The `standalone` output can alternatively be deployed using `.next/standalone/server.js`; copy `public/` and `.next/static/` into its corresponding folders first.

## Static review build

```bash
npm run build:preview
```

This produces `out/`, used for the private review deployment. In this mode enquiry forms validate the fields and open an email draft. They do not claim to have sent an enquiry. Static review pages are marked `noindex`. SMTP requires the normal Node.js build.

## Existing checkout

Package buttons preserve the existing package name, price, and services payload and POST to:

`https://www.americanlogoartist.com/order/order-now.php`

The checkout/payment backend is not publicly available source code and is not converted here. Keep that PHP endpoint reachable when moving the public site, or replace the form action after implementing an equivalent verified payment flow. Do not point the original domain at a new host without preserving or replacing this endpoint. No live orders or payments were submitted during verification.

## Editing

- `content/`: page composition.
- `components/sections/`: original content converted to editable React JSX and shared between pages.
- `components/Header.tsx`, `components/Footer.tsx`: navigation and footer.
- `components/EnquiryForm.tsx`, `pages/api/contact.ts`: contact UI and delivery.
- `lib/page-data.json`: titles, descriptions, and canonical paths.
- `public/assets/css/style.css`, `responsive.css`: original design styles.
- `public/assets/css/next.css`: accessible React controls and responsive corrections.
- `public/assets/`: original images and local fonts.

## Migration notes

Some original image URLs used missing PNG files while matching WebP files were available. Those references, including section backgrounds, have been corrected. Broken testimonial avatar references were removed; the client names and testimonials are preserved. One unavailable motion portfolio thumbnail was omitted rather than showing a broken image.

Marketing consent is optional and remains unchecked by default. The email handler records the visitor's selection; it does not subscribe visitors to any marketing service.

The contact limiter is per Node.js process and uses the network peer address. For production behind a proxy or across multiple instances, configure a trusted host-level rate limiter or a shared rate-limit store. SMTP and Zendesk delivery require the owner's account configuration and end-to-end verification.

The original production domain has not been changed. Build and source checks are included in the handover; browser-based visual and interaction verification was unavailable in the build environment.
