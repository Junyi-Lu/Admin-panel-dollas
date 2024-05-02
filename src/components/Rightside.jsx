import React from "react";
import CustomerReview from "./CustomerReview";
import Updates from "./Update";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3 style={{ marginLeft: "1.5rem" }}>The Latest Messages</h3>
        <Updates />
      </div>
      <div>
        <h3 style={{ marginLeft: "1.7rem" }}>Views</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
