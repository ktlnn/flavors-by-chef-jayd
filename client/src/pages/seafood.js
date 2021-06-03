import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function Seafood() {
  const notify = () => toast("Item Was Successfully Added to your Cart!");

  return (
    <>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/flavors-logo-2.png"}
        alt="flavors-logo"
      ></img>
      <h1 id="seafood-header" className="fancy">
        <span>Seafood</span>
      </h1>
      <div className="menu">
        <div className="menu-item">
          <h2 className="item-title">Garlic Shrimp Skewers (12 pcs)</h2>
          <p className="item-description">
            Pineapple mango dipping salsa, steamed corn, basmati rice
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Shrimp Street Tacos (3 tacos)</h2>
          <p className="item-description">
            Grilled shrimp, avocado and mango salsa, Oaxaca cheese, maseca tortillas
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Coconut Shrimp Curry</h2>
          <p className="item-description">
            Crispy shrimp in a sweet and savory coconut cream sauce, with smoked sweet potatoes, asparagus, jasmine rice
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

export default Seafood;
