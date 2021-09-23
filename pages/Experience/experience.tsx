import f from "./../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import l from "./experience.module.scss";

import React from "react";
import Experience, { IExperience } from "./index";

function ExperienceComponent(props) {
  const { experience } = props;
  return (
    <div>
      <h1>
        <span className={`${f["Experience-Heading-1"]}`}>{experience.job}</span>
        &nbsp;
        <span className={`${f["Experience-Code-2"]}`}>
          @{experience.company}{" "}
        </span>
      </h1>
      <p className={`${f["Experience-Code-3"]}`}>{experience.time}</p>
      <ul className={`l[]`}>
        {experience.descriptions.map((x) => {
          return <li className={`${f["Experience-Text-1"]}`}>{x}</li>;
        })}
      </ul>
    </div>
  );
}

export default ExperienceComponent;
