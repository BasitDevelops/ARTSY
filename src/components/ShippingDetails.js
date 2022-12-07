import React from 'react'
import CartProduct from './CartProduct'
import ProductsInCart from './ProductsInCart'

export default function ShippingDetails() {
    return (
        <div className='shipping-details'>
            <section className='first-section'>

            </section>
            <section className='second-section'>
               <div className='form'>
                    <div>
                        <p>Your email</p>
                        <input type='text' />
                        <div className='check'>
                            <input type='checkbox' />
                            <p>Get updates about new drops & exclusive offers</p>
                        </div >
                    </div>
                    <div>
                        <p>Your full name</p>
                        <input type='text' />
                    </div>
                    <div>
                        <p>Choose a wallet</p>
                        <input type='text' />
                    </div>
                    <div>
                        <p>City</p>
                        <input type='text' />
                    </div>
                    <div className='adjust'>
                        <div>
                            <p>Country</p>
                            <input type='text' />
                        </div>
                        <div>
                            <p>Postal code</p>
                            <input type='text' />
                        </div>
                    </div>
                    <div>
                        <p>Phone number</p>
                        <input type='text' />
                    </div>
                    <button>Proceed to payment</button>
                    <a href='#'>Go back to cart </a>
                </div>
                <div className='cart'>
                    <section className='cart-products-container'>
                        <CartProduct />
                    </section>
                    <section className='checkout'>
                        <div className='second-container'>
                            <ProductsInCart />
                        </div>
                    </section>
                </div>
            </section>

        </div>
    )
}
