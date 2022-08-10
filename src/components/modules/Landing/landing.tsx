import f from "./../../../styles/fonts.module.scss";
import landingStyle from "@styles/landing.module.scss";
import c from "./../../../styles/components.module.scss";

import { gsap, TweenMax, Power3 } from "gsap";
import { useEffect, useRef } from "react";

const Home = (): JSX.Element => {
  const homeRef = useRef(null);
  useEffect(() => {
    gsap.to(homeRef.current, {
      opacity: 1,
      top: "50%",
      duration: 0.8,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <section className={landingStyle["Section"]}>
      <div ref={homeRef} className={landingStyle["Container"]}>
        <h1>
          <p className={f["Home-Code-1"]}>Hi, my name is</p>
          <p className={f["Home-Heading-1"]}>Michael Ungar.</p>
        </h1>
        <h2>
          <p className={f["Home-Heading-2"]}>
            Developer and Designer from Austria.
          </p>
        </h2>
        <p className={f["Home-Text-1"]}>
          I&apos;m a software engineer and creator currently working as a freelancer
          focused on creating flawless code and maginificient designs.
        </p>
      </div>
    </section>
  );
};

export default Home;
