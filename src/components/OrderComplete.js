import React, { useContext } from 'react'
import orderComplete from '../images/orderComplete.png'
import CartContext from '../CartContext'

export default function OrderComplete() {
  const { cartFlag } = useContext(CartContext)

  return (
    !cartFlag &&
    <div className='order-complete'>
      <div className='img-container'>
        <img src={orderComplete} />
      </div>
      <div>
        <h6>Hey ArtLover, thank you for your purchase. </h6>
        <p>You are amazing. Cheers to being <span>ARTSY!</span></p>
      </div>
    </div>
  )
}
