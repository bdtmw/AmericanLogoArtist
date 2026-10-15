import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionInnerMain6() {
  return (
    <section className={"section--inner-main movable-elements-wrapper"}>
      <div className={"container"}>
        <img src={"/assets/img/seo/main-img-1.webp"} alt={""} className={"img-fluid main-img main-img--1"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/seo/main-img-2.webp"} alt={""} className={"img-fluid main-img main-img--2"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/seo/main-img-3.webp"} alt={""} className={"img-fluid main-img main-img--3"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/seo/main-img-4.webp"} alt={""} className={"img-fluid main-img main-img--4"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <div className={"container"}>
          <div className={"inner-main-content"}>
            <h1>
              <span className={"glow-text"}>
                {"Increase Your Ranking with "}
              </span>
              {" Professional SEO Support "}
            </h1>
            <p>
              {" Enhance your business website's keyword rankings with expert SEO services provided by American Logo Artist. "}
            </p>
            <img src={"/assets/img/main-logos.webp"} alt={"American Logo Artist customer review platforms"} className={"img-fluid"} loading={"eager"} decoding={"async"} />
          </div>
        </div>
      </div>
    </section>
  );
}
