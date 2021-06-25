import React from "react";
import "./Access.css";
import { Parallax } from "react-parallax";
import food from "../../images/food.jpg";

function Access() {
  return (
    <>
      <Parallax
        className="background-cafe"
        bgImage={food}
        bgImageStyle={{ top: "-40%" }}
        style={{ opacity: "80%" }}
      >
        <div className="component-block" id="access">
          <h1 className="title-block">ACCESS</h1>
        </div>
      </Parallax>
    </>
  );
}

export default Access;
