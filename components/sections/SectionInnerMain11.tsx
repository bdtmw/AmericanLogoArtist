import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionInnerMain11() {
  return (
    <section className={"section--inner-main movable-elements-wrapper"}>
      <div className={"container"}>
        <img src={"/assets/img/video/main-img-1.webp"} alt={""} className={"img-fluid main-img main-img--1"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/video/main-img-2.webp"} alt={""} className={"img-fluid main-img main-img--2"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/video/main-img-3.webp"} alt={""} className={"img-fluid main-img main-img--3"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/video/main-img-4.webp"} alt={""} className={"img-fluid main-img main-img--4"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <div className={"container"}>
          <div className={"inner-main-content"}>
            <h1>
              {" Website Creation Services for "}
              <span className={"glow-text"}>
                {"Stunning Online Presences"}
              </span>
            </h1>
            <p>
              {"You can rely on us for all your company's web development requirements. Our online platforms showcase agility, speed, distinctiveness, and top-notch quality."}
            </p>
            <img src={"/assets/img/main-logos.webp"} alt={"American Logo Artist customer review platforms"} className={"img-fluid"} loading={"eager"} decoding={"async"} />
          </div>
        </div>
      </div>
    </section>
  );
}
