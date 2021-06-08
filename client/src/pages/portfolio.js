import React from "react";
import { useAllPortfolioImgs } from "../utils/PortfolioAPICall";
import PortfolioCarousel from "../components/PortfolioCarousel";

import "../App.css";

function Portfolio() {

    const [showPortfolioImages] = useAllPortfolioImgs();
    console.log(showPortfolioImages);

    return(
        <>
        <img className="logo" src={process.env.PUBLIC_URL+"/assets/flavors-logo-2.png"} alt="flavors-logo"></img>
        
        <PortfolioCarousel showPortfolioImages={showPortfolioImages}/>
        </>
        
    )
}

export default Portfolio;