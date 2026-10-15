export type Enquiry = {
  firstName: string; lastName: string; email: string; phone: string; message: string;
  subject: string; page: string; consent: boolean; website: string;
};

export function validateEnquiry(input: unknown): { data?: Enquiry; error?: string } {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { error: 'Invalid enquiry.' };
  const body = input as Record<string, unknown>;
  const field = (name: string) => typeof body[name] === 'string' ? body[name].trim() : '';
  const data: Enquiry = { firstName: field('firstName'), lastName: field('lastName'), email: field('email'), phone: field('phone'), message: field('message'), subject: field('subject') || 'Website enquiry', page: field('page'), consent: body.consent === 'yes', website: field('website') };
  if (data.website) return { error: 'Unable to accept this enquiry.' };
  if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) return { error: 'Please complete all required fields.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254) return { error: 'Please enter a valid email address.' };
  if (data.firstName.length > 80 || data.lastName.length > 80 || data.phone.length > 40 || data.message.length > 5000 || data.subject.length > 200 || data.page.length > 300) return { error: 'One of your fields is too long.' };
  if (/[\r\n]/.test(data.email + data.subject + data.firstName + data.lastName)) return { error: 'Please remove line breaks from your contact details.' };
  return { data };
}
