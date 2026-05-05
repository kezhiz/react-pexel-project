import React from "react";
import grade from "./images/grade.png";

const Projects = () => {
  return (
    <div className="content" style={{ minHeight: "80vh" }}>
      <div className="title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img
            src={grade}
            alt="Grade input form preview"
            className="project-image"
          />
          <div className="project-content">
            <h2>Grade Input Form</h2>

            <div className="tags">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>SCSS</span>
            </div>
            <p>
              A form practice project for entering grades and calculating
              results.
            </p>
          </div>
          <div className="card_btn">
            <a
              href="https://kezhiz.github.io/practice_Grade-Input-Form/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn_primary"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/kezhiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn_secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
