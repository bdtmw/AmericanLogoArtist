import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionCta22() {
  return (
    <section className={"section section--cta-2"} data-color={"10"}>
      <div className={"container text-center"}>
        <h2>
          {"Get Free Consultancy"}
        </h2>
        <div className={"btn-group"}>
          <a href={"tel:+13072183240"} className={"theme-btn outline"}>
            {"CALL US"}
          </a>
          <ContactButton className={"theme-btn hire_us_now"}>
            {"GET YOUR WEBSITE NOW"}
          </ContactButton>
          <ChatButton className={"theme-btn outline"}>
            {"LIVE CHAT"}
          </ChatButton>
        </div>
      </div>
    </section>
  );
}
