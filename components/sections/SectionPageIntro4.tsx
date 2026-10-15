import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPageIntro4() {
  return (
    <section className={"section section--page-intro"} data-color={"7"}>
      <div className={"container"}>
        <div className={"row align-items-center"}>
          <div className={"col-md-6"}>
            <div className={"section-intro"}>
              <h2>
                {"Communicate Effectively with Animated Videos"}
              </h2>
              <p>
                {"Use our animated videos to effectively convey your brand message in a profound, professional, and creative manner."}
              </p>
            </div>
          </div>
          <div className={"col-md-6"}>
            <figure>
              <img width={717} height={550} src={"/assets/img/video/intro-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
