import React from "react";
import "../styles/Home.css";
import mefishing from "../images/mefishing.jpg";

function Home() {
  return (
    <div className="mainBox">
      <div className="aboutMe">
        <div className="abme">About Me</div>
      </div>
      <div className="picture">
        <img
          className="btn"
          src={mefishing}
          alt="picture of me holding a fish"
        ></img>
      </div>
      <div className="content">
        <p>
          Hi, I'm Christian! I'm a passionate web developer with a love for
          creating engaging and user-friendly experiences. I enjoy turning ideas
          into reality by bringing them to life through code. With a keen eye
          for design and a problem-solving mindset, I strive to build visually
          appealing and functional websites that deliver a seamless user
          experience.
        </p>
      </div>
    </div>
  );
}
export default Home;
