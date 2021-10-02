import React, { ReactElement } from "react";
import About from "./../../../assets/Icons/about.svg";
import Experience from "./../../../assets/Icons/experience.svg";
import Projects from "./../../../assets/Icons/projects.svg";
import Contact from "./../../../assets/Icons/contact.svg";

import l from "./griditem.module.scss";

interface Props {
  name: string;
}

export default function GridItem({ name }: Props): ReactElement {
  return (
    <div className={l["gridcontainer"]}>
      <ul className={l["gridlist"]}>
        <li className={l["gridlistitem"]}>{name}</li>
        <li className={l["gridlistitem"]}>
          {(() => {
            switch (name) {
              case "01.about":
                return <About className={l["icon"]} />;
              case "02.experience":
                return <Experience className={l["icon"]}/>;
              case "03.projects":
                return <Projects className={l["icon"]}/>;
              case "04.contact":
                return <Contact className={l["icon"]}/>;
            }
          })()}
        </li>
      </ul>
    </div>
  );
}
