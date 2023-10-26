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
      <div id={servicesStyle.container}>
        <h1>Webdeveloper</h1>
        <h2>since 2020</h2>
        <h3>20€ per hour</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>
          <span>React</span>·<span>Javascript ES6</span>·<span>Typescript</span>
          ·<span>LoislScript</span>
        </p>
        <div id={servicesStyle.spacer}></div>
        <div id={servicesStyle.buttonParent}>
          <button>make an inquiry</button>
          <button>projects</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
