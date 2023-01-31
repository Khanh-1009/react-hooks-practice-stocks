import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocks(data))
  }, [])

  function handleAddStocktoPort(removeStock){
    const updateStockList = stocks.filter((stock) => stock.id !== removeStock.id)
    setStocks(updateStockList)
    const updatePortfolioList = stocks.find((stock) => stock.id === removeStock.id)
    
    //console.log(updatePortfolioList)
    setPortfolio([...portfolio, updatePortfolioList])
  }

  function handleRemoveStockFromPort(removePortStock){
    const portfolioListAfterStockSold = portfolio.filter((stock) => stock.id !== removePortStock.id)
    setPortfolio(portfolioListAfterStockSold)
  }

  function handleChangeFilter(e){
    setSelectedCategory(e.target.value)
  }

  const filterCompanies = stocks.filter((comp) => {
    if(selectedCategory === "All") return true;
    return comp.type === selectedCategory
  })

  return (
    <div>
      <SearchBar onChangeFilter={handleChangeFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filterCompanies} onClickAddStockToPort={handleAddStocktoPort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} 
          onClickRemoveStockFromPort={handleRemoveStockFromPort}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
