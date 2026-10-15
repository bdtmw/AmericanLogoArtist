import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { NextApiRequest, NextApiResponse } from 'next';
import { validateEnquiry } from '../lib/contact';
import handler from '../pages/api/contact';

const enquiry = { firstName: 'Test', lastName: 'Visitor', email: 'visitor@example.com', phone: '+1 307 555 0100', message: 'Please help with a logo.', subject: 'Logo enquiry', page: '/contact' };

test('valid enquiry preserves optional consent without opting the visitor in', () => {
  assert.equal(validateEnquiry(enquiry).data?.consent, false);
  assert.equal(validateEnquiry({ ...enquiry, consent: 'yes' }).data?.consent, true);
});
test('rejects malformed or incomplete submissions', () => {
  for (const input of [null, [], {}, { ...enquiry, email: 'invalid' }, { ...enquiry, message: ' ' }]) assert.ok(validateEnquiry(input).error);
});
test('rejects header injection, excessive input and honeypot submissions', () => {
  for (const input of [{ ...enquiry, subject: 'Hello\r\nBcc: spam@example.com' }, { ...enquiry, message: 'a'.repeat(5001) }, { ...enquiry, website: 'bot.example' }]) assert.ok(validateEnquiry(input).error);
});
test('preserves Unicode names and plain-text messages', () => {
  const result = validateEnquiry({ ...enquiry, firstName: 'عمر', message: '<script>example text</script>' });
  assert.equal(result.data?.firstName, 'عمر');
  assert.equal(result.data?.message, '<script>example text</script>');
});

async function request(method: string, headers: Record<string, string>, body: unknown) {
  let status = 200; let payload: unknown;
  const req = { method, headers, body, socket: { remoteAddress: '127.0.0.1' } } as NextApiRequest;
  const res = { setHeader() {}, status(code: number) { status = code; return this; }, json(value: unknown) { payload = value; return this; } } as unknown as NextApiResponse;
  await handler(req, res);
  return { status, payload };
}

test('contact endpoint rejects the wrong method and origin', async () => {
  assert.equal((await request('GET', {}, enquiry)).status, 405);
  assert.equal((await request('POST', { 'content-type': 'application/json', origin: 'https://unrelated.example' }, enquiry)).status, 403);
});
test('contact endpoint never reports success without email configuration', async () => {
  const original = process.env.SMTP_HOST;
  delete process.env.SMTP_HOST;
  try {
    const result = await request('POST', { 'content-type': 'application/json' }, enquiry);
    assert.equal(result.status, 503);
    assert.match(JSON.stringify(result.payload), /Email delivery is unavailable/);
  } finally { if (original !== undefined) process.env.SMTP_HOST = original; }
});
