import React, { useState } from "react";

export const Navabar = ({ active, setActive }) => {
  const toggleHamburger = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <header>
      <div className="logo">
        <p>EDSON.DEV</p>
      </div>
      <div
        className={`menu-bg ${active ? "menu-bg-active" : ""}`}
        style={{ visibility: active ? "visible" : "hidden" }}
      >
        <ul>
          <li>
            <a href="#home" onClick={toggleHamburger}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleHamburger}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleHamburger}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleHamburger}>
              PROJECTS
            </a>
          </li>
          <li>
            {" "}
            <a href="#contact" onClick={toggleHamburger}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger ${active ? "active" : ""}`}
        onClick={toggleHamburger}
      >
        <div className="bar"></div>
        <div className="bar mid"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};
