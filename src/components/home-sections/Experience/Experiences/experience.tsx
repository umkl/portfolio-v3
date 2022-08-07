import React from "react";

import f from "@styles/fonts.module.scss";
import experienceStyling from "@styles/experience.module.scss";

function ExperienceComponent(props:any) {
  const { experience } = props;
  return (
    <div className={experienceStyling["Experience-Container"]}>
      <h1>
        <span className={`${f["Experience-Heading-1"]}`}>{experience.job}</span>
        &nbsp;
        <span className={`${f["Experience-Code-2"]}`}>
          @{experience.company}{" "}
        </span>
      </h1>
      <p className={`${f["Experience-Code-3"]}`}>{experience.time}</p>
      <ul className={experienceStyling["Experience_detail-list"]}>
        {experience.descriptions.map((x) => {
          return (
            <div key={x} className={experienceStyling["experience_detail-container"]}>
              <div className={experienceStyling["list-indicator"]} />
              <li className={`${f["Experience-Text-1"]}`}>{x}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ExperienceComponent;
