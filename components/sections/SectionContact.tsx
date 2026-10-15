import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionContact() {
  return (
    <section className={"section section--contact"} data-color={"11"}>
      <div className={"container"}>
        <div className={"row align-items-center"}>
          <div className={"col-lg-6"}>
            <EnquiryForm />
          </div>
          <div className={"col-lg-6"}>
            <figure>
              <img width={878} height={693} src={"/assets/img/contact-img.webp"} alt={"Talk to our creative team"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
