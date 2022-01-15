import React, { Component } from 'react';
import './App.css';
import wallpaper from './images/crypto-trading-concept-on-candlestick.jpeg';
import Cryptocurrency from './components/Cryptocurrency';

var url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD';
var parameters = {
  method: 'GET',
  mode: 'no-cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': 'd43dbae5-b755-4c9f-9399-388ddda894bd'
  },  
  redirect:'follow',
  referrerPolicy: 'no-referrer',
};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  
  componentDidMount() {

    // API call
    fetch(url, parameters)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
        items: json,
        isLoaded: true,
      })
    });
  }

  render() {

    var{isLoaded, items } = this.state;
    console.log(items);
    if (isLoaded) {
      return (
      <div>Loading...</div>
      );
    }


    return (
      <div className="App">
        <div className="wallpaper"
          style={
            {
              margintop: "0",
              backgroundImage: 'url('+wallpaper+')',
              backgroundSize: "cover",
              height: "25vh"
            }
          }>
  
        </div>
  
        <div>
          <h1 className="crypto_header">Crypto</h1>
          <p className="last_updated">Last Updated 4:56 pm January 12, 2022</p>
        </div>
  
        <div className="cryptos">
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
          <Cryptocurrency name="Bitcoin" symbol="BTC" price="43,900.62"/>
  
          
          
        </div>
      </div>
      
    );
  }
}

export default App;
