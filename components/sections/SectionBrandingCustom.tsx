import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionBrandingCustom() {
  return (
    <section className={"section section--branding-custom"} data-color={"8"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"WE OFFER"}
          </h4>
          <h2>
            {"Custom Branding Service"}
          </h2>
        </div>
        <div className={"row align-items-center branding-custom-row"}>
          <div className={"col-lg-4"}>
            <div className={"branding-custom-content"}>
              <h3>
                {"Stationary Design"}
              </h3>
              <p>
                {"We have the ability to make your brand shine through captivating stationery design. Our approach involves crafting personalized stationery with enticing taglines and appealing colors that align with your brand's core values. Don't hesitate to put us to the test if you have any doubts."}
              </p>
            </div>
            <div className={"branding-custom-content"}>
              <h3>
                {"Brochure Design"}
              </h3>
              <p>
                {"When it comes to marketing, brochures are incredibly concise. They not only inform people about your products and services but also highlight that you provide superior solutions compared to your competitors. As professional and experienced brochure designers, integrity holds a position of utmost importance among our values."}
              </p>
            </div>
            <div className={"branding-custom-content"}>
              <h3>
                {"Poster Design"}
              </h3>
              <p>
                {"Effectively communicate your message through posters, a promotional tool renowned for its visual impact. Posters have consistently remained a staple in offline marketing. Crafting posters for businesses of all types is our specialty at American Logo Artist."}
              </p>
            </div>
          </div>
          <div className={"col-lg-4"}>
            <figure className={"branding-custom-img"}>
              <img src={"/assets/img/branding/custom-img.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
            </figure>
          </div>
          <div className={"col-lg-4"}>
            <div className={"branding-custom-content text-right"}>
              <h3>
                {"T-Shirt Design"}
              </h3>
              <p>
                {"Leave a lasting impression on your stakeholders with an attention-grabbing t-shirt design. Our graphic designers boast decades of experience in crafting outstanding t-shirt designs, and they are here to create one for you. With a standout t-shirt design, your business can distinguish itself from competitors."}
              </p>
            </div>
            <div className={"branding-custom-content text-right"}>
              <h3>
                {"Product Packaging Design"}
              </h3>
              <p>
                {"The success of a business hinges on effective packaging, while failure can result from poor packaging. Customers' initial impression of a product is shaped by its packaging, influencing its appeal to others. Therefore, it is imperative that your product packaging boasts a superior design."}
              </p>
            </div>
            <div className={"branding-custom-content text-right"}>
              <h3>
                {"Book/Magazine Design"}
              </h3>
              <p>
                {"Want to leave a lasting impression on your readers or showcase the excellence of your eBook and magazine? Elevate your custom magazine cover design to yield a stronger response by enlisting the expertise of professional designers."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
