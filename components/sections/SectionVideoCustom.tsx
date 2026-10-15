import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionVideoCustom() {
  return (
    <section className={"section section--video-custom"} data-color={"8"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"PROFESSIONAL"}
          </h4>
          <h2>
            {"Video Animation Services"}
          </h2>
        </div>
        <div className={"row align-items-center video-custom-row"}>
          <div className={"col-lg-4"}>
            <div className={"video-custom-content"}>
              <h3>
                {"2D Animation"}
              </h3>
              <p>
                {"The use of 2D animation is eye-catching, efficient, and customer-focused. 2D animation delivers quick messages with minimal distraction or in-depth detailing. "}
              </p>
              <div className={"btn-group"}>
                <Link href={"/portfolio"} className={"theme-btn"}>
                  {"VIEW DETAIL"}
                </Link>
                <ChatButton className={"theme-btn"}>
                  {"LIVE CHAT"}
                </ChatButton>
              </div>
            </div>
            <div className={"video-custom-content"}>
              <h3>
                {"Motion Graphics"}
              </h3>
              <p>
                {"Your brand's story is effectively communicated through motion animation. Motion animation envelops all the elements needed to present the idea or message to your audience. "}
              </p>
              <div className={"btn-group"}>
                <Link href={"/portfolio"} className={"theme-btn"}>
                  {"VIEW DETAIL"}
                </Link>
                <ChatButton className={"theme-btn"}>
                  {"LIVE CHAT"}
                </ChatButton>
              </div>
            </div>
            <div className={"video-custom-content"}>
              <h3>
                {"Explainer Videos"}
              </h3>
              <p>
                {"You can use a short video to explain your product/service to potential customers. Explainer videos are perfect if you want to explain your message in detail. "}
              </p>
              <div className={"btn-group"}>
                <Link href={"/portfolio"} className={"theme-btn"}>
                  {"VIEW DETAIL"}
                </Link>
                <ChatButton className={"theme-btn"}>
                  {"LIVE CHAT"}
                </ChatButton>
              </div>
            </div>
          </div>
          <div className={"col-lg-4"}>
            <figure className={"video-custom-img"}>
              <img src={"/assets/img/video/professional-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
          <div className={"col-lg-4"}>
            <div className={"video-custom-content text-right"}>
              <h3>
                {"3D Animation"}
              </h3>
              <p>
                {"The use of 3D characters is not only user-friendly but also highly effective when grabbing customers' attention."}
              </p>
              <div className={"btn-group right"}>
                <Link href={"/portfolio"} className={"theme-btn"}>
                  {"VIEW DETAIL"}
                </Link>
                <ChatButton className={"theme-btn"}>
                  {"LIVE CHAT"}
                </ChatButton>
              </div>
            </div>
            <div className={"video-custom-content text-right"}>
              <h3>
                {"Character Animation"}
              </h3>
              <p>
                {"As characters inject emotions into videos, your products/services are revolutionized. The character may sometimes represent your brand more perfectly than any text or slogan. "}
              </p>
              <div className={"btn-group right"}>
                <Link href={"/portfolio"} className={"theme-btn"}>
                  {"VIEW DETAIL"}
                </Link>
                <ChatButton className={"theme-btn"}>
                  {"LIVE CHAT"}
                </ChatButton>
              </div>
            </div>
            <div className={"video-custom-content text-right"}>
              <h3>
                {"Whiteboard Animation"}
              </h3>
              <p>
                {"Whiteboard videos seek to involve and engage customers on various topics. It’s easier to get your message across simply with whiteboard animation. "}
              </p>
              <div className={"btn-group right"}>
                <Link href={"/portfolio"} className={"theme-btn"}>
                  {"VIEW DETAIL"}
                </Link>
                <ChatButton className={"theme-btn"}>
                  {"LIVE CHAT"}
                </ChatButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
