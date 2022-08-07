import f from "./../../../styles/fonts.module.scss";
import c from "./../../../styles/components.module.scss";
import l from "./experienceFullList.module.scss";
import { getExperienceByCompany } from "../../home-sections/Experience/experience";
import ExperienceComponent from "./experience";

function ExperienceFullList() {
  // const { experience } = props;
  return (
    <div className={l["parent"]}>
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
