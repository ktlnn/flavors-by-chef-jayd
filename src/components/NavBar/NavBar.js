import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavBarItems } from "./NavBarItems";
import "../../App.css";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars id="hamburger" onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {NavBarItems.map((item, index) => {
            return (
              <li key={index} className={item.classname}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <div className="social-icons">
            <li>
              <AiIcons.AiOutlineInstagram />
            </li>
            <li>
              <AiIcons.AiOutlineFacebook />
            </li>
            <li>
              <AiIcons.AiOutlineInstagram />
            </li>
          </div>
          <div className="contact-info">
            <li>Address: 406 Tompkins St., City of Orange, NJ</li>
            <li>Phone Number: (732)447-6381</li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
