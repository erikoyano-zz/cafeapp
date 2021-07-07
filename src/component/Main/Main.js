import React from "react";
import "./Main.css";
import coffeevid from "../../images/coffee2.mp4";
import { Parallax } from "react-parallax";

function Main() {
  return (
    <div className="video-container">
      <video
        className="coffeeimage"
        src={coffeevid}
        alt="coffee"
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default Main;
