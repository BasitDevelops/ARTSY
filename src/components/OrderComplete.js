import React from 'react'
import orderComplete from '../images/orderComplete.png'

export default function OrderComplete() {
  return (
    <div className='order-complete'>
        <div className='img-container'>
            <img src={orderComplete} />
        </div>
        <div>
            <h6>Hey Celestina, thank you for your purchase. </h6>
            <p>You are amazing. Cheers to being <span>ARTSY!</span></p>
        </div>
    </div>
  )
}
