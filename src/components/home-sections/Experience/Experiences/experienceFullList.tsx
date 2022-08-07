import l from "@styles/experienceFullList.module.scss";
import { getExperienceByCompany } from "../experience";
import ExperienceComponent from "./experience";

function ExperienceFullList() {
  // const { experience } = props;
  return (
    <div className={l.parent}>
      <div className={l["full-bar"]} />
      <ul className={l["unordered-full"]}>
        <li className={l["unordered-listitem"]}>
          <div className={l["full-indicator"]}></div>
          <ExperienceComponent
            experience={getExperienceByCompany("Fiverr")}
          />
        </li>
        <li className={l["unordered-listitem"]}>
          <div className={l["full-indicator"]}></div>
          <ExperienceComponent
            experience={getExperienceByCompany("VortexData")}
          />
        </li>
        <li className={l["unordered-listitem"]}>
          <div className={l["full-indicator"]}></div>
          <ExperienceComponent
            experience={getExperienceByCompany("Fronius")}
          />
        </li>
        <li className={l["unordered-listitem"]}>
          <div className={l["full-indicator"]}></div>
          <ExperienceComponent
            experience={getExperienceByCompany("Puttinger")}
          />
        </li>
      </ul>
    </div>
  );
}
export default ExperienceFullList;
