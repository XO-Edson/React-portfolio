import React from "react";

export const Navabar = () => {
  return (
    <header>
      <div className="logo">
        <p>EDSON.DEV</p>
      </div>
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
    </header>
  );
};
