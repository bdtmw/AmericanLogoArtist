'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const services = [
  ['Logo & Branding', '/logo-and-branding'],
  ['Cleveland Logo Design', '/affordable-logo-design-cleveland'],
  ['Website Development', '/website-development'],
  ['Video Animation', '/video-animation'],
  ['App Development', '/app-development'],
  ['Search Engine Optimization', '/search-engine-optimization'],
  ['Social Media Marketing', '/social-media-marketing'],
];
const navigation = [['Portfolio', '/portfolio'], ['Pricing', '/pricing'], ['About Us', '/about'], ['Contact Us', '/contact']];

export default function Header() {
  const path = (usePathname() || '/').replace(/\.php$/, '');
  const [expanded, setExpanded] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [sticky, setSticky] = useState(false);
  const header = useRef<HTMLElement>(null);
  useEffect(() => { setExpanded(false); setDropdown(false); }, [path]);
  useEffect(() => {
    const scroll = () => setSticky(scrollY > 50);
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) { setExpanded(false); setDropdown(false); } };
    scroll(); addEventListener('scroll', scroll, { passive: true }); addEventListener('pointerdown', outside);
    return () => { removeEventListener('scroll', scroll); removeEventListener('pointerdown', outside); };
  }, []);
  return <header ref={header} className={`header ${sticky || expanded ? 'sticky' : ''}`} onKeyDown={event => { if (event.key === 'Escape') { setExpanded(false); setDropdown(false); } }}>
    <div className="container"><nav className="navbar navbar-expand-xl" aria-label="Main navigation">
      <Link href="/" className="navbar-brand" aria-label="American Logo Artist home"><img src="/assets/img/logo.webp" alt="American Logo Artist" width="273" height="89" /></Link>
      <button type="button" className="navbar-toggler" aria-label={expanded ? 'Close menu' : 'Open menu'} aria-expanded={expanded} aria-controls="primary-navigation" onClick={() => setExpanded(!expanded)}><i className={`fas ${expanded ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" /></button>
      <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="primary-navigation"><ul className="navbar-nav ml-auto">
        <li className={`nav-item ${path === '/' ? 'active' : ''}`}><Link className="nav-link" href="/" aria-current={path === '/' ? 'page' : undefined}>Home</Link></li>
        <li className={`nav-item dropdown ${services.some(([, href]) => path === href) ? 'active' : ''}`}>
          <button type="button" className="nav-link dropdown-toggle" aria-expanded={dropdown} aria-controls="services-menu" onClick={() => setDropdown(!dropdown)}>Services</button>
          <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} id="services-menu">{services.map(([title, href]) => <Link key={href} className="dropdown-item" href={href} onClick={() => { setExpanded(false); setDropdown(false); }}>{title}</Link>)}</div>
        </li>
        {navigation.map(([title, href]) => <li className={`nav-item ${path === href ? 'active' : ''}`} key={href}><Link href={href} className="nav-link" aria-current={path === href ? 'page' : undefined}>{title}</Link></li>)}
        <li><a className="theme-btn theme-btn--nav" href="tel:+13072183240">(307) 218-3240</a></li>
      </ul></div>
    </nav></div>
  </header>;
}
