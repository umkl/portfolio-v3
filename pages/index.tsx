import React from "react";
import Head from "next/head";
import Links from "../components/modules/Links/links";
import Home from "./Home/index";
import About from "./About/index";
import Experience from "./Experience/index";
import Projects from "./Projects/index";
import Contact from "./Contact/index";
import Layout from "./../components/layouts/layout";

export default function Index(): JSX.Element {
  return (
    <>
      <Links />
      <Layout>
        <Home />
        <About />
        <Experience/>
        <Projects/>
        <Contact />
        {/* <Head>
        <title>Home - Octagon</title>
      </Head>
      <Home /> */}
      </Layout>

    </>
  );
}
