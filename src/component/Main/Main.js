import React from "react";
import "./Main.css";
import coffeevid from "../../images/coffee2.mp4";
import { Parallax } from "react-parallax";

function Main() {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="coffeeimage">
        <source src={coffeevid} type="video/mp4" />
      </video>
    </div>
  );
}

export default Main;

/*
   className="coffeeimage" src={coffeevid}
        alt="coffee" autoPlay muted loop
        */
