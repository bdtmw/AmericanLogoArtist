import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionP2() {
  return (
    <section className={"section section--p"} data-color={"14"}>
      <div className={"container"}>
        <div className={"row align-items-start"}>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"seo-card"}>
              <img width={200} height={200} src={"/assets/img/social/facebook.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Facebook Management"}
              </h3>
              <p>
                {"Provides you with information about the number of searches for a particular keyword and the volume sharing. This tool can also estimate the cost of running a paid campaign."}
              </p>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"seo-card"}>
              <img width={200} height={200} src={"/assets/img/social/twitter.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Twitter Management"}
              </h3>
              <p>
                {"On-page optimization enhances web content's search engine and user experience. In addition to internal URLs/links, there are many ways to optimize a web page."}
              </p>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"seo-card"}>
              <img width={200} height={200} src={"/assets/img/social/instagram.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Instagram Management"}
              </h3>
              <p>
                {"Optimizing off-page, high-quality incoming links help the website's position in search engine results."}
              </p>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"seo-card"}>
              <img width={200} height={200} src={"/assets/img/social/youtube.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"YouTube Management"}
              </h3>
              <p>
                {"Do you want your visitors to be able to navigate your website? You can achieve this by obtaining links from several top-notch websites."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
