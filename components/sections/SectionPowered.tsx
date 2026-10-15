import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPowered() {
  return (
    <section className={"section section--powered"} data-color={"14"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"Access the Cutting-Edge Technology at Your Disposal"}
          </h4>
          <h2>
            {"EFFICIENCY & HIGH PERFORMANCE"}
          </h2>
          <p>
            {"Design Experts offer information-driven, intuitive, and user-friendly applications. To unlock your business's potential, we invite you to let us create mobile applications for you."}
          </p>
        </div>
        <div className={"row"}>
          <div className={"col-md-2"}>
            <div className={"power-card"}>
              <img src={"/assets/img/app/react.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"React"}
              </h3>
            </div>
          </div>
          <div className={"col-md-2"}>
            <div className={"power-card"}>
              <img src={"/assets/img/app/mosync.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"MoSync"}
              </h3>
            </div>
          </div>
          <div className={"col-md-2"}>
            <div className={"power-card"}>
              <img src={"/assets/img/app/swift.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Swift"}
              </h3>
            </div>
          </div>
          <div className={"col-md-2"}>
            <div className={"power-card"}>
              <img src={"/assets/img/app/c.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"C++"}
              </h3>
            </div>
          </div>
          <div className={"col-md-2"}>
            <div className={"power-card"}>
              <img src={"/assets/img/app/java.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"Java"}
              </h3>
            </div>
          </div>
          <div className={"col-md-2"}>
            <div className={"power-card"}>
              <img src={"/assets/img/app/html.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              <h3>
                {"HTML 5"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
