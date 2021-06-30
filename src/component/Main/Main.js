import React from "react";
import "./Main.css";
import coffee from "../../images/coffee.png";
import coffeevid from "../../images/croppedcoffee.mov";
import { Parallax } from "react-parallax";

function Main() {
  return (
    <div className="component-block">
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
