import { getAllProjectsIds, getProjectData } from "../../../lib/projects";
import Head from "next/head";
import Date from "../../elements/date";
import { GetStaticPaths, GetStaticProps } from "next";

export default function ProjectDetail() {
  return (
    <>
      {/* <Head>
        <title>{eventData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingLg}>{eventData.title}</h1>
        <Date dateString={eventData.date} />
        <div
          className={utilStyles.textMd}
          dangerouslySetInnerHTML={{ __html: eventData.contentHtml }}
        />
      </article> */}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventData = await getAllProjectsIds();
  return {
    props: {
      eventData,
    },
  };
};
