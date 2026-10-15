import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionAppCat() {
  return (
    <Tabs initial={"iosCat"}>
    <section className={"section section--app-cat"} data-color={"2"}>
      <div className={"container"}>
        <nav className={"nav nav-pills nav-fill app-cat-tabs"} role={"tablist"}>
          <Tab value={"iosCat"} className={"nav-link"} label={"iOS Development"}>
            {" iOS Development "}
          </Tab>
          <Tab value={"androidCat"} className={"nav-link"} label={"Android Development"}>
            {" Android Development "}
          </Tab>
          <Tab value={"gameCat"} className={"nav-link"} label={"Game Development"}>
            {" Game Development "}
          </Tab>
          <Tab value={"arCat"} className={"nav-link"} label={"AR/VR App Development"}>
            {" AR/VR App Development "}
          </Tab>
        </nav>
        <div className={"tab-content app-cat-tab-content"}>
          <TabPanel value={"iosCat"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"app-cat-content"}>
                  <h2>
                    {"iOS Development"}
                  </h2>
                  <p>
                    {"Make sure you hire the best iPhone application development company for top-notch iOS applications for your business. You can bring your vision to life with our team of expert iOS developers. "}
                  </p>
                  <h3>
                    {"Offline Experience"}
                  </h3>
                  <p>
                    {"Your brand can benefit from a mobile application if you want to enhance the offline experience. Customers are more likely to become loyal to brands when their mobile apps are designed by American Logo Artist’ mobile app specialists."}
                  </p>
                  <h3>
                    {"Discoverable Apps"}
                  </h3>
                  <p>
                    {"According to Ipsos, forty percent of mobile app users download apps from searches. Because of this, our team creates easily discoverable applications for you."}
                  </p>
                  <h3>
                    {"User-Friendly Apps"}
                  </h3>
                  <p>
                    {"A user-friendly mobile application allows customers to navigate through branded applications easily. It is our core competency to develop flawless mobile apps."}
                  </p>
                  <h3>
                    {"Value creation"}
                  </h3>
                  <p>
                    {"Providing continuous value to the user makes mobile applications more engaging and attractive. When engagement levels decline below a certain level, our application architects implement a mechanism that delivers interactive messages to users."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img src={"/assets/img/app/ios-app-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"androidCat"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"app-cat-content"}>
                  <h2>
                    {"Android Development"}
                  </h2>
                  <h3>
                    {"Custom app development"}
                  </h3>
                  <p>
                    {"We develop custom Android applications to meet your business needs using the latest Android SDKs."}
                  </p>
                  <h3>
                    {"Native app development"}
                  </h3>
                  <p>
                    {"Create all code in Android-specific programming languages to take advantage of high-end Android features."}
                  </p>
                  <h3>
                    {"Hybrid app development"}
                  </h3>
                  <p>
                    {"Hybrid development allows you to write code once and use it anywhere, resulting in cost-effective and efficient Android apps."}
                  </p>
                  <h3>
                    {"Enterprise android apps"}
                  </h3>
                  <p>
                    {"By developing enterprise Android apps, you can increase your workforce's operational efficiency and streamline your business processes for different stakeholders."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img src={"/assets/img/app/android-app-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"gameCat"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"app-cat-content"}>
                  <h2>
                    {"Game Development"}
                  </h2>
                  <p>
                    {"Our clients hire us to develop their video games for several reasons. The following are some of the most commonly cited:"}
                  </p>
                  <h3>
                    {"TEAM IMMERSED IN GAME DEVELOPMENT"}
                  </h3>
                  <p>
                    {"We create epic games with innovative features, gorgeous art, and solid design with our team—the art and business of video games, the latest tech, and trends in the gaming industry."}
                  </p>
                  <h3>
                    {"AGILE METHODOLOGY"}
                  </h3>
                  <p>
                    {"We follow a product-centric approach in our product-centric, iterative agile development process. Development is split into multiple sprints, functional features are developed within each sprint, and optimal quality is ensured."}
                  </p>
                  <h3>
                    {"DIVERSE PORTFOLIO"}
                  </h3>
                  <p>
                    {"For multiple genres, including casual, hyper-casual, arcade, sports, action, RPG, MMORPG, and more, we have a diverse portfolio of 500+ epic games across iOS, Android, Web, AR/VR, and Windows platforms."}
                  </p>
                  <h3>
                    {"MULTIPLE ENGAGEMENT MODELS"}
                  </h3>
                  <p>
                    {"The models we offer for game development include fixed costs, resource-based, time-and-materials, etc. You can choose the most appropriate engagement model for your game according to the scope and requirements of your project."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img src={"/assets/img/app/game-app-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"arCat"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"app-cat-content"}>
                  <h2>
                    {"AR/VR Development"}
                  </h2>
                  <p>
                    {"VR and AR are potential game changers that we are passionate about unlocking. We are excited to help you with your training modules, marketing tools, empathy boosters, product demonstrations, or a fantastic application no one else has thought of. Our key features are listed below:"}
                  </p>
                  <h3>
                    {"Detailed project"}
                  </h3>
                  <p>
                    {"There is talk about your project, technology, and possible approaches and solutions to meet our client's needs. There is no such thing as a one size fits all solution."}
                  </p>
                  <h3>
                    {"The talent pool"}
                  </h3>
                  <p>
                    {"Our team is dedicated to solving problems. Continuous learning, spreading knowledge, building a community of experts, and gaining certificates are all part of our daily routine."}
                  </p>
                  <h3>
                    {"Excellent communication"}
                  </h3>
                  <p>
                    {"Taking a Western approach to Polish(ed) style, we are ready to speak your business language. In addition to being close in terms of distance, we relate with the same values, goals, sense of humor, and attitude."}
                  </p>
                </div>
              </div>
              <div className={"col-lg-6"}>
                <figure>
                  <img src={"/assets/img/app/ar-app-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </section>
    </Tabs>
  );
}
