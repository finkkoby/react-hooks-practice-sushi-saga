import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [cost, setCost] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then(res => res.json())
      .then(list => setSushi(list))
  }, [])
  
  return (
    <div className="app">
      <SushiContainer sushi={sushi} plates={plates} setPlates={setPlates} cost={cost} setCost={setCost}/>
      <Table plates={plates} cost={cost} setCost={setCost}/>
    </div>
  );
}

export default App;
