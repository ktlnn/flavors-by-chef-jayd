import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function Steak() {
  const notify = () => toast("Item Was Successfully Added to your Cart!");

  return (
    <>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/flavors-logo-2.png"}
        alt="flavors-logo"
      ></img>
      <h1 id="steak-header" className="fancy">
        <span>Steak</span>
      </h1>
      <div className="menu">
        <div className="menu-item">
          <h2 className="item-title">New Jersey</h2>
          <p className="item-description">
            6 oz strip, chive mash, parmesan crusted asparagus
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Steak Au Poivre</h2>
          <p className="item-description">
            Strip, Telicherry brandy sauce, roasted red peppers
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Shawarma</h2>
          <p className="item-description">
            Brisket, tahini, cilantro rice, spring mix
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Szechuan</h2>
          <p className="item-description">
            Spicy ground beef, Garlic chili oil, sticky rice, seared broccoli
          </p>
          <button className="cart-btn" onClick={notify}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>

        <div className="menu-item">
          <h2 className="item-title">Chimichurri</h2>
          <p className="item-description">
            Grilled skirt, Spanish rice, peppers & onions, sauce
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

export default Steak;
