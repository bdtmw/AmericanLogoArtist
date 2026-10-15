import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionCta() {
  return (
    <section className={"section section--cta"} data-color={"1"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"CONTACT"}
          </h4>
          <h2>
            {"Connect with a design Specialist"}
          </h2>
          <p>
            {"You can trust our Digital Specialist to assist you in creating the best digital solutions for your business. Please complete the form, and one of our digital experts will get in touch with you."}
          </p>
        </div>
        <ContactButton className={"theme-btn hire_us_now d-block m-auto w-30"}>
          {"Let's Get Started"}
        </ContactButton>
      </div>
    </section>
  );
}
