import React, { useState, useRef, useEffect } from "react";

import f from "@styles/fonts.module.scss";
import c from "@styles/components.module.scss";
import bottomNavStyles from "@styles/bottomnav.module.scss";
import { gsap, TweenMax, Power3 } from "gsap";
import GridItem from "@components/elements/GridItem/gridItem";
import { ArrowsSplit2, X, Link } from "tabler-icons-react";

import GlobeIcon from "../../../../assets/Icons/globe.svg";
import GridIcon from "../../../../assets/Icons/gridburger.svg";
import XIcon from "../../../../assets/Icons/x.svg";

function Bottomnav() {
  const [currentGrid, setCurrentGrid] = useState(null);
  const tlnav = useRef(null);
  const socialRef = useRef(null);
  const navRef = useRef(null);
  const socialBtn = useRef(null);
  const navBtn = useRef(null);

  useEffect(() => {
    gsap.to(tlnav.current, {
      opacity: 1,
      marginBottom: "0px",
      duration: 0.5,
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
          duration: 0.5,
          ease: Power3.easeOut,
        });
        setCurrentGrid("social");
      } else if (currentGrid == "nav") {
        gsap.to(navRef.current, {
          opacity: 0,
          display: "none",
          marginBottom: "-100px",
          duration: 0.5,
          ease: Power3.easeOut,
        });
        gsap.to(socialRef.current, {
          opacity: 1,
          display: "block",
          delay: 0.5,
          marginBottom: "0px",
          duration: 0.5,
          ease: Power3.easeOut,
        });
        setCurrentGrid("social");
      } else {
        gsap.to(socialRef.current, {
          opacity: 0,
          display: "none",
          marginBottom: "-100px",
          duration: 0.5,
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
          duration: 0.5,
          ease: Power3.easeOut,
        });
        setCurrentGrid("nav");
      } else if (currentGrid == "social") {
        gsap.to(socialRef.current, {
          opacity: 0,
          display: "none",
          marginBottom: "-100px",
          duration: 0.5,
          ease: Power3.easeOut,
        });
        gsap.to(navRef.current, {
          opacity: 1,
          display: "block",
          delay: 0.5,
          marginBottom: "0px",
          duration: 0.5,
          ease: Power3.easeOut,
        });
        setCurrentGrid("nav");
      } else {
        gsap.to(navRef.current, {
          opacity: 0,
          display: "none",
          marginBottom: "-100px",
          duration: 0.5,
          ease: Power3.easeOut,
        });
        setCurrentGrid(null);
      }
    }
  };
  return (
    <nav className={bottomNavStyles.bottomNav}>
      <div className={bottomNavStyles.tlnav} ref={tlnav}>
        <button
          className={bottomNavStyles.bottomNavBtn}
          ref={socialBtn}
          onClick={() => onClickEvent("social")}
        >
          {currentGrid == "social" ? (
            <X className={bottomNavStyles["bar-icon"]} />
          ) : (
            <ArrowsSplit2 className={bottomNavStyles["bar-icon"]} />
          )}
        </button>
        <button
          className={bottomNavStyles.bottomNavBtn}
          ref={navBtn}
          onClick={() => onClickEvent("nav")}
        >
          {currentGrid == "nav" ? (
            <X className={bottomNavStyles["bar-icon"]} />
          ) : (
            <Link
              className={`${bottomNavStyles["bar-icon"]} ${bottomNavStyles["grid-icon"]}`}
            />
          )}
        </button>
      </div>
      <div className={bottomNavStyles.mobileRoutingContainer} ref={socialRef}>
        <h1>Routing</h1>
        <nav>
          <ul>
            <li>01. aklsjf</li>
            <li>02. aklsjf</li>
            <li>03. aklsjf</li>
            <li>04. aklsjf</li>
          </ul>

          {/* <div className={bottomNavStyles.subcontainerDiv}> */}
          {/* <GridItem
              name="dribbble"
              type={"social"}
              link={"https://dribbble.com/ungarmichael"}
            />
            <GridItem
              name="github"
              link={"https://github.com/ungarmichael"}
              type={"social"}
            />
            <GridItem
              name="linkedin"
              link={"https://www.linkedin.com/in/michael-ungar-9624391b4/"}
              type={"social"}
            />
            <GridItem
              name="twitter"
              link={"https://twitter.com/ungarmichael_"}
              type={"social"}
            /> */}
          {/* </div> */}
        </nav>
      </div>
      <div className={bottomNavStyles.mobileRoutingContainer} ref={navRef}>
        <nav className={bottomNavStyles.subcontainerNav}>
          <div className={bottomNavStyles.subcontainerDiv}>
            {/* <GridItem name="01.about" link={"about"} type={"nav"} />
            <GridItem name="02.experience" link={"experience"} type={"nav"} />
            <GridItem name="03.projects" link={"projects"} type={"nav"} />
            <GridItem name="04.contact" link={"contact"} type={"nav"} /> */}
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Bottomnav;
