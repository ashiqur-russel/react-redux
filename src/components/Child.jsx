import React from "react";

const Child = ({ state }) => {
  return (
    <div className="">
      <div className="container">
        <p>{state.count}</p>
      </div>
    </div>
  );
};

export default Child;
