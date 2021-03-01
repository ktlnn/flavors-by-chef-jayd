import React from "react";


import "../App.css";

function HomePage() {


  return (
    <>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/flavors-logo-2.png"}
        alt="flavors-logo"
      ></img>
      <div className="about-me">
        <img
          id="about-me-img"
          src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"}
          alt="jay-doshi"
        ></img>
        <div className="about-me-text">
          <h1 id="about-me-header" className="fancy">
            <span>Chef Jay Doshi</span>
          </h1>
          <p id="about-me-body">
            In my perspective, food is not just a substance for absorption. I
            approach food by formulating an idea and then devise a concept of
            what can manfiest from my creation. Then the chef becomes the
            artist, and forms the art on the plate as a pure blank canvas with
            each color intricately balanced. I evaluate each flavor, each spice,
            the technique on how it's cooked as a blance of love and risk. It's
            a risk for me if one ingredient is too powerful or the food is over
            cooked. It's love for me when I build my work of art, and the
            feeling for me is as equivalent as a first kiss... as an impactful
            wind on a rainy day... as the scorching air during a heat wave. Yes,
            it feels to me as nature at its most potent yet vulnerable state. A
            balance of love and risk is necessary to build the perfect piece of
            art, and to create the perfect taste. This is how I feel when I
            build my creation. This is the feeling I want to resonate to others
            when they taste my creation.{" "}
          </p>
        </div>
      </div>
      {/* <div className="food-imgs">
            <img className="food-img" src={process.env.PUBLIC_URL+"/assets/food-1.png"} alt="food-chops"></img>
            <img className="food-img" src={process.env.PUBLIC_URL+"/assets/food-2.png"} alt="sliced-steak"></img>
            </div> */}
    </>
  );
}

export default HomePage;
