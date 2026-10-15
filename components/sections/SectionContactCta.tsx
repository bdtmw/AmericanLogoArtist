import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionContactCta() {
  return (
    <section className={"section section--contact-cta"} data-color={"13"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-6"}>
            <div className={"contact-card"}>
              <i className={"fas fa-phone fa-fw"} aria-hidden={"true"}>
              </i>
              <h3>
                {"Startups' Website Solutions?"}
              </h3>
              <p>
                {"We craft remarkable and distinct websites tailored to startups, leaving a lasting mark on users. We revamp the brand's appearance, making it attractive and captivating."}
              </p>
              <ContactButton className={"theme-btn hire_us_now"}>
                {"DISCUSS YOUR IDEA"}
              </ContactButton>
            </div>
          </div>
          <div className={"col-lg-6"}>
            <div className={"contact-card"}>
              <i className={"fas fa-comment-dots fa-fw"} aria-hidden={"true"}>
              </i>
              <h3>
                {"Enterprise Websites?"}
              </h3>
              <p>
                {"Our enterprise websites exude sophistication while staying attuned to client needs. We strive to foster brand loyalty, enabling businesses to retain their existing clientele and allure new customers."}
              </p>
              <ChatButton className={"theme-btn"}>
                {"CHAT WITH US"}
              </ChatButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
