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
import l from "./nav.module.scss";
import c from "./../../styles/components.module.scss";

const Nav = () => {
  return (
    <>
      <nav className={l["nav"]}>
        <ul className={`${l["nav-items"]}`}>
          <li>
            <span className={`${f["Nav-Code-1"]}`}> 01.</span>
            <span className={`${f["Nav-Heading-1"]}`}>About</span>
          </li>
          <li>
            <span className={`${f["Nav-Code-1"]}`}> 02.</span>
            <span className={`${f["Nav-Heading-1"]}`}>Experience</span>
          </li>
          <li>
            <span className={`${f["Nav-Code-1"]}`}> 03.</span>
            <span className={`${f["Nav-Heading-1"]}`}>Projects</span>
          </li>
          <li>
            <span className={`${f["Nav-Code-1"]}`}> 04.</span>
            <span className={`${f["Nav-Heading-1"]}`}>Contact</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
