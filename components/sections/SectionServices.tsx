import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionServices() {
  return (
    <Tabs initial={"logoBrandingService"}>
    <section className={"section section--services"} data-color={"3"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"SERVICES"}
          </h4>
          <h2>
            {"Promote Engagement, Awareness, Conversion, and Retention."}
          </h2>
          <p>
            {" Our digital branding strategy and design revolve around these four core pillars. Marketing is our avenue to satisfy your ROI goals. Our digital optimization and conversion services are unparalleled in their effectiveness."}
          </p>
        </div>
        <nav className={"nav nav-pills nav-fill services-tabs"} role={"tablist"}>
          <Tab value={"logoBrandingService"} className={"nav-link"} label={"Logo Branding"}>
            <img width={100} height={100} src={"/assets/img/service-tab-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            {" Logo Branding "}
          </Tab>
          <Tab value={"webDevelopmentService"} className={"nav-link"} label={"Web Development"}>
            <img width={100} height={100} src={"/assets/img/service-tab-2.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            {"Web Development "}
          </Tab>
          <Tab value={"videoAnimationService"} className={"nav-link"} label={"Video Animation"}>
            <img width={100} height={100} src={"/assets/img/service-tab-3.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            {"Video Animation "}
          </Tab>
          <Tab value={"digitalMarketingService"} className={"nav-link"} label={"Digital Marketing"}>
            <img width={100} height={100} src={"/assets/img/service-tab-4.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            {"Digital Marketing "}
          </Tab>
        </nav>
        <div className={"tab-content services-tab-content"}>
          <TabPanel value={"logoBrandingService"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-md-6"}>
                <div className={"service-content"}>
                  <h2>
                    {"Brand design & Marketing Collateral"}
                  </h2>
                  <h4>
                    {"Make Your Brand Shine with Affordable Logo Design and Branding"}
                  </h4>
                  <p>
                    {"We go beyond the expected in affordable logo design and branding. We understand the industry standards, but our focus is on pushing boundaries with creative ideas that become memorable for your customers."}
                  </p>
                  <p>
                    {"Our passionate logo designers and artists are dedicated to crafting logos that not only represent your brand but also set the bar high within your industry."}
                  </p>
                  <p>
                    {"We're your one-stop shop for branding and marketing expertise. Our team of brand strategists, creative minds, and marketers have a proven track record of crafting impactful advertising campaigns and building a strong online presence that gets you noticed."}
                  </p>
                  <div className={"btn-group"}>
                    <ContactButton className={"theme-btn hire_us_now"}>
                      {"I WANT LOGO AND BRANDING"}
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
                  <img width={485} height={415} src={"/assets/img/service-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"webDevelopmentService"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-md-6"}>
                <div className={"service-content"}>
                  <h2>
                    {"Web Development"}
                  </h2>
                  <h4>
                    {"Creating Custom Websites That Reflect Your Brand."}
                  </h4>
                  <p>
                    {" In today's digital landscape, establishing a successful brand requires a website that is interactive, engaging, and adaptable."}
                  </p>
                  <p>
                    {"Our website development services are the outcome of a joint effort between our clients and our team of American Logo Artist. Our front-end and back-end developers promptly attend to every web development request. Our goal is to produce data-driven websites that boost online traffic, lead generation, and revenue."}
                  </p>
                  <div className={"btn-group"}>
                    <ContactButton className={"theme-btn hire_us_now"}>
                      {"I WANT A WEBSITE"}
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
                  <img width={837} height={717} src={"/assets/img/service-2.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"videoAnimationService"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-md-6"}>
                <div className={"service-content"}>
                  <h2>
                    {"Video Animation"}
                  </h2>
                  <h4>
                    {"Make a Strong Impact with Live Video Animation!"}
                  </h4>
                  <p>
                    {" Our team of American Logo Artist ranks among the top creative and innovative players in the video animation field."}
                  </p>
                  <p>
                    {"Educate, inspire, and effectively convey the right message to your target audience through our captivating and memorable video animation services. Using a range of styles and techniques, we create videos that are highly realistic and dynamic."}
                  </p>
                  <p>
                    {" Our animation services are designed to align with your marketing objectives, ensuring that your ideas are conveyed in a clear and engaging manner."}
                  </p>
                  <div className={"btn-group"}>
                    <ContactButton className={"theme-btn hire_us_now"}>
                      {"I WANT VIDEO ANIMATION"}
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
                  <img width={837} height={717} src={"/assets/img/service-3.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                </figure>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"digitalMarketingService"} className={"tab-pane"}>
            <div className={"row align-items-center"}>
              <div className={"col-md-6"}>
                <div className={"service-content"}>
                  <h2>
                    {"Digital Marketing"}
                  </h2>
                  <h4>
                    {"Achieving Your Brand's Ultimate Success"}
                  </h4>
                  <p>
                    {" In the industry's pursuit of growth, social media, SEO services, and digital platform performance stand as crucial elements. "}
                  </p>
                  <p>
                    {" With the support of the right digital marketing company, tackling these digital challenges becomes more manageable."}
                  </p>
                  <div className={"btn-group"}>
                    <ContactButton className={"theme-btn hire_us_now"}>
                      {"I NEED DIGITAL MARKETING SOLUTION"}
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
                  <img width={1201} height={1483} src={"/assets/img/service-4.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
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
