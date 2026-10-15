import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionInnerMain8() {
  return (
    <section className={"section--inner-main movable-elements-wrapper"}>
      <div className={"container"}>
        <img src={"/assets/img/portfolio/main-img-1.webp"} alt={"Main-Img-1.Webp design portfolio example 1"} className={"img-fluid main-img main-img--1"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/portfolio/main-img-2.webp"} alt={"Main-Img-2.Webp design portfolio example 2"} className={"img-fluid main-img main-img--2"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/portfolio/main-img-3.webp"} alt={"Main-Img-3.Webp design portfolio example 3"} className={"img-fluid main-img main-img--3"} data-value={"4"} loading={"eager"} decoding={"async"} />
        <img src={"/assets/img/portfolio/main-img-4.webp"} alt={"Main-Img-4.Webp design portfolio example 4"} className={"img-fluid main-img main-img--4"} data-value={"5"} loading={"eager"} decoding={"async"} />
        <div className={"container"}>
          {"pa "}
          <div className={"inner-main-content"}>
            <h1>
              {" We proudly showcase our "}
              <span className={"glow-text"}>
                {" remarkable portfolio. "}
              </span>
            </h1>
            <p>
              {" We take pride in our track record of providing exceptional services that yield unmatched results. Our accomplishments include crafting imaginative logo designs, building interactive websites, implementing effective SEO strategies, and delivering brand-enhancing marketing services."}
            </p>
            <img src={"/assets/img/main-logos.webp"} alt={"American Logo Artist customer review platforms"} className={"img-fluid"} loading={"eager"} decoding={"async"} />
          </div>
        </div>
      </div>
    </section>
  );
}
