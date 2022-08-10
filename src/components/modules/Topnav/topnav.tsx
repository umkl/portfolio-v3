import { Link, animateScroll as scroll } from "react-scroll";
import f from "./../../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import topNavStyle from "@styles/topnav.module.scss";

const TopNav = () => {
  return (
    <nav className={topNavStyle.Parent}>
      <ul className={topNavStyle.ListParent}>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <li>
            <span className={topNavStyle.navCode}> 02.</span>
            <span className={topNavStyle.navHeading}>
              Services
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
          <li>
            <span className={topNavStyle.navCode}> 02.1.</span>
            <span className={topNavStyle.navHeading}>
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
          <li>
            <span className={topNavStyle.navCode}> 01.</span>
            <span className={topNavStyle.navHeading}>
              Projects
            </span>
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <li>
            <span className={topNavStyle.navCode}> 00.2.</span>
            <span className={topNavStyle.navHeading}>
              Contact
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default TopNav;
