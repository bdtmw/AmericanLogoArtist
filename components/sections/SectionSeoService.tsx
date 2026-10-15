import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionSeoService() {
  return (
    <section className={"section section--seo-service"} data-color={"8"}>
      <div className={"container"}>
        <Carousel className={"seo-service-slider"} columns={1}>
          <div className={"inner-slide"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"seo-service-slide-content"}>
                  <h3>
                    {"Captivating Mobile SEO"}
                  </h3>
                  <h5>
                    {"Transforming Visitors into Mobile Users"}
                  </h5>
                  <p>
                    {"In addition to optimizing your website, we offer ASO services for your business or service applications, ensuring seamless access to your website from mobile devices."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img width={1919} height={924} src={"/assets/img/seo/seo-img - Copy.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </div>
          <div className={"inner-slide"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"seo-service-slide-content"}>
                  <h3>
                    {"Comprehensive Website Evaluation"}
                  </h3>
                  <h5>
                    {"Enhancements are possible for your professional website."}
                  </h5>
                  <p>
                    {"At American Logo Artist, we provide our clients with in-depth website assessments. SEO services enhance website performance as a result of SERPs algorithms."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img width={1919} height={924} src={"/assets/img/seo/seo-img - Copy.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </div>
          <div className={"inner-slide"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"seo-service-slide-content"}>
                  <h3>
                    {"Google Penalty Evaluation"}
                  </h3>
                  <h5>
                    {"Drive Business Growth by Resolving Google Penalties"}
                  </h5>
                  <p>
                    {"To achieve online success for your website, a well-planned content marketing strategy is essential. Our services encompass both content creation and marketing."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img width={1919} height={924} src={"/assets/img/seo/seo-img - Copy.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
