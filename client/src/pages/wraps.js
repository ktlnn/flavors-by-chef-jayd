import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function Wraps() {
  const notify = () => toast("Item Was Successfully Added to your Cart!");

  return (
    <>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/flavors-logo-2.png"}
        alt="flavors-logo"
      ></img>
      <h1 id="wraps-header" className="fancy">
        <span>Wraps</span>
      </h1>
      <div className="menu">
        <div className="menu-item">
          <h2 className="item-title">Picatta</h2>
          <p className="item-description">
            Lemon piccata with angel hair pasta and sauteed spinach
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
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
          <h2 className="item-title">French Onion</h2>
          <p className="item-description">
            Deconstructed French onion soup with wild rice and broiled Swiss
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

export default Wraps;
