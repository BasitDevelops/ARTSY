import React from 'react'
import CartProduct from './CartProduct'
import ProductsInCart from './ProductsInCart'

export default function Cart() {
    return (
        <div className='cart'>
            {/* <section className='first-section'>
                <ul>
                    <li><a href=''>Shopping cart</a></li>
                    <li><a href=''>Shipping details</a></li>
                    <li><a href=''>Payment details</a></li>
                </ul>
            </section> */}
            <section className='cart-products-container'>
                <CartProduct />
            </section>
            <section className='checkout'>
                <div className='first-container'>
                    <button>Proceed to checkout</button>
                    <a href='#'>Continue shopping</a>
                </div>
                <div className='second-container'>
                    <ProductsInCart />
                </div>
            </section>
        </div>
    )
}
