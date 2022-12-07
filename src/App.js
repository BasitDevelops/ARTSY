import React from 'react'
import './style.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Marketplace from './components/Marketplace'
import Product from './components/Product'
import Cart from './components/Cart'
import ShippingDetails from './components/ShippingDetails'
import PaymentDetails from './components/PaymentDetails'
import OrderComplete from './components/OrderComplete'

function App() {

  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Marketplace /> */}
      {/* <Product /> */}
      {/* <Cart /> */}
      {/* <ShippingDetails /> */}
      {/* <PaymentDetails /> */}
      <OrderComplete />
    </div>
  )
}

export default App