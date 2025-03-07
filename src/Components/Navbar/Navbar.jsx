import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="left">Affan Ahammed</div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contactMe">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
