import { Link, animateScroll as scroll, scroller } from "react-scroll";
import f from "./../../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import topNavStyle from "@styles/topnav.module.scss";
import { useRouter } from "next/router";
import { callbackify } from "util";
import useTranslation from "next-translate/useTranslation";

const TopNav = () => {
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

  return (
    <nav className={topNavStyle.Parent}>
      <ul className={topNavStyle.ListParent}>
        <li onClick={scrollToServices}>
          <span className={topNavStyle.navCode}> 02.</span>
          <span className={topNavStyle.navHeading}>{t("services")}</span>
        </li>
        <li onClick={scrollToExperiences}>
          <span className={topNavStyle.navCode}> 02.1.</span>
          <span className={topNavStyle.navHeading}>{t("experience")}</span>
        </li>
        <li onClick={scrollToProjects}>
          <span className={topNavStyle.navCode}> 01.</span>
          <span className={topNavStyle.navHeading}>{t("projects")}</span>
        </li>
        <li onClick={scrollToContact}>
          <span className={topNavStyle.navCode}> 00.2.</span>
          <span className={topNavStyle.navHeading}>{t("contact")}</span>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
