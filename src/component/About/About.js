import React from "react";
import "./About.css";
import edamame from "../../images/edamame.jpeg";
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
        <Parallax className="edamame" bgImage={edamame} strength={100} />
        <Fade duration={3000}>
          <div className="text-container">
            <h1 className="content1">「健康」と「スマイル」をコンセプトに。</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              nisl in ipsum sodales elementum. Mauris tempus ligula non diam
              aliquet, ac condimentum mi feugiat. Nam id urna ipsum.
              Pellentesque nec accumsan erat. Vivamus eu neque sodales, rutrum
              lectus vel, laoreet leo. Sed elementum sagittis metus vitae
              rhoncus. Nullam tortor nunc, pretium a condimentum eget, fringilla
              in risus. Vivamus fringilla feugiat maximus. Suspendisse po
            </p>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default About;
