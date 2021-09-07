import React from "react";
import Head from "next/head";
import Home from "./Home/index";
import Links from "../components/modules/Links/links";
import About from "./About/index"

export default function Index(): JSX.Element {
  return (
    <>
      <Links />
      <main>
        <Home />
        <About/>
        {/* <Head>
        <title>Home - Octagon</title>
      </Head>
      <Home /> */}
      </main>
    </>
  );
}
