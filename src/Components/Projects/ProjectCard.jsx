import React from "react";
import "./Projects.css";

const ProjectCard = ({ title, description, WebsiteLink, GithubLink }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-links">
        <a href={WebsiteLink} target="_blank">
          Website
        </a>
        <a href={GithubLink} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
