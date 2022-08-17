import React from "react";
import servicesStyle from "@styles/services.module.scss";
import { BrandAdobe } from "tabler-icons-react";
import { Element } from "react-scroll";
import useTranslation from "next-translate/useTranslation";

const Services = () => {
  const { t } = useTranslation("common");

  return (
    <Element name="02services">
      <section className={servicesStyle.content} id="02services">
        <h1 className={servicesStyle.heading}>
          <span className={servicesStyle.code}>02.</span>{" "}
          <span> {t("services")}</span>
        </h1>
        <Service />
      </section>
    </Element>
  );
};

const Service = () => {
  return (
    <div id={servicesStyle.gig}>
      <h2 className={servicesStyle.heading2}>
        <span className={servicesStyle.code}>02.1.</span>{" "}
        <span>Webdevelopment</span>
      </h2>
      <div id={servicesStyle.split}>
        <div id={servicesStyle.interaction}>
          <p>
            I am offering the service to build your website. I can build your
            website from scratch or update your existing website.
          </p>

          <button id={servicesStyle.reachbtn}>reach out to me</button>
          <button id={servicesStyle.fiverrbtn}>fiverr gig</button>
        </div>
        {/* <div id={servicesStyle.picture}>picture</div> */}
      </div>
    </div>
  );
};

export default Services;
