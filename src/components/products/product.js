import React from 'react'
import './product.css'

export default ({product, buy, formatCurrency})=>(
      <div className="product" onClick={()=>buy(product)}> 
        {product.img && (<img className="product-img" alt={product.name} src={product.img}/>)}
        {!product.img && (<div className="product-name">{product.name}</div>)}
        <div className="tag">{formatCurrency(product.price)}</div>
      </div>
)