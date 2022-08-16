import React from "react";
import Head from "next/head";
import f from "@styles/fonts.module.scss";
import projectsStyle from "@styles/projects.module.scss";
import "@styles/projects.module.scss";
import FProject from "./fProject";
import { Element } from "react-scroll";
import { getCompleteSortedProjectsData, IProject } from "../../../lib/projects";

const Projects = ({
  allProjects,
}: {
  allProjects: IProject[];
}): JSX.Element => {
  return (
    <Element name="01projects">
      <section className={projectsStyle.parent} id="01projects">
        <h2 className={projectsStyle.heading}>
          <span className={projectsStyle.code}>03.</span>
          <span>Projects</span>
        </h2>
        {allProjects.map((x) => {
          return <FProject Project={x} key={x.id} />;
        })}
        {/* {allProjects.map(({ title, date, featured, id, contentHtml }) => {
          featured?<Project/> : null
        })} */}
      </section>
    </Element>
  );
};

export default Projects;
