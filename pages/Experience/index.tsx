import React, { useState } from "react";
import Head from "next/head";
import ExperienceComponent from "./experience";
import f from "./../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import l from "./experience.module.scss";

export interface IExperience {
  job: string;
  company: string;
  time: string;
  descriptions: string[];
}

function Experience() {
  const [currentExperience, setCurrentExperience] = useState("VortexData");
  const getExperienceByCompany = (companyTitle: string): IExperience => {
    for (var experience of experiencesJSON) {
      if (experience.company == companyTitle) {
        return experience;
      }
    }
  };
  const experiencesJSON: IExperience[] = [
    {
      job: "VortexData",
      company: "VortexData",
      time: "string",
      descriptions: ["af", "sfa"],
    },
    {
      job: "Freelance",
      company: "Freelance",
      time: "2020 - now",
      descriptions: ["asdf", "adf"],
    },
    {
      job: "depp",
      company: "Fronius",
      time: "Juli 2020 - September 2020",
      descriptions: ["", ""],
    },
  ];
  return (
    <>
      <section className={l["Section"]}>
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>02.</span>
          <span className={f["Section-Heading-1"]}>My Experience</span>
        </h2>
        <div className={l["Container"]}>
          <ul className={l["experience-item-list"]}>
            <div className={l["bar"]}>akfdj</div>
            <li>
              <button
                className={`${f["Experience-Code-1"]} ${l["experience-item"]}`}
                onClick={() => setCurrentExperience("VortexData")}
              >
                VortexData
              </button>
            </li>
            <li>
              <button
                className={`${f["Experience-Code-1"]} ${l["experience-item"]}`}
                onClick={() => setCurrentExperience("Freelance")}
              >
                Freelance
              </button>
            </li>
            <li>
              <button
                className={`${f["Experience-Code-1"]} ${l["experience-item"]}`}
                onClick={() => setCurrentExperience("Fronius")}
              >
                Fronius
              </button>
            </li>
          </ul>
          <ExperienceComponent
            experience={getExperienceByCompany(currentExperience)}
          />
        </div>
      </section>
    </>
  );
}

export default Experience;
