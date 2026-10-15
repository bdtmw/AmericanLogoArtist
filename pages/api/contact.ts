import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { validateEnquiry } from '@/lib/contact';

export const config = { api: { bodyParser: { sizeLimit: '16kb' } } };
const attempts = new Map<string, { count: number; expires: number }>();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed.' }); }
  if (!req.headers['content-type']?.startsWith('application/json')) return res.status(415).json({ error: 'Please submit a JSON enquiry.' });
  const origins = new Set([(process.env.SITE_URL || 'https://www.americanlogoartist.com').replace(/\/$/, ''), ...(process.env.CONTACT_ALLOWED_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean)]);
  if (req.headers.origin && !origins.has(req.headers.origin)) return res.status(403).json({ error: 'This origin is not permitted.' });
  const now = Date.now();
  for (const [key, entry] of attempts) if (entry.expires <= now) attempts.delete(key);
  // Use the actual peer unless a trusted hosting proxy has been configured to sanitize forwarding headers.
  const ip = req.socket.remoteAddress || 'unknown';
  const prior = attempts.get(ip) || { count: 0, expires: now + 10 * 60 * 1000 };
  if (prior.count >= 10) { res.setHeader('Retry-After', '600'); return res.status(429).json({ error: 'Too many enquiries. Please try again in a few minutes.' }); }
  prior.count++; attempts.set(ip, prior);
  const { data, error } = validateEnquiry(req.body);
  if (!data) return res.status(400).json({ error });
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_FROM) {
    return res.status(503).json({ error: 'Email delivery is unavailable. Please use the email link below or call (307) 218-3240.' });
  }
  try {
    const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === 'true', requireTLS: process.env.SMTP_SECURE !== 'true', auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }, connectionTimeout: 10000, socketTimeout: 15000 });
    const result = await transporter.sendMail({ from: process.env.SMTP_FROM, to: process.env.CONTACT_TO || 'info@americanlogoartist.com', replyTo: data.email, subject: `Website enquiry: ${data.subject}`, text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nPage: ${data.page}\nMarketing consent: ${data.consent ? 'Yes' : 'No'}\n\n${data.message}` });
    if (!result.accepted.length) throw new Error('Mail recipient was not accepted');
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Your enquiry could not be delivered. Please use the email link below or call our team.' });
  }
}
