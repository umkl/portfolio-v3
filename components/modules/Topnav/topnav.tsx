// import { animated as a, useSpring } from "react-spring";
// import SuperEllipse from "react-superellipse";
// import navStyles from "./nav.module.scss";
// import utilStyles from "./../../styles/utils.module.scss";
// import { useContext } from "react";
// import { NavActiveContext } from "./../layouts/layout";
// import Button from "./../elements/button";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { Link as Link2, animateScroll as scroll } from "react-scroll";
// import useWindowSize, { Size } from "../../hooks/useWindowSize";

import f from "./../../../styles/fonts.module.scss";
import l from "./topnav.module.scss";
import c from "./../../styles/components.module.scss";

const TopNav = () => {
  return (
    <>
      <nav className={l["Parent"]}>
        <ul className={`${l["List-Parent"]}`}>
          <li onClick={() => {}}>
            <span className={`${f["Nav-Code-1"]}`}> 01.</span>
            <span className={`${f["Nav-Heading-1"]} ${l["Hover"]} `}>About</span>
          </li>
          <li onClick={() => {}}>
            <span className={`${f["Nav-Code-1"]}`}> 02.</span>
            <span className={`${f["Nav-Heading-1"]} ${l["Hover"]} `}>Experience</span>
          </li>
          <li onClick={() => {}}>
            <span className={`${f["Nav-Code-1"]}`}> 03.</span>
            <span className={`${f["Nav-Heading-1"]} ${l["Hover"]} `}>Projects</span>
          </li>
          <li onClick={() => {}}>
            <span className={`${f["Nav-Code-1"]}`}> 04.</span>
            <span className={`${f["Nav-Heading-1"]} ${l["Hover"]} `}>Contact</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;