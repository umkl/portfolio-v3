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
      console.log(experience.company);
      console.log(companyTitle);
      if (experience.company == companyTitle) {
        return experience;
      }
    }
    // const xds = experiencesJSON.map((x) => {
    //   console.log(x.company, companyTitle)
    //   if (x.company == companyTitle) {
    //     return x;
    //   }
    // });
    // return xds;
    // return experiencesJSON[1];
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
      <section className={c["Section"]}>
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>02.</span>
          <span className={f["Section-Heading-1"]}>My Experience</span>
        </h2>
        <div className={l["Container"]}>
          <ul>
            <li >
              <button className={f["Experience-Code-1"]} onClick={() => setCurrentExperience("VortexData")}>
                VortexData
              </button>
            </li>
            <li >
              <button className={f["Experience-Code-1"]} onClick={() => setCurrentExperience("Freelance")}>
                Freelance
              </button>
            </li>
            <li >
              <button className={f["Experience-Code-1"]} onClick={() => setCurrentExperience("Fronius")}>
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
