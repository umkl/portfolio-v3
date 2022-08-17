import React, { useState, useRef, useEffect } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import f from "@styles/fonts.module.scss";
import c from "@styles/components.module.scss";
import bottomNavStyles from "@styles/bottomnav.module.scss";
import { gsap, TweenMax, Power3 } from "gsap";
import { ArrowsSplit2, X, Link } from "tabler-icons-react";

import GlobeIcon from "../../../../assets/Icons/globe.svg";
import GridIcon from "../../../../assets/Icons/gridburger.svg";
import XIcon from "../../../../assets/Icons/x.svg";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

function Bottomnav() {
  const [navActive, setNavActive] = useState(false);
  const [socialsActive, setSocialsActive] = useState(false);
  const tlnav = useRef(null);

  const socialRef = useRef(null);
  const navRef = useRef(null);

  const router = useRouter();
  const { t } = useTranslation("common");
  const evalauteIfPushRoute = (callback: () => void) => {
    if (router.pathname !== "/") {
      router.push("/").then(() => callback());
      return;
    }
    callback();
  };

  const scrollToServices = () => {
    evalauteIfPushRoute(() =>
      scroller.scrollTo("02services", {
        duration: 500,
        smooth: true,
        offset: -70,
      })
    );
  };

  const scrollToExperiences = () => {
    evalauteIfPushRoute(() =>
      scroller.scrollTo("021experience", {
        duration: 500,
        smooth: true,
        offset: -70,
      })
    );
  };

  const scrollToProjects = () => {
    evalauteIfPushRoute(() =>
      scroller.scrollTo("01projects", {
        duration: 500,
        smooth: true,
        offset: -70,
      })
    );
  };

  const scrollToContact = () => {
    evalauteIfPushRoute(() =>
      scroller.scrollTo("002contact", {
        duration: 500,
        smooth: true,
        offset: -70,
      })
    );
  };

  useEffect(() => {
    gsap.to(tlnav.current, {
      opacity: 1,
      marginBottom: "0px",
      duration: 0.5,
      ease: Power3.easeOut,
    });
  }, []);

  const toggleNavContainer = () => {
    gsap.to(navRef.current, {
      opacity: navActive ? 0 : 1,
      display: "block",
      marginBottom: "0px",
      duration: 0.5,
      ease: Power3.easeOut,
    });
  };

  const toggleSocialContainer = () => {
    gsap.to(socialRef.current, {
      opacity: socialsActive ? 0 : 1,
      display: "block",
      marginBottom: "0px",
      duration: 0.5,
      ease: Power3.easeOut,
    });
  };
  const onClickNavBtn = () => {
    if (socialsActive) hideSocials();
    setNavActive(!navActive);
    toggleNavContainer();
  };

  const onClickSocialsBtn = () => {
    if (navActive) hideNav();
    setSocialsActive(!socialsActive);
    toggleSocialContainer();
  };

  const hideNav = () => {
    setNavActive(false);
    toggleNavContainer();
  };

  const hideSocials = () => {
    setSocialsActive(false);
    toggleSocialContainer();
  };

  return (
    <nav className={bottomNavStyles.bottomNav}>
      <div className={bottomNavStyles.tlnav} ref={tlnav}>
        <button
          className={bottomNavStyles.bottomNavBtn}
          onClick={() => onClickNavBtn()}
        >
          {navActive ? (
            <X className={bottomNavStyles["bar-icon"]} />
          ) : (
            <ArrowsSplit2 className={bottomNavStyles["bar-icon"]} />
          )}
        </button>
        <button
          className={bottomNavStyles.bottomNavBtn}
          onClick={() => onClickSocialsBtn()}
        >
          {socialsActive ? (
            <X className={bottomNavStyles["bar-icon"]} />
          ) : (
            <Link
              className={`${bottomNavStyles["bar-icon"]} ${bottomNavStyles["grid-icon"]}`}
            />
          )}
        </button>
      </div>
      <div className={bottomNavStyles.mobileRoutingContainer} ref={navRef}>
        <h1>Routes</h1>
        <nav>
          <ul className={bottomNavStyles.ListParent}>
            <li onClick={scrollToServices}>
              <span className={bottomNavStyles.navCode}> 02.</span>
              <span className={bottomNavStyles.navHeading}>
                {t("services")}
              </span>
            </li>
            <li onClick={scrollToExperiences}>
              <span className={bottomNavStyles.navCode}> 02.1.</span>
              <span className={bottomNavStyles.navHeading}>
                {t("experience")}
              </span>
            </li>
            <li onClick={scrollToProjects}>
              <span className={bottomNavStyles.navCode}> 01.</span>
              <span className={bottomNavStyles.navHeading}>
                {t("projects")}
              </span>
            </li>
            <li onClick={scrollToContact}>
              <span className={bottomNavStyles.navCode}> 00.2.</span>
              <span className={bottomNavStyles.navHeading}>{t("contact")}</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className={bottomNavStyles.mobileRoutingContainer} ref={socialRef}>
        <h1>Socials</h1>
        <nav>
          <ul className={bottomNavStyles.ListParent}>
            <li>
              <a
                className={bottomNavStyles.navHeading}
                href="https://www.linkedin.com/in/michael-ungar-9624391b4/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className={bottomNavStyles.navHeading}
                href="https://twitter.com/ungarmichael_"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className={bottomNavStyles.navHeading}
                href="https://github.com/ungarmichael"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className={bottomNavStyles.navHeading}
                href="https://dribbble.com/ungarmichael"
              >
                Dribbble
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default Bottomnav;
