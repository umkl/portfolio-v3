import footerStyle from "./footer.module.scss";
import SuperEllipse from "react-superellipse";
import l from "./footer.module.scss";
import f from "./../../../styles/fonts.module.scss";
import React from "react";
import Link from "next/link";
import LogoSkeleton from "./../../../assets/Logo/logoSkeleton.svg";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={l.parent}>
        {/* <div></div> */}
        <LogoSkeleton className={l["LogoSkeleton"]} />
        <ul>
          <li className={f["footer-text"]}>© 2020 ungarmichael </li>
          <li className={f["footer-text"]}>Made with {"<"}3 in Austria</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
