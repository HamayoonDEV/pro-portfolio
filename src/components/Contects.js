import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./Contects.css";

const Contects = () => {
  return (
    <div className="contects" id="Contect">
      <h1>Contects</h1>
      <div className="personal-Details">
        <a href="mailto:hamayoonkhan367@gmail.com" className="personal-Detail">
          <AlternateEmailIcon className="contectsIcons" />
          hamayoonkhan367@gmail.com
        </a>
        <a href="tel:+923133795446" className="personal-Detail">
          <LocalPhoneIcon className="contectsIcons" />
          +923133795446
        </a>
        <a href="" className="personal-Detail">
          <LocationOnIcon className="contectsIcons" />
          Karachi,pakistan
        </a>
      </div>
    </div>
  );
};

export default Contects;
