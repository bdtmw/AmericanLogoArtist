import { promo } from '@/lib/promo';

export const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'referrer', 'landing_page', 'promo'] as const;
export type Attribution = Partial<Record<(typeof attributionKeys)[number], string>>;
const storageKey = 'ala_attribution';

export const promoActive = () => Date.now() < new Date(promo.endsAt).getTime();

/** Remember first-touch campaign data for the session so leads carry their source. */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(storageKey)) return;
    const params = new URLSearchParams(location.search);
    const data: Attribution = { landing_page: location.pathname, referrer: document.referrer || 'direct' };
    for (const key of attributionKeys.slice(0, 5)) { const value = params.get(key); if (value) data[key] = value.slice(0, 200); }
    sessionStorage.setItem(storageKey, JSON.stringify(data));
  } catch { /* storage unavailable */ }
}

export function getAttribution(): Attribution {
  let data: Attribution = {};
  try { data = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch { /* ignore */ }
  if (promoActive()) data.promo = promo.name;
  return data;
}
