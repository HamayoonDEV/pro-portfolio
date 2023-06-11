import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contects from "./components/Contects";
import "./App.css";

import SwipeUpAltIcon from "@mui/icons-material/SwipeUpAlt";

function App() {
  return (
    <div className="App">
      <Home />
      <a href="#Home">
        <SwipeUpAltIcon className="upArrow" style={{ fontSize: "60px" }} />
      </a>
      <About />
      <Skills />
      <Projects />
      <Contects />
    </div>
  );
}

export default App;
