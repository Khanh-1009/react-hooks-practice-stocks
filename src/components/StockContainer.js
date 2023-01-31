import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onClickAddStockToPort}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onClickStock={onClickAddStockToPort}/>
      ))}
    </div>
  );
}

export default StockContainer;
