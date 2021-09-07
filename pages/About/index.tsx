import React from "react";
import Head from "next/head";
import f from "./../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import l from "./about.module.scss";

// import aboutStyles from "./about.module.scss";
// import utilStyles from "./../../styles/utils.module.scss";

function About() {
  return (
    <>
      <Head>
        <title>About - Octagon</title>
      </Head>

      <section className={c["Section"]}>
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>01.</span>
          <span className={f["Section-Heading-1"]}>About</span>
        </h2>
        <p className={`${l["Text-Container"]} ${f["About-Text-1"]}`}>
          Hello! My name is Michael and I enjoy creating things that live on the
          internet. My interest in programming started in 2018 when I learned
          about the possiblities of programming over soloLearn. My
          <br />
          <br />
          Later I
          <br />
          <br />
          Fast-forward to today, and I've had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
          <br />
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
          <br />
          <br />
          <br />
          Here are a few technologies I've been working with recently:
        </p>
      </section>
    </>
  );
}

export default About;
