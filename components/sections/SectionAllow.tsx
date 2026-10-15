import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionAllow() {
  return (
    <section className={"section section--allow"} data-color={"8"}>
      <div className={"container"}>
        <div className={"row flex-row-reverse align-items-end"}>
          <div className={"col-lg-6"}>
            <div className={"section-intro"}>
              <h4>
                {"We're Here to Help You Create a Website."}
              </h4>
              <h2>
                {"EXPERTS AND PROFESSIONAL"}
              </h2>
              <p>
                {"At the forefront of our mission is facilitating new companies in reaching the appropriate audience at precisely the right moment. Through the exploration of innovative concepts, we enable you to forge fresh connections, establish novel partnerships, and offer imaginative design remedies, all contributing to your business's triumph in the realm of digital marketing."}
              </p>
              <div className={"btn-group"}>
                <ContactButton className={"theme-btn hire_us_now"}>
                  {"GET EXPERT SERVICE"}
                </ContactButton>
                <ChatButton className={"chat-btn"}>
                  <i className={"fas fa-comment-dots"} aria-hidden={"true"}>
                  </i>
                  {" LIVE CHAT "}
                </ChatButton>
              </div>
            </div>
          </div>
          <div className={"col-lg-6"}>
            <figure>
              <img src={"/assets/img/about/allow-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
