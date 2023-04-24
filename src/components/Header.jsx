import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id="header">
      <h2 id="site-name">
        <a href="/">Madiha Umair</a>
      </h2>
      <h2 id="site-name-for-mobile">
        <a href="/">MU</a>
      </h2>
      {/* Display the desktop menu for larger screens */}
      <nav className="desktop-menu">
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