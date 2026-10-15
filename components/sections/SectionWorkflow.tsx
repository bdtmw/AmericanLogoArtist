import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionWorkflow() {
  return (
    <section className={"section section--workflow"} data-color={"5"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"WORKFLOW"}
          </h4>
          <h2>
            {"How We Infuse Creativity into Brands"}
          </h2>
        </div>
        <div className={"row workflow-row"}>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"workflow-card"}>
              <img width={130} height={130} src={"/assets/img/workflow-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <div className={"workflow-content"}>
                <h3>
                  {"Examining"}
                </h3>
                <p>
                  {" We inspect your vital brand requirements, enhancing them to become more dynamic and extraordinary. Finally, we craft impressive brand elements with an executive touch."}
                </p>
              </div>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"workflow-card"}>
              <img width={130} height={130} src={"/assets/img/workflow-2.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <div className={"workflow-content"}>
                <h3>
                  {"Generating Ideas"}
                </h3>
                <p>
                  {"What makes a great logo? Are there any approaches that should be avoided? When we notice a clear pattern in logo designs within our client's industry, we assess whether following that trend or introducing innovative elements will be more advantageous for our client's business. "}
                </p>
              </div>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"workflow-card"}>
              <img width={130} height={130} src={"/assets/img/workflow-3.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <div className={"workflow-content"}>
                <h3>
                  {"Implementing Design Concept"}
                </h3>
                <p>
                  {"It's time to create a strong blend of visuals that effectively communicate the client's message. A compact and straightforward design, versatile for various situations, captures the multifaceted essence of a business."}
                </p>
              </div>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"workflow-card"}>
              <img width={130} height={130} src={"/assets/img/workflow-4.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <div className={"workflow-content"}>
                <h3>
                  {"Feedback and Evaluation"}
                </h3>
                <p>
                  {"Our goal is to concentrate on the most robust designs while eliminating the less effective ones. Soliciting input from clients and fellow designers is an excellent method for introducing modifications and nurturing the evolution of the designs."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
