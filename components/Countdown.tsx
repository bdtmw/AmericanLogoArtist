'use client';

import { useEffect, useState } from 'react';
import { promo } from '@/lib/promo';

const pad = (n: number) => String(n).padStart(2, '0');

export default function Countdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const end = new Date(promo.endsAt).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (left === null) return <div className="hw-countdown" aria-hidden="true" style={{ minHeight: 76 }} />;
  if (left === 0) return <p className="hw-ended">This offer has ended.</p>;
  const s = Math.floor(left / 1000);
  const parts: [string, number][] = [['Days', Math.floor(s / 86400)], ['Hours', Math.floor(s / 3600) % 24], ['Mins', Math.floor(s / 60) % 60], ['Secs', s % 60]];
  return <div className="hw-countdown" role="timer" aria-label="Time left on the Halloween offer">
    {parts.map(([label, value]) => <div key={label} className="hw-unit"><strong>{pad(value)}</strong><span>{label}</span></div>)}
  </div>;
}
