import React from "react";
import logo_profile from "../images/profile-logo.png";
import { TypeAnimation } from "react-type-animation";

function info() {
  return (
    <div className="info">
      <img src={logo_profile} alt="" />
      <h1>Juan David Valencia </h1>
      <div>
        <TypeAnimation
          sequence={["creativo", "recursivo", "innovador"]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </div>
      <button className="btn-contact">Contact Me</button>
      <button className="btn-linke">Contact Me</button>
    </div>
  );
}

export default info;
