import React from "react";

import "../App.css";

function Lunch() {

    return(
        <>
        <img className="logo" src={process.env.PUBLIC_URL+"/assets/flavors-logo-2.png"} alt="flavors-logo"></img>
        </>
        
    )
}

export default Lunch;