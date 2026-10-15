import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={"footer"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-3 col-md-12"}>
            <div className={"footer-content"}>
              <Link href={"/"} className={"footer-logo"}>
                <img width={276} height={88} src={"/assets/img/logo.webp"} alt={"American Logo Artist"} className={"img-fluid"} loading={"lazy"} decoding={"async"} />
              </Link>
              <p>
                {" At American Logo Artist, we blend digital technology seamlessly into your business strategy and concepts. "}
              </p>
            </div>
          </div>
          <div className={"col-lg-3 col-md-4 offset-lg-1"}>
            <div className={"footer-content"}>
              <h3>
                {"Services"}
              </h3>
              <ul className={"footer-links"}>
                <li>
                  <Link href={"/logo-and-branding"}>
                    {"Logo & Branding"}
                  </Link>
                </li>
                <li>
                  <Link href={"/website-development"}>
                    {"Website Development"}
                  </Link>
                </li>
                <li>
                  <Link href={"/video-animation"}>
                    {"Video Animation"}
                  </Link>
                </li>
                <li>
                  <Link href={"/app-development"}>
                    {"App Development"}
                  </Link>
                </li>
                <li>
                  <Link href={"/search-engine-optimization"}>
                    {"Search Engine Optimization"}
                  </Link>
                </li>
                <li>
                  <Link href={"/social-media-marketing"}>
                    {"Social Media Marketing"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={"col-lg-2 col-md-4"}>
            <div className={"footer-content"}>
              <h3>
                {"Quick Links"}
              </h3>
              <ul className={"footer-links"}>
                <li>
                  <Link href={"/"}>
                    {"Home"}
                  </Link>
                </li>
                <li>
                  <Link href={"/about"}>
                    {"About Us"}
                  </Link>
                </li>
                <li>
                  <Link href={"/portfolio"}>
                    {"Portfolio"}
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"}>
                    {"Contact Us"}
                  </Link>
                </li>
                <li>
                  <Link href={"/pricing"}>
                    {"Pricing"}
                  </Link>
                </li>
                <li>
                  <Link href={"/blogs"}>
                    {"Blog"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={"col-lg-3 col-md-4"}>
            <div className={"footer-content"}>
              <h3>
                {"Contact Our Team"}
              </h3>
              <ul className={"footer-links"}>
                <li>
                  <a href={"tel:+13072183240"}>
                    <i className={"fas fa-phone"} aria-hidden={"true"}>
                    </i>
                    {" (307) 218-3240"}
                  </a>
                </li>
                <li>
                  <a href={"mailto:info@americanlogoartist.com"}>
                    <i className={"fas fa-envelope"} aria-hidden={"true"}>
                    </i>
                    {" info@americanlogoartist.com"}
                  </a>
                </li>
                <li>
                  <a href={"https://www.google.com/maps/search/?api=1&query=1309+Coffeen+Avenue+Sheridan+WY+82801"}>
                    <i className={"fas fa-map-marker-alt"} aria-hidden={"true"}>
                    </i>
                    {" 1309 Coffeen Avenue, Sheridan, WY, US 82801"}
                  </a>
                </li>
              </ul>
              <div className={"ftr-soc-icon"}>
                <a href={"https://www.facebook.com/americanlogoartist"} aria-label={"Facebook"}>
                  <i className={"fab fa-facebook-square"} aria-hidden={"true"}>
                  </i>
                </a>
                <a href={"https://instagram.com/americanlogoartist?igshid=OGQ5ZDc2ODk2ZA=="} aria-label={"Instagram"}>
                  <i className={"fab fa-instagram"} aria-hidden={"true"}>
                  </i>
                </a>
                <a href={"https://www.linkedin.com/company/american-logo-artist/about/?viewAsMember=true"} aria-label={"Linkedin"}>
                  <i className={"fab fa-linkedin"} aria-hidden={"true"}>
                  </i>
                </a>
                <a href={"https://www.pinterest.com/americanlogoartist/"} aria-label={"Pinterest"}>
                  <i className={"fab fa-pinterest-p"} aria-hidden={"true"}>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"row align-items-center footer-bottom"}>
          <div className={"col-md-6"}>
            <img width={501} height={46} src={"/assets/img/payment-img.webp"} alt={""} loading={"lazy"} decoding={"async"} />
          </div>
          <div className={"col-md-6"}>
            <div className={"terms-ftr"}>
              <Link href={"/terms-condition"}>
                {" Terms & Conditions"}
              </Link>
              <Link href={"/privacy-policy"}>
                {" Privacy Policy"}
              </Link>
            </div>
          </div>
          <div className={"col-md-12 text-center mt-4"}>
            <p>
              {" © "}
              <span>{new Date().getFullYear()}</span>
              {" - American Logo Artist. All rights reserved. "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
