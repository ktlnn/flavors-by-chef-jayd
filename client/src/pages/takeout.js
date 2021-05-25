import React from "react";


import "../App.css";

function Takeout() {

    return(
        <>
        <img className="logo" src={process.env.PUBLIC_URL+"/assets/flavors-logo-2.png"} alt="flavors-logo"></img>
        <div className="takeout-options">
            <img className="takeout-img" id="soups-img" src={process.env.PUBLIC_URL+"/assets/chicken.png"} alt="chicken"></img>
            <a id="chicken-btn" href="/takeout">C H I C K E N</a>
            <img className="takeout-img" id="wraps-img" src={process.env.PUBLIC_URL+"/assets/flavors-specials.png"}  alt="steak"></img>
            <a id="steak-btn" href="/takeout">S T E A K</a>
        </div>
        
        
        <div className="takeout-options">
            <img className="takeout-img" id="specials-img" src={process.env.PUBLIC_URL+"/assets/seafood.png"} alt="seafood"></img>
            <a id="seafood-btn" href="/takeout">S E A F O O D</a>
       
            <img className="takeout-img" id="dessert-img" src={process.env.PUBLIC_URL+"/assets/wraps-2.png"} alt="wraps"></img>
            <a id="wraps-btn" href="/takeout">W R A P S</a>
        </div>
        </>
        
    )
}

export default Takeout;