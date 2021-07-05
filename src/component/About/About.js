import React from "react";
import "./About.css";
import edamame from "../../images/edamame.jpeg";
import pancake from "../../images/pancake.jpg";
import coffee from "../../images/coffee.png";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <div className="component-block" id="about">
        <h1 className="title-block">ABOUT</h1>

        <div className="about-content">
          <Parallax
            className="about-image"
            bgImage={pancake}
            // bgImageStyle={{ top: "-20%" }}
            strength={100}
          />
          <div className="text-container">
            <Fade top duration={2000}>
              <h1 className="content1">
                「健康」と「スマイル」をコンセプトに。
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel nisl in ipsum sodales elementum. Mauris tempus ligula non
                diam aliquet, ac condimentum mi feugiat.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
