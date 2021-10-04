import React, { useState, useRef, useEffect } from "react";

import f from "./../../../styles/fonts.module.scss";
import l from "./bottomnav.module.scss";
import c from "./../../styles/components.module.scss";
import { gsap, TweenMax, Power3 } from "gsap";
import GridItem from "./../../elements/gridItem/gridItem";

import GlobeIcon from "./../../../assets/Icons/globe.svg";
import GridIcon from "./../../../assets/Icons/gridburger.svg";
import XIcon from "./../../../assets/Icons/x.svg";

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
    <nav className={l["bottom-nav"]}>
      <div className={l["tlnav"]} ref={tlnav}>
        <button
          className={l["bottom-nav-btn"]}
          ref={socialBtn}
          onClick={() => onClickEvent("social")}
        >
          {currentGrid == "social" ? (
            <XIcon className={l["bar-icon"]} />
          ) : (
            <GlobeIcon className={l["bar-icon"]} />
          )}
        </button>
        <button
          className={l["bottom-nav-btn"]}
          ref={navBtn}
          onClick={() => onClickEvent("nav")}
        >
          {currentGrid == "nav" ? (
            <XIcon className={l["bar-icon"]} />
          ) : (
            <GridIcon className={`${l["bar-icon"]} ${l["grid-icon"]}`} />
          )}
        </button>
      </div>

      <div
        className={`${l["social-grid"]} ${l["subcontainer"]}`}
        ref={socialRef}
      >
        <nav className={l["subcontainerNav"]}>
          <div className={l["subcontainerDiv"]}>
            <GridItem
              name="dribbble"
              type={"social"}
              link={"https://dribbble.com/ungarmichael"}
            />
            <GridItem
              name="github"
              link={"https://github.com/ungarmichael"}
              type={"social"}
            />
            <GridItem name="linkedin" link={""} type={"social"} />
            <GridItem
              name="twitter"
              link={"https://twitter.com/ungarmichael_"}
              type={"social"}
            />
          </div>
        </nav>
      </div>

      <div className={`${l["nav-grid"]} ${l["subcontainer"]}`} ref={navRef}>
        <nav className={l["subcontainerNav"]}>
          <div className={l["subcontainerDiv"]}>
            <GridItem name="01.about" link={"about"} type={"nav"} />
            <GridItem name="02.experience" link={"experience"} type={"nav"} />
            <GridItem name="03.projects" link={"projects"} type={"nav"} />
            <GridItem name="04.contact" link={"contact"} type={"nav"} />
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Bottomnav;
