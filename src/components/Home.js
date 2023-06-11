import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import File from "../files/my cv.docx";
import myImage from "../images/myImage.png";
import "./Home.css";

const Home = () => {
  const [active, setActive] = useState(false);
  const handleCloseIcon = () => {
    setActive(false);
  };
  const handleMenuIcon = () => {
    setActive(true);
  };
  return (
    <div className="home" id="Home">
      <div className={window.innerWidth <= 500 ? "leftDisable" : "left"}>
        <div className="hamberger">
          {!active ? (
            <MenuIcon className="menuIcon" onClick={handleMenuIcon} />
          ) : (
            <CloseIcon className="closeIcon" onClick={handleCloseIcon} />
          )}
          <div className={!active ? "inActive" : "menu"}>
            <a className="menuCompnents" href="#Home">
              <HomeIcon className="Icon" />
              Home
            </a>

            <a className="menuCompnents" href={File} download>
              <HistoryEduIcon className="Icon" />
              Resume
            </a>

            <a className="menuCompnents" href="#About">
              <PersonIcon className="Icon" />
              About
            </a>

            <a className="menuCompnents" href="#Contect">
              <LocalPhoneIcon className="Icon" />
              Contect
            </a>
          </div>
        </div>
        <div className="socialIcons">
          <a
            className="gitHubIcon"
            href="https://github.com/HamayoonDEV"
            target="blank"
          >
            <GitHubIcon className="gitHubIcon" />
          </a>
          <a href="https://www.linkedin.com/in/hamayoon-khan-khosa-247847178/">
            <LinkedInIcon className="linkedInIcon" />
          </a>
        </div>
      </div>
      <img src={myImage} alt="image" />
      <div className="right">
        <h1>Hamayoon khan</h1>
        <span>Fullstack Developer</span>
        <p className="welcomePara">
          Welcome to my portfolio website! I'm a software engineer with
          expertise in full-stack development. I have a strong passion for
          coding and possess a knack for quickly grasping new technologies and
          overcoming challenges. On this website, you'll discover a collection
          of my projects and skills. Feel free to explore and don't hesitate to
          ask any questions you may have.
        </p>
        <div className="rightButtons">
          <a href={File} download>
            {" "}
            <button className="cv">Download CV</button>
          </a>
          <a href="#Contect">
            <button className="contect">Contect</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
