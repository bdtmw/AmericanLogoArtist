import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionDots() {
  return (
    <section className={"section section--dots"} data-color={"1"}>
      <div className={"container"}>
        <a href={"#portfolioSection"}>
          <ul className={"dots"}>
            <li>
              <i className={"fas fa-circle"} aria-hidden={"true"}>
              </i>
            </li>
            <li>
              <i className={"fas fa-circle"} aria-hidden={"true"}>
              </i>
            </li>
            <li>
              <i className={"fas fa-circle"} aria-hidden={"true"}>
              </i>
            </li>
          </ul>
        </a>
      </div>
    </section>
  );
}
