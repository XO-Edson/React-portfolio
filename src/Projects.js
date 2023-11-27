import React from "react";
import project1 from "./img/Screenshot 2023-11-15 172448.png";

export const Projects = () => {
  return (
    <section className="projects">
      <h1>PROJECTS</h1>
      <div className="project-container" id="projects">
        <h2>Interactive Comments Section</h2>
        <div className="project">
          <div className="project-align">
            <p>
              Explore a responsive comments section where you can send, delete,
              reply, and edit posts. Please note that the information presented
              here is hardcoded for illustrative purposes.
            </p>
            <div>
              <button>Live site</button>
              <button>Github </button>
            </div>
          </div>
          <div className="project-preview-img">
            <img src={project1} alt="" />
          </div>
        </div>
        <h2>PROJECT TWO</h2>
        <div className="project">
          <div className="project-preview-img alt">
            <img src={project1} alt="" />
          </div>
          <div className="project-align">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              tempora assumenda eveniet earum, ipsa, iusto cupiditate saepe
              dolorem quo tempore at aliquid aperiam voluptatem sequi. Ullam eum
              molestiae neque rerum?
            </p>
            <div>
              <button>Live site</button>
              <button>Github </button>
            </div>
          </div>
        </div>
        <h2>PROJECT THREE</h2>
        <div className="project">
          <div className="project-align">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              tempora assumenda eveniet earum, ipsa, iusto cupiditate saepe
              dolorem quo tempore at aliquid aperiam voluptatem sequi. Ullam eum
              molestiae neque rerum?
            </p>
            <div>
              <button>Live site</button>
              <button>Github </button>
            </div>
          </div>
          <div className="project-preview-img">
            <img src={project1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
