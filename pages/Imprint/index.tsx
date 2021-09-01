import Head from "next/head";
import React from "react";
import utilStyles from "./../../styles/utils.module.scss";

function Imprint() {
  return (
    <>
      <Head>
        <title>Imprint - Octagon</title>
        <link rel="icon" href="/Octagon-logo-black.ico"/>
      </Head>
      <main>
        <section className={utilStyles.sectionMargin}>
          <div>
            <h2 className={utilStyles.headingLg}>Imprint</h2>
            <h2 className={utilStyles.headingMdFd}>
              Provider identification acc. §5 TMG
            </h2>
            <div>
              <p className={utilStyles.textLg}>
                Octagon Loremstreet 1 · 1010 Vienna · Austria
                <br />
                <br />
                <span className={utilStyles.textLgBl}>E-mail:</span>{" "}
                office@octagon.at
                <br />
                <span className={utilStyles.textLgBl}>Telefon: </span>+43 123
                4567890
                <br />
                <br />
                <span className={utilStyles.textLgBl}>
                  Represented by:
                </span>{" "}
                Michael Ungar
              </p>
              <h2 className={utilStyles.headingMd}>Lorem, ipsum</h2>
              <h2 className={utilStyles.headingSlFd}>
                Lorem ipsum dolor sit amet consectetur.
              </h2>

              <p className={utilStyles.textMd}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                fugit odit quibusdam doloribus iure, quae reiciendis aspernatur
                aperiam inventore modi est totam pariatur, ab quasi iste
                deleniti, optio molestiae! Totam! Deleniti quia minus earum
                tempora explicabo obcaecati omnis ab vitae voluptate, ullam
                deserunt inventore alias ducimus quasi corporis exercitationem?
                Beatae vero totam, saepe deleniti incidunt dolores provident
                odit cum quo? Minus debitis ipsam explicabo expedita vero
                excepturi commodi quidem asperiores officia recusandae?
                Inventore earum, et hic eos molestias eum! Natus quam
                exercitationem sunt voluptatum suscipit, hic architecto
                voluptate magni cupiditate? Hic, nihil, ad officiis consequuntur
                inventore repellat illum, sint aliquid natus quaerat temporibus
                similique. Eveniet dolorum expedita omnis rerum, rem adipisci
                blanditiis quis magnam! Asperiores aperiam consectetur magni non
                totam?
              </p>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Imprint;
