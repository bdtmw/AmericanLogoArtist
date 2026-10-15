import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPageIntro6() {
  return (
    <section className={"section section--page-intro"} data-color={"7"}>
      <div className={"container"}>
        <div className={"row align-items-center"}>
          <div className={"col-md-7"}>
            <div className={"section-intro"}>
              <h4>
                {"IMPROVE SOCIAL MEDIA AUDIENCE ENGAGMENT"}
              </h4>
              <h2>
                {"Harnessing Social Media for Lead Generation"}
              </h2>
              <p>
                {"As one of the leading social media marketing firms, we not only maintain a high level of professionalism but also deliver value and lead generation services. Irrespective of your business's scale, social media tools remain an ever-increasing necessity. Studies show that 65% of marketers have experienced greater lead generation and ROI through social media advertising. "}
              </p>
            </div>
          </div>
          <div className={"col-md-5"}>
            <figure>
              <img src={"/assets/img/social/intro-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
