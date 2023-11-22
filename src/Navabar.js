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
        className="menu-bg"
        style={{ visibility: active ? "visible" : "hidden" }}
      >
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            {" "}
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger ${active ? "active" : "hamburger"}`}
        onClick={toggleHamburger}
      >
        <div className="bar"></div>
        <div className="bar mid"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};
