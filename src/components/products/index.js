import React from 'react'
import './style.css'
import Product from './product'

export default ({products, buy, formatCurrency})=>(
  <div className="products">
    {products.map(product=>(<Product buy={buy} product={product} key={product.id} formatCurrency={formatCurrency}/> ))}
  </div>
)