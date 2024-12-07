import React, { useState, useEffect } from 'react';

const StockData = (props) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [symbol,setSymbol] = useState('')

  // const handleClick = (symbol) =>{
  //   console.log(symbol)
  // }



  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const apiKey = 'ct65hn9r01qmbqor8obgct65hn9r01qmbqor8oc0'; // Replace with your Finnhub API key
        const symbols = ['AAPL', 'GOOGL', 'MSFT']; // Stock symbols to fetch
        const quantity = [5,2,1]

        const promises = symbols.map((symbol) =>
          fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`)
        );

        const responses = await Promise.all(promises);
        // console.log(responses)
        const data = await Promise.all(responses.map((res) => res.json()));
        // console.log(data)

        const stockData = symbols.map((symbol, index) => ({
          symbol,
          name: symbolToCompanyName(symbol),
          quantity:quantity[index],
          price: data[index].c, // Current price
        }));
        console.log(stockData)

        setStocks(stockData);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  },[]);

 
  const symbolToCompanyName = (symbol) => {
    const mapping = {
      AAPL: 'Apple Inc.',
      GOOGL: 'Alphabet Inc.',
      MSFT: 'Microsoft Corporation',
    };
    return mapping[symbol] || 'Unknown Company';
  };

  return (
    <div style={{width:'700px',margin:'auto', marginTop:'30px',padding:"20px", border:"1px solid black", textAlign:"center"}}>
      <h1 className='text-align-center'>Stock Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Quantity</th>
              <th>Current Price</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>{stock.quantity}</td>
                <td>${stock.price.toFixed(2)}</td>
                <td><button className='bg-primary' onClick={() => props.handleClick(stock)}>view Details</button></td>
                <td><button className='bg-warning' onClick={() => props.handleTrade(stock.symbol)}>trade</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockData;
