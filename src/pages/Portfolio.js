import React from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Fitness Web App",
    imageSrc: "./fitnessapp.png",
    deployLink: "https://tskinner429.github.io/super-team-project/",
    githubLink: "https://github.com/tskinner429/super-team-project",
  },
  {
    title: "Steam Game Reviews",
    imageSrc: "path/to/project2-image.png",
    deployLink: "https://stark-beyond-75497.herokuapp.com/",
    githubLink: "https://github.com/kylemoely/Steam-Game-Review",
  },
  {
    title: "Browser text editor",
    imageSrc: "path/to/project3-image.png",
    deployLink: "https://c19-text-editor-by-christian.herokuapp.com/",
    githubLink: "https://github.com/christian6404/c19-Text-Editor",
  },
  {
    title: "README.md generator",
    imageSrc: "path/to/project4-image.png",
    githubLink: "https://github.com/christian6404/readMeGen",
  },
  {
    title: "Mongo.db Social Networking Backend",
    imageSrc: "path/to/project5-image.png",
    githubLink:
      "https://github.com/christian6404/C18-noSQL-Social-Networking-App",
  },
  {
    title: "Local Storage Note Taker",
    imageSrc: "path/to/project6-image.png",
    deployLink: "https://christians-note-taker-app.herokuapp.com/",
    githubLink: "https://github.com/christian6404/notetaker",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projectList">
        {projects.map((project, index) => (
          <div className="projectItem" key={index}>
            {/* <img src={project.imageSrc} alt={project.title} /> */}
            <div className="projectTitle">{project.title}</div>
            <div className="projectLinks">
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed App
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
