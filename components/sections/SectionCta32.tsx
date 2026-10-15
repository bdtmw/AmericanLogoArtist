import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionCta32() {
  return (
    <section className={"section section--cta-3"} data-color={"13"}>
      <div className={"container"}>
        <div className={"row align-items-center"}>
          <div className={"col-lg-6"}>
            <h2 className={"cta-3-heading"}>
              {"Contact us and talk about your project with our experts today."}
            </h2>
          </div>
          <div className={"col-lg-6"}>
            <ul className={"cta-3-links"}>
              <li>
                <a href={"tel:+13072183240"}>
                  <i className={"fas fa-phone"} aria-hidden={"true"}>
                  </i>
                  <div>
                    <h4>
                      {"Call Us"}
                    </h4>
                    {" (307) 218-3240 "}
                  </div>
                </a>
              </li>
              <li>
                <a href={"mailto:info@americanlogoartist.com"}>
                  <i className={"fas fa-envelope"} aria-hidden={"true"}>
                  </i>
                  <div>
                    <h4>
                      {"Discuss your ideas"}
                    </h4>
                    {" info@americanlogoartist.com "}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
