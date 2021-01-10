import React from "react";
import "../App.css";


function HomePage() {

    return(
        <>
            <img className="logo" src={process.env.PUBLIC_URL+"/assets/flavors-logo.png"} alt="flavors-logo"></img>
            <hr></hr>
            <div>
            <img id="about-me-img" src={process.env.PUBLIC_URL+"/assets/jay-doshi.png"} alt="jay-doshi"></img>
            <h1 id="about-me-header">Chef Jay Doshi</h1>
            <p id="about-me-body">Chef Jay Doshi cooks exquisite cuisines with a twist.</p>
            </div>
            <div className="food-imgs">
            <img className="food-img" src={process.env.PUBLIC_URL+"/assets/food-1.png"} alt="food-chops"></img>
            <img className="food-img" src={process.env.PUBLIC_URL+"/assets/food-2.png"} alt="sliced-steak"></img>
            </div>
            
           
            

        </>
    )
}

export default HomePage;