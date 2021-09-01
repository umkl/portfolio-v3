import footerStyle from "./footer.module.scss";
import SuperEllipse from "react-superellipse";
import OctagonLogo from "./../../assets/Logo/Octagon-logo-grayed.svg";
import React from "react";
import Link from "next/link";

const footer = ({ dark }: { dark: boolean }): JSX.Element => {
  return (
    <footer
      className={`${dark ? footerStyle.darkBg : footerStyle.prBg} ${
        footerStyle.container
      }`}
      id="footer"
    >
      <div className={footerStyle.innerContainer}>
        <SuperEllipse
          r1={0.00006}
          r2={0.132}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            position: "relative",
            margin: 0,
          }}
        >
          <div className={footerStyle.content}>
            <div className={footerStyle.blockheading}>
              <br />
              Contact
            </div>
            <div className={footerStyle.block1}>
              <div className={footerStyle.half}>
                <span>E: office@octagon.at</span>
                <span>T: +43 123 456789</span>
              </div>
              <div className={footerStyle.half}>
                <span>Loremstreet 1</span>
                <span>1010 Vienna, Austria</span>
              </div>
            </div>
            <div className={footerStyle.blockheading}>Opening Times</div>
            <div className={footerStyle.block2}>
              <div className={footerStyle.half}>
                <span>SUN - THU :&nbsp;</span>
                <span>4 pm - 10.30 pm </span>
              </div>
              <div className={footerStyle.half}>
                <span>FRI - SAT :&nbsp;</span>
                <span> 4 pm - 11.00 pm</span>
              </div>
            </div>
            <div className={footerStyle.blockheading}>
              <span>Follow us on </span> <span>Social Media</span>
            </div>
            <div className={footerStyle.block3}>
              <div className={footerStyle.half}>
                <span>Instagram</span>
                <span>Dribbble</span>
              </div>
              <div className={footerStyle.half}>
                <span>Facebook</span>
                <span>Twitter</span>
              </div>
            </div>
            <div className={footerStyle.bottom}>
              <div className={footerStyle.wrap}>
                <div className={footerStyle.logo}>
                  <OctagonLogo />
                </div>
                <span>
                  © 2021 ungarmichael
                  <br />
                  Made with {"<3"} in Austria
                </span>
              </div>
              <div>
                <ul className={footerStyle.privacy}>
                  <li>
                    <Link href={"/Imprint"}>
                      <a>Imprint</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/Privacy"}>
                      <a>Privacy & Cookie policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SuperEllipse>
      </div>
    </footer>
  );
};

export default footer;
