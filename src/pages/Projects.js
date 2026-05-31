import React from "react";
import grade from "./images/grade.png";

const Projects = () => {
  return (
    <section className="content">
      <div className="title">
        <p className="eyebrow">Selected Work</p>
        <h1>My Projects</h1>
        <p>陸續增加中...</p>
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
              A grade entry tool that practices form handling, validation, and
              result calculation in a simple browser interface.
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

      {/* <div className="projects-container">
        <div className="project-card">
          <img
            src={grade}
            alt="Grade input form preview"
            className="project-image"
          />
          <div className="project-content">
            <h2>React Pexels Gallery</h2>

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
      </div> */}
    </section>
  );
};

export default Projects;
