import React from "react";
import Head from "next/head";
import f from "./../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import l from "./experience.module.scss";

interface Props {}

function Experience(props: Props) {
  const {} = props;

  return (
    <>
      <section className={c["Section"]}>
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>02.</span>
          <span className={f["Section-Heading-1"]}>My Experience</span>
        </h2>
      </section>
    </>
  );
}

export default Experience;
