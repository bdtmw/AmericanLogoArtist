import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionRock() {
  return (
    <section className={"section section--rock"} data-color={"12"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"Utter Excellence, Commitment, And Exceptional Talent."}
          </h4>
          <h2>
            {"Bringing innovations and creativity of all kinds to the stage is our goal."}
          </h2>
          <p>
            {"Whether it is communication, innovation, or client satisfaction, we are committed to utter professionalism. According to this code, we aim to serve you as efficiently as possible. Our logo design services do not just cater to large corporations but also small businesses."}
          </p>
        </div>
        <div className={"row justify-content-center"}>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img src={"/assets/img/rock01.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Coordination with clients constantly"}
              </h3>
            </div>
          </div>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img src={"/assets/img/rock02.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Providing superior customer satisfaction"}
              </h3>
            </div>
          </div>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img src={"/assets/img/rock03.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Guaranteed money back"}
              </h3>
            </div>
          </div>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img src={"/assets/img/rock04.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"100% Ownership Rights"}
              </h3>
            </div>
          </div>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img src={"/assets/img/rock05.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Professionals with years of industry experience"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
