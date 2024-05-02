import React, { useState } from "react";
import logo from "../imgs/logo.png";
import { SidebarData } from "../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  if (!isOpen) {
    return null; // Don't render the sidebar if it is not open
  }
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} alt="DollaSmart Logo" />
        <span>
          Do<span>ll</span>as
        </span>
      </div>

      <button className="closeBtn" onClick={toggleSidebar}>
        <UilMultiply />
      </button>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
