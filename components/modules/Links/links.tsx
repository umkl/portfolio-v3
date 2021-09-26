// import footerStyle from "./footer.module.scss";
// import SuperEllipse from "react-superellipse";
// import OctagonLogo from "./../../assets/Logo/Octagon-logo-grayed.svg";
// import React from "react";
// import Link from "next/link";
import l from "./links.module.scss";
import GithubIcon from "./../../../assets/Icons/github.svg";
import LinkedinIcon from "./../../../assets/Icons/linkedin.svg";
import TwitterIcon from "./../../../assets/Icons/twitter.svg";
import DribbbleIcon from "./../../../assets/Icons/dribbble.svg";

const links = (): JSX.Element => {
  return (
    <>
      <aside className={`${l["Linkbar-1"]} ${l["Linkbar"]}`}>
        <div className={l["Icon-frame"]}>
          <DribbbleIcon className={l["Icon-1"]} />
        </div>
        <div className={l["Icon-frame"]}>
          <GithubIcon className={l["Icon-1"]} />
        </div>
        <div className={l["Icon-frame"]}>
          <TwitterIcon className={l["Icon-1"]} />
        </div>

        <div className={l["Icon-frame"]}>
          <LinkedinIcon className={l["Icon-1"]} />
        </div>

        <div className={l["Line-1"]}></div>
      </aside>
      <aside className={`${l["Linkbar-2"]} ${l["Linkbar"]}`}>
        <a href="mailto:ungarmichael.mail@gmail.com">
          ungarmichael.mail@gmail.com
        </a>
        <div className={l["Line-1"]}></div>
      </aside>
    </>
  );
};

export default links;
