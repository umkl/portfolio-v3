import React from "react";
import PropTypes from "prop-types";
import GithubLogo from "../../../../assets/Icons/github.svg";
import LinkIcon from "../../../../assets/Icons/link.svg";
import { IProject } from "../../../lib/projects";

import f from "./../../../styles/fonts.module.scss";
import c from "./../../../styles/components.module.scss";
import l from "../../content/Projects/projects.module.scss";

function FProject({ Project }: { Project: IProject }) {
  return (
    <div className={l["Content-coordinator"]}>
      <div className={l["Container"]}>
        <p className={f["Projects-code-1"]}>Featured Project</p>
        <p className={f["Projects-code-2"]}>{Project.date}</p>
        <h1 className={f["Projects-heading-1"]}>{Project.title}</h1>
        <div className={l["Text-container"]}>
          <div
            className={f["Projects-text-1"]}
            dangerouslySetInnerHTML={{ __html: Project.contentHtml }}
          ></div>
        </div>

        <div className={f["Projects-code-3"]}>{Project.components}</div>
        <div className={l["Iconframe"]}>
          {Project.githubURL != undefined ? (
            <a href={Project.githubURL}>
              <GithubLogo className={l["icon"]} />
            </a>
          ) : null}
          {Project.URL != undefined ? (
            <a href={Project.URL}>
              <LinkIcon className={l["icon"]} />
            </a>
          ) : null}
        </div>
      </div>
      <div
        className={l["project-image"]}
        style={{ backgroundImage: `url(${Project.imageURL})` }}
      ></div>
    </div>
  );
}

FProject.propTypes = {};

export default FProject;
