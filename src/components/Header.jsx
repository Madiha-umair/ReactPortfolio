import React, { useState } from "react";
import aboutImage from '../assets/images/about.jpg';
import projectsImage from '../assets/images/projects.jpg';
import qualificationImage from '../assets/images/qualification.jpg';
import skillsImage from '../assets/images/skills.jpg';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id="header">
      <h2 id="site-name">
        <a href="/">MU</a>
      </h2>
      <h2 id="site-name-for-mobile">
        <a href="/">MU</a>
      </h2>
      {/* Display the desktop menu for larger screens */}
      <nav className="desktop-menu">
        <ul>
          <li>
            <a href="#about">
            <div id="aboutimg">
            <img src={aboutImage} alt="profile icon" width= "30" height="30" />
            </div></a>
          </li>
          <li>
            <a href="#projects">
            <div id="projectimg">
            <img src={projectsImage} alt="project icon" width= "30" height="30" />
            </div>
            </a>
          </li>
          <li>
            <a href="#education">
            <div id="educationimg">
            <img src={qualificationImage} alt="education icon" width= "40" height="30" />
            </div>
            </a>
          </li>
          <li>
            <a href="#skills">
            <div id="skillimg">
            <img src={skillsImage} alt="skills icon" width= "30" height="30" />
            </div>
            </a>
          </li>
        </ul>
      </nav>
      {/* Display the toggle button and mobile menu for smaller screens */}
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        Menu
      </div>
      {showMenu && (
        <nav className="mobile-menu">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Qualification</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
      )}
      </header>
  );
}