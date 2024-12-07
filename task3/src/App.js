import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap';
import PortfolioDetails from './components/PortfolioDetails';
import PortfolioSummary from './components/PortfolioSummary';
import StockList from './components/StockList';
import TradeStockForm from './components/TradeStockForm';
import { useState } from 'react';



function App() {
  const details = {
    portfolioValue: 500000,
    totalNoOfStocks: 3,
    balance: 50000
  }

  const [stock,setStock] = useState({})
  const [symbol,setSymbol] = useState({})

  const handleClick = (stock) => {
      // stock.quantity = 1
      setStock(stock)
      console.log(stock)
  }

  const handleTrade = (symbol) =>{
    console.log(symbol)
    setSymbol(symbol)
  }

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className='d-flex justify-content-center'>
        <Navbar.Brand href="#home">STOCK MARKET PORTFOLIO TRACKER</Navbar.Brand>
      </Navbar>
      
      <PortfolioSummary  details={details} />
      <StockList handleClick = {handleClick} handleTrade = {handleTrade}/>
      <TradeStockForm symbol = {symbol}/>
      <PortfolioDetails stockDetails = {stock}/>




    </div>
  );
}

export default App;

