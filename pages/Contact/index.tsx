import React from "react";
import Head from "next/head";
import f from "./../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import l from "./contact.module.scss";

interface Props {}

function Contact(props: Props) {
  const {} = props;
  return (
    <>
      <section className={c["Section"]}>
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>04.</span>
          <span className={f["Section-Heading-1"]}>Let us get in touch!</span>
        </h2>
      </section>
    </>
  );
}

export default Contact;
