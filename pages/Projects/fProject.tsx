import React from "react";
import PropTypes from "prop-types";
import GithubLogo from "./../../assets/Icons/github.svg";
import LinkIcon from "./../../assets/Icons/link.svg";
import { IProject } from "../../lib/projects";

function FProject({ Project }: { Project: IProject }) {
  // const Project = props;
  console.log(Project);
  return (
    <div>
      <p>Featured Project</p>
      <p>{Project.date}</p>
      <h1>{Project.title}</h1>
      <p>{Project.contentHtml}</p>
      <p>{Project.components}</p>
      {Project.githubURL != undefined ? (
        <a>
          <GithubLogo />
        </a>
      ) : null}
      {Project.URL != undefined ? (
        <a>
          <LinkIcon />
        </a>
      ) : null}
    </div>
  );
}

FProject.propTypes = {};

export default FProject;
