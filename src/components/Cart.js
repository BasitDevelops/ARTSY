import React, { useContext } from 'react'
import CartContext from '../CartContext'
import CartProduct from './CartProduct'
import ProductsInCart from './ProductsInCart'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const { cartItems, resetCartFlag } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div className='cart'>
            <section className='cart-products-container'>
                {
                    cartItems.map(item => <CartProduct key={item.id} item={item} />)
                }
            </section>
            <section className='checkout'>
                <div className='first-container'>
                    <button onClick={() => {
                        navigate('/paymentdetails')
                        resetCartFlag()
                    }}>Proceed to checkout</button>
                    <a onClick={() => resetCartFlag()}>Continue shopping</a>
                </div>
                <div className='second-container'>
                    <ProductsInCart />
                </div>
            </section>
        </div>
    )
}

