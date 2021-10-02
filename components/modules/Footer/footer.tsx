import footerStyle from "./footer.module.scss";
import SuperEllipse from "react-superellipse";
import l from "./footer.module.scss";
import f from "./../../../styles/fonts.module.scss";
import React from "react";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={l.parent}>
        <ul>
          <li>© 2020 ungarmichael </li>
          <li>Made with {"<"}3 in Austria</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
