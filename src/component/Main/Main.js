import React from "react";
import "./Main.css";
// import coffeevid from "../../images/coffee2.mp4";
import coffeeimage from "../../images/coffee3.jpg";
import { Parallax } from "react-parallax";

function Main() {
  return (
    <div className="video-container">
      {/* <video autoPlay muted loop className="coffeeimage">
        <source src={coffeevid} type="video/mp4" />
      </video> */}
      <img src={coffeeimage} className="coffeeimage" alt="coffe" />
    </div>
  );
}

export default Main;

/*
   className="coffeeimage" src={coffeevid}
        alt="coffee" autoPlay muted loop
        */
