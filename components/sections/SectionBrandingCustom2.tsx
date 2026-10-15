import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionBrandingCustom2() {
  return (
    <section className={"section section--branding-custom"} data-color={"8"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"WE OFFER"}
          </h4>
          <h2>
            {"Custom Logo Design Services in Cleveland"}
          </h2>
        </div>
        <div className={"row align-items-center branding-custom-row"}>
          <div className={"col-lg-4"}>
            <div className={"branding-custom-content"}>
              <h3>
                {"Enhancing Brand Recognition in Cleveland"}
              </h3>
              <p>
                {"A well-designed logo plays a crucial role in enhancing brand recognition in Cleveland. It serves as a visual symbol of your business, making it easier for customers to remember and identify your brand. A distinctive logo sets you apart from competitors, reinforcing your brand's identity in the local market."}
              </p>
            </div>
            <div className={"branding-custom-content"}>
              <h3>
                {"Building Trust with a Professional Logo"}
              </h3>
              <p>
                {"A professional logo instills trust and credibility among your Cleveland customers. A well-crafted logo conveys professionalism and reliability, making potential clients more likely to engage with your business. Investing in a high-quality logo design shows that you take your brand seriously, fostering customer confidence and loyalty."}
              </p>
            </div>
            <div className={"branding-custom-content"}>
              <h3>
                {"Attracting Local Cleveland Customers"}
              </h3>
              <p>
                {"A tailored logo design can attract more local customers in Cleveland by resonating with the community’s preferences and values. Understanding the local culture and market trends allows for creating a logo that appeals directly to Cleveland residents. This local appeal can significantly boost your business's visibility and customer base."}
              </p>
            </div>
          </div>
          <div className={"col-lg-4"}>
            <figure className={"branding-custom-img"}>
              <img width={538} height={464} src={"/assets/img/new/newlogo.png"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
          <div className={"col-lg-4"}>
            <div className={"branding-custom-content text-right"}>
              <h3>
                {"Reflecting Cleveland's Unique Market"}
              </h3>
              <p>
                {"Cleveland has a unique market with its own characteristics and demands. A customized logo design that reflects these local nuances can make your brand more relatable and appealing. Incorporating elements that resonate with Cleveland's identity can create a strong emotional connection with your audience, enhancing your brand’s impact."}
              </p>
            </div>
            <div className={"branding-custom-content text-right"}>
              <h3>
                {"Boosting Online Presence for Cleveland Businesses"}
              </h3>
              <p>
                {"In today’s digital age, a strong online presence is essential. A professional logo boosts your online visibility and helps Cleveland businesses stand out on social media, websites, and other digital platforms. A cohesive and attractive logo can increase engagement and drive more traffic to your online channels."}
              </p>
            </div>
            <div className={"branding-custom-content text-right"}>
              <h3>
                {"Achieving Consistency across Marketing Channels"}
              </h3>
              <p>
                {"Consistency is key in branding. A professional logo ensures that your Cleveland business maintains a cohesive image across all marketing channels. Whether on your website, social media, or print materials, a consistent logo reinforces brand recognition and helps establish a unified and professional brand identity."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
