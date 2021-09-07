import React from "react";
import Head from "next/head";
import f from "./../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import l from "./projects.module.scss";

const Projects = ({}: // allEventsData,
{
  // allEventsData: IEventData[];
}): JSX.Element => {
  return (
    <>
      <section className={c["Section"]}>
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>03.</span>
          <span className={f["Section-Heading-1"]}>Things I have created</span>
        </h2>
      </section>
    </>
  );
};

export default Projects;

// export const getStaticProps: GetStaticProps = async () => {
//   const allEventsData: IEventData[] = await getCompleteSortedEventsData();
//   return {
//     props: {
//       allEventsData,
//     },
//   };
// };
