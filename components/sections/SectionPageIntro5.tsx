import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPageIntro5() {
  return (
    <section className={"section section--page-intro app-page"} data-color={"7"}>
      <div className={"container"}>
        <div className={"row align-items-end"}>
          <div className={"col-md-6"}>
            <div className={"section-intro"}>
              <h2>
                {"Creating Innovative Mobile Applications "}
              </h2>
              <p>
                {"We stimulate creativity, construct, generate, and launch web applications employing a variety of tools and methodologies. Our aim is to construct top-tier web applications. Furthermore, our web developers produce exceptionally efficient responsive web applications tailored to your business."}
              </p>
              <h5>
                {"The mobile app development services we provide include:"}
              </h5>
              <ul className={"intro-list"}>
                <li>
                  {"Native Mobile Apps"}
                </li>
                <li>
                  {"Cross-Platform Apps"}
                </li>
                <li>
                  {"Emerging Technologies"}
                </li>
                <li>
                  {"Other Service"}
                </li>
              </ul>
              <div className={"btn-group"}>
                <ContactButton className={"theme-btn hire_us_now"}>
                  {"GET YOUR APP NOW"}
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
              <img src={"/assets/img/app/top-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
