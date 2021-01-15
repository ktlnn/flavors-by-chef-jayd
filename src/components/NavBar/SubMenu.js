import React, { useState } from "react";
import { Link } from "react-router-dom";


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <span className="nav-text">{item.title}</span>
          <div className="dropdown-icon">
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
        </div>
        
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              {item.icon}
              <span className="nav-subtext">{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
