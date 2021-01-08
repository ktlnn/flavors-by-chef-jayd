import React from "react";
import "../App.css";

function HomePage() {

    return(
        <div>
            <img className="logo" src={process.env.PUBLIC_URL+"/assets/flavors-logo.png"} alt="flavors-logo"></img>
        </div>
    )
}

export default HomePage;