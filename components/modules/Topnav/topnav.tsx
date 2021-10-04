import { Link, animateScroll as scroll } from "react-scroll";

import f from "./../../../styles/fonts.module.scss";
import l from "./topnav.module.scss";
import c from "./../../styles/components.module.scss";

const TopNav = () => {
  return (
    <>
      <nav className={l["Parent"]}>
        <ul className={`${l["List-Parent"]}`}>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <li onClick={() => {}}>
              <span className={`${f["Nav-Code-1"]}`}> 01.</span>
              <span className={`${f["Nav-Heading-1"]} ${l["Hover"]} `}>
                About
              </span>
            </li>
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li onClick={() => {}}>
              <span className={`${f["Nav-Code-1"]}`}> 02.</span>
              <span className={`${f["Nav-Heading-1"]} ${l["Hover"]} `}>
                Experience
              </span>
            </li>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li onClick={() => {}}>
              <span className={`${f["Nav-Code-1"]}`}> 03.</span>
              <span className={`${f["Nav-Heading-1"]} ${l["Hover"]} `}>
                Projects
              </span>
            </li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li onClick={() => {}}>
              <span className={`${f["Nav-Code-1"]}`}> 04.</span>
              <span className={`${f["Nav-Heading-1"]} ${l["Hover"]} `}>
                Contact
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
