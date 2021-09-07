import React from "react";
import styles from "./layout.module.scss";
import { Context, ReactNode, useState } from "react";

import Head from "next/head";
import Footer from "../modules/Footer/footer";
import Header from "../modules/Header/header";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Octagon-logo-1000BA.ico" />
        <meta
          name="description"
          content="5-Star Restaurant in Vienna that supports all Crypto-currencies."
        />
        <meta name="og:title" content="Home-Octagon" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
