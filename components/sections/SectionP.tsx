import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionP() {
  return (
    <section className={"section section--p"} data-color={"7"}>
      <div className={"container"}>
        <div className={"row align-items-start"}>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"seo-card"}>
              <img src={"/assets/img/seo/pro-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Keyword Analysis"}
              </h3>
              <p>
                {"Provides you with information about the number of searches for a particular keyword and the volume sharing. This tool can also estimate the cost of running a paid campaign."}
              </p>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"seo-card"}>
              <img src={"/assets/img/seo/pro-2.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"On-Page Optimization"}
              </h3>
              <p>
                {"A search engine and user-friendly approach to content optimization are called on-page optimization. Internal URLs and links can be optimized as part of on-page optimization."}
              </p>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"seo-card"}>
              <img src={"/assets/img/seo/pro-3.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Off-Page Optimization"}
              </h3>
              <p>
                {"Optimizing off-page, high-quality incoming links help the website's position in search engine results."}
              </p>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"seo-card"}>
              <img src={"/assets/img/seo/pro-4.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Link Building"}
              </h3>
              <p>
                {"Do you want your visitors to be able to navigate your website? You will need high-quality links from several authoritative sites to achieve this."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
