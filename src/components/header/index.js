import React from 'react';
import './style.css';

export default ({balance, inserCoin, formatCurrency, toggleMute})=>(
  <div className="header">
    <div className="balance"> {formatCurrency(balance)}</div>
    <div className="coin penny" onClick={()=>inserCoin(1)}> ₵1 </div>
    <div className="coin nikel" onClick={()=>inserCoin(5)}> ₵5 </div>
    <div className="coin dime" onClick={()=>inserCoin(10)}> ₵10 </div>
    <div className="coin quotter" onClick={()=>inserCoin(25)}> ₵25 </div>

    <div className="mute" onClick={()=>toggleMute()}> ♫ </div>
  </div>
);