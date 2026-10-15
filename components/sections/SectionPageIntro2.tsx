import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPageIntro2() {
  return (
    <section className={"section section--page-intro"} data-color={"7"}>
      <div className={"container"}>
        <div className={"row align-items-center"}>
          <div className={"col-md-6"}>
            <div className={"section-intro"}>
              <h2>
                {"Professional Logo Design Cleveland"}
              </h2>
              <p>
                {"Our professional logo design services in Cleveland deliver high-quality, memorable logos that encapsulate your brand's essence. Trust us to create a distinctive logo that elevates your business and strengthens your online presence."}
              </p>
              <div className={"btn-group"}>
                <ContactButton className={"theme-btn hire_us_now"}>
                  {"GET YOUR LOGO NOW"}
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
              <img src={"/assets/img/new/LogoDesign.png"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
