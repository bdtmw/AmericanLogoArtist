import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionInnerMain7() {
  return (
    <section className={"section--inner-main movable-elements-wrapper"}>
      <div className={"container"}>
        <img width={266} height={266} src={"/assets/img/social/main-img-1.webp"} alt={""} className={"img-fluid main-img main-img--1"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img width={203} height={204} src={"/assets/img/social/main-img-2.webp"} alt={""} className={"img-fluid main-img main-img--2"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <img width={268} height={268} src={"/assets/img/social/main-img-3.webp"} alt={""} className={"img-fluid main-img main-img--3"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img width={266} height={267} src={"/assets/img/social/main-img-4.webp"} alt={""} className={"img-fluid main-img main-img--4"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <div className={"container"}>
          <div className={"inner-main-content"}>
            <h1>
              {" Unleash Brand Potential with Robust "}
              <span className={"glow-text"}>
                {"Social Media Marketing"}
              </span>
            </h1>
            <p>
              {"We offer expert social media management services to enhance brand awareness and maximize ROI."}
            </p>
            <img width={1192} height={110} src={"/assets/img/main-logos.webp"} alt={"American Logo Artist customer review platforms"} className={"img-fluid"} loading={"eager"} decoding={"async"} />
          </div>
        </div>
      </div>
    </section>
  );
}
