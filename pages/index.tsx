import React from "react";
import Head from "next/head";
import Home from "./Home/index";
import Links from "../components/modules/Links/links";

export default function Index(): JSX.Element {
  return (
    <>
      <Links />
      <main>
        <Home />
        {/* <Head>
        <title>Home - Octagon</title>
      </Head>
      <Home /> */}
      </main>
    </>
  );
}
