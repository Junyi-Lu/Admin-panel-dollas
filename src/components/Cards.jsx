import React from "react";
import Card from "./Card";
import { cardsData } from "../Data/Data";

const Cards = () => {
  return (
    <div className="Dashboard">
      <h1 style={{ marginLeft: "0.9rem" }}>DashBoard</h1>
      <div className="Cards">
        {cardsData.map((card, id) => {
          return (
            <div className="parentContainer">
              <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
