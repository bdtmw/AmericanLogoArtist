import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionWrapper() {
  return (
    <div className={"wrapper"}>
      <h2 className={"section_title"}>
        {"Recent Articles"}
      </h2>
      <div className={"articles"}>
        <div className={"article"}>
          <div className={"preview"}>
            <div className={"stretch"}>
              <Link href={"/guide-for-clothing-brand"}>
                <img src={"/assets/img/blog/Logo-01.jpg"} alt={"Article Image"} loading={"lazy"} decoding={"async"} />
              </Link>
            </div>
          </div>
          <h3 className={"title"}>
            <Link href={"/guide-for-clothing-brand"}>
              {"Dress Your Brand for Success"}
            </Link>
          </h3>
          <p className={"description"}>
            {" In the realm of fashion and apparel, branding is paramount which mean that your logo is the face of your clothing brand, the first point of contact with potential customers, and a symbol that encapsulates your brand's identity. "}
          </p>
          <footer className={"article_footer"}>
            <span className={"author"}>
              {"Read More"}
            </span>
            <span className={"read_more"}>
              <Link href={"/guide-for-clothing-brand"}>
                {"Read More →"}
              </Link>
            </span>
          </footer>
        </div>
        <div className={"article"}>
          <div className={"preview"}>
            <div className={"stretch"}>
              <Link href={"/affordable-effective-modern-law-firm-logo-redesigns-attorney-logo-packages"}>
                <img src={"/assets/img/blog/Logo-02.jpg"} alt={"Article Image"} loading={"lazy"} decoding={"async"} />
              </Link>
            </div>
          </div>
          <h3 className={"title"}>
            <Link href={"/affordable-effective-modern-law-firm-logo-redesigns-attorney-logo-packages"}>
              {"Affordable & Effective"}
            </Link>
          </h3>
          <p className={"description"}>
            {" In the competitive landscape of the legal industry, branding has become paramount. A well-designed and affordable law firm logo design can serve as the cornerstone of a firm's identity, conveying professionalism. "}
          </p>
          <footer className={"article_footer"}>
            <span className={"author"}>
              {"Read More"}
            </span>
            <span className={"read_more"}>
              <Link href={"/affordable-effective-modern-law-firm-logo-redesigns-attorney-logo-packages"}>
                {"Read More →"}
              </Link>
            </span>
          </footer>
        </div>
        <div className={"article"}>
          <div className={"preview"}>
            <div className={"stretch"}>
              <Link href={"/nature-weddings-minimalism-designing-the-perfect-photography-logo"}>
                <img src={"/assets/img/blog/Logo-03.jpg"} alt={"Article Image"} loading={"lazy"} decoding={"async"} />
              </Link>
            </div>
          </div>
          <h3 className={"title"}>
            <Link href={"/nature-weddings-minimalism-designing-the-perfect-photography-logo"}>
              {"Nature Weddings Minimalism"}
            </Link>
          </h3>
          <p className={"description"}>
            {" When it comes to photography, a logo serves as the first glimpse into a photographer's vision and style since it's a visual embodiment of their brand ethos and a promise of the experiences they aim to deliver. For nature. "}
          </p>
          <footer className={"article_footer"}>
            <span className={"author"}>
              {"Read More "}
            </span>
            <span className={"read_more"}>
              <Link href={"/nature-weddings-minimalism-designing-the-perfect-photography-logo"}>
                {"Read More →"}
              </Link>
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
