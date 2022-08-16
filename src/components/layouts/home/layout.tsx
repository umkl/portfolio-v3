import React, { useEffect, Context, ReactNode, useState } from "react";
import Head from "next/head";

import layoutStyle from "@styles/layout.module.scss";
import Initials from "@components/modules/Footer/footer";
import Header from "@components/modules/Header/header";
import Links from "@components/modules/Links/links";
import Bottomnav from "@components/modules/Bottomnav/bottomnav";

import Usculpture from "../../../../assets/Illustrations/Usculpture.svg";
import styled from "styled-components";

interface ILayout {
  children: ReactNode;
}

const MainChildren = styled.div`
  min-height: 100vh;
`

export default function Layout({ children }: ILayout) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/ungarmichael-logo.ico" />
        <meta
          name="description"
          content="Developer and Designer from Austria focused on flawless code and magnificient design."
        />
      </Head>
      <Header />
      <main className={layoutStyle.root}>
        <MainChildren>{children}</MainChildren>
        <Usculpture
          id={layoutStyle.u_sculpture}
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
        <Links />
      </main>
      <Initials />
      <Bottomnav />
    </>
  );
}
