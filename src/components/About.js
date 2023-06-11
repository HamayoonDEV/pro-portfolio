import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="seprator"></div>
      <div className="intro">
        <div className="aboutText">
          <h2>Who I am</h2>
          <p>
            {" "}
            My name is HAMAYOON KHAN. I'm a fullstack developer based in
            Karachi, Pakistan.
            <br /> <br />I am an unstoppable force in the world of development,
            fueled by an unquenchable passion for web development. My discipline
            knows no limits, and my pursuit of excellence is boundless. I thrive
            on embracing challenges head-on, unraveling solutions that surpass
            expectations and defy conventional thinking. Curiosity is the
            compass that drives me forward, constantly propelling me to explore
            new horizons and strengthen my skills. I am eager to harness my
            unique talents and leave an unforgettable impact in this dynamic
            field. When I'm not engaged in a thrilling code battle, I immerse
            myself in the realm of personal development, continuously evolving
            to become an extraordinary developer. Get ready to be inspired and
            join me on this exhilarating journey of innovation and growth!
          </p>
        </div>
        <div className="aboutImage">
          <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000" />
        </div>
      </div>
    </div>
  );
};

export default About;
