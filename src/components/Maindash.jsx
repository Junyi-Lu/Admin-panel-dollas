import React from "react";
import Cards from "./Cards";
import Table from "./Table";
import { UilBars } from "@iconscout/react-unicons";

const Maindash = ({ toggleSidebar }) => {
  return (
    <div className="Maindash">
      <button onClick={toggleSidebar} className="menu-button">
        <UilBars />
      </button>
      <Cards />
      <Table />
    </div>
  );
};

export default Maindash;
