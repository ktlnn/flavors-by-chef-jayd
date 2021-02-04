import React from "react";

import "../App.css";

function JayDoshiAnimation() {
  return (
    <>
      <img
        className="jay-animate"
        src={process.env.PUBLIC_URL + "assets/jay-animate.gif"}
        alt="animated-jay-doshi"
      ></img>
    </>
  );
}

export default JayDoshiAnimation;
