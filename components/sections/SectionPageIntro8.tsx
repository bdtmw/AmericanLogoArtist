import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPageIntro8() {
  return (
    <section className={"section section--page-intro"} data-color={"7"}>
      <div className={"container"}>
        <div className={"row align-items-center"}>
          <div className={"col-md-6"}>
            <div className={"section-intro"}>
              <h4>
                {"Join the Conversation and Voice Your Views."}
              </h4>
              <h2>
                {"Any ideas to contribute? Let's collaborate to bring them to life."}
              </h2>
              <p>
                {"The team of web experts at American Logo Artist comprises professionals who excel in web design, development, strategy, and marketing. We also offer a range of digital marketing services, including content creation, email marketing, social media marketing, and search engine optimization. When it comes to website development, we handle everything from the initial layout and graphics to content optimization, as well as promoting and marketing your site on social media platforms. We are your one-stop shop for all your web-related needs. If you're ready to launch or grow your business with a proven concept, our team is here to assist you."}
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
              <img src={"/assets/img/contact/intro-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
