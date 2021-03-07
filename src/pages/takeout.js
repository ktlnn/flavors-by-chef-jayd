import React from "react";


import "../App.css";

function Takeout() {

    return(
        <>
        <img className="logo" src={process.env.PUBLIC_URL+"/assets/flavors-logo-2.png"} alt="flavors-logo"></img>
        
        <div className="takeout-options">
            <img className="takeout-img" src={process.env.PUBLIC_URL+"/assets/wraps.png"} alt="wraps"></img>
            <a id="wraps-btn" href="/takeout">W R A P S</a>
        </div>
        <div className="takeout-options">
            <img src={process.env.PUBLIC_URL+"/assets/soups.png"} alt="soup"></img>
            <a id="soups-btn" href="/takeout">S O U P S</a>
        </div>
        <div className="takeout-options">
            <img src={process.env.PUBLIC_URL+"/assets/flavors-specials.png"} alt="soup"></img>
            <a id="specials-btn" href="/takeout">F L A V O R S <br></br>S P E C I A L S</a>
        </div>
        <div className="takeout-options">
            <img src={process.env.PUBLIC_URL+"/assets/dessert.png"} alt="soup"></img>
            <a id="dessert-btn" href="/takeout">D E S S E R T S</a>
        </div>
        </>
        
    )
}

export default Takeout;