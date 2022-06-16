import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {axios.get(url)
  .then(res => {
    setCoins(res.data);
    console.log(res.data);
  }).catch(err => alert(err))}, []);
    

  return (
    <div className="coin-app">
       <div className='coin-search'>
       <h1 className='coin-text'>Search for a currency</h1>
       <form>
          <input className='coin-input' type='text' placeholder='Search'></input>
       </form>
      </div>
    </div>
  );
}

export default App;
