import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
    
      <Link to={item.path} className="nav-text" onClick={item.subNav && showSubnav}>
        <div>
          <span className="nav-text">
            {item.title}
            <span className="dropdown-icon">
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </span>
          </span>
        </div>
      </Link>
     
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link className="nav-subtext" to={item.path} key={index}>
              <span className="nav-subtext">{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
