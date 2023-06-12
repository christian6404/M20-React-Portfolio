import React from "react";
import "../styles/Resume.css";

function Resume() {
  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "Git",
    "Responsive Web Design",
    "UI/UX Design",
  ];

  return (
    <div className="resume">
      <h2>Resume</h2>
      <p>
        Download my resume:
        <a href="../images/resume.pdf" download>
          Resume.pdf
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <p key={index}>{proficiency}</p>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
