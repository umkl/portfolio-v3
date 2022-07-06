import React from "react";
import Head from "next/head";
import Links from "@components/modules/Links/links";
import About from "@components/content/About/index";
import Experience from "../components/content/Experience/index";
import Projects from "../components/content/Projects/index";
import Contact from "../components/content/Contact/index";
import { GetStaticProps } from "next";
import { getCompleteSortedProjectsData, IProject } from "../lib/projects";
import Home from "@components/content/Home";

export default function Index({
  allProjects,
}: {
  allProjects: IProject[];
}): JSX.Element {
  return (
    <>
      <Home />
      <About />
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
      allProjects,
    },
  };
};
