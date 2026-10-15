import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionAppTabs() {
  return (
    <Tabs initial={"apple"}>
    <section className={"section section--app-tabs"} data-color={"8"}>
      <div className={"container"}>
        <nav className={"nav nav-pills app-tabs"} role={"tablist"}>
          <Tab value={"apple"} className={"nav-link"} label={"Ios"}>
            <img width={96} height={96} src={"/assets/img/app/apple.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
          </Tab>
          <Tab value={"android"} className={"nav-link"} label={"Android"}>
            <img width={96} height={96} src={"/assets/img/app/android.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
          </Tab>
          <Tab value={"appStore"} className={"nav-link"} label={"App Store"}>
            <img width={96} height={96} src={"/assets/img/app/app-store.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
          </Tab>
          <Tab value={"flutter"} className={"nav-link"} label={"Flutter"}>
            <img width={96} height={96} src={"/assets/img/app/flutter.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
          </Tab>
        </nav>
        <div className={"tab-content app-tab-content"}>
          <TabPanel value={"apple"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"app-tab-intro"}>
                  <h2>
                    {"iOS App Development"}
                  </h2>
                  <p>
                    {"Your cutting-edge iPhone/iOS application can be created and dispatched with the American Logo Artist' best-in-class advancements. Our company is the only iPhone application development company that guarantees to build fully feature-rich iOS applications for both new businesses and endeavors. "}
                  </p>
                  <div className={"btn-group"}>
                    <ContactButton className={"theme-btn hire_us_now"}>
                      {"GET AN iOS APP"}
                    </ContactButton>
                    <ChatButton className={"chat-btn"}>
                      <i className={"fas fa-comment-dots"} aria-hidden={"true"}>
                      </i>
                      {" LIVE CHAT "}
                    </ChatButton>
                  </div>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <Carousel className={"app-tab-slider"} columns={2}>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/customize.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Mobile Application Strategy"}
                      </h3>
                      <p>
                        {"Before getting started, American Logo Artist put a lot of emphasis on strategy making. To come up with a workable solution, we must pay attention to every detail of the customer's requirements. In addition, we fabricate customer-focused mobile applications using an agile project management philosophy guided by data analytics."}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/design.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"User Experience Design"}
                      </h3>
                      <p>
                        {"Mobile app designs are intuitive and creative when created by American Logo Artist. Mobile application traffic can be increased by incorporating engaging and aesthetic UX/UI designs and prototypes. We aim to increase downloads, retention rates, and lead generation through our mobile application development team."}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/develop.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Mobile Application Development"}
                      </h3>
                      <p>
                        {"You can increase your profitability by developing data-driven mobile apps. We have pragmatic app developers who have worked on several applications and are well-versed in developing customer-focused apps that generate profits. "}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/develop.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Testing"}
                      </h3>
                      <p>
                        {"In the absence of testing, a developer and client suffer unimaginable losses. Our quality assurance department tests the final product to provide you with flawless mobile applications. Quality is assured at The American Logo Artist, leading to your delight and satisfaction."}
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"android"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"app-tab-intro"}>
                  <h2>
                    {"Android App Development"}
                  </h2>
                  <p>
                    {"Look for the best Android application development agency when making a top-tier Android application for your business. We can assist you with bringing your vision to life with our team of expert iOS developers. With our industry-best Android application development services, we can meet any Android arrangement you need. "}
                  </p>
                  <div className={"btn-group"}>
                    <ContactButton className={"theme-btn hire_us_now"}>
                      {"GET AN ANDROID APP"}
                    </ContactButton>
                    <ChatButton className={"chat-btn"}>
                      <i className={"fas fa-comment-dots"} aria-hidden={"true"}>
                      </i>
                      {" LIVE CHAT "}
                    </ChatButton>
                  </div>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <Carousel className={"app-tab-slider"} columns={2}>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/customize.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Mobile Application Strategy"}
                      </h3>
                      <p>
                        {"Before getting started, American Logo Artist put a lot of emphasis on strategy making. To come up with a workable solution, we must pay attention to every detail of the customer's requirements. In addition, we fabricate customer-focused mobile applications using an agile project management philosophy guided by data analytics."}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/design.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"User Experience Design"}
                      </h3>
                      <p>
                        {"Mobile app designs are intuitive and creative when created by American Logo Artist. Mobile application traffic can be increased by incorporating engaging and aesthetic UX/UI designs and prototypes. We aim to increase downloads, retention rates, and lead generation through our mobile application development team."}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/develop.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Mobile Application Development"}
                      </h3>
                      <p>
                        {"You can increase your profitability by developing data-driven mobile apps. We have pragmatic app developers who have worked on several applications and are well-versed in developing customer-focused apps that generate profits. "}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/develop.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Testing"}
                      </h3>
                      <p>
                        {"In the absence of testing, a developer and client suffer unimaginable losses. Our quality assurance department tests the final product to provide you with flawless mobile applications. Quality is assured at The American Logo Artist, leading to your delight and satisfaction."}
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"appStore"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"app-tab-intro"}>
                  <h2>
                    {"App Store Apps Development"}
                  </h2>
                  <p>
                    {"We are one of the best versatile game studios because we are proficient with well-known portable game advancement motors such as Unity, Unreal, Cocos2d, Cocos’s, and HTML5 advances such as AngularJS, Three.JS, JavaScript, and so forth. Depending on each game's specialized need, our team of mobile game designers selects appropriate apparatuses and advancements. "}
                  </p>
                  <div className={"btn-group"}>
                    <ContactButton className={"theme-btn hire_us_now"}>
                      {"PUBLISH AN APP ON APPSTORE"}
                    </ContactButton>
                    <ChatButton className={"chat-btn"}>
                      <i className={"fas fa-comment-dots"} aria-hidden={"true"}>
                      </i>
                      {" LIVE CHAT "}
                    </ChatButton>
                  </div>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <Carousel className={"app-tab-slider"} columns={2}>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/customize.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Mobile Application Strategy"}
                      </h3>
                      <p>
                        {"Before getting started, American Logo Artist put a lot of emphasis on strategy making. To come up with a workable solution, we must pay attention to every detail of the customer's requirements. In addition, we fabricate customer-focused mobile applications using an agile project management philosophy guided by data analytics."}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/design.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"User Experience Design"}
                      </h3>
                      <p>
                        {"Mobile app designs are intuitive and creative when created by American Logo Artist. Mobile application traffic can be increased by incorporating engaging and aesthetic UX/UI designs and prototypes. We aim to increase downloads, retention rates, and lead generation through our mobile application development team."}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/develop.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Mobile Application Development"}
                      </h3>
                      <p>
                        {"You can increase your profitability by developing data-driven mobile apps. We have pragmatic app developers who have worked on several applications and are well-versed in developing customer-focused apps that generate profits. "}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/develop.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Testing"}
                      </h3>
                      <p>
                        {"In the absence of testing, a developer and client suffer unimaginable losses. Our quality assurance department tests the final product to provide you with flawless mobile applications. Quality is assured at The American Logo Artist, leading to your delight and satisfaction."}
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"flutter"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"app-tab-intro"}>
                  <h2>
                    {"Flutter App Development"}
                  </h2>
                  <p>
                    {"It can be expensive to develop a mobile app. The app must be designed, developed, supported, and maintained by dedicated developers. As its SDKs offer different ways to reduce costs, Flutter mobile app development is suitable for startups with limited budgets. The development of mind-blowing app UIs and smooth animations speeds up the development process and reduces production costs. "}
                  </p>
                  <div className={"btn-group"}>
                    <ContactButton className={"theme-btn hire_us_now"}>
                      {"GET A FLUTTER APP"}
                    </ContactButton>
                    <ChatButton className={"chat-btn"}>
                      <i className={"fas fa-comment-dots"} aria-hidden={"true"}>
                      </i>
                      {" LIVE CHAT "}
                    </ChatButton>
                  </div>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <Carousel className={"app-tab-slider"} columns={2}>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/customize.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Mobile Application Strategy"}
                      </h3>
                      <p>
                        {"Before getting started, American Logo Artist put a lot of emphasis on strategy making. To come up with a workable solution, we must pay attention to every detail of the customer's requirements. In addition, we fabricate customer-focused mobile applications using an agile project management philosophy guided by data analytics."}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/design.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"User Experience Design"}
                      </h3>
                      <p>
                        {"Mobile app designs are intuitive and creative when created by American Logo Artist. Mobile application traffic can be increased by incorporating engaging and aesthetic UX/UI designs and prototypes. We aim to increase downloads, retention rates, and lead generation through our mobile application development team."}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/develop.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Mobile Application Development"}
                      </h3>
                      <p>
                        {"You can increase your profitability by developing data-driven mobile apps. We have pragmatic app developers who have worked on several applications and are well-versed in developing customer-focused apps that generate profits. "}
                      </p>
                    </div>
                  </div>
                  <div className={"inner-slide"}>
                    <div className={"app-tab-slide-card"}>
                      <img width={120} height={120} src={"/assets/img/app/develop.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                      <h3>
                        {"Testing"}
                      </h3>
                      <p>
                        {"In the absence of testing, a developer and client suffer unimaginable losses. Our quality assurance department tests the final product to provide you with flawless mobile applications. Quality is assured at The American Logo Artist, leading to your delight and satisfaction."}
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </section>
    </Tabs>
  );
}
