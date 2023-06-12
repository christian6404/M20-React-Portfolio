import React from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Project 1",
    imageSrc: "path/to/project1-image.png",
    deployLink: "https://example.com/project1",
    githubLink: "https://github.com/example/project1",
  },
  {
    title: "Project 2",
    imageSrc: "path/to/project2-image.png",
    deployLink: "https://example.com/project2",
    githubLink: "https://github.com/example/project2",
  },
  {
    title: "Project 3",
    imageSrc: "path/to/project3-image.png",
    deployLink: "https://example.com/project3",
    githubLink: "https://github.com/example/project3",
  },
  {
    title: "Project 4",
    imageSrc: "path/to/project4-image.png",
    deployLink: "https://example.com/project4",
    githubLink: "https://github.com/example/project4",
  },
  {
    title: "Project 5",
    imageSrc: "path/to/project5-image.png",
    deployLink: "https://example.com/project5",
    githubLink: "https://github.com/example/project5",
  },
  {
    title: "Project 6",
    imageSrc: "path/to/project6-image.png",
    deployLink: "https://example.com/project6",
    githubLink: "https://github.com/example/project6",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projectList">
        {projects.map((project, index) => (
          <div className="projectItem" key={index}>
            <img src={project.imageSrc} alt={project.title} />
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
