import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPortfolio() {
  return (
    <Tabs initial={"logoDesign"}>
    <section className={"section section--portfolio"} id={"portfolioSection"} data-color={"2"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"Portfolio"}
          </h4>
          <h2>
            {"Perfectly Crafted Logo Designs"}
          </h2>
          <p>
            {" You can trust our designers to make really great logos that your customers will remember. We create logos that show what your brand is all about."}
          </p>
          <nav className={"nav nav-pills nav-fill portfolio-tabs"} role={"tablist"}>
            <Tab value={"logoDesign"} className={"nav-link"} label={"Logo Design"}>
              {"Logo Design"}
            </Tab>
            <Tab value={"website"} className={"nav-link"} label={"Website Design"}>
              {"Website Design"}
            </Tab>
            <Tab value={"branding"} className={"nav-link"} label={"Branding"}>
              {"Branding"}
            </Tab>
            <Tab value={"mobileApps"} className={"nav-link"} label={"Mobile Apps"}>
              {"Mobile Apps"}
            </Tab>
            <Tab value={"graphics"} className={"nav-link"} label={"Motion Graphics"}>
              {"Motion Graphics"}
            </Tab>
          </nav>
        </div>
      </div>
      <div className={"container-fluid"}>
        <div className={"tab-content portfolio-tab-content"}>
          <TabPanel value={"logoDesign"} className={"tab-pane"}>
            <div className={"portfolio-grid"}>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio01.webp"} title={"Logos design portfolio example 1"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio01.webp"} alt={"Logos design portfolio example 1"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio02.webp"} title={"Logos design portfolio example 2"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio02.webp"} alt={"Logos design portfolio example 2"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio03.webp"} title={"Logos design portfolio example 3"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio03.webp"} alt={"Logos design portfolio example 3"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio04.webp"} title={"Logos design portfolio example 4"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio04.webp"} alt={"Logos design portfolio example 4"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio05.webp"} title={"Logos design portfolio example 5"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio05.webp"} alt={"Logos design portfolio example 5"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio06.webp"} title={"Logos design portfolio example 6"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio06.webp"} alt={"Logos design portfolio example 6"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio07.webp"} title={"Logos design portfolio example 7"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio07.webp"} alt={"Logos design portfolio example 7"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio08.webp"} title={"Logos design portfolio example 8"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio08.webp"} alt={"Logos design portfolio example 8"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio09.webp"} title={"Logos design portfolio example 9"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio09.webp"} alt={"Logos design portfolio example 9"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio10.webp"} title={"Logos design portfolio example 10"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio10.webp"} alt={"Logos design portfolio example 10"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio11.webp"} title={"Logos design portfolio example 11"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio11.webp"} alt={"Logos design portfolio example 11"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/logos/portfolio12.webp"} title={"Logos design portfolio example 12"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/logos/portfolio12.webp"} alt={"Logos design portfolio example 12"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
            </div>
          </TabPanel>
          <TabPanel value={"website"} className={"tab-pane"}>
            <div className={"portfolio-grid"}>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio01.webp"} title={"Website design portfolio example 1"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio01.webp"} alt={"Website design portfolio example 1"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio02.webp"} title={"Website design portfolio example 2"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio02.webp"} alt={"Website design portfolio example 2"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio03.webp"} title={"Website design portfolio example 3"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio03.webp"} alt={"Website design portfolio example 3"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio04.webp"} title={"Website design portfolio example 4"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio04.webp"} alt={"Website design portfolio example 4"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio05.webp"} title={"Website design portfolio example 5"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio05.webp"} alt={"Website design portfolio example 5"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio06.webp"} title={"Website design portfolio example 6"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio06.webp"} alt={"Website design portfolio example 6"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio07.webp"} title={"Website design portfolio example 7"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio07.webp"} alt={"Website design portfolio example 7"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio08.webp"} title={"Website design portfolio example 8"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio08.webp"} alt={"Website design portfolio example 8"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio09.webp"} title={"Website design portfolio example 9"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio09.webp"} alt={"Website design portfolio example 9"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio10.webp"} title={"Website design portfolio example 10"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio10.webp"} alt={"Website design portfolio example 10"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio11.webp"} title={"Website design portfolio example 11"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio11.webp"} alt={"Website design portfolio example 11"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/website/portfolio12.webp"} title={"Website design portfolio example 12"} className={""}>
                <img width={400} height={300} src={"/assets/img/portfolio/website/portfolio12.webp"} alt={"Website design portfolio example 12"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
            </div>
          </TabPanel>
          <TabPanel value={"branding"} className={"tab-pane"}>
            <div className={"portfolio-grid"}>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio01.webp"} title={"Branding design portfolio example 1"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio01.webp"} alt={"Branding design portfolio example 1"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio02.webp"} title={"Branding design portfolio example 2"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio02.webp"} alt={"Branding design portfolio example 2"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio03.webp"} title={"Branding design portfolio example 3"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio03.webp"} alt={"Branding design portfolio example 3"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio04.webp"} title={"Branding design portfolio example 4"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio04.webp"} alt={"Branding design portfolio example 4"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio05.webp"} title={"Branding design portfolio example 5"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio05.webp"} alt={"Branding design portfolio example 5"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio06.webp"} title={"Branding design portfolio example 6"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio06.webp"} alt={"Branding design portfolio example 6"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio07.webp"} title={"Branding design portfolio example 7"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio07.webp"} alt={"Branding design portfolio example 7"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio08.webp"} title={"Branding design portfolio example 8"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio08.webp"} alt={"Branding design portfolio example 8"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio09.webp"} title={"Branding design portfolio example 9"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio09.webp"} alt={"Branding design portfolio example 9"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio10.webp"} title={"Branding design portfolio example 10"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio10.webp"} alt={"Branding design portfolio example 10"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio11.webp"} title={"Branding design portfolio example 11"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio11.webp"} alt={"Branding design portfolio example 11"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/branding/portfolio12.webp"} title={"Branding design portfolio example 12"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/branding/portfolio12.webp"} alt={"Branding design portfolio example 12"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
            </div>
          </TabPanel>
          <TabPanel value={"mobileApps"} className={"tab-pane"}>
            <div className={"portfolio-grid"}>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio01.webp"} title={"Apps design portfolio example 1"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio01.webp"} alt={"Apps design portfolio example 1"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio02.webp"} title={"Apps design portfolio example 2"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio02.webp"} alt={"Apps design portfolio example 2"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio03.webp"} title={"Apps design portfolio example 3"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio03.webp"} alt={"Apps design portfolio example 3"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio04.webp"} title={"Apps design portfolio example 4"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio04.webp"} alt={"Apps design portfolio example 4"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio05.webp"} title={"Apps design portfolio example 5"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio05.webp"} alt={"Apps design portfolio example 5"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio06.webp"} title={"Apps design portfolio example 6"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio06.webp"} alt={"Apps design portfolio example 6"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio07.webp"} title={"Apps design portfolio example 7"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio07.webp"} alt={"Apps design portfolio example 7"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio08.webp"} title={"Apps design portfolio example 8"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio08.webp"} alt={"Apps design portfolio example 8"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio09.webp"} title={"Apps design portfolio example 9"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio09.webp"} alt={"Apps design portfolio example 9"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio10.webp"} title={"Apps design portfolio example 10"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio10.webp"} alt={"Apps design portfolio example 10"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio11.webp"} title={"Apps design portfolio example 11"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio11.webp"} alt={"Apps design portfolio example 11"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/apps/portfolio12.webp"} title={"Apps design portfolio example 12"} className={""}>
                <img width={290} height={261} src={"/assets/img/portfolio/apps/portfolio12.webp"} alt={"Apps design portfolio example 12"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
            </div>
          </TabPanel>
          <TabPanel value={"graphics"} className={"tab-pane"}>
            <div className={"portfolio-grid"}>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio01.webp"} title={"Video design portfolio example 1"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio01.webp"} alt={"Video design portfolio example 1"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio02.webp"} title={"Video design portfolio example 2"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio02.webp"} alt={"Video design portfolio example 2"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio03.webp"} title={"Video design portfolio example 3"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio03.webp"} alt={"Video design portfolio example 3"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio04.webp"} title={"Video design portfolio example 4"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio04.webp"} alt={"Video design portfolio example 4"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio05.webp"} title={"Video design portfolio example 5"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio05.webp"} alt={"Video design portfolio example 5"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio06.webp"} title={"Video design portfolio example 6"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio06.webp"} alt={"Video design portfolio example 6"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio07.webp"} title={"Video design portfolio example 7"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio07.webp"} alt={"Video design portfolio example 7"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio08.webp"} title={"Video design portfolio example 8"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio08.webp"} alt={"Video design portfolio example 8"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio09.webp"} title={"Video design portfolio example 9"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio09.webp"} alt={"Video design portfolio example 9"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio10.webp"} title={"Video design portfolio example 10"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio10.webp"} alt={"Video design portfolio example 10"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
              <LightboxLink src={"/assets/img/portfolio/video/portfolio12.webp"} title={"Video design portfolio example 12"} className={""}>
                <img width={690} height={620} src={"/assets/img/portfolio/video/portfolio12.webp"} alt={"Video design portfolio example 12"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </LightboxLink>
            </div>
          </TabPanel>
        </div>
      </div>
      <div className={"container"}>
        <div className={"portfolio-more-content"}>
          <ul>
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
          <p>
            {" 100+ customers have rated us 4.8/5. "}
          </p>
          <Link href={"/portfolio"} className={"theme-btn"}>
            {"READ MORE"}
          </Link>
        </div>
      </div>
    </section>
    </Tabs>
  );
}
