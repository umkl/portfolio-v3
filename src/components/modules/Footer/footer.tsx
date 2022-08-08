import React from "react";
import Link from "next/link";

import footerStyle from "@styles/footer.module.scss";
import font from "@styles/fonts.module.scss";

import LogoSkeleton from "../../../../assets/Logo/logoSkeleton.svg";
import Emoji from "@components/elements/Emoji";

const Footer = (): JSX.Element => {
  return (
    <footer id={footerStyle.parent}>
      <div id={footerStyle.initials}>
        <LogoSkeleton className={footerStyle.LogoSkeleton} />
        <ul>
          <li className={footerStyle.initialsText}>
            &nbsp;
            <Emoji symbol={"0x1F3D7"} /> 2022 ungarmichael{" "}
          </li>
          <li className={footerStyle.initialsText}>
            Made with <Emoji symbol={"0x1F496"} />
            &nbsp;in Austria
          </li>
        </ul>
      </div>
      <div id={footerStyle.divider}>
        <div id={footerStyle.dividerLine} />
      </div>
      <div id={footerStyle.content}>
        <section className={footerStyle.sectionColumn}>
          <div>
            <h3 className={footerStyle.sectionTitle}>Mehr von mir</h3>
            <h4 className={footerStyle.contentTitle}>blog</h4>
            <h4 className={footerStyle.contentTitle}>scrapbook</h4>
            <h4 className={footerStyle.contentTitle}>wiki</h4>
          </div>
        </section>
        <section className={footerStyle.sectionColumn}>
          <div>
            <h3 className={footerStyle.sectionTitle}>Mehr von mir</h3>
            <h4 className={footerStyle.contentTitle}>blog</h4>
            <h4 className={footerStyle.contentTitle}>scrapbook</h4>
            <h4 className={footerStyle.contentTitle}>wiki</h4>
          </div>
        </section>
        <section className={footerStyle.sectionColumn}>
          <div>
            <h3 className={footerStyle.sectionTitle}>Mehr von mir</h3>
            <h4 className={footerStyle.contentTitle}>blog</h4>
            <h4 className={footerStyle.contentTitle}>scrapbook</h4>
            <h4 className={footerStyle.contentTitle}>wiki</h4>
          </div>
        </section>
        <section className={footerStyle.sectionColumn}>
          <div>
            <h3 className={footerStyle.sectionTitle}>Mehr von mir</h3>
            <h4 className={footerStyle.contentTitle}>blog</h4>
            <h4 className={footerStyle.contentTitle}>scrapbook</h4>
            <h4 className={footerStyle.contentTitle}>wiki</h4>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
