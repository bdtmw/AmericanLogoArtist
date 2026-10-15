import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionTestimonials2() {
  return (
    <section className={"section section--testimonials"} data-color={"6"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"TESTIMONIALS"}
          </h4>
          <h2>
            {"Brands Boosted for Clients Like Yourself!"}
          </h2>
          <p>
            {" Through our successful efforts in digital marketing, we are committed to boosting your brand's success. Our services ensure that you receive complete organic exposure and are satisfied with the successful elements. "}
          </p>
        </div>
        <Carousel className={"testimonial-slider"} columns={1}>
          <div className={"inner-slide"}>
            <div className={"testimonial-card"}>
              <div className={"row align-items-center"}>
                <div className={"col-md-6"}>
                  <img src={"/assets/img/testimonial-1.webp"} alt={"Client brand design project"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </div>
                <div className={"col-md-6"}>
                  <div className={"testimonial-content"}>
                    <h3>
                      {"I Would Use Their Service Again."}
                    </h3>
                    <p>
                      {" We love our brand's success with Logo Design's successful effort in digital marketing services. They provided us with complete organic exposure and satisfied our branding needs efficiently. "}
                    </p>
                    <ul className={"stars"}>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                    </ul>
                    <div className={"user"}>
                      <div className={"user-detail"}>
                        <h5>
                          {"Sue Saeen"}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"inner-slide"}>
            <div className={"testimonial-card"}>
              <div className={"row align-items-center"}>
                <div className={"col-md-6"}>
                  <img src={"/assets/img/testimonial-2.webp"} alt={"Client brand design project"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </div>
                <div className={"col-md-6"}>
                  <div className={"testimonial-content"}>
                    <h3>
                      {"Great Website!"}
                    </h3>
                    <p>
                      {" The website is responsive and much more interactive than I anticipated. The colors and elemental effects were on point and followed my requirement. We followed through with the website and tested it, which worked perfectly. "}
                    </p>
                    <ul className={"stars"}>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                    </ul>
                    <div className={"user"}>
                      <div className={"user-detail"}>
                        <h5>
                          {"George Bodwin,"}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"inner-slide"}>
            <div className={"testimonial-card"}>
              <div className={"row align-items-center"}>
                <div className={"col-md-6"}>
                  <img src={"/assets/img/testimonial-3.webp"} alt={"Client brand design project"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </div>
                <div className={"col-md-6"}>
                  <div className={"testimonial-content"}>
                    <h3>
                      {"The perfect Video Trailer,"}
                    </h3>
                    <p>
                      {" The systematic progressiveness of my video trailer can only be made as good as this. Great work! I loved your services, and I would come back again. "}
                    </p>
                    <ul className={"stars"}>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                      <li>
                        <i className={"fas fa-star"} aria-hidden={"true"}>
                        </i>
                      </li>
                    </ul>
                    <div className={"user"}>
                      <div className={"user-detail"}>
                        <h5>
                          {"Stephenie Grace"}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
