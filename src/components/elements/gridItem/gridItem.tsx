import React, { ReactElement } from "react";
import About from "../../../../assets/Icons/About.svg";
import Experience from "../../../../assets/Icons/experience.svg";
import Projects from "../../../../assets/Icons/projects.svg";
import Contact from "../../../../assets/Icons/contact.svg";

import Github from "../../../../assets/Icons/github.svg";
import Linkedin from "../../../../assets/Icons/linkedin.svg";
import Twitter from "../../../../assets/Icons/twitter.svg";
import Dribbble from "../../../../assets/Icons/dribbble.svg";

import { Link, animateScroll as scroll } from "react-scroll";

import gridItemStyle from "./gridItem.module.scss";
import f from "@styles/fonts.module.scss";

interface Props {
  name: string;
  link: string;
  type: string;
}

export default function GridItem({ name, link, type }: Props): ReactElement {
  return type == "nav" ? (
    <Link to={link}>
      <div className={gridItemStyle["gridcontainer"]}>
        <ul className={gridItemStyle["gridlist"]}>
          <li className={gridItemStyle["gridlistitem"]}>
            <p className={f["nav-code-3"]}>{name}</p>
          </li>
          <li className={gridItemStyle["gridlistitem"]}>
            {(() => {
              switch (name) {
                case "01.about":
                  return <About className={gridItemStyle["icon"]} />;
                case "02.experience":
                  return <Experience className={gridItemStyle["icon"]} />;
                case "03.projects":
                  return <Projects className={gridItemStyle["icon"]} />;
                case "04.contact":
                  return <Contact className={gridItemStyle["icon"]} />;
                case "dribbble":
                  return <Dribbble className={gridItemStyle["icon"]} />;
                case "linkedin":
                  return <Linkedin className={gridItemStyle["icon"]} />;
                case "github":
                  return <Github className={gridItemStyle["icon"]} />;
                case "twitter":
                  return <Twitter className={gridItemStyle["icon"]} />;
              }
            })()}
          </li>
        </ul>
      </div>
    </Link>
  ) : (
    <a href={link}>
      <div className={gridItemStyle["gridcontainer"]}>
        <ul className={gridItemStyle["gridlist"]}>
          <li className={gridItemStyle["gridlistitem"]}>
            <p className={f["nav-code-3"]}>{name}</p>
          </li>
          <li className={gridItemStyle["gridlistitem"]}>
            {(() => {
              switch (name) {
                case "01.about":
                  return <About className={gridItemStyle["icon"]} />;
                case "02.experience":
                  return <Experience className={gridItemStyle["icon"]} />;
                case "03.projects":
                  return <Projects className={gridItemStyle["icon"]} />;
                case "04.contact":
                  return <Contact className={gridItemStyle["icon"]} />;
                case "dribbble":
                  return <Dribbble className={gridItemStyle["icon"]} />;
                case "linkedin":
                  return <Linkedin className={gridItemStyle["icon"]} />;
                case "github":
                  return <Github className={gridItemStyle["icon"]} />;
                case "twitter":
                  return <Twitter className={gridItemStyle["icon"]} />;
              }
            })()}
          </li>
        </ul>
      </div>
    </a>
  );
}
