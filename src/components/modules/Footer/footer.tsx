import React from "react";
import Link from "next/link";

import footerStyle from "@styles/footer.module.scss";
import font from "@styles/fonts.module.scss";

import LogoSkeleton from "../../../../assets/Logo/logoSkeleton.svg";
import Emoji from "@components/elements/Emoji";
import useTranslation from "next-translate/useTranslation";

const Footer = (): JSX.Element => {
  return (
    <footer id={footerStyle.parent}>
      <Initials />

      <div id={footerStyle.dividerLine} />

      <div id={footerStyle.content}>
        <section className={footerStyle.sectionColumn}>
          <div className={footerStyle.sectionContainer}>
            <h3 className={footerStyle.sectionTitle}>Mehr von mir</h3>
            <h4 className={footerStyle.contentTitle}>blog</h4>
            <h4 className={footerStyle.contentTitle}>scrapbook</h4>
            <h4 className={footerStyle.contentTitle}>wiki</h4>
          </div>
        </section>
        <section className={footerStyle.sectionColumn}>
          <div className={footerStyle.sectionContainer}>
            <h3 className={footerStyle.sectionTitle}>Communities</h3>
            <h4 className={footerStyle.contentTitle}>waterbyte</h4>
            <h4 className={footerStyle.contentTitle}>hackclub</h4>
            <h4 className={footerStyle.contentTitle}>project access</h4>
          </div>
        </section>
        <section className={footerStyle.sectionColumn}>
          <div className={footerStyle.sectionContainer}>
            <h3 className={footerStyle.sectionTitle}>Contact</h3>
            <h4 className={footerStyle.contentTitle}>@gmail.com</h4>
            <h4 className={footerStyle.contentTitle}>schedule-a-meeting</h4>
            <h4 className={footerStyle.contentTitle}>linkedin</h4>
          </div>
        </section>
        <section className={footerStyle.sectionColumn}>
          <div className={footerStyle.sectionContainer}>
            <h3 className={footerStyle.sectionTitle}>Formelles</h3>
            <h4 className={footerStyle.contentTitle}>schemantics</h4>
            <h4 className={footerStyle.contentTitle}>impressum</h4>
            <h4 className={footerStyle.contentTitle}>info</h4>
          </div>
        </section>
      </div>
    </footer>
  );
};

const Initials = (): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <div id={footerStyle.initials}>
      <LogoSkeleton className={footerStyle.LogoSkeleton} />
      <ul>
        <li className={footerStyle.initialsText}>
          &nbsp;
          <Emoji symbol={"0x1F3D7"} /> 2022 ungarmichael{" "}
        </li>
        <li className={footerStyle.initialsText}>
          {t("madewith")} <Emoji symbol={"0x1F496"} />
          &nbsp;{t("inAT")}
        </li>
      </ul>
    </div>
  );
};

export default Initials;
