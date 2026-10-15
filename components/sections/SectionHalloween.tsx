import Countdown from '@/components/Countdown';
import { ContactButton } from '@/components/SiteProvider';

const stack = [
  ['Custom logo concepts by a dedicated designer', 'Original work for your brand, never recycled templates.'],
  ['100% ownership rights', 'The finished artwork is yours to use anywhere, forever.'],
  ['Final files in every format you need', 'Print-ready and web-ready, so you can use your logo on day one.'],
  ['A designer who answers quickly', 'Tell us what you want and we keep refining until you love it.'],
];

export default function SectionHalloween() {
  return (
    <section className="section section--halloween" id="halloween-offer" aria-labelledby="hw-heading">
      <div className="container">
        <div className="hw-intro">
          <p className="hw-kicker">🎃 HALLOWEEN OFFER · ENDS OCT 31</p>
          <h2 id="hw-heading">Stop Wasting Money on a Logo That Scares Customers Away</h2>
          <p className="hw-sub">Get a professional, custom logo and brand that makes your business look as good as it is, and pay less for it this Halloween.</p>
        </div>
        <div className="hw-deals">
          <div className="hw-deal"><strong>20% OFF</strong><span>every package under $400</span></div>
          <div className="hw-plus" aria-hidden="true">or</div>
          <div className="hw-deal"><strong>50% OFF</strong><span>every package of $400 or more</span></div>
        </div>
        <p className="hw-small">Discount applied automatically at checkout. No code needed.</p>
        <Countdown />
        <div className="hw-stack">
          <h3>Every order includes:</h3>
          <ul>{stack.map(([title, text]) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}</ul>
        </div>
        <div className="hw-guarantee">
          <h3>Our 100% Money-Back Guarantee</h3>
          <p>If we can&apos;t deliver a design you&apos;re happy with, you don&apos;t pay. All the risk is ours. You&apos;re free to start, with nothing to lose.</p>
        </div>
        <div className="hw-actions">
          <a className="theme-btn hw-cta" href="#pricing-packages">See Halloween Prices</a>
          <ContactButton className="theme-btn hw-cta hw-cta--ghost">Ask a Designer First</ContactButton>
        </div>
        <p className="hw-ps"><strong>P.S.</strong> The Halloween prices end at midnight on October 31. After that, packages return to their regular price.</p>
      </div>
    </section>
  );
}
