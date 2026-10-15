'use client';

import { useId, useState, type FormEvent } from 'react';
import { getAttribution } from '@/lib/tracking';

const staticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === 'true';

export default function EnquiryForm({ compact = false, subject = 'Website enquiry' }: { compact?: boolean; subject?: string }) {
  const id = useId();
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ kind: string; text: string } | null>(null);
  const [emailDraft, setEmailDraft] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const payload = Object.fromEntries(values.entries());
    const body = `Name: ${payload.firstName} ${payload.lastName || ''}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nSubject: ${subject}\nMarketing consent: ${payload.consent ? 'Yes' : 'No'}\n\n${payload.message}`;
    const draft = `mailto:info@americanlogoartist.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailDraft(draft);
    if (staticPreview) {
      window.location.href = draft;
      setStatus({ kind: 'info', text: 'Your email draft is ready. Send it from your email app to complete your enquiry.' });
      return;
    }
    setBusy(true); setStatus(null);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, subject, page: location.pathname, attribution: getAttribution() }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Your message could not be sent. Please try again.');
      setStatus({ kind: 'success', text: 'Thank you! Your enquiry has been sent. Our team will be in touch.' });
      form.reset(); setEmailDraft('');
    } catch (error) {
      setStatus({ kind: 'error', text: error instanceof Error ? error.message : 'Unable to send. Please contact us by email or phone.' });
    } finally { setBusy(false); }
  }

  const fieldClass = compact ? 'c_field' : 'form-control';
  return <form className={compact ? 'enquiry-form compact-form' : 'contact-form enquiry-form'} onSubmit={submit}>
    {!compact && <><h2>Get A Free Consultation with Experts Today!</h2><p>Our team is here to assist you.</p></>}
    <div className="form-row">
      <div className="col-md-6"><label className="sr-only" htmlFor={`${id}-first`}>First name</label><input id={`${id}-first`} className={fieldClass} name="firstName" placeholder="First name" autoComplete="given-name" required maxLength={80} /></div>
      <div className="col-md-6"><label className="sr-only" htmlFor={`${id}-last`}>Last name</label><input id={`${id}-last`} className={fieldClass} name="lastName" placeholder="Last name" autoComplete="family-name" required maxLength={80} /></div>
      <div className="col-md-6"><label className="sr-only" htmlFor={`${id}-email`}>Email address</label><input id={`${id}-email`} className={fieldClass} name="email" type="email" placeholder="Email" autoComplete="email" required maxLength={254} /></div>
      <div className="col-md-6"><label className="sr-only" htmlFor={`${id}-phone`}>Phone number</label><input id={`${id}-phone`} className={fieldClass} name="phone" type="tel" placeholder="Phone" autoComplete="tel" required maxLength={40} /></div>
    </div>
    <label className="sr-only" htmlFor={`${id}-message`}>Your message</label>
    <textarea id={`${id}-message`} className={fieldClass} name="message" placeholder="Your Message" rows={compact ? 4 : 3} required maxLength={5000} />
    <div className="form-trap" aria-hidden="true"><label htmlFor={`${id}-company`}>Leave empty</label><input id={`${id}-company`} name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="consent-row"><input id={`${id}-consent`} type="checkbox" name="consent" value="yes" /><label htmlFor={`${id}-consent`}>I agree to receive marketing calls, SMS, and offers from American Logo Artist. Message and data rates may apply. Reply STOP to opt out. Optional. <a href="/privacy-policy">Privacy Policy</a></label></div>
    <button className="theme-btn" type="submit" disabled={busy}>{busy ? 'Sending…' : staticPreview ? 'Send via email' : 'Submit'}</button>
    <p className="form-help">Or call <a href="tel:+13072183240">(307) 218-3240</a>.</p>
    {status && <div className={`form-status ${status.kind}`} role="status">{status.text}{emailDraft && status.kind !== 'success' && <a className="email-fallback" href={emailDraft}>Open email draft</a>}</div>}
  </form>;
}
