import React from "react";

import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="SEprator"></div>
      <div className="projects" id="Project">
        <h1>Projects</h1>
        <div className="projectsCards">
          <a
            href="https://github.com/HamayoonDEV/netflixclone"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="projectCard">
              <h2>
                Netflix Clone Web <br /> Application
              </h2>
              <img src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" />
            </div>
          </a>

          <a
            href="https://github.com/HamayoonDEV/coin-bounce"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="projectCard">
              <h2>
                Coin Bounce Web <br /> Application
              </h2>
              <img src="https://www.citypng.com/public/uploads/preview/-51614549017pzr1mxsclw.png" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
