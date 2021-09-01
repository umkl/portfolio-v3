import Head from "next/head";
import styles from "./layout.module.scss";
import { Context, ReactNode, useState } from "react";
import Footer from "../modules/footer";
import Navbar from "../modules/navbar";
import React from "react";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import { useSpring, animated as a } from "react-spring";
import Nav from "./../modules/nav";

interface ILayout {
  children: ReactNode;
  dark: boolean;
}

export const NavbarHeightContext: Context<{
  NavbarHeight: number;
  setNavbarHeight: (x: any) => void;
}> = React.createContext({
  NavbarHeight: 0,
  setNavbarHeight: (x) => {},
});

export const NavActiveContext: Context<{
  NavActive: boolean;
  setNavActive: (x: any) => void;
}> = React.createContext({
  NavActive: false,
  
  setNavActive: (x) => {},
});

export default function Layout({ children,dark }: ILayout) {
  const [NavbarHeight, setNavbarHeight] = useState(0);
  const [NavActive, setNavActive] = useState(false);
  const size: Size = useWindowSize();
  const blurSpring = useSpring({
    filter: NavActive ? "blur(5px)" : "blur(0px)",
  });
  
  return (
    <NavActiveContext.Provider
      value={{ NavActive: NavActive, setNavActive: setNavActive }}
    >
      <>
        <Nav dark={dark} />
        <a.div style={blurSpring} onClick={()=>{if(NavActive==true){setNavActive(false)}}}>
          <div className={styles.container}>
            <Head>
              <link rel="icon" href="/Octagon-logo-1000BA.ico" />
              <meta
                name="description"
                content="5-Star Restaurant in Vienna that supports all Crypto-currencies."
              />
              <meta name="og:title" content="Home-Octagon" />
            </Head>
            <NavbarHeightContext.Provider
              value={{ NavbarHeight, setNavbarHeight }}
            >
              <Navbar dark={dark}/>
              <main
                className={styles.main}
                style={{
                  minHeight: size.height - NavbarHeight
                }}
              >
                {children}
              </main>
            </NavbarHeightContext.Provider>
          </div>
          <Footer dark={dark}/>
        </a.div>
      </>
    </NavActiveContext.Provider>
  );
}
