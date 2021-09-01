import { GetStaticProps } from "next";
import { getCompleteSortedEventsData, IEventData } from "../../lib/events";
import utilStyles from "./../../styles/utils.module.scss";
import eventStyles from "./events.module.scss";
import Event from "../../components/elements/event";
import Head from "next/head";

const Events = ({
  allEventsData,
}: {
  allEventsData: IEventData[];
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>Events - Octagon</title>
      </Head>
      <main>
        <section className={`${eventStyles.section}`}>
          <h2 className={utilStyles.headingLg}>Unforgettable Moments</h2>
          <h3 className={utilStyles.headingMdFd}>
            Enjoy memorable occasions with your friends and family at Octagon
            Events.
          </h3>
          <p className={utilStyles.textMd}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius
            iste sed. Nesciunt officia doloremque fuga porro quam quod sequi
            cumque odit excepturi voluptates voluptatibus amet aut error, eos
            corporis? Libero quae voluptatum ad magnam fugiat ab ducimus.
            Inventore, accusantium! Laudantium suscipit fugit quis voluptates
            voluptatibus laborum nisi, iste temporibus repudiandae dolorum quos
            a expedita at? Similique exercitationem quo dolore.
          </p>
          <div className={eventStyles.upcmngHeader}>Upcoming Events</div>
        </section>
        {allEventsData.map(({ id, date, title, contentHtml }) => {
          return (
            <Event
              key={id}
              id={id}
              title={title}
              contentHtml={contentHtml}
              date={date}
            />
          );
        })}
      </main>
    </>
  );
};

export default Events;

export const getStaticProps: GetStaticProps = async () => {
  const allEventsData: IEventData[] = await getCompleteSortedEventsData();
  return {
    props: {
      allEventsData,
    },
  };
};
