import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionInnerMain() {
  return (
    <section className={"section--inner-main movable-elements-wrapper"}>
      <div className={"container"}>
        <img width={311} height={311} src={"/assets/img/main-img-1.webp"} alt={""} className={"img-fluid main-img main-img--1"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img width={279} height={280} src={"/assets/img/main-img-2.webp"} alt={""} className={"img-fluid main-img main-img--2"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <img width={324} height={324} src={"/assets/img/main-img-3.webp"} alt={""} className={"img-fluid main-img main-img--3"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img width={308} height={308} src={"/assets/img/main-img-4.webp"} alt={""} className={"img-fluid main-img main-img--4"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <div className={"container"}>
          <div className={"inner-main-content"}>
            <h1>
              <span className={"glow-text"}>
                {"Affordable Logo and Branding "}
              </span>
              {" Services for Your Developing Business "}
            </h1>
            <p>
              {" Our affordable logo design and branding services create a memorable first impression that builds trust and attracts customers. We'll work with you to craft a logo that perfectly captures your brand essence, and extend it to a unified online presence."}
            </p>
            <img width={1192} height={110} src={"/assets/img/main-logos.webp"} alt={"American Logo Artist customer review platforms"} className={"img-fluid"} loading={"eager"} decoding={"async"} />
          </div>
        </div>
      </div>
    </section>
  );
}
