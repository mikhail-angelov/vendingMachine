import React, { Component } from 'react'
import './VendingMachine.css'
import Header from './components/header'
import Products from './components/products'
import Footer from './components/footer'
import Utils from './utils'

const products = require('./data.json')

class VendingMachine extends Component {

  constructor(){
    super()
    this.state={
      balance:0,
      status: '',
      products:products,
      mute: false
    }
    this.moneySound=Utils.createsoundbite("cash.wav")
  }
  
  inserCoin(value){
    console.log('insert', value)
    let state = this.state
    state = Object.assign(state, {balance: state.balance + value})
    this.setState(state)
    this.play()
  }
  buy(product){
    console.log('buy', product)
    var status = ''
    var balance = this.state.balance
    if(this.state.balance >= product.price){
      status = 'Take your '+ product.name
      balance -= product.price
      this.play()
    }else{
      status = 'Yuo need '+(product.price-this.state.balance) +' cents more, to buy '+ product.name;
    }
    this.setState(Object.assign(this.state, {balance: balance,status: status}))
  }
  clear(){
    const balance = this.state.balance
    const status = balance>0?('Take '+balance+' cents'):''
    if(balance){
      this.play()
    }
    this.setState(Object.assign(this.state, {balance: 0, status: status}))
  }

  play(){
    if(!this.state.mute){
      this.moneySound.play()
    }
  }

  toggleMute(){
    this.setState(Object.assign(this.state, {mute: !this.state.mute}))
  }

  render() {
    return (
      <div className="vendingMachine">
        <Header balance={this.state.balance} inserCoin={this.inserCoin.bind(this)} 
          toggleMute={this.toggleMute.bind(this)} formatCurrency={Utils.formatCurrency}/>
        <Products products={this.state.products} buy={this.buy.bind(this)} formatCurrency={Utils.formatCurrency}/>
        <Footer clear={this.clear.bind(this)} status={this.state.status}/>
      </div>
    );
  }
}

export default VendingMachine