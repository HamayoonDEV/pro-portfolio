import React from "react";

import Javascript from "../images/javaScript.png";
import react from "../images/react.png";
import redux from "../images/Redux.png";
import gitHub from "../images/github.png";
import nodejs from "../images/nodejs.png";
import express from "../images/express.png";
import css from "../images/css.png";
import monogoDB from "../images/mongodb.png";
import git from "../images/git.png";
import html from "../images/html.png";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="Seprator"></div>
      <div className="skills" id="Skills">
        <h2>Skills</h2>
        <div className="logo">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={Javascript} />
              <span>JavaScript</span>
            </div>
          </a>

          <a
            href="https://redux.js.org"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={redux} />
              <span>redux</span>
            </div>
          </a>

          <a
            href="https://nodejs.org/en/docs"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={nodejs} />
              <span>Node Js</span>
            </div>
          </a>

          <a
            href="https://www.mongodb.com/docs/"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={monogoDB} />
              <span>MongoDB</span>
            </div>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={html} />
              <span>HTML</span>
            </div>
          </a>

          <a
            href="https://git-scm.com/doc"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={git} />
              <span>Git</span>
            </div>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={css} />
              <span>CSS</span>
            </div>
          </a>

          <a
            href="https://docs.github.com/en"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={gitHub} />
              <span>GitHub</span>
            </div>
          </a>

          <a
            href="https://expressjs.com"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={express} />
              <span>Express</span>
            </div>
          </a>

          <a
            href="https://legacy.reactjs.org/docs/getting-started.html"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <img src={react} />
              <span>React</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Skills;
