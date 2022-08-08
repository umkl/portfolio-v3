import React from "react";
import Link from "next/link";

import footerStyle from "@styles/footer.module.scss";
import font from "@styles/fonts.module.scss";

import LogoSkeleton from "../../../../assets/Logo/logoSkeleton.svg";
import Emoji from "@components/elements/Emoji";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={footerStyle.parent}>
        <LogoSkeleton className={footerStyle.LogoSkeleton} />
        <ul>
          <li className={footerStyle.initialsText}>
            <Emoji symbol={"0x1F3D7"} /> 2020 ungarmichael{" "}
          </li>
          <li className={footerStyle.initialsText}>Made with {"<"}3 in Austria</li>
        </ul>
      </div>
      <div className={footerStyle.spacer}></div>
    </footer>
  );
};

export default Footer;
