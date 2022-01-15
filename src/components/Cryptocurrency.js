import React from 'react';
import './Cryptocurrency.css';
/**
 * 
 * @param {*} props 
 * props includes name, symbol, current price of crypto currency
 */
 function Cryptocurrency(props) {

    return (
        <div>
            <hr/>
            <h3 className="name">{props.name} ({props.symbol})</h3>
            <h4 className="price">{props.price}</h4>
            <br/>
            <br/>
            <br/>

        </div>
    )
   
  }

  export default Cryptocurrency;