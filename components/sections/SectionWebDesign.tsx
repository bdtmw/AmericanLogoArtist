import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionWebDesign() {
  return (
    <section className={"section section--web-design"} data-color={"8"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"WE OFFER"}
          </h4>
          <h2>
            {"PREMIUM WEB DESIGN SERVICES"}
          </h2>
        </div>
        <Carousel className={"web-design-slider"} columns={1}>
          <div className={"inner-slide"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"web-design-slide-content"}>
                  <h3>
                    {"Ecommerce Web"}
                  </h3>
                  <p>
                    {" Utilizing agile project management, we can construct your upcoming e-commerce website for emerging markets. Our premium data analytics services have the potential to enhance your online sales. Additionally, our digital experts create e-commerce applications on widely-used platforms, facilitating the acquisition of new customers on a daily basis."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img width={763} height={488} src={"/assets/img/website/web-design-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </div>
          <div className={"inner-slide"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"web-design-slide-content"}>
                  <h3>
                    {"Custom Website Development"}
                  </h3>
                  <p>
                    {"Establishing an online presence is vital for websites to connect with millions of internet users and ensure their success. Business websites play a pivotal role in lead generation and closing sales. This is why our experts prioritize the design and development of websites."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img width={763} height={488} src={"/assets/img/website/web-design-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </div>
          <div className={"inner-slide"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"web-design-slide-content"}>
                  <h3>
                    {"Frontend Development"}
                  </h3>
                  <p>
                    {"The design, development, and setup of a top-tier web front-end are handled by industry-experienced designers. Our practical solutions are capable of addressing all your business requirements. "}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img width={763} height={488} src={"/assets/img/website/web-design-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
