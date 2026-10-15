import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionRock2() {
  return (
    <section className={"section section--rock"} data-color={"12"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"Exemplary Talent, Commitment, and Absolute Excellence."}
          </h4>
          <h2>
            {"We strive to bring a spectrum of innovations and creativity to the stage."}
          </h2>
          <p>
            {"In communication, innovation, and client satisfaction, our dedication to unwavering professionalism is steadfast. Guided by this ethos, our objective is to serve you with the utmost efficiency. Our logo design services extend beyond large corporations to include small businesses as well."}
          </p>
        </div>
        <div className={"row justify-content-center"}>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img width={124} height={124} src={"/assets/img/rock01.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Coordination with clients constantly"}
              </h3>
            </div>
          </div>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img width={124} height={124} src={"/assets/img/rock02.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Providing superior customer satisfaction"}
              </h3>
            </div>
          </div>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img width={124} height={124} src={"/assets/img/rock03.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Guaranteed money back"}
              </h3>
            </div>
          </div>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img width={124} height={124} src={"/assets/img/rock04.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"100% Ownership Rights"}
              </h3>
            </div>
          </div>
          <div className={"col-sm"}>
            <div className={"rock-card"}>
              <img width={124} height={124} src={"/assets/img/rock05.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
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
