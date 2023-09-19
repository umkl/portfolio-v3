import React from "react";
import Head from "next/head";

//sections
import Home from "@components/modules/Landing/landing";
import About from "@components/home-sections/About/about";
import Experience from "@components/home-sections/Experience/experience";
import Projects from "@components/home-sections/Projects/projects";
import Contact from "@components/home-sections/Contact/contact";

//components
import Links from "@components/modules/Links/links";

import { getCompleteSortedProjectsData, IProject } from "../lib/projects";
import { GetStaticProps } from "next";
import Services from "@components/home-sections/services";

export default function Index({
  allProjects
}: {
  allProjects: IProject[];
}): JSX.Element {
  return (
    <>
      <Home />
      <Services />
      <Experience />
      <Projects allProjects={allProjects} />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjects: IProject[] = await getCompleteSortedProjectsData();
  return {
    props: {
      allProjects
    }
  };
};
