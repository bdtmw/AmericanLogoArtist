import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionBrandingWorkflow() {
  return (
    <section className={"section section--branding-workflow"} data-color={"9"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"WORKFLOW"}
          </h4>
          <h2>
            {"Bringing Creative Flair to Branding"}
          </h2>
        </div>
        <div className={"row"}>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"branding-workflow-card arrow"}>
              <img width={200} height={200} src={"/assets/img/branding/workflow01.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Design Brief"}
              </h3>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"branding-workflow-card arrow"}>
              <img width={200} height={200} src={"/assets/img/branding/workflow02.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Conceptualization"}
              </h3>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"branding-workflow-card arrow"}>
              <img width={200} height={200} src={"/assets/img/branding/workflow03.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"First Draft & Revision"}
              </h3>
            </div>
          </div>
          <div className={"col-lg-3 col-md-6"}>
            <div className={"branding-workflow-card"}>
              <img width={200} height={200} src={"/assets/img/branding/workflow04.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Final Delivery"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
