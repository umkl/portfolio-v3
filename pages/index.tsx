import React from "react";
import Head from "next/head";
import Home from "./Home";

export default function Index(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Home - Octagon</title>
      </Head>
      <Home />
    </main>
  );
}
