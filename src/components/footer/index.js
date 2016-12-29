import React from 'react';
import './style.css';

export default ({status, clear})=>(
  <div className="footer">
    <div className="clear" onClick={()=>clear()}> Return </div>
    <div className="status" > {status} </div>
  </div>
);