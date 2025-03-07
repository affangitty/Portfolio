import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projectSection" id="Projects">
      <div className="projects">
        <h1>Projects</h1>
        <ProjectCard
          title="TripMate"
          description="An interactive travel companion app, helping users explore destinations, find nearby attractions, and plan routes effortlessly."
          WebsiteLink="https://trippmate.vercel.app/"
          GithubLink="https://github.com/affangitty/TripMate"
        />
        <ProjectCard
          title="JETSETMED"
          description="A multi-page frontend for assessing travel health, built with React.js and CSS. Designed to be modular and scalable for future integrations."
          WebsiteLink="http://jetsetmed.in"
          GithubLink="https://github.com/affangitty/JetSetMed"
        />
        <ProjectCard
          title="HackOff"
          description="An event platform for IET designed to deliver a smooth user experience with a responsive and interactive frontend, serving over 500 users."
          WebsiteLink="https://hackoff-v4-pi.vercel.app/"
          GithubLink="https://github.com/affangitty/hackoff-v4-placeholder"
        />
      </div>
    </section>
  );
}

export default Projects;
