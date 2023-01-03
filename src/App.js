import React from 'react'
import { CartProvider } from './CartContext'
import './style.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Marketplace from './components/Marketplace'
import ShippingDetails from './components/ShippingDetails'
import PaymentDetails from './components/PaymentDetails'
import OrderComplete from './components/OrderComplete'
import Auction from './components/Auction'
import UpcomingDrops from './components/UpcomingDrops'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ARTSY' element={<Home />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/auction' element={<Auction />} />
          <Route path='/drops' element={<UpcomingDrops />} />
          <Route path='/shippingdetails' element={<ShippingDetails />} />
          <Route path='/paymentdetails' element={<PaymentDetails />} />
          <Route path='/ordercomplete' element={<OrderComplete />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App