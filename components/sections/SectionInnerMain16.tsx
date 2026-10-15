import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionInnerMain16() {
  return (
    <section className={"section--inner-main movable-elements-wrapper blog_main"}>
      <div className={"container"}>
        <div className={"inner-main-content blog-tittle"}>
          <h1>
            {"Affordable & Effective: Modern Law Firm Logo Redesigns & Attorney Logo Packages "}
          </h1>
        </div>
      </div>
    </section>
  );
}
