import React from "react";
import "./Access.css";
import { Parallax } from "react-parallax";
import food from "../../images/food2.jpg";
import map from "../../images/map.png";

function Access() {
  return (
    <>
      {/* <Parallax
        className="background-cafe"
        bgImage={food}
        // bgImageStyle={{ top: "-10%" }}
        style={{ opacity: "80%" }}
      > */}
      <div className="component-block" id="access">
        <h1 className="title-block">ACCESS</h1>
        <div className="map-container">
          <div className="map-description">
            <div className="map-text">
              <h2>LOCATION</h2>
              <p>東京都江東区白河</p>
            </div>
            <div className="map-text">
              <h2>HOURS</h2>
              <p>Mon-Fri 9:00am ~ 8:00pm</p>
            </div>
            <div className="map-text">
              <h2>CONTACT</h2>
              <p>tel: 080-1234-1234</p>
            </div>
          </div>
          <img className="map" src={map} alt="map" />
        </div>
      </div>
      {/* </Parallax> */}
    </>
  );
}

export default Access;
