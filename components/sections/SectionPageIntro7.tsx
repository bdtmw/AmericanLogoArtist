import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPageIntro7() {
  return (
    <section className={"section section--page-intro"} data-color={"7"}>
      <div className={"container"}>
        <div className={"row align-items-center"}>
          <div className={"col-md-6"}>
            <div className={"section-intro"}>
              <h2>
                {"Our Work Philosophy"}
              </h2>
              <p>
                {"The essence of our work lies in uniting individuals from diverse backgrounds who possess open-mindedness, strategic thinking, empathy, and genuine curiosity, potentially resulting in extraordinary outcomes. We hold dear values such as diversity, collaboration, competitiveness, professional growth, and environmental progress as integral to our brand. Moreover, we are dedicated to removing any hindrances that may impede our partners' success. Our commitment lies in cultivating strategic partnerships, nurturing a productive workspace, and ensuring that our financial growth is guided by data."}
              </p>
              <div className={"btn-group"}>
                <ContactButton className={"theme-btn hire_us_now"}>
                  {"GET IN TOUCH"}
                </ContactButton>
                <ChatButton className={"chat-btn"}>
                  <i className={"fas fa-comment-dots"} aria-hidden={"true"}>
                  </i>
                  {" LIVE CHAT "}
                </ChatButton>
              </div>
            </div>
          </div>
          <div className={"col-md-6"}>
            <figure>
              <img src={"/assets/img/about/intro-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
