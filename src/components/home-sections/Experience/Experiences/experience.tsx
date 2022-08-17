import React from "react";

import f from "@styles/fonts.module.scss";
import experienceStyling from "@styles/experience.module.scss";

function ExperienceComponent(props: any) {
  const { experience } = props;
  return (
    <div className={experienceStyling.experienceContainer}>
      <h1>
        <span id={experienceStyling.job}>{experience.job}</span>
        &nbsp;
        <span id={experienceStyling.company}>@{experience.company} </span>
      </h1>
      <p id={experienceStyling.timeSpan}>{experience.time}</p>
      <ul id={experienceStyling.experienceDescriptionList}>
        {experience.descriptions.map((x) => {
          return (
            <li
              key={x}
            >
              {x}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExperienceComponent;
