import React from "react";

import { IProject } from "@lib/projects";
import fProjectStyling from "@styles/projects.module.scss";
import { BrandGithub, Link } from "tabler-icons-react";

function FProject({ Project }: { Project: IProject }) {
  return (
    <div id={fProjectStyling.parent}>
      <div className={fProjectStyling["Container"]}>
        <p id={fProjectStyling.featuredProj}>Featured Project</p>
        <p id={fProjectStyling.projDate}>{Project.date}</p>
        <h1 id={fProjectStyling.projTitle}>{Project.title}</h1>
        <div id={fProjectStyling.textContainer}>
          <div
            id={fProjectStyling.description}
            dangerouslySetInnerHTML={{ __html: Project.contentHtml }}
          ></div>
        </div>

        <div id={fProjectStyling.components}>{Project.components}</div>
        <div id={fProjectStyling.iconFrame}>
          {Project.githubURL != undefined ? (
            <a href={Project.githubURL}>
              <BrandGithub className={fProjectStyling.icon} />
            </a>
          ) : null}
          {Project.URL != undefined ? (
            <a href={Project.URL}>
              <Link className={fProjectStyling.icon} />
            </a>
          ) : null}
        </div>
      </div>
      <div
        id={fProjectStyling.projImage}
        style={{ backgroundImage: `url(${Project.imageURL})` }}
      ></div>
    </div>
  );
}

FProject.propTypes = {};

export default FProject;
