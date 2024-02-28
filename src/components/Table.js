import React, { useState, useEffect } from "react";

function Table({ plates = [], cost, setCost }) {
  // renders an empty plate for every element in the array
 
    const total = plates.reduce((acc, plate) => {
      return plate.price + acc
    }, cost)
    


  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${200 - cost} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
