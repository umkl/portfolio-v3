import React, { useState, useRef, useEffect } from "react";

import f from "./../../../styles/fonts.module.scss";
import l from "./bottomnav.module.scss";
import c from "./../../styles/components.module.scss";
import { gsap, TweenMax, Power3 } from "gsap";
import GridItem from "./../../elements/gridItem/gridItem";

interface Props {}

function Bottomnav(props: Props) {
  const {} = props;
  const [currentGrid, setCurrentGrid] = useState(null);
  const tlnav = useRef(null);
  const socialRef = useRef(null);
  const navRef = useRef(null);
  const socialBtn = useRef(null);
  const navBtn = useRef(null);

  useEffect(() => {
    console.log(tlnav);
    gsap.to(tlnav.current, {
      opacity: 1,
      marginBottom: "0px",
      duration: 0.8,
      ease: Power3.easeOut,
    });
  }, []);

  const onClickEvent = (selection: string) => {
    if (selection == "social") {
      if (currentGrid == null) {
        gsap.to(socialRef.current, {
          opacity: 1,
          display: "block",
          marginBottom: "0px",
          duration: 0.8,
          ease: Power3.easeOut,
        });
        setCurrentGrid("social");
      } else if (currentGrid == "nav") {
        gsap.to(navRef.current, {
          opacity: 0,
          display: "none",
          marginBottom: "-100px",
          duration: 0.8,
          ease: Power3.easeOut,
        });
        gsap.to(socialRef.current, {
          opacity: 1,
          display: "block",
          delay: 0.8,
          marginBottom: "0px",
          duration: 0.8,
          ease: Power3.easeOut,
        });
        setCurrentGrid("social");
      } else {
        gsap.to(socialRef.current, {
          opacity: 0,
          display: "none",
          marginBottom: "-100px",
          duration: 0.8,
          ease: Power3.easeOut,
        });
        setCurrentGrid(null);
      }
    } else if (selection == "nav") {
      if (currentGrid == null) {
        gsap.to(navRef.current, {
          opacity: 1,
          display: "block",
          marginBottom: "0px",
          duration: 0.8,
          ease: Power3.easeOut,
        });
        setCurrentGrid("nav");
      } else if (currentGrid == "social") {
        gsap.to(socialRef.current, {
          opacity: 0,
          display: "none",
          marginBottom: "-100px",
          duration: 0.8,
          ease: Power3.easeOut,
        });
        gsap.to(navRef.current, {
          opacity: 1,
          display: "block",
          delay: 0.8,
          marginBottom: "0px",
          duration: 0.8,
          ease: Power3.easeOut,
        });
        setCurrentGrid("nav");
      } else {
        gsap.to(navRef.current, {
          opacity: 0,
          display: "none",
          marginBottom: "-100px",
          duration: 0.8,
          ease: Power3.easeOut,
        });
        setCurrentGrid(null);
      }
    }
  };

  return (
    <nav className={l["bottom-nav"]}>
      <div className={l["tlnav"]} ref={tlnav}>
        <button ref={socialBtn} onClick={() => onClickEvent("social")}>
          {currentGrid == "social" ? "x" : "social"}
        </button>
        <button ref={navBtn} onClick={() => onClickEvent("nav")}>
          {currentGrid == "nav" ? "x" : "nav"}
        </button>
      </div>

      <div
        className={`${l["social-grid"]} ${l["subcontainer"]}`}
        ref={socialRef}
      >
        <nav>
          <ul>
            <li>
              <GridItem name="01.Home" />
            </li>
            <li>
              <GridItem name="01.Home" />
            </li>
            <li>
              <GridItem name="01.Home" />
            </li>
            <li>
              <GridItem name="01.Home" />
            </li>
          </ul>
        </nav>
      </div>

      <div className={`${l["nav-grid"]} ${l["subcontainer"]}`} ref={navRef}>
        <nav>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default Bottomnav;
