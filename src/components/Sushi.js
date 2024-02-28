import React, { useState } from "react";

function Sushi({ sushi, plates, setPlates, cost, setCost }) {
  const [status, setStatus] = useState(false)

  function handleSushiClick() {
    if(status === false && cost < 200 - sushi.price) {
      setStatus(!status)
      setPlates([...plates, sushi])
      setCost(cost + sushi.price)
    }
  }

  return (
    <div className="sushi">
      <div className='plate' onClick={handleSushiClick}>
        {status ? null : (
          <img
            src={sushi['img_url']}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
