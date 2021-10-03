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
      <section className={l["Section"]} id="contact">
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>04.</span>
          <span className={f["Section-Heading-1"]}>Contact</span>
        </h2>
        <h1 className={f["Contact-Heading-1"]}>Get in Touch</h1>
        <p className={f["Contact-Text-1"]}>
          I would love to chat with anyone who is interested in saying hello. So
          feel free to contact me!
        </p>
        <a href="mailto:ungarmichael.mail@gmail.com">
          <div className={l["Contact-button"]}>Send a mail</div>
        </a>
      </section>
    </>
  );
}

export default Contact;
