import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navMenu">
      <div className="name">Christian Smith</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  );
}

export default Navbar;
