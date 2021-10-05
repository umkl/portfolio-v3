import React, { useState, useRef } from "react";
import Head from "next/head";
import ExperienceComponent from "../../../components/containers/Experiences/experience";
import InlineExperienceComponent from "../../../components/containers/Experiences/inlineExperience";
import f from "./../../../styles/fonts.module.scss";
import c from "./../../../styles/components.module.scss";
import a from "./../../../styles/export.module.scss";
import l from "./experience.module.scss";
import { gsap, TweenMax, Power3 } from "gsap";
import ExperienceFullList from "./../../containers/Experiences/experienceFullList";

export interface IExperience {
  job: string;
  company: string;
  time: string;
  descriptions: string[];
}

export const experiencesJSON: IExperience[] = [
  {
    job: "Developer and UI/UX-Designer",
    company: "VortexData",
    time: "September 2021 - now",
    descriptions: [
      "Drawing up style concepts, defining guidelines and creating designs in Figma.",
      "Frontend Development using modern Javascript Frameworks.",
    ],
  },
  {
    job: "Freelancing",
    company: "Fiverr",
    time: "October 2020 - now",
    descriptions: [
      "Drawing up style concepts, defining guidelines and creating designs in Figma.",
      "Creating Websites using appropriate CM-Systems and developing plugins for Wordpress.",
      "Developing Webapplications both Frontend and Backend using Javascript/Typescript and Golang.",
      "Creating Mobile-apps using Dart with the modern Flutter framework.",
    ],
  },
  {
    job: "Internship in IT-support",
    company: "Fronius",
    time: "August - September 2020",
    descriptions: [
      "Delivering, installing, repairing and updating software hardware for employees.",
      "Automating stock numbers via Bar-codes.",
    ],
  },
  {
    job: "Internship as electrician",
    company: "Puttinger",
    time: "Juli - August 2020",
    descriptions: [
      "Installing power cords, LAN-cables and Alarm systems. ",
      "Measuring and maintaining connections in order to provide a secure and working power and network supply.",
    ],
  },
];

export const getExperienceByCompany = (companyTitle: string): IExperience => {
  for (var experience of experiencesJSON) {
    if (experience.company == companyTitle) {
      return experience;
    }
  }
};

function Experience() {
  const [currentExperience, setCurrentExperience] = useState("VortexData");

  const indicator = useRef(null);

  return (
    <>
      <section className={l["Section"]} id="experience">
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>02.</span>
          <span className={f["Section-Heading-1"]}>Experience</span>
        </h2>

        <div className={`${l["Container"]}`}>
          <ul className={l["experience-item-list"]}>
            <div className={l["bar"]}>
              <div className={l["indicator"]} ref={indicator} />
            </div>
            <li>
              <button
                className={`${f["Experience-Code-1"]} ${l["experience-item"]}`}
                style={{
                  color: currentExperience == "VortexData" ? a.co3 : a.co2,
                  transition: ".3s",
                }}
                onClick={() => {
                  setCurrentExperience("VortexData");
                  gsap.to(indicator.current, {
                    opacity: 1,
                    marginTop: "0px",
                    duration: 0.8,
                    ease: Power3.easeOut,
                  });
                }}
              >
                VortexData
              </button>
            </li>
            <li>
              <button
                className={`${f["Experience-Code-1"]} ${l["experience-item"]}`}
                style={{
                  color: currentExperience == "Fiverr" ? a.co3 : a.co2,
                  transition: ".3s",
                }}
                onClick={() => {
                  setCurrentExperience("Fiverr");
                  gsap.to(indicator.current, {
                    opacity: 1,
                    marginTop: "100px",
                    duration: 0.8,
                    ease: Power3.easeOut,
                  });
                }}
              >
                Freelancing
              </button>
            </li>
            <li>
              <button
                className={`${f["Experience-Code-1"]} ${l["experience-item"]}`}
                style={{
                  color: currentExperience == "Fronius" ? a.co3 : a.co2,
                  transition: ".3s",
                }}
                onClick={() => {
                  setCurrentExperience("Fronius");
                  gsap.to(indicator.current, {
                    opacity: 1,
                    marginTop: "200px",
                    duration: 0.8,
                    ease: Power3.easeOut,
                  });
                }}
              >
                Fronius
              </button>
            </li>
            <li>
              <button
                className={`${f["Experience-Code-1"]} ${l["experience-item"]}`}
                style={{
                  color: currentExperience == "Puttinger" ? a.co3 : a.co2,
                  transition: ".3s",
                }}
                onClick={() => {
                  setCurrentExperience("Puttinger");
                  gsap.to(indicator.current, {
                    opacity: 1,
                    marginTop: "300px",
                    duration: 0.8,
                    ease: Power3.easeOut,
                  });
                }}
              >
                Puttinger
              </button>
            </li>
          </ul>
          <ExperienceComponent
            experience={getExperienceByCompany(currentExperience)}
          />
        </div>

        <ExperienceFullList />
      </section>
    </>
  );
}

export default Experience;
