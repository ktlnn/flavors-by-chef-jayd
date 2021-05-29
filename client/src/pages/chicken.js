import React from "react";

import "../App.css";

function Chicken() {

    return(
        <>
        <img className="logo" src={process.env.PUBLIC_URL+"/assets/flavors-logo-2.png"} alt="flavors-logo"></img>
        <h1 id="about-me-header" className="fancy">
            <span>Chicken</span>
          </h1>
        </>
        
    )
}

export default Chicken;