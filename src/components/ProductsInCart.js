import React, { useContext } from 'react'
import CartContext from '../CartContext'

export default function ProductsInCart() {
    const { cartItems } = useContext(CartContext)

    const shippingFee = 50

    const totalPrice = cartItems.length > 0 && (cartItems.map(item => item.price.usd * item.count).reduce((acc, currentValue) => acc + currentValue))

    return (
        <>
            <div>
                <p>Products in cart :</p>
                <span>{cartItems.length <= 1 ? `${cartItems.length} item` : `${cartItems.length} items`}</span>
            </div>
            <div>
                <p>Shipping :</p>
                <span>${cartItems.length > 0 ? shippingFee : '0.00'}</span>
            </div>
            <div>
                <p>Total :</p>
                <span>
                    ${cartItems.length > 0 ? totalPrice.toFixed(2) : '0.00'}
                </span>
            </div>
            <div className='grand-total'>
                <p>Grand total :</p>
                <span>${cartItems.length > 0 ? (totalPrice + shippingFee).toFixed(2) : '0.00'}</span>
            </div>
        </>
    )
}
