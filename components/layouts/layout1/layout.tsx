import React from "react";
import Head from "next/head";
import { Context, ReactNode, useState } from "react";

import styles from "./layout.module.scss";
import Footer from "../../modules/Footer/footer";
import Header from "../../modules/Header/header";
import Links from "../../modules/Links/links";
import Bottomnav from "../../modules/Bottomnav/bottomnav"

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Head>
        <link rel="icon" href="/ungarmichael-logo.ico" />
        <meta
          name="description"
          content="Developer and Designer from Austria focusing on flawless code and magnificient design."
        />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Bottomnav/>
      <Footer />
    </>
  );
}
