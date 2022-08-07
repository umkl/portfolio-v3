import React from "react";
import GithubLogo from "../../../../assets/Icons/github.svg";
import LinkIcon from "../../../../assets/Icons/link.svg";
import { IProject } from "@lib/projects";

import f from "./../../../styles/fonts.module.scss";
import fProjectStyling from "@styles/projects.module.scss";

function FProject({ Project }: { Project: IProject }) {
  return (
    <div className={fProjectStyling["Content-coordinator"]}>
      <div className={fProjectStyling["Container"]}>
        <p className={f["Projects-code-1"]}>Featured Project</p>
        <p className={f["Projects-code-2"]}>{Project.date}</p>
        <h1 className={f["Projects-heading-1"]}>{Project.title}</h1>
        <div className={fProjectStyling["Text-container"]}>
          <div
            className={f["Projects-text-1"]}
            dangerouslySetInnerHTML={{ __html: Project.contentHtml }}
          ></div>
        </div>

        <div className={f["Projects-code-3"]}>{Project.components}</div>
        <div className={fProjectStyling["Iconframe"]}>
          {Project.githubURL != undefined ? (
            <a href={Project.githubURL}>
              <GithubLogo className={fProjectStyling["icon"]} />
            </a>
          ) : null}
          {Project.URL != undefined ? (
            <a href={Project.URL}>
              <LinkIcon className={fProjectStyling["icon"]} />
            </a>
          ) : null}
        </div>
      </div>
      <div
        className={fProjectStyling["project-image"]}
        style={{ backgroundImage: `url(${Project.imageURL})` }}
      ></div>
    </div>
  );
}

FProject.propTypes = {};

export default FProject;
