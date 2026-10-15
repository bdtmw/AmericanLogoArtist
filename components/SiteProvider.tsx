'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import EnquiryForm from './EnquiryForm';
import { captureAttribution } from '@/lib/tracking';

type Media = { src: string; title: string; video?: boolean };
const Context = createContext({ enquire: (_subject?: string) => {}, view: (_media: Media) => {} });

declare global { interface Window { zE?: ((...args: unknown[]) => void); dataLayer?: unknown[]; } }

export function ContactButton({ children, className, style, subject }: { children: ReactNode; className?: string; style?: CSSProperties; subject?: string }) {
  const { enquire } = useContext(Context);
  return <button type="button" className={className} style={style} onClick={() => enquire(subject)}>{children}</button>;
}

export function ChatButton({ children, className }: { children: ReactNode; className?: string }) {
  const { enquire } = useContext(Context);
  return <button type="button" className={className} onClick={() => {
    if (window.zE) { try { window.zE('webWidget', 'open'); return; } catch {} }
    enquire('Contact our team');
  }}>{children}</button>;
}

export function LightboxLink({ src, title, children, className }: { src: string; title: string; children: ReactNode; className?: string }) {
  const { view } = useContext(Context);
  return <a href={src} className={className} aria-label={`View ${title}`} onClick={(event) => { event.preventDefault(); view({ src, title, video: /\.(mp4|webm)(\?|$)/i.test(src) }); }}>{children}</a>;
}

export default function SiteProvider({ children }: { children: ReactNode }) {
  const [subject, setSubject] = useState<string | null>(null);
  const [media, setMedia] = useState<Media | null>(null);
  const [topVisible, setTopVisible] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const isOpen = subject !== null || media !== null;
  const zendesk = process.env.NEXT_PUBLIC_ZENDESK_KEY;

  useEffect(() => { setSubject(null); setMedia(null); }, [pathname]);
  useEffect(() => { captureAttribution(); }, []);
  useEffect(() => {
    if (!isOpen) { dialog.current?.close(); return; }
    const opener = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; opener?.focus(); };
  }, [isOpen]);

  useEffect(() => {
    let frame = 0;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[data-color]'));
    const update = () => {
      frame = 0;
      setTopVisible(window.scrollY > 400);
      const match = sections.findLast(section => section.getBoundingClientRect().top <= innerHeight / 3);
      const color = match?.dataset.color;
      document.body.classList.forEach(name => { if (/^color-\d+$/.test(name)) document.body.classList.remove(name); });
      if (color) document.body.classList.add(`color-${color}`);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); addEventListener('scroll', scroll, { passive: true });
    return () => { removeEventListener('scroll', scroll); cancelAnimationFrame(frame); };
  }, [pathname]);

  const close = () => { setSubject(null); setMedia(null); };
  return <Context.Provider value={{ enquire: (value = 'Website enquiry') => setSubject(value), view: setMedia }}>
    {children}
    <button id="button" type="button" className={topVisible ? 'show' : ''} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}><i className="fas fa-arrow-up" aria-hidden="true" /></button>
    <dialog ref={dialog} className={`site-dialog ${media ? 'media-dialog' : ''}`} aria-label={media?.title || 'Get in touch'} onCancel={close}
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className={media ? 'media-dialog-content' : 'popup_form'}>
        <button type="button" className="close_popup" aria-label="Close dialog" onClick={close}>×</button>
        {subject !== null && <><h2 className="title">Get In Touch</h2><EnquiryForm compact subject={subject} /></>}
        {media && <>{media.video ? <video src={media.src} controls autoPlay playsInline /> : <img src={media.src} alt={media.title} />}<p>{media.title}</p></>}
      </div>
    </dialog>
    {zendesk && <Script id="ze-snippet" src={`https://static.zdassets.com/ekr/snippet.js?key=${encodeURIComponent(zendesk)}`} strategy="lazyOnload" />}
  </Context.Provider>;
}
