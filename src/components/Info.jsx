import React from "react";
import logo_profile from "../images/profile-logo.png";
import { TypeAnimation } from "react-type-animation";
import like_logo from '../images/linkedin.png'

function info() {
  return (
    <div className="info">
      <img src={logo_profile} alt="" />
      <h1>Juan David Valencia </h1>
      <div className="txt-animation">
        <TypeAnimation
          sequence={["Creativo ", "Recursivo ", "Innovador "]}
          typeSpeed={150}
          backSpeed={150}
          loop
        />
      </div>
      <button className="btn-contact">Contact Me</button>
      <button className="btn-linke">linkedin</button>
    </div>
  );
}

export default info;
