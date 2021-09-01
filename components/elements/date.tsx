import { parseISO, format } from "date-fns";
import styles from "./date.module.scss";
import CalendarIcon from "./../../assets/Icons/Calendar.svg";
import ClockIcon from "./../../assets/Icons/Clock.svg";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.icon}>
          <CalendarIcon />
        </div>
        <time className={styles.value} dateTime={dateString}>
          {format(date, "LLLL d, yyyy")}
        </time>
      </div>
      <div>
        <div className={styles.icon}>
          <ClockIcon />
        </div>
        <time className={styles.value} dateTime={dateString}>
          {format(date, "HH:mm")}
        </time>
      </div>
    </div>
  );
}
