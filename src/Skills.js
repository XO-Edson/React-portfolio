import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {
  return (
    <div className="skills-container">
      <section className="skills">
        <h1>SKILLS</h1>

        <p>
          The main area of expertise is front-end development, with a strong
          focus on creating intuitive and responsive user interfaces using the
          latest technologies such as React.js. Proficient in crafting
          pixel-perfect designs into functional and user-friendly websites,
          employing a blend of HTML, CSS, and JavaScript to bring ideas to life.
          Extensive experience in optimizing website performance and ensuring
          cross-browser compatibility. Well-versed in modern frameworks and
          libraries, continually learning and adapting to new industry trends to
          deliver innovative and impactful solutions.
        </p>

        <article className="languages">
          <div>
            <FontAwesomeIcon icon={faHtml5} className="icon" />
            <p>HTML5</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCss3Alt} className="icon" />
            <p>CSS3</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faJs} className="icon" />
            <p>JavaScript</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faReact} className="icon" />
            <p>React</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGitAlt} className="icon" />
            <p>Git</p>
          </div>
        </article>
      </section>
    </div>
  );
};
