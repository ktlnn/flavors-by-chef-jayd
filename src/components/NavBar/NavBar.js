import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavBarItems } from "./NavBarItems";
import SubMenu from "./SubMenu";
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
            <Link to="#" id="x-bar" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
         {NavBarItems.map((item, index) => {
           return <SubMenu className="nav-text" item={item} key={index} />
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
