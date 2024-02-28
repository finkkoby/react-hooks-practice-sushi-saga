import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, plates, setPlates, cost, setCost }) {
  const [sushiCount, setSushiCount] = useState(0)

  const shownSushi = sushi.slice(sushiCount, sushiCount + 4)

  function handleSushiSelection() {
    setSushiCount(sushiCount + 4)
  }

  const displaySushi = shownSushi.map(sushi => {
    return <Sushi sushi={sushi} key={sushi.id} plates={plates} setPlates={setPlates} cost={cost} setCost={setCost}/>
  })

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton onSushiSelection={handleSushiSelection}/>
    </div>
  );
}

export default SushiContainer;
