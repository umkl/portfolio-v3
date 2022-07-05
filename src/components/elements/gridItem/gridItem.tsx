import React, { ReactElement } from "react";
import About from "./../../../assets/Icons/about.svg";
import Experience from "./../../../assets/Icons/experience.svg";
import Projects from "./../../../assets/Icons/projects.svg";
import Contact from "./../../../assets/Icons/contact.svg";

import Github from "./../../../assets/Icons/github.svg";
import Linkedin from "./../../../assets/Icons/linkedin.svg";
import Twitter from "./../../../assets/Icons/twitter.svg";
import Dribbble from "./../../../assets/Icons/dribbble.svg";

import { Link, animateScroll as scroll } from "react-scroll";

import l from "./gridItem.module.scss";
import f from "./../../../styles/fonts.module.scss";

interface Props {
  name: string;
  link: string;
  type: string;
}

export default function GridItem({ name, link, type }: Props): ReactElement {
  return type == "nav" ? (
    <Link to={link} onClick={()=>{console.log("link triggered")}}>
      <div className={l["gridcontainer"]}>
        <ul className={l["gridlist"]}>
          <li className={l["gridlistitem"]}>
            <p className={f["nav-code-3"]}>{name}</p>
          </li>
          <li className={l["gridlistitem"]}>
            {(() => {
              switch (name) {
                case "01.about":
                  return <About className={l["icon"]} />;
                case "02.experience":
                  return <Experience className={l["icon"]} />;
                case "03.projects":
                  return <Projects className={l["icon"]} />;
                case "04.contact":
                  return <Contact className={l["icon"]} />;
                case "dribbble":
                  return <Dribbble className={l["icon"]} />;
                case "linkedin":
                  return <Linkedin className={l["icon"]} />;
                case "github":
                  return <Github className={l["icon"]} />;
                case "twitter":
                  return <Twitter className={l["icon"]} />;
              }
            })()}
          </li>
        </ul>
      </div>
    </Link>
  ) : (
    <a href={link}>
      <div className={l["gridcontainer"]}>
        <ul className={l["gridlist"]}>
          <li className={l["gridlistitem"]}>
            <p className={f["nav-code-3"]}>{name}</p>
          </li>
          <li className={l["gridlistitem"]}>
            {(() => {
              switch (name) {
                case "01.about":
                  return <About className={l["icon"]} />;
                case "02.experience":
                  return <Experience className={l["icon"]} />;
                case "03.projects":
                  return <Projects className={l["icon"]} />;
                case "04.contact":
                  return <Contact className={l["icon"]} />;
                case "dribbble":
                  return <Dribbble className={l["icon"]} />;
                case "linkedin":
                  return <Linkedin className={l["icon"]} />;
                case "github":
                  return <Github className={l["icon"]} />;
                case "twitter":
                  return <Twitter className={l["icon"]} />;
              }
            })()}
          </li>
        </ul>
      </div>
    </a>
  );
}
