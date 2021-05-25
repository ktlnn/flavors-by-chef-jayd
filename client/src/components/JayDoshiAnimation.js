import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

import "../App.css";

function JayDoshiAnimation() {
  let jayAnimate = useRef(null);
  console.log(jayAnimate);

  useEffect(() => {
    console.log(jayAnimate);
    TweenMax.to(
      jayAnimate,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
    )
  }, []);
  
  return (
    <>
      
        <img
        ref={(el) => {
          jayAnimate = el;
        }}
        className="jay-animate"
        src={process.env.PUBLIC_URL + "assets/jayd-animate.gif"}
        alt="animated-jay-doshi"
      ></img>
      
    </>
  );
}

export default JayDoshiAnimation;
