import f from "./../../../styles/fonts.module.scss";
import landingStyle from "@styles/landing.module.scss";
import c from "./../../../styles/components.module.scss";
import useTranslation from "next-translate/useTranslation";
import { gsap, TweenMax, Power3 } from "gsap";
import { useEffect, useRef } from "react";

const Home = (): JSX.Element => {
  const homeRef = useRef(null);
  const { t } = useTranslation("common");

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
          <p id={landingStyle.introduction}>{t("introduction")}</p>
          <p id={landingStyle.myname}>Michael Ungar.</p>
        </h1>
        <h2>
          <p id={landingStyle.profession}>{t("profession")}</p>
        </h2>
        <p id={landingStyle.whatido}>
          I&apos;m a software engineer and creator currently working as a
          freelancer focused on creating flawless code and maginificient
          designs.
        </p>
      </div>
    </section>
  );
};

export default Home;
