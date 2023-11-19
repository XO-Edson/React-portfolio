import React from "react";
import project1 from "./img/Screenshot 2023-11-15 172448.png";

export const Projects = () => {
  return (
    <section className="projects">
      <h1>PROJECTS</h1>
      <div className="project-container" id="projects">
        <div className="project">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tempora assumenda eveniet earum, ipsa, iusto cupiditate saepe
            dolorem quo tempore at aliquid aperiam voluptatem sequi. Ullam eum
            molestiae neque rerum?
          </p>
          <div className="project-preview-img">
            <img src={project1} alt="" />
          </div>
        </div>
        <div className="project">
          <div className="project-preview-img">
            <img src={project1} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tempora assumenda eveniet earum, ipsa, iusto cupiditate saepe
            dolorem quo tempore at aliquid aperiam voluptatem sequi. Ullam eum
            molestiae neque rerum?
          </p>
        </div>
        <div className="project">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tempora assumenda eveniet earum, ipsa, iusto cupiditate saepe
            dolorem quo tempore at aliquid aperiam voluptatem sequi. Ullam eum
            molestiae neque rerum?
          </p>
          <div className="project-preview-img">
            <img src={project1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
