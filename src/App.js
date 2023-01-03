import React from 'react'
// import { useState, useEffect } from 'react'
import { CartProvider } from './CartContext'
import './style.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Marketplace from './components/Marketplace'
import Product from './components/Product'
import Cart from './components/Cart'
import ShippingDetails from './components/ShippingDetails'
import PaymentDetails from './components/PaymentDetails'
import OrderComplete from './components/OrderComplete'
import Auction from './components/Auction'
import UpcomingDrops from './components/UpcomingDrops'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      {/* <Product /> */}
      {/* <Cart /> */}
      {/* <ShippingDetails /> */}
      {/* <PaymentDetails /> */}
      {/* <OrderComplete /> */}
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/auction' element={<Auction />} />
          <Route path='/drops' element={<UpcomingDrops />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App