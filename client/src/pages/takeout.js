import React from "react";

import "../App.css";

function Takeout() {
  return (
    <>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/flavors-logo-2.png"}
        alt="flavors-logo"
      ></img>
      <div className="takeout-options">
        <div id="chicken">
          <img
            className="takeout-img"
            id="chicken-img"
            src={process.env.PUBLIC_URL + "/assets/chicken.png"}
            alt="chicken"
          ></img>
          <a id="chicken-btn" href="/takeout/chicken">
            C H I C K E N
          </a>
        </div>

        <div id="steak">
          <img
            className="takeout-img"
            id="steak-img"
            src={process.env.PUBLIC_URL + "/assets/flavors-specials.png"}
            alt="steak"
          ></img>
          <a id="steak-btn" href="/takeout/steak">
            S T E A K
          </a>
        </div>
      </div>

      <div className="takeout-options">
        <div id="seafood">
          <img
            className="takeout-img"
            id="seafood-img"
            src={process.env.PUBLIC_URL + "/assets/seafood.png"}
            alt="seafood"
          ></img>
          <a id="seafood-btn" href="/takeout/seafood">
            S E A F O O D
          </a>
        </div>

        <div id="wraps">
          <img
            className="takeout-img"
            id="wraps-img"
            src={process.env.PUBLIC_URL + "/assets/wraps-2.png"}
            alt="wraps"
          ></img>
          <a id="wraps-btn" href="/takeout/wraps">
            W R A P S
          </a>
        </div>
      </div>
    </>
  );
}

export default Takeout;
