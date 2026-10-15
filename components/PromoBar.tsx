'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { promo } from '@/lib/promo';
import { promoActive } from '@/lib/tracking';

const dismissKey = 'ala_promo_dismissed';

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(dismissKey) === '1'; } catch { /* storage unavailable */ }
    if (dismissed || !promoActive()) setVisible(false);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) { root.style.setProperty('--promo-offset', '0px'); return; }
    const update = () => root.style.setProperty('--promo-offset', `${Math.max(0, (bar.current?.offsetHeight || 0) - scrollY)}px`);
    update(); addEventListener('scroll', update, { passive: true }); addEventListener('resize', update);
    return () => { removeEventListener('scroll', update); removeEventListener('resize', update); root.style.setProperty('--promo-offset', '0px'); };
  }, [visible]);
  if (!visible) return null;
  return <div className="promo-bar" ref={bar} role="region" aria-label="Halloween offer">
    <p><span aria-hidden="true">🎃</span> <strong>Halloween Sale:</strong> up to {promo.tiers.bigPercent}% off <span className="promo-end">· ends Oct 31</span> <Link href="/pricing">See prices</Link></p>
    <button type="button" aria-label="Dismiss announcement" onClick={() => { try { sessionStorage.setItem(dismissKey, '1'); } catch { /* ignore */ } setVisible(false); }}>×</button>
  </div>;
}
