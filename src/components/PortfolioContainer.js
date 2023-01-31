import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onClickRemoveStockFromPort}) {
  // function handleSellClick(e){
  //   onClickSellPortStock(e.target.value)
  // }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((port) => (
        <Stock key={port.id} stock={port} onClickStock={onClickRemoveStockFromPort}/>
      ))}
    </div>
  );
}

export default PortfolioContainer;
