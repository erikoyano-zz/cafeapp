import React from "react";
import "./About.css";
import edamame from "../../images/edamame.jpeg";
import pancake from "../../images/pancake.jpg";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <div className="component-block">
        <h1 className="title-block" id="about">
          ABOUT
        </h1>
      </div>

      <div className="about-content">
        {/* <Parallax className="edamame" bgImage={edamame} strength={100} /> */}
        {/* <Fade duration={3000}> */}

        <Parallax className="edamame" bgImage={edamame} />

        <div className="text-container">
          <h1 className="content1">「健康」と「スマイル」をコンセプトに。</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            nisl in ipsum sodales elementum. Mauris tempus ligula non diam
            aliquet, ac condimentum mi feugiat.
          </p>
        </div>

        <div className="break" />
        <div className="text-container">
          <p>
            <h1 className="content1">text2</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            nisl in ipsum sodales elementum. Mauris tempus ligula non diam
            aliquet, ac condimentum mi feugiat.
          </p>
        </div>
        <img className="edamame" src={edamame} />
        {/* <img src={pancake} /> */}
        {/* </Fade> */}
      </div>
    </>
  );
}

export default About;
