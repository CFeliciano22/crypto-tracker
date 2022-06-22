import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coins from './Components/Coins/coins';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {axios.get(url)
  .then(res => {
    setCoins(res.data);
    console.log(res.data);
  }).catch(err => alert(err))}, []);
    
const handleChange = (e) => {
  setSearch(e.target.value);
}

const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
       <div className='coin-search'>
       <h1 className='coin-text'>Search for a currency</h1>
       <form>
          <input className='coin-input' type='text' placeholder='Search' onChange={handleChange}></input>
       </form>
      </div>
      {filteredCoins.map(coin => {
        return (
        <Coins 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol} 
          price={coin.current_price} 
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          marketCap={coin.market_cap}/>
        );
      })}
    </div>
  );
}

export default App;
