import React from "react";
import Head from "next/head";
import Links from "../components/modules/Links/links";
import Home from "./Home/index";
import About from "./About/index";
import Experience from "./Experience/index";
import Projects from "./Projects/index";
import Contact from "./Contact/index";
import { GetStaticProps } from "next";
import { getCompleteSortedProjectsData, IProject } from "../lib/projects";

export default function Index({
  allProjects,
}: {
  allProjects: IProject[];
}): JSX.Element {
  return (
    <>
    <div>testcontainer</div>
      {/* <Home />
      <About />
      <Experience />
      <Projects allProjects={allProjects} />
      <Contact /> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjects: IProject[] = await getCompleteSortedProjectsData();
  return {
    props: {
      allProjects,
    },
  };
};
