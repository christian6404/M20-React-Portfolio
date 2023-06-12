import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Footer.css";
import emailBtn from "../images/email.png";
import githubBtn from "../images/github.png";
import linkedinBtn from "../images/linkedin.png";

function Footer() {
  const location = useLocation();
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation("fadeIn");
  }, [location]);

  return (
    <div className={`back ${animation}`}>
      <div className="btnBox">
        <a href="mailto:christian6404@gmail.com">
          <img className="btn" src={emailBtn} alt="email button" />
        </a>
        <a href="https://github.com/christian6404">
          <img className="btn" src={githubBtn} alt="github button" />
        </a>
        <a href="https://www.linkedin.com/in/christian-smith-b3093a26b/">
          <img className="btn" src={linkedinBtn} alt="linkedin button" />
        </a>
      </div>
      <p className="tag">&copy; 2023 Christian Smith</p>
    </div>
  );
}

export default Footer;
