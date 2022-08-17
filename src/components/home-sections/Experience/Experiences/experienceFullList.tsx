import experienceFullListStyle from "@styles/experienceFullList.module.scss";
import { getExperienceByCompany } from "../experience";
import ExperienceComponent from "./experience";

function ExperienceFullList() {
  // const { experience } = props;
  return (
    <div className={experienceFullListStyle.parent}>
      <div className={experienceFullListStyle["full-bar"]} />
      <ul className={experienceFullListStyle["unordered-full"]}>
        <li className={experienceFullListStyle["unordered-listitem"]}>
          <div className={experienceFullListStyle["full-indicator"]}></div>
          <ExperienceComponent
            experience={getExperienceByCompany("Fiverr")}
          />
        </li>
        <li className={experienceFullListStyle["unordered-listitem"]}>
          <div className={experienceFullListStyle["full-indicator"]}></div>
          <ExperienceComponent
            experience={getExperienceByCompany("VortexData")}
          />
        </li>
        <li className={experienceFullListStyle["unordered-listitem"]}>
          <div className={experienceFullListStyle["full-indicator"]}></div>
          <ExperienceComponent
            experience={getExperienceByCompany("Fronius")}
          />
        </li>
        <li className={experienceFullListStyle["unordered-listitem"]}>
          <div className={experienceFullListStyle["full-indicator"]}></div>
          <ExperienceComponent
            experience={getExperienceByCompany("Puttinger")}
          />
        </li>
      </ul>
    </div>
  );
}
export default ExperienceFullList;
