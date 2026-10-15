import Link from 'next/link';

export default function NotFound() {
  return <section className="section section--inner-main"><div className="container text-center">
    <p>404</p><h1>Page not found</h1><p>Let’s get you back to something creative.</p><Link href="/" className="theme-btn">Back to Home</Link>
  </div></section>;
}
