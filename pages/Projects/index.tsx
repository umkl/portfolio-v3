import React from "react";
import Head from "next/head";
import f from "./../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import l from "./projects.module.scss";
import FProject from "./fProject";
import { GetStaticProps } from "next";
import { getCompleteSortedProjectsData, IProject } from "../../lib/projects";

const Projects = ({
  allProjects,
}: // allEventsData
{
  allProjects: IProject[];
}): JSX.Element => {
  // console.log(allProjects.length);

  return (
    <>
      {/* {console.log(allProjects)} */}
      <section className={l["Section"]}>
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>03.</span>
          <span className={f["Section-Heading-1"]}>Projects</span>
        </h2>
        {allProjects.map((x) => {
          console.log("ok");
          return <FProject Project={x} />;
        })}
        {/* {allProjects.map(({ title, date, featured, id, contentHtml }) => {
          featured?<Project/> : null
        })} */}
      </section>
    </>
  );
};

export default Projects;
