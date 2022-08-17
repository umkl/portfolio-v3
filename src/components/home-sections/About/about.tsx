import React from "react";
import Head from "next/head";
import f from "./../../../styles/fonts.module.scss";
import l from "@styles/about.module.scss";
import Image from "next/image";

function About() {
  return (
    <>
      <Head>
        <title>ungarmichael - portfolio</title>
      </Head>

      <section className={l["Section"]} id="about">
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>01.</span>
          <span className={f["Section-Heading-1"]}>About</span>
        </h2>
        <div className={l["Content-Wrapper"]}>
          <div className={l["Text-Container"]}>
            <p className={f["About-Text-1"]}>
              Hello!, I am Michael and I really enjoy creating things. My
              interest in tech in general started with lego mindstorms and
              circuit-soldering kits back when I was about 8 years old. After
              watching countless youtube-tutorials my parents allowed me to
              build my own computer after proving thems I was capable of doing
              so. Eventually I got into coding when trying to create minecraft
              mods and servers. In my first year at the HTL Grieskirchen for
              Computer Science I was able to learn about all of the possibilites
              with code.
              <br />
              <br />
              After completing many youtube tutorials and online courses I
              continuesly found myself at creating web applications with
              ReactJS. I also learned a lot about project management because I
              wanted to have my creations as structured and organised as
              possible even though it sometimes cost me more time than actually
              coding it.
              <br />
              <br />
              Right now I design, manage and develop projects for various
              clients and as already meantioned I am attending highschool.
              Eventually I would like to work in the tech-industry creating
              awesome projects with awesome people!
              <br />
              <br />
              Besides that I also love to interact with coding-communities and
              implement my own ideas.
              <br />
              <br />
              Here are a few technologies I am currently working with:
            </p>

            <div className={l["tech-element"]}>
              <div className={l["list-indicator"]} />
              <div className={f["about-code-1"]}>ReactJS/NextJS</div>
            </div>
            <div className={l["tech-element"]}>
              <div className={l["list-indicator"]} />
              <div className={f["about-code-1"]}>Typescript</div>
            </div>
            <div className={l["tech-element"]}>
              <div className={l["list-indicator"]} />
              <div className={f["about-code-1"]}>Figma</div>
            </div>
            <div className={l["tech-element"]}>
              <div className={l["list-indicator"]} />
              <div className={f["about-code-1"]}>C#/.NET</div>
            </div>
            <div className={l["tech-element"]}>
              <div className={l["list-indicator"]} />
              <div className={f["about-code-1"]}>Ruby</div>
            </div>
          </div>

          <div className={l["Image-Wrapper"]}>
            <div className={l["Image-Filter"]}></div>
            <div className={l["Image-Mask"]}>
              <div className={l["Image-Container"]}>
                <Image
                  className={l["Image"]}
                  layout="responsive"
                  height={500}
                  width={900}
                  src={"/images/setup.jpg"}
                  alt="Michael's setup"
                />
              </div>
            </div>
            <div className={l["Image-Frame"]}></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
