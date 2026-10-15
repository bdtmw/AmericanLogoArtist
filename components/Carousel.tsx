'use client';

import { Children, useEffect, useState, type ReactNode } from 'react';

export default function Carousel({ children, className = '', columns = 1 }: {
  children: ReactNode; className?: string; columns?: number;
}) {
  const slides = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = matchMedia('(max-width: 575px)');
    const change = () => setCompact(query.matches);
    change(); query.addEventListener('change', change);
    return () => query.removeEventListener('change', change);
  }, []);
  const visible = compact ? 1 : columns;
  const count = Math.max(1, slides.length - visible + 1);
  const start = Math.min(current, count - 1);
  return <div className={`${className} react-carousel`} role="region" aria-roledescription="carousel" aria-label={className.includes('testimonial') ? 'Client testimonials' : 'Service details'}>
    <div className="carousel-track" style={{ gridTemplateColumns: `repeat(${visible}, minmax(0, 1fr))` }}>
      {slides.map((slide, index) => <div className="carousel-slide" key={index} hidden={index < start || index >= start + visible}
        role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}>{slide}</div>)}
    </div>
    <div className="carousel-controls">
      <button type="button" aria-label="Previous slide" onClick={() => setCurrent((start - 1 + count) % count)}>←</button>
      {Array.from({ length: count }, (_, index) => <button type="button" className={`carousel-dot ${start === index ? 'selected' : ''}`}
        key={index} aria-label={`Show slide ${index + 1}`} aria-current={start === index ? 'true' : undefined} onClick={() => setCurrent(index)} />)}
      <button type="button" aria-label="Next slide" onClick={() => setCurrent((start + 1) % count)}>→</button>
    </div>
  </div>;
}
