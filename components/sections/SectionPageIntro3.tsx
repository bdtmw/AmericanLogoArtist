import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPageIntro3() {
  return (
    <section className={"section section--page-intro"} data-color={"7"}>
      <div className={"container"}>
        <div className={"row align-items-center"}>
          <div className={"col-md-6"}>
            <div className={"section-intro"}>
              <h2>
                {"Responsive Web Design Services"}
              </h2>
              <p>
                {"In the digital era, establishing a robust online presence is essential. American Logo Artist employs a result-oriented strategy, delivering exceptional and tailor-made website solutions through skilled and expert teams of developers, strategists, and designers."}
              </p>
              <div className={"btn-group"}>
                <ContactButton className={"theme-btn hire_us_now"}>
                  {"GET YOUR WEBSITE NOW"}
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
              <img src={"/assets/img/website/intro-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
