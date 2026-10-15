import Link from 'next/link';
import { Tabs, Tab, TabPanel } from '@/components/Tabs';
import Carousel from '@/components/Carousel';
import EnquiryForm from '@/components/EnquiryForm';
import { ContactButton, ChatButton, LightboxLink } from '@/components/SiteProvider';

export default function SectionPackages() {
  return (
    <Tabs initial={"logo-design"}>
    <section className={"section section--packages"} id={"pricing-packages"} data-color={"4"}>
      <div className={"container"}>
        <div className={"section-intro"}>
          <h4>
            {"PRICING"}
          </h4>
          <h2>
            {"Get Inspired with Designs That Won't Break the Bank"}
          </h2>
          <p>
            {"We give important help to brands similar to yours. Here are some options that will work for you. Enjoy 20% off packages under $400 and 50% off packages of $400 or more, applied automatically."}
          </p>
        </div>
        <nav className={"nav nav-pills nav-fill packages-tabs"} role={"tablist"}>
          <Tab value={"logo-design"} className={"nav-link"} label={"Logo Design"}>
            {"Logo Design"}
          </Tab>
          <Tab value={"web-design"} className={"nav-link"} label={"Web Design"}>
            {"Web Design"}
          </Tab>
          <Tab value={"animation"} className={"nav-link"} label={"Animation"}>
            {"Animation"}
          </Tab>
          <Tab value={"seo"} className={"nav-link"} label={"SEO"}>
            {"SEO"}
          </Tab>
          <Tab value={"brandings"} className={"nav-link"} label={"Branding"}>
            {"Branding"}
          </Tab>
          <Tab value={"print"} className={"nav-link"} label={"Print"}>
            {"Print"}
          </Tab>
          <Tab value={"web-portal"} className={"nav-link"} label={"Web Portal"}>
            {"Web Portal"}
          </Tab>
        </nav>
        <div className={"tab-content packages-tab-content"}>
          <TabPanel value={"logo-design"} className={"tab-pane"}>
            <div className={"row"}>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$23"}
                      </h2>
                      <p className={"discount-note"}><del>{"$29"}</del>{" "}<span className={"discount-badge"}>{"20% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Logo "}
                        <br />
                        {"Basic "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"4 Original Logo Concepts"}
                      </li>
                      <li>
                        {"2 Dedicated Logo Designer"}
                      </li>
                      <li>
                        {"4 Revisions"}
                      </li>
                      <li>
                        {"With Grey Scale Format"}
                      </li>
                      <li>
                        {"Free Icon Design"}
                      </li>
                      <li>
                        {"Formats: JPEG Only"}
                      </li>
                      <li>
                        {"24 - 48 Business Hours Turn Around Time"}
                      </li>
                      <li>
                        {"MORE FEATURES"}
                      </li>
                      <li>
                        {"100% Satisfaction"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"Money Back Guarantee"}
                      </li>
                      <li>
                        {"Dedicated Account Manager"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"23"} />
                      <input type={"hidden"} name={"original_price"} value={"29"} />
                      <input type={"hidden"} name={"discount"} value={"20%"} />
                      <input type={"hidden"} name={"name"} value={"Logo Basic"} />
                      <input type={"hidden"} name={"services"} value={"4 Original Logo Concepts,2 Dedicated Logo Designer,4 Revisions,With Grey Scale Format,Free Icon Design,Formats JPEG Only,24-48 Business Hours Turn Around Time,100% Satisfaction,100% Ownership Rights,Money Back Guarantee,Dedicated Account Manager"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$71"}
                      </h2>
                      <p className={"discount-note"}><del>{"$89"}</del>{" "}<span className={"discount-badge"}>{"20% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Logo "}
                        <br />
                        {"Silver "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"6 Custom Logo Design Concepts"}
                      </li>
                      <li>
                        {"By 2 Designers"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {" UNLIMITED Revisions "}
                      </li>
                      <li>
                        {"48 to 72 hours TAT"}
                      </li>
                      <li>
                        {"All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Unique Design Guarantee"}
                      </li>
                      <li>
                        {"100% Ownership Rights *"}
                      </li>
                      <li>
                        {"Money Back Guarantee"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"71"} />
                      <input type={"hidden"} name={"original_price"} value={"89"} />
                      <input type={"hidden"} name={"discount"} value={"20%"} />
                      <input type={"hidden"} name={"name"} value={"Logo Silver"} />
                      <input type={"hidden"} name={"services"} value={"6 Custom Logo Design Concepts,By 2 Designers,Unlimited Revisions,48 to 72 hours TAT,All Final Files Format (AI PSD EPS PNG GIF JPG PDF),100% Satisfaction Guarantee,100% Unique Design Guarantee,100% Ownership Rights,Money Back Guarantee"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$103"}
                      </h2>
                      <p className={"discount-note"}><del>{"$129"}</del>{" "}<span className={"discount-badge"}>{"20% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Logo "}
                        <br />
                        {"Gold"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"12 Logo Design Concepts"}
                      </li>
                      <li>
                        {"By 4 Designers"}
                      </li>
                      <li>
                        {"UNLIMITED Revisions"}
                      </li>
                      <li>
                        {" Stationary Design (Business Card, Letterhead, Envelope) "}
                      </li>
                      <li>
                        {"FREE MS Word Letterhead"}
                      </li>
                      <li>
                        {"48 to 72 hours TAT"}
                      </li>
                      <li>
                        {"All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Unique Design Guarantee"}
                      </li>
                      <li>
                        {"100% Ownership Rights *"}
                      </li>
                      <li>
                        {"100% Money Back Guarantee *"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"103"} />
                      <input type={"hidden"} name={"original_price"} value={"129"} />
                      <input type={"hidden"} name={"discount"} value={"20%"} />
                      <input type={"hidden"} name={"name"} value={"Logo Gold"} />
                      <input type={"hidden"} name={"services"} value={"12 Logo Design Concepts,By 4 Designers,UNLIMITED Revisions,Stationary Design (Business Card Letterhead Envelope),FREE MS Word Letterhead,48 to 72 hours TAT,All Final Files Format (AI PSD EPS PNG GIF JPG PDF),100% Satisfaction Guarantee,100% Unique Design Guarantee,100% Ownership Rights,100% Money Back Guarantee"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$143"}
                      </h2>
                      <p className={"discount-note"}><del>{"$179"}</del>{" "}<span className={"discount-badge"}>{"20% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Logo "}
                        <br />
                        {" Platinum "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"UNLIMITED Logo Design Concepts"}
                      </li>
                      <li>
                        {"By 5 Award Winning Designers"}
                      </li>
                      <li>
                        {"Stationary Design (Business Card, Letterhead, Envelope)"}
                      </li>
                      <li>
                        {"FREE Social Media Banners (Any 2)"}
                      </li>
                      <li>
                        {" UNLIMITED Revisions "}
                      </li>
                      <li>
                        {"FREE MS Word Letterhead"}
                      </li>
                      <li>
                        {"Free Email Signature"}
                      </li>
                      <li>
                        {"All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Unique Design Guarantee"}
                      </li>
                      <li>
                        {"100% Ownership Rights *"}
                      </li>
                      <li>
                        {"100% Money Back Guarantee *"}
                      </li>
                      <li>
                        {"48 to 72 hours TAT"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"143"} />
                      <input type={"hidden"} name={"original_price"} value={"179"} />
                      <input type={"hidden"} name={"discount"} value={"20%"} />
                      <input type={"hidden"} name={"name"} value={"Logo Platinum"} />
                      <input type={"hidden"} name={"services"} value={"UNLIMITED Logo Design Concepts, By 5 Award Winning Designers, Stationary Design (Business Card Letterhead Envelope), FREE Social Media Banners (Any 2), UNLIMITED Revisions, FREE MS Word Letterhead, Free Email Signature, All Final Files Format (AI PSD EPS PNG GIF JPG PDF), 100% Satisfaction Guarantee, 100% Unique Design Guarantee, 100% Ownership Rights, 100% Money Back Guarantee, 48 to 72 hours TAT"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$239"}
                      </h2>
                      <p className={"discount-note"}><del>{"$299"}</del>{" "}<span className={"discount-badge"}>{"20% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Logo Elite "}
                        <br />
                        {"Package "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"You will get unlimited concepts by 10 designers"}
                      </li>
                      <li>
                        {"Unlimited Rounds of Changes"}
                      </li>
                      <li>
                        {"100% ownership rights"}
                      </li>
                      <li>
                        {"Turn Around time will be 24-48 hours"}
                      </li>
                      <li>
                        {"Icon design (Free)"}
                      </li>
                      <li>
                        {"You will get all the formats in HI-RES"}
                      </li>
                      <li>
                        {"You will be getting vector file"}
                      </li>
                      <li>
                        {"The Editable Vector Version (resizable)"}
                      </li>
                      <li>
                        {"You will be getting the Greyscale file (to be placed at any colored back ground) "}
                      </li>
                      <li>
                        {"You will be getting the Solid Black and Solid White version of the Logo (can be used for T-Shirts and Merchandise)"}
                      </li>
                      <li>
                        {"You will be getting the Colored Version with transparent background (can be used for stationery, merchandise, car wraps, sign boards, labelling, ETC)"}
                      </li>
                      <li>
                        {"You will be getting stationery designs (Business Cards, Letterheads, Envelops) "}
                      </li>
                      <li>
                        {"Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"239"} />
                      <input type={"hidden"} name={"original_price"} value={"299"} />
                      <input type={"hidden"} name={"discount"} value={"20%"} />
                      <input type={"hidden"} name={"name"} value={"Logo Elite Package"} />
                      <input type={"hidden"} name={"services"} value={"You will get unlimited concepts by 10 designers, Unlimited Rounds of Changes, 100% ownership rights, Turn Around time will be 24-48 hours, Icon design (Free), You will get all the formats in HI-RES, You will be getting vector file, The Editable Vector Version (resizable), You will be getting the Greyscale file (to be placed at any colored background), You will be getting the Solid Black and Solid White version of the Logo (can be used for T-Shirts and Merchandise), You will be getting the Colored Version with transparent background (can be used for stationery merchandise car wraps sign boards labelling ETC), You will be getting stationery designs (Business Cards Letterheads Envelops), Formats: JPEG PSD EPS AI PNG TIFF SVG"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$300"}
                      </h2>
                      <p className={"discount-note"}><del>{"$599"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"The "}
                        <br />
                        {"Boss "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"3D/Mascot/Animated Logo"}
                      </li>
                      <li>
                        {"Unlimited Original Logo Concepts"}
                      </li>
                      <li>
                        {"8 Dedicated Logo Designers (Industry-specific)"}
                      </li>
                      <li>
                        {"Unlimited Rounds Of Revisions"}
                      </li>
                      <li>
                        {"Stationery Design (Business Card, Letterhead, Envelope)"}
                      </li>
                      <li>
                        {"500 Business Cards"}
                      </li>
                      <li>
                        {"Email Signature Design"}
                      </li>
                      <li>
                        {"Free Icon Design"}
                      </li>
                      <li>
                        {"Grey Scale Format Attached"}
                      </li>
                      <li>
                        {"JPEG, PSD, EPS, AI, PNG, TIFF, SVG Formats"}
                      </li>
                      <li>
                        {"Turnaround Time Of 24-48 Hours"}
                      </li>
                      <li>
                        {"100% Satisfaction Guaranteed"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"Money Back Guarantee"}
                      </li>
                      <li>
                        {"Dedicated Account Manager"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"300"} />
                      <input type={"hidden"} name={"original_price"} value={"599"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"The Boss"} />
                      <input type={"hidden"} name={"services"} value={"3D/Mascot/Animated Logo, Unlimited Original Logo Concepts, 8 Dedicated Logo Designers (Industry-specific), Unlimited Rounds Of Revisions, Stationery Design (Business Card Letterhead Envelope), 500 Business Cards, Email Signature Design, Free Icon Design, Grey Scale Format Attached JPEG PSD EPS AI PNG TIFF SVG Formats, Turnaround Time Of 24-48 Hours, 100% Satisfaction Guaranteed, 100% Ownership Rights, Money Back Guarantee, Dedicated Account Manager"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"web-design"} className={"tab-pane"}>
            <div className={"row"}>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$319"}
                      </h2>
                      <p className={"discount-note"}><del>{"$399"}</del>{" "}<span className={"discount-badge"}>{"20% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Basic "}
                        <br />
                        {"Website"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"3 Page Website"}
                      </li>
                      <li>
                        {"Custom Layout Design"}
                      </li>
                      <li>
                        {"Contact/Query Form"}
                      </li>
                      <li>
                        {"1 Banner Design"}
                      </li>
                      <li>
                        {"2 Stock Photos"}
                      </li>
                      <li>
                        {"FREE Favicon Design"}
                      </li>
                      <li>
                        {"Cross Browser Compatible"}
                      </li>
                      <li>
                        {"Complete W3C Certified HTML"}
                      </li>
                      <li>
                        {"Website Initial Concepts in 48 Hours"}
                      </li>
                      <li>
                        {"Complete Design & Deployment"}
                      </li>
                      <li>
                        {"Complete Source Files"}
                      </li>
                      <li>
                        {"Dedicated Project Manager"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Money Back Guarantee"}
                      </li>
                      <li>
                        {"Value Added Services"}
                      </li>
                      <li>
                        {"Mobile Responsive will be Additional $200*"}
                      </li>
                      <li>
                        {"CMS will be Additional $250*"}
                      </li>
                      <li>
                        {"*NO MONTHLY OR ANY HIDDEN FEE*"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"319"} />
                      <input type={"hidden"} name={"original_price"} value={"399"} />
                      <input type={"hidden"} name={"discount"} value={"20%"} />
                      <input type={"hidden"} name={"name"} value={"Basic Website"} />
                      <input type={"hidden"} name={"services"} value={"3 Page Website, Custom Layout Design, Contact/Query Form, 1 Banner Design, 2 Stock Photos, FREE Favicon Design, Cross Browser Compatible, Complete W3C Certified HTML, Website Initial Concepts in 48 Hours, Complete Design & Deployment, Complete Source Files, Dedicated Project Manager, 100% Ownership Rights, 100% Satisfaction Guarantee, 100% Money Back Guarantee, Value Added Services, Mobile Responsive will be Additional $200*, CMS will be Additional $250*, *NO MONTHLY OR ANY HIDDEN FEE*"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$450"}
                      </h2>
                      <p className={"discount-note"}><del>{"$899"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Startup "}
                        <br />
                        {"Website"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"5 Page Website"}
                      </li>
                      <li>
                        {"Custom Layout Design"}
                      </li>
                      <li>
                        {"Contact/Query Form"}
                      </li>
                      <li>
                        {"3 Banner Designs"}
                      </li>
                      <li>
                        {"5 Stock Photos"}
                      </li>
                      <li>
                        {"FREE Favicon Design"}
                      </li>
                      <li>
                        {"FREE Google Friendly Sitemap"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"Complete W3C Certified HTML"}
                      </li>
                      <li>
                        {"Website Initial Concepts in 48 Hours"}
                      </li>
                      <li>
                        {"Complete Design & Deployment"}
                      </li>
                      <li>
                        {"Complete Source Files"}
                      </li>
                      <li>
                        {"Dedicated Project Manager"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Money Back Guarantee"}
                      </li>
                      <li>
                        {"Value Added Services"}
                      </li>
                      <li>
                        {"Mobile Responsive will be Additional $200*"}
                      </li>
                      <li>
                        {"CMS will be Additional $250*"}
                      </li>
                      <li>
                        {"*NO MONTHLY OR ANY HIDDEN FEE*"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"450"} />
                      <input type={"hidden"} name={"original_price"} value={"899"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Startup Website"} />
                      <input type={"hidden"} name={"services"} value={"5 Page Website, Custom Layout Design, Contact/Query Form, 3 Banner Designs, 5 Stock Photos, FREE Favicon Design, FREE Google Friendly Sitemap, Unlimited Revisions, Complete W3C Certified HTML, Website Initial Concepts in 48 Hours, Complete Design & Deployment, Complete Source Files, Dedicated Project Manager, 100% Ownership Rights, 100% Satisfaction Guarantee, 100% Money Back Guarantee, Value Added Services, Mobile Responsive will be Additional $200*, CMS will be Additional $250*, *NO MONTHLY OR ANY HIDDEN FEE*"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$750"}
                      </h2>
                      <p className={"discount-note"}><del>{"$1499"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Professional "}
                        <br />
                        {"Website"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"Up to 10 Unique Pages Website"}
                      </li>
                      <li>
                        {"CMS /Admin Panel Integration"}
                      </li>
                      <li>
                        {"5+ Stock Photos & Banner Designs"}
                      </li>
                      <li>
                        {"FREE Social Media Integration"}
                      </li>
                      <li>
                        {"FREE Favicon Design"}
                      </li>
                      <li>
                        {"FREE Google Friendly Sitemap"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"Cross Browser Compatible"}
                      </li>
                      <li>
                        {"Complete W3C Certified HTML"}
                      </li>
                      <li>
                        {"Website Initial Concepts in 48 Hours"}
                      </li>
                      <li>
                        {"Complete Design & Deployment"}
                      </li>
                      <li>
                        {"Custom, Interactive & Dynamic Web Design"}
                      </li>
                      <li>
                        {"Industry specified Team of Expert Designers and Developers"}
                      </li>
                      <li>
                        {"Complete Source Files"}
                      </li>
                      <li>
                        {"Dedicated Project Manager"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Money Back Guarantee"}
                      </li>
                      <li>
                        {"Value Added Services"}
                      </li>
                      <li>
                        {"Mobile Responsive will be Additional $200*"}
                      </li>
                      <li>
                        {"CMS will be Additional $250*"}
                      </li>
                      <li>
                        {"*NO MONTHLY OR ANY HIDDEN FEE*"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"750"} />
                      <input type={"hidden"} name={"original_price"} value={"1499"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Professional Website"} />
                      <input type={"hidden"} name={"services"} value={"Up to 10 Unique Pages Website, CMS /Admin Panel Integration, 5+ Stock Photos & Banner Designs, FREE Social Media Integration, FREE Favicon Design, FREE Google Friendly Sitemap, Unlimited Revisions, Cross Browser Compatible, Complete W3C Certified HTML, Website Initial Concepts in 48 Hours, Complete Design & Deployment, Custom Interactive & Dynamic Web Design, Industry specified Team of Expert Designers and Developers, Complete Source Files, Dedicated Project Manager, 100% Ownership Rights, 100% Satisfaction Guarantee, 100% Money Back Guarantee, Value Added Services, Mobile Responsive will be Additional $200*, CMS will be Additional $250*, *NO MONTHLY OR ANY HIDDEN FEE*"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$1500"}
                      </h2>
                      <p className={"discount-note"}><del>{"$2999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"E-Commerce "}
                        <br />
                        {"Website "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"Custom Ecommerce Website"}
                      </li>
                      <li>
                        {"Up to 200 Products"}
                      </li>
                      <li>
                        {"CMS /Admin Panel Integration"}
                      </li>
                      <li>
                        {"Fully Mobile Responsive"}
                      </li>
                      <li>
                        {"Shopping Cart Integration"}
                      </li>
                      <li>
                        {"Payment Gateway Integration"}
                      </li>
                      <li>
                        <span>
                          {"Product Listing & Management"}
                        </span>
                      </li>
                      <li>
                        {"Order Management & Tracking"}
                      </li>
                      <li>
                        {"Banner Designs"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        <span>
                          {"FREE Social Media Integration"}
                        </span>
                      </li>
                      <li>
                        {"FREE Favicon Design"}
                      </li>
                      <li>
                        {" FREE Google Friendly Sitemap Search Engine Submission "}
                      </li>
                      <li>
                        {"Complete W3C Certified HTML"}
                      </li>
                      <li>
                        {" Industry specified Team of Expert Designers and Developers "}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                      <li>
                        {"Complete Source Files"}
                      </li>
                      <li>
                        {"Dedicated Project Manager"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Money Back Guarantee"}
                      </li>
                      <li>
                        {"*NO MONTHLY OR ANY HIDDEN FEE*"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"1500"} />
                      <input type={"hidden"} name={"original_price"} value={"2999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"E-Commerce Website"} />
                      <input type={"hidden"} name={"services"} value={"Custom Ecommerce Website, Up to 200 Products, CMS /Admin Panel Integration, Fully Mobile Responsive, Shopping Cart Integration, Payment Gateway Integration, Product Listing & Management, Order Management & Tracking, Banner Designs, Unlimited Revisions, FREE Social Media Integration, FREE Favicon Design, FREE Google Friendly Sitemap Search Engine Submission, Complete W3C Certified HTML, Industry specified Team of Expert Designers and Developers, Complete Deployment, Complete Source Files, Dedicated Project Manager, 100% Ownership Rights, 100% Satisfaction Guarantee, 100% Money Back Guarantee, *NO MONTHLY OR ANY HIDDEN FEE*"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$2000"}
                      </h2>
                      <p className={"discount-note"}><del>{"$3999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Corporate "}
                        <br />
                        {"Website "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"Up to 15 Unique Pages Website"}
                      </li>
                      <li>
                        {"Custom Made, Interactive & Dynamic Design"}
                      </li>
                      <li>
                        {"Customized WordPress or PHP Development"}
                      </li>
                      <li>
                        {"Fully Mobile Responsive"}
                      </li>
                      <li>
                        {"Interactive Sliding Banners"}
                      </li>
                      <li>
                        {"Up to 10 Custom Made Banner Designs"}
                      </li>
                      <li>
                        <span>
                          {"10 Stock Images"}
                        </span>
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        <span>
                          {"Content Management System"}
                        </span>
                      </li>
                      <li>
                        {" Online Signup Area (For Newsletters, Offers etc.) "}
                      </li>
                      <li>
                        {"Search Bar"}
                      </li>
                      <li>
                        {" Live Feeds of Social Networks integration (Optional) "}
                      </li>
                      <li>
                        {"Google Friendly Sitemap"}
                      </li>
                      <li>
                        {"Search Engine Submission"}
                      </li>
                      <li>
                        {"Cross Browser Compatible"}
                      </li>
                      <li>
                        {"Complete W3C Certified HTML"}
                      </li>
                      <li>
                        {" Industry specified Team of Expert Designers and Developers "}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                      <li>
                        {"Complete Source Files"}
                      </li>
                      <li>
                        {"Dedicated Project Manager"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Money Back Guarantee"}
                      </li>
                      <li>
                        {"*NO MONTHLY OR ANY HIDDEN FEE*"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"2000"} />
                      <input type={"hidden"} name={"original_price"} value={"3999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Corporate Website"} />
                      <input type={"hidden"} name={"services"} value={"Up to 15 Unique Pages Website, Custom Made, Interactive & Dynamic Design, Customized WordPress or PHP Development, Fully Mobile Responsive, Interactive Sliding Banners, Up to 10 Custom Made Banner Designs, 10 Stock Images, Unlimited Revisions, Content Management System, Online Signup Area (For Newsletters, Offers etc.), Search Bar, Live Feeds of Social Networks integration (Optional), Google Friendly Sitemap, Search Engine Submission, Cross Browser Compatible, Complete W3C Certified HTML, Industry specified Team of Expert Designers and Developers, Complete Deployment, Complete Source Files, Dedicated Project Manager, 100% Ownership Rights, 100% Satisfaction Guarantee, 100% Money Back Guarantee, *NO MONTHLY OR ANY HIDDEN FEE*"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$3500"}
                      </h2>
                      <p className={"discount-note"}><del>{"$6999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Platinum "}
                        <br />
                        {"Website "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"Up to 20 Unique Pages Website"}
                      </li>
                      <li>
                        {" Custom Made, Interactive, Dynamic & High-End Design "}
                      </li>
                      <li>
                        {"Customized WordPress or PHP Development"}
                      </li>
                      <li>
                        {"Fully Mobile Responsive"}
                      </li>
                      <li>
                        {"Interactive Sliding Banners"}
                      </li>
                      <li>
                        {"Up to 15 Custom Made Banner Designs"}
                      </li>
                      <li>
                        <span>
                          {"15 Stock Images"}
                        </span>
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        <span>
                          {"Content Management System"}
                        </span>
                      </li>
                      <li>
                        <span>
                          {"Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)"}
                        </span>
                      </li>
                      <li>
                        {"Online Payment Integration (Optional)"}
                      </li>
                      <li>
                        {"Multi Lingual (Optional)"}
                      </li>
                      <li>
                        {"Custom Dynamic Forms (Optional)"}
                      </li>
                      <li>
                        {"Signup Area (For Newsletters, Offers etc.)"}
                      </li>
                      <li>
                        <span>
                          {"Search Bar"}
                        </span>
                      </li>
                      <li>
                        {" Live Feeds of Social Networks integration (Optional) "}
                      </li>
                      <li>
                        {"Google Friendly Sitemap"}
                      </li>
                      <li>
                        {"Search Engine Submission"}
                      </li>
                      <li>
                        {"Cross Browser Compatible"}
                      </li>
                      <li>
                        {"Complete W3C Certified HTML"}
                      </li>
                      <li>
                        {" Industry specified Team of Expert Designers and Developers "}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                      <li>
                        {"Complete Source Files"}
                      </li>
                      <li>
                        {"Dedicated Project Manager"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"100% Money Back Guarantee"}
                      </li>
                      <li>
                        {"*NO MONTHLY OR ANY HIDDEN FEE*"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"3500"} />
                      <input type={"hidden"} name={"original_price"} value={"6999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Platinum Website"} />
                      <input type={"hidden"} name={"services"} value={"Up to 20 Unique Pages Website, Custom Made, Interactive, Dynamic & High-End Design, Customized WordPress or PHP Development, Fully Mobile Responsive, Interactive Sliding Banners, Up to 15 Custom Made Banner Designs, 15 Stock Images, Unlimited Revisions, Content Management System, Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional), Online Payment Integration (Optional), Multi Lingual (Optional), Custom Dynamic Forms (Optional), Signup Area (For Newsletters, Offers etc.), Search Bar, Live Feeds of Social Networks integration (Optional), Google Friendly Sitemap, Search Engine Submission, Cross Browser Compatible, Complete W3C Certified HTML, Industry specified Team of Expert Designers and Developers, Complete Deployment, Complete Source Files, Dedicated Project Manager, 100% Ownership Rights, 100% Satisfaction Guarantee, 100% Money Back Guarantee, *NO MONTHLY OR ANY HIDDEN FEE*"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"animation"} className={"tab-pane"}>
            <div className={"row"}>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$250"}
                      </h2>
                      <p className={"discount-note"}><del>{"$499"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Teaser"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"30sec Duration"}
                      </li>
                      <li>
                        {"Script Writing"}
                      </li>
                      <li>
                        {"Custom Artwork"}
                      </li>
                      <li>
                        {"Background Music"}
                      </li>
                      <li>
                        {"HD Format Video"}
                      </li>
                      <li>
                        {"Dedicated Support"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Money-back Guarantee"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"250"} />
                      <input type={"hidden"} name={"original_price"} value={"499"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Teaser Animation"} />
                      <input type={"hidden"} name={"services"} value={"30sec Duration, Script Writing, Custom Artwork, Background Music, HD Format Video, Dedicated Support, 100% Ownership Rights, 100% Money-back Guarantee"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$400"}
                      </h2>
                      <p className={"discount-note"}><del>{"$799"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Startup"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"30sec Duration"}
                      </li>
                      <li>
                        {"Script Writing"}
                      </li>
                      <li>
                        {"Professional Voice-over & SFX"}
                      </li>
                      <li>
                        {"Hand-drawn Illustrations"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"HD Format Video"}
                      </li>
                      <li>
                        {"Dedicated Support"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Money-back Guarantee"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"400"} />
                      <input type={"hidden"} name={"original_price"} value={"799"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Startup Animation"} />
                      <input type={"hidden"} name={"services"} value={"30sec Duration, Script Writing, Professional Voice-over & SFX, Hand-drawn Illustrations, Unlimited Revisions, HD Format Video, Dedicated Support, 100% Ownership Rights, 100% Money-back Guarantee"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$500"}
                      </h2>
                      <p className={"discount-note"}><del>{"$999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Classic"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"30sec Duration"}
                      </li>
                      <li>
                        {"Script Writing"}
                      </li>
                      <li>
                        {"Professional Voice-over & SFX"}
                      </li>
                      <li>
                        {"Custom 2D Characters"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"HD Format Video"}
                      </li>
                      <li>
                        {"Dedicated Support"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Money-back Guarantee"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"500"} />
                      <input type={"hidden"} name={"original_price"} value={"999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Classic Animation"} />
                      <input type={"hidden"} name={"services"} value={"30sec Duration, Script Writing, Professional Voice-over & SFX, Custom 2D Characters, Unlimited Revisions, HD Format Video, Dedicated Support, 100% Ownership Rights, 100% Money-back Guarantee"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$2000"}
                      </h2>
                      <p className={"discount-note"}><del>{"$3999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"3D Video"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"2 3D Object Models"}
                      </li>
                      <li>
                        {"Unlimited Storyboard Revisions"}
                      </li>
                      <li>
                        {"Professional Voice - Over"}
                      </li>
                      <li>
                        {"Background Music"}
                      </li>
                      <li>
                        {"Exotic Animations"}
                      </li>
                      <li>
                        {"HD Video Format"}
                      </li>
                      <li>
                        {"6 Weeks Delivery Time"}
                      </li>
                      <li>
                        {"100% Ownership Rights"}
                      </li>
                      <li>
                        {"100% Money-back Guarantee"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"2000"} />
                      <input type={"hidden"} name={"original_price"} value={"3999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"3D Video"} />
                      <input type={"hidden"} name={"services"} value={"2 3D Object Models, Unlimited Storyboard Revisions, Professional Voice-Over, Background Music, Exotic Animations, HD Video Format, 6 Weeks Delivery Time, 100% Ownership Rights, 100% Money-back Guarantee"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"seo"} className={"tab-pane"}>
            <div className={"row"}>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$239"}
                      </h2>
                      <p className={"discount-note"}><del>{"$299"}</del>{" "}<span className={"discount-badge"}>{"20% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Basic"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"10 Keywords Optimization"}
                      </li>
                      <li>
                        {"4 Keywords in Top 10"}
                      </li>
                      <li>
                        {"Search Engine Submissions"}
                      </li>
                      <li>
                        {"2 Blogs Writing"}
                      </li>
                      <li>
                        {"4 Blog Posting Links"}
                      </li>
                      <li>
                        {"10 Blogs Social Bookmarking Links"}
                      </li>
                      <li>
                        {"1 Press Release Writing"}
                      </li>
                      <li>
                        {"2 Press Release Links"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"239"} />
                      <input type={"hidden"} name={"original_price"} value={"299"} />
                      <input type={"hidden"} name={"discount"} value={"20%"} />
                      <input type={"hidden"} name={"name"} value={"Basic SEO"} />
                      <input type={"hidden"} name={"services"} value={"10 Keywords Optimization, 4 Keywords in Top 10, Search Engine Submissions, 2 Blogs Writing, 4 Blog Posting Links, 10 Blogs Social Bookmarking Links, 1 Press Release Writing, 2 Press Release Links"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$250"}
                      </h2>
                      <p className={"discount-note"}><del>{"$499"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Standard"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"25 Keywords Optimization"}
                      </li>
                      <li>
                        {"10 Keywords in Top 10"}
                      </li>
                      <li>
                        {"Search Engine Submissions"}
                      </li>
                      <li>
                        {"6 Blogs Writing"}
                      </li>
                      <li>
                        {"12 Blog Posting Links"}
                      </li>
                      <li>
                        {"20 Blogs Social Bookmarking Links"}
                      </li>
                      <li>
                        {"2 Press Release Writing"}
                      </li>
                      <li>
                        {"4 Press Release Links"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"250"} />
                      <input type={"hidden"} name={"original_price"} value={"499"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Standard SEO"} />
                      <input type={"hidden"} name={"services"} value={"25 Keywords Optimization, 10 Keywords in Top 10, Search Engine Submissions, 6 Blogs Writing, 12 Blog Posting Links, 20 Blogs Social Bookmarking Links, 2 Press Release Writing, 4 Press Release Links"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$400"}
                      </h2>
                      <p className={"discount-note"}><del>{"$799"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Professional"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"50 Keywords Optimization"}
                      </li>
                      <li>
                        {"20 Keywords in Top 10"}
                      </li>
                      <li>
                        {"14 Blogs Writing"}
                      </li>
                      <li>
                        {"28 Blog Posting Links"}
                      </li>
                      <li>
                        {"30 Blogs Social Bookmarking Links"}
                      </li>
                      <li>
                        {"4 Press Release Writing"}
                      </li>
                      <li>
                        {"8 Press Release Links"}
                      </li>
                      <li>
                        {"4 Guest Blogging Links"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"400"} />
                      <input type={"hidden"} name={"original_price"} value={"799"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Professional SEO"} />
                      <input type={"hidden"} name={"services"} value={"50 Keywords Optimization, 20 Keywords in Top 10, 14 Blogs Writing, 28 Blog Posting Links, 30 Blogs Social Bookmarking Links, 4 Press Release Writing, 8 Press Release Links, 4 Guest Blogging Links"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$750"}
                      </h2>
                      <p className={"discount-note"}><del>{"$1499"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Enterprise"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"100 Keywords Optimization"}
                      </li>
                      <li>
                        {"40 Keywords in Top 10"}
                      </li>
                      <li>
                        {"30 Blogs Writing"}
                      </li>
                      <li>
                        {"60 Blog Posting Links"}
                      </li>
                      <li>
                        {"40 Blogs Social Bookmarking Links"}
                      </li>
                      <li>
                        {"8 Press Release Writing"}
                      </li>
                      <li>
                        {"8 Press Release Links"}
                      </li>
                      <li>
                        {"8 Guest Blogging Links"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"750"} />
                      <input type={"hidden"} name={"original_price"} value={"1499"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Enterprise SEO"} />
                      <input type={"hidden"} name={"services"} value={"100 Keywords Optimization, 40 Keywords in Top 10, 30 Blogs Writing, 60 Blog Posting Links, 40 Blogs Social Bookmarking Links, 8 Press Release Writing, 8 Press Release Links, 8 Guest Blogging Links"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"brandings"} className={"tab-pane"}>
            <div className={"row"}>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$250"}
                      </h2>
                      <p className={"discount-note"}><del>{"$499"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Branding "}
                        <br />
                        {"Startup"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        <span>
                          {"Logo Design "}
                        </span>
                      </li>
                      <li>
                        {"6 Unique Logo Concepts"}
                      </li>
                      <li>
                        {"FREE Icon"}
                      </li>
                      <li>
                        {"FREE Grayscale Copy"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"100% Ownership Right"}
                      </li>
                      <li>
                        {"AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats"}
                      </li>
                      <li>
                        <span>
                          {"Print Media "}
                        </span>
                      </li>
                      <li>
                        {"Stationery Design (Business Card, Letterhead, Envelope)"}
                      </li>
                      <li>
                        <span>
                          {"Website Design"}
                        </span>
                      </li>
                      <li>
                        {"5 Pages Custom Business Website"}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"250"} />
                      <input type={"hidden"} name={"original_price"} value={"499"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Branding Startup"} />
                      <input type={"hidden"} name={"services"} value={"Logo Design, 6 Unique Logo Concepts, FREE Icon, FREE Grayscale Copy, Unlimited Revisions, 100% Ownership Right, AI PSD EPS GIF BMP JPEG PNG Formats, Print Media, Stationery Design, Website Design, 5 Pages Custom Business Website, Complete Deployment"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$500"}
                      </h2>
                      <p className={"discount-note"}><del>{"$999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Branding "}
                        <br />
                        {"Plus "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        <span>
                          {"Logo Design"}
                        </span>
                      </li>
                      <li>
                        {"12 Unique Logo Concepts"}
                      </li>
                      <li>
                        {"FREE Icon"}
                      </li>
                      <li>
                        {"FREE Grayscale Copy"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"100% Ownership Right"}
                      </li>
                      <li>
                        {"AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats"}
                      </li>
                      <li>
                        <span>
                          {"Print Material"}
                        </span>
                      </li>
                      <li>
                        {" Stationery Design (Business Card, Letterhead, Envelope) "}
                      </li>
                      <li>
                        {"Flyer Design / Label Design"}
                      </li>
                      <li>
                        <span>
                          {"Website Design"}
                        </span>
                      </li>
                      <li>
                        {"Custom 5 Pages Professional Website"}
                      </li>
                      <li>
                        {"Content Management System (WordPress)"}
                      </li>
                      <li>
                        {"Responsive Design (Mobile Compatible)"}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                      <li>
                        {"Social Media Design"}
                      </li>
                      <li>
                        {"Facebook Fanpage Splash Page + Cover Photo"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"500"} />
                      <input type={"hidden"} name={"original_price"} value={"999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Branding Plus"} />
                      <input type={"hidden"} name={"services"} value={"Logo Design, 12 Unique Logo Concepts, FREE Icon, FREE Grayscale Copy, Unlimited Revisions, 100% Ownership Right, AI PSD EPS GIF BMP JPEG PNG Formats, Print Material, Stationery Design, Flyer Design / Label Design, Website Design, Custom 5 Pages Professional Website, Content Management System (WordPress), Responsive Design (Mobile Compatible), Complete Deployment, Social Media Design, Facebook Fanpage Splash Page + Cover Photo"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$750"}
                      </h2>
                      <p className={"discount-note"}><del>{"$1499"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Branding "}
                        <br />
                        {"Classic "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        <span>
                          {"Logo Design"}
                        </span>
                      </li>
                      <li>
                        {"12 Unique Logo Concepts"}
                      </li>
                      <li>
                        {"FREE Icon"}
                      </li>
                      <li>
                        {"FREE Grayscale Copy"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"100% Ownership Right"}
                      </li>
                      <li>
                        {"AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats"}
                      </li>
                      <li>
                        {"Print Material"}
                      </li>
                      <li>
                        {" Stationery Design(Business Card,Letterhead,Envelope) "}
                      </li>
                      <li>
                        <span>
                          {"Any Product of your Choice:"}
                        </span>
                      </li>
                      <li>
                        {" Bi-fold/Tri-fold Brochure / Menu Card / Corporate Profile) "}
                      </li>
                      <li>
                        {"Website Design"}
                      </li>
                      <li>
                        {"10+ Page Website"}
                      </li>
                      <li>
                        {"Content Management System (WordPress/Joomla)"}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                      <li>
                        {"Search Engine Submission"}
                      </li>
                      <li>
                        {"Google, Bing, Yahoo and More"}
                      </li>
                      <li>
                        {"Social Media Design"}
                      </li>
                      <li>
                        {"Facebook Fanpage Splash Page + Cover Photo"}
                      </li>
                      <li>
                        {"Twitter Background Design"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"750"} />
                      <input type={"hidden"} name={"original_price"} value={"1499"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Branding Classic"} />
                      <input type={"hidden"} name={"services"} value={"Logo Design, 12 Unique Logo Concepts, FREE Icon, FREE Grayscale Copy, Unlimited Revisions, 100% Ownership Right, AI PSD EPS GIF BMP JPEG PNG Formats, Print Material, Stationery Design (Business Card, Letterhead, Envelope), Any Product of your Choice (Bi-fold/Tri-fold Brochure / Menu Card / Corporate Profile), Website Design, 10+ Page Website, Content Management System (WordPress/Joomla), Complete Deployment, Search Engine Submission (Google, Bing, Yahoo and More), Social Media Design, Facebook Fanpage Splash Page + Cover Photo, Twitter Background Design"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$1000"}
                      </h2>
                      <p className={"discount-note"}><del>{"$1999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Branding "}
                        <br />
                        {"Ultimate "}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        <span>
                          {"Logo Design"}
                        </span>
                      </li>
                      <li>
                        {"Infinite Unique Logo Concepts"}
                      </li>
                      <li>
                        {"FREE Icon"}
                      </li>
                      <li>
                        {"FREE Grayscale Copy"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"100% Ownership Right"}
                      </li>
                      <li>
                        {"AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats"}
                      </li>
                      <li>
                        <span>
                          {"Print Material"}
                        </span>
                      </li>
                      <li>
                        {" Stationery Design(Business Card,Letterhead,Envelope) "}
                      </li>
                      <li>
                        {" 500 Business Cards, Letterhead, Envelop Prints "}
                      </li>
                      <li>
                        <span>
                          {"Any Product of your Choice:"}
                        </span>
                      </li>
                      <li>
                        {" Bi-fold/Tri-fold Brochure / Menu Card / Corporate Profile "}
                      </li>
                      <li>
                        {"Website Design"}
                      </li>
                      <li>
                        {"10+ Page Website"}
                      </li>
                      <li>
                        {"Content Management System (WordPress/Joomla)"}
                      </li>
                      <li>
                        {"Responsive Design (Mobile Compatible)"}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                      <li>
                        {"Social Media Design"}
                      </li>
                      <li>
                        {"Facebook Fanpage Splash Page + Cover Photo"}
                      </li>
                      <li>
                        {"Twitter Background Design"}
                      </li>
                      <li>
                        {" Complete Storyboard, VoiceOver & Animation "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"1000"} />
                      <input type={"hidden"} name={"original_price"} value={"1999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Branding Ultimate"} />
                      <input type={"hidden"} name={"services"} value={"Logo Design, Infinite Unique Logo Concepts, FREE Icon, FREE Grayscale Copy, Unlimited Revisions, 100% Ownership Right, AI PSD EPS GIF BMP JPEG PNG Formats, Print Material, Stationery Design (Business Card, Letterhead, Envelope), 500 Business Cards, Letterhead, Envelop Prints, Any Product of your Choice (Bi-fold/Tri-fold Brochure / Menu Card / Corporate Profile), Website Design, 10+ Page Website, Content Management System (WordPress/Joomla), Responsive Design (Mobile Compatible), Complete Deployment, Social Media Design, Facebook Fanpage Splash Page + Cover Photo, Twitter Background Design, Complete Storyboard, VoiceOver & Animation"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"print"} className={"tab-pane"}>
            <div className={"row"}>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$199"}
                      </h2>
                      <p className={"discount-note"}><del>{"$249"}</del>{" "}<span className={"discount-badge"}>{"20% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Basic"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"Print Media Design"}
                      </li>
                      <li>
                        {" Stationery Design (Business Card, Leterhead, Envelope "}
                      </li>
                      <li>
                        {"Flyer Design/Postcard (any one)"}
                      </li>
                      <li>
                        {"Printing Service"}
                      </li>
                      <li>
                        {" 500 x Business Card Prints OR 250 x Flyer Prints "}
                      </li>
                      <li>
                        {"Multiple File Format(Ai, PNG, JPEG, etc)"}
                      </li>
                      <li>
                        {"Turn around time 24 - 48 Hours"}
                      </li>
                      <li>
                        {"100% Satisfaction Guaranteed*"}
                      </li>
                      <li>
                        <span>
                          {"Add on:"}
                        </span>
                      </li>
                      <li>
                        {"$30 for 24 - 48 Hours Rush Delivery"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"199"} />
                      <input type={"hidden"} name={"original_price"} value={"249"} />
                      <input type={"hidden"} name={"discount"} value={"20%"} />
                      <input type={"hidden"} name={"name"} value={"Basic Printing"} />
                      <input type={"hidden"} name={"services"} value={"Print Media Design, Stationery Design, Flyer Design/Postcard, Printing Service, Multiple File Format, Turn around time 24 - 48 Hours, 100% Satisfaction Guaranteed, Add on: $30 for 24 - 48 Hours Rush Delivery"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$250"}
                      </h2>
                      <p className={"discount-note"}><del>{"$499"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Plus"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"Print Media Design"}
                      </li>
                      <li>
                        {" Stationery Design (Business Card, Letterhead, Envelope) "}
                      </li>
                      <li>
                        {"Flyer Design/Postcard/Menu Card (any one)"}
                      </li>
                      <li>
                        {"Printing Service"}
                      </li>
                      <li>
                        {"500 x Business Card Prints"}
                      </li>
                      <li>
                        {"500 x Letterhead Prints"}
                      </li>
                      <li>
                        {"500 x Envelop Prints"}
                      </li>
                      <li>
                        {"100 x Flyer Prints"}
                      </li>
                      <li>
                        <span>
                          {"Add on:"}
                        </span>
                      </li>
                      <li>
                        {"$60 for 24 - 48 Hours Rush Delivery"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"250"} />
                      <input type={"hidden"} name={"original_price"} value={"499"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Printing Plus"} />
                      <input type={"hidden"} name={"services"} value={"Print Media Design, Stationery Design, Flyer Design/Postcard/Menu Card, Printing Service, 500 x Business Card Prints, 500 x Letterhead Prints, 500 x Envelop Prints, 100 x Flyer Prints, Add on: $60 for 24 - 48 Hours Rush Delivery"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$650"}
                      </h2>
                      <p className={"discount-note"}><del>{"$1299"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Classic"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li>
                        {"Print Media Design"}
                      </li>
                      <li>
                        {" Stationery Design (Business Card, Letterhead, Envelope) Flyer Design/Postcard/Menu Card (any one) "}
                      </li>
                      <li>
                        {"Brochure/Product Packaging Design (any one)"}
                      </li>
                      <li>
                        {"Apparel Design (T-Shirt, Cap, Bumper Sticker)"}
                      </li>
                      <li>
                        {"Printing Service"}
                      </li>
                      <li>
                        {" 1000 Prints Each (Business Card,Letterhead, Envelope) "}
                      </li>
                      <li>
                        {"250 x Flyer/Brochure/ Menu Card Prints"}
                      </li>
                      <li>
                        {"50 x T-Shirt Prints"}
                      </li>
                      <li>
                        {"Turn around time 24 - 48 Hours"}
                      </li>
                      <li>
                        {"Multiple Files Format Ai, PSD, Png, Jpeg Etc"}
                      </li>
                      <li>
                        {"100% Satisfaction Guaranteed*"}
                      </li>
                      <li>
                        <span>
                          {"Add on:"}
                        </span>
                      </li>
                      <li>
                        {"$90 for 24 - 48 Hours Rush Delivery"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"650"} />
                      <input type={"hidden"} name={"original_price"} value={"1299"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Printing Classic"} />
                      <input type={"hidden"} name={"services"} value={"Print Media Design, Stationery, Design (Business Card Letterhead Envelope), Flyer Design/Postcard/Menu Card Brochure/Product Packaging Design, Apparel Design (T-Shirt Cap Bumper Sticker), Printing Service, 1000 Prints Each (Business Card Letterhead Envelope), 250 Flyer/Brochure/Menu Card Prints, 50 T-Shirt Prints, Turnaround 24 - 48 Hours, Multiple File Formats (Ai PSD PNG JPEG etc), 100% Satisfaction Guaranteed, Add-on: $90 for 24 - 48 Hours Rush Delivery"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={"web-portal"} className={"tab-pane"}>
            <div className={"row"}>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$5000"}
                      </h2>
                      <p className={"discount-note"}><del>{"$9999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Startup Web Portal"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li className={"first"}>
                        {"Web portal Startup"}
                      </li>
                      <li>
                        {"Dating Portal"}
                      </li>
                      <li>
                        {"Job Portal"}
                      </li>
                      <li>
                        {"Professional Network"}
                      </li>
                      <li>
                        {"Social Network"}
                      </li>
                      <li>
                        {"Real Estate Portal"}
                      </li>
                      <li>
                        {"Medical Portal"}
                      </li>
                      <li>
                        {"News Portal"}
                      </li>
                      <li>
                        {"Enterprise Portal"}
                      </li>
                      <li>
                        {"Custom Coding"}
                      </li>
                      <li>
                        {"Module-wise Architecture"}
                      </li>
                      <li>
                        {"Extensive Admin Panel"}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                      <li>
                        {"100% Custom Designs � No Templates"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"5000"} />
                      <input type={"hidden"} name={"original_price"} value={"9999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Startup Web Portal"} />
                      <input type={"hidden"} name={"services"} value={"Web portal Startup, Dating Portal, Job Portal, Professional Network, Social Network, Real Estate Portal, Medical Portal, News Portal, Enterprise Portal, Custom Coding, Module-wise Architecture, Extensive Admin Panel, Complete Deployment, 100% Custom Designs, Free 12-month Hosting & Domain Registration"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6"}>
                <div className={"package-card"}>
                  <div className={"intro"}>
                    <div className={"prices"}>
                      <h2 style={{"fontSize": "2.5rem"}}>
                        {"$10000"}
                      </h2>
                      <p className={"discount-note"}><del>{"$19999"}</del>{" "}<span className={"discount-badge"}>{"50% OFF"}</span></p>
                    </div>
                    <div className={"name"}>
                      <h4>
                        {"Web Portal Plus"}
                      </h4>
                      <img width={100} height={100} src={"/assets/img/package-1.webp"} alt={""} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
                    </div>
                  </div>
                  <div>
                    <ul className={"package-list"}>
                      <li className={"first"}>
                        {"Logo Design"}
                      </li>
                      <li>
                        {"12 Unique Logo Concepts"}
                      </li>
                      <li>
                        {"Unlimited Revisions"}
                      </li>
                      <li>
                        {"100% Ownership Right"}
                      </li>
                      <li>
                        {"AI, PSD, EPS, GIF, BMP, JPEG, PNG Formats"}
                      </li>
                      <li>
                        {"Print Material"}
                      </li>
                      <li>
                        {" Stationery Design (Business Card, Letterhead, Envelope) "}
                      </li>
                      <li>
                        {"Flyer Design"}
                      </li>
                      <li>
                        {"Email Signature"}
                      </li>
                      <li>
                        {" Comprehensive Web Portal (any one of your choice*) "}
                      </li>
                      <li>
                        {"* Dating Portal"}
                      </li>
                      <li>
                        {"* Job Portal"}
                      </li>
                      <li>
                        {"* Professional Network"}
                      </li>
                      <li>
                        {"* Social Network"}
                      </li>
                      <li>
                        {"* Media Portal (Photos/Videos)"}
                      </li>
                      <li>
                        {"* Real Estate Portal"}
                      </li>
                      <li>
                        {"* Medical Portal"}
                      </li>
                      <li>
                        {"* News Portal"}
                      </li>
                      <li>
                        {"* Enterprise Portal"}
                      </li>
                      <li>
                        {"100% Custom Designs � No Templates"}
                      </li>
                      <li>
                        {"Custom Coding"}
                      </li>
                      <li>
                        {"Module-wise Architecture"}
                      </li>
                      <li>
                        {"Extensive Admin Panel"}
                      </li>
                      <li>
                        {"Complete Deployment"}
                      </li>
                      <li>
                        {"Search Engine Optimization"}
                      </li>
                      <li>
                        {"3 Months SEO Plan"}
                      </li>
                      <li>
                        {"10 Keywords"}
                      </li>
                      <li>
                        {"Improved Google Visibility"}
                      </li>
                      <li>
                        {"Social Media Design"}
                      </li>
                      <li>
                        {"Facebook Fanpage Splash Page + Cover Photo"}
                      </li>
                      <li>
                        {"Twitter Background Design"}
                      </li>
                      <li>
                        {"Explainer Video"}
                      </li>
                      <li>
                        {"30 Second HD Explainer Video"}
                      </li>
                      <li>
                        {" Complete Storyboard, VoiceOver & Animation "}
                      </li>
                      <li>
                        {"Value-added Services"}
                      </li>
                      <li>
                        {"Discounted Price"}
                      </li>
                      <li>
                        {"Dedicated Account Manager"}
                      </li>
                      <li>
                        {"Satisfaction Guarantee"}
                      </li>
                      <li>
                        {"30-days Moneyback Guarantee"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <form action={"https://www.americanlogoartist.com/order/order-now.php"} method={"POST"}>
                      <input type={"hidden"} name={"price"} value={"10000"} />
                      <input type={"hidden"} name={"original_price"} value={"19999"} />
                      <input type={"hidden"} name={"discount"} value={"50%"} />
                      <input type={"hidden"} name={"name"} value={"Web Portal Plus"} />
                      <input type={"hidden"} name={"services"} value={"Logo Design, 12 Unique Logo Concepts, Unlimited Revisions, 100% Ownership Right, AI PSD EPS GIF BMP JPEG PNG Formats, Print Material, Stationery Design, Flyer Design, Email Signature, Comprehensive Web Portal, Dating Portal, Job Portal, Professional Network, Social Network, Media Portal, Real Estate Portal, Medical Portal, News Portal, Enterprise Portal, 100% Custom Designs, Custom Coding, Module-wise Architecture, Extensive Admin Panel, Complete Deployment, SEO, 3 Months SEO Plan, 10 Keywords, Improved Google Visibility, Social Media Design, Facebook Fanpage Splash Page, Twitter Background Design, Explainer Video, 30 Sec HD Explainer Video, Storyboard VoiceOver & Animation, Discounted Price, Dedicated Account Manager, Satisfaction Guarantee, 30-days Moneyback Guarantee, Free 12-month Hosting & Domain Registration"} />
                      <button type={"submit"} className={"theme-btn order"}>
                        {"Order now"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
        <div className={"pmbtn"}>
          <Link href={"/pricing"} className={"theme-btn package-more-btn"}>
            {"View All Packages"}
          </Link>
        </div>
      </div>
    </section>
    </Tabs>
  );
}
