import footerStyle from "./footer.module.scss";
import SuperEllipse from "react-superellipse";
// import OctagonLogo from "./../../assets/Logo/Octagon-logo-grayed.svg";
import React from "react";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <ul>
        <li>© 2020 ungarmichael </li>
        <li>Made with {"<"}3 in Austria</li>
      </ul>
    </footer>
  );
};

export default Footer;
