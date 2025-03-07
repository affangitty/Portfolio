import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skillsSection" id="Skills">
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-category">
          <h2>Programming Languages</h2>
          <ul>
            <li>C/C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Front-end Development</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Back-end Development</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>EJS</li>
            <li>API</li>
          </ul>
        </div>
        <div className="skill-category">
          <h2>Tools</h2>
          <ul>
            <li>Git</li>
            <li>Windows</li>
            <li>Postman API</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
