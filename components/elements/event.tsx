import eventStyles from "./event.module.scss";
import React, { useState } from "react";
import SuperEllipse from "react-superellipse";
import utilStyles from "./../../styles/utils.module.scss";
import Link from "next/link";
import MelloImage from "./../../assets/Illustrations/image-event-1-mello_live_music.svg";
import Date from "./date";
import { useSpring, animated as a } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

interface IEvent {
  id: string;
  contentHtml: string;
  date: string;
  title: string;
}

export const Event = (eventData: IEvent) => {
  const [isVisible, setVisible] = useState(false);
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    marginLeft: isVisible ? "0px" : "-500px",
  });

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(sensorTriggered) => {
        if (sensorTriggered && isVisible != true) {
          setVisible(true);
        }
      }}
    >
      <a.div style={springProps} className={eventStyles.eventContainer}>
        <Link href={`/Events/${eventData.id}`}>
          <SuperEllipse
            r1={0.0000006}
            r2={0.232}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: 9999,
              backgroundColor: utilStyles.se_blue_light,
            }}
          >
            <div className={eventStyles.eventContent}>
              <div className={eventStyles.imagePart}>
                <MelloImage />
              </div>
              <div className={eventStyles.textpart}>
                <h2 className={eventStyles.title}>{eventData.title}</h2>
                <Date dateString={eventData.date} />
                <div
                  className={eventStyles.contentHTML}
                  dangerouslySetInnerHTML={{ __html: eventData.contentHtml }}
                ></div>
              </div>
            </div>
          </SuperEllipse>
        </Link>
      </a.div>
    </VisibilitySensor>
  );
};

export default Event;
