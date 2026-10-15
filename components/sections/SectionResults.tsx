import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionResults() {
  return (
    <section className={"section section--results"} data-color={"14"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"WEBSITE"}
          </h4>
          <h2>
            {"SEO Results"}
          </h2>
          <p>
            {"Count on one of the best and most dependable SEO services with notifiable results."}
          </p>
        </div>
        <div className={"row align-items-center"}>
          <div className={""}>
            <ul className={"result-list"}>
              <li>
                <div className={"result-card"}>
                  <img width={142} height={142} src={"/assets/img/seo/results-icon-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                  <div>
                    <p>
                      {"Keywords "}
                    </p>
                    <h3>
                      {"55K"}
                    </h3>
                    <p>
                      {"Keywords for Total Website"}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={"result-card"}>
                  <img width={142} height={142} src={"/assets/img/seo/results-icon-2.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                  <div>
                    <p>
                      {"Expertise"}
                    </p>
                    <h3>
                      {"4,558"}
                    </h3>
                    <p>
                      {"We generate leads for our client"}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={"result-card"}>
                  <img width={142} height={142} src={"/assets/img/seo/results-icon-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                  <div>
                    <p>
                      {"Rankings"}
                    </p>
                    <h3>
                      {"45 out of 55"}
                    </h3>
                    <p>
                      {"2nd-page keywords"}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={"result-card"}>
                  <img width={142} height={142} src={"/assets/img/seo/results-icon-2.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                  <div>
                    <p>
                      {"Generated"}
                    </p>
                    <h3>
                      {"$69,088"}
                    </h3>
                    <p>
                      {"Three-month profit"}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={"col-lg-7"}>
            <figure>
              <img width={980} height={734} src={"/assets/img/seo/results-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
