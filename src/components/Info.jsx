import React from "react";
import logo_profile from "../images/profile-logo.png";

function info() {
  return (
    <div className="info">
      <img src={logo_profile} alt="" />
      <h1>Juan David Valencia </h1>
      <button className="btn-contact">Contact Me</button>
      <button className="btn-linke">Contact Me</button>
    </div>
  );
}

export default info;
