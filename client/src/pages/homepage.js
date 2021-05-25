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
          src={process.env.PUBLIC_URL + "/assets/placeholder_resized.jpg"}
          alt="jay-doshi"
        ></img>
        <div className="about-me-text">
          <h1 id="about-me-header" className="fancy">
            <span>Ethos</span>
          </h1>
          <p id="about-me-body">
            “Cooking is our passion, service is our purpose, creation is our
            art.” <br></br>At Flavors, we are dedicated to giving our clients an
            unforgettable experience; a culinary journey of love and passion. We
            don’t strive to just satisfy, we strive to leave you speechless.
            Flavors is about creating memories, and reminiscing on those that
            leave you feeling warm and comforted. The concept of flavors is
            combining traditional techniques with modern flow and creating
            something unique. Cooking is our passion, service is our purpose,
            creation is our art. Welcome to Flavors.{" "}
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
