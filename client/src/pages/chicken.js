import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
// import * as GrIcons from "react-icons/gr";

function Chicken() {
  const notify = () => toast("Item Was Successfully Added to your Cart!");
  return (
    <>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/flavors-logo-2.png"}
        alt="flavors-logo"
      ></img>
      <h1 id="chicken-header" className="fancy">
        <span>Chicken</span>
      </h1>
      <div className="menu">
        <div className="menu-item">
          <h2 className="item-title">Picatta</h2>
          <p className="item-description">
            Lemon piccata with angel hair pasta and sauteed spinach
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
            {/* <GrIcons.GrCart id="GrCart" /> */}
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">French Onion</h2>
          <p className="item-description">
            Deconstructed French onion soup with wild rice and broiled Swiss
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Dijon</h2>
          <p className="item-description">
            Braised in cream sauce with al dente linguine, carrots vichy
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Cast Iron</h2>
          <p className="item-description">
            Roasted fingerlings, wild rice, Verdicchio sauce
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Sweet Pear</h2>
          <p className="item-description">
            Maple glazed, Romanesco and saffron rice
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Chicken;
