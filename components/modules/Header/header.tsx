// import navStyles from "./navbar.module.scss";
// import utilStyles from "./../../styles/utils.module.scss";
// import OctagonLogoImage from "./../../assets/Logo/Octagon-logo-poppins-1000BA.png";
// import OctagonLogoBlackImage from "./../../assets/Logo/Octagon-logo-poppins-000000.png";
// import SmallOctagonLogoImage from "./../../assets/Logo/Octagon-logo-1000BA.png";
// import SmallOctagonLogoBlackImage from "./../../assets/Logo/Octagon-logo-black.png";
// import Menu from "./../../assets/Icons/Menu.svg";
// import Menu_Dark from "./../../assets/Icons/Menu-dark.svg";
// import Link from "next/link";
// import { useSpring, animated as a } from "react-spring";
// import useWindowSize, { Size } from "../../../hooks/useWindowSize";
// import { useContext, useEffect, useRef, useState } from "react";
// import useResizeObserver from "../../../hooks/useObserver";
// import { NavActiveContext, NavbarHeightContext } from "../../layouts/layout";
// import { Link as Link2 } from "react-scroll";
// import Button from "../../elements/button";
// import Image from "next/image";
// import { useRouter } from "next/router";

import Nav from "../Nav/nav";
import Logo from "./../../../assets/Logo/logo1.svg";
import f from "./../../styles/fonts.module.scss";
import l from "./header.module.scss";
import c from "./../../styles/components.module.scss";

const Header = (): JSX.Element => {
  return (
    <>
      <div className={`${l["Container"]}`}>
        <div className={l["grid-wrapper"]}>
          <Logo className={`${l["Logo"]}`} />
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Header;
