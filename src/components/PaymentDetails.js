import React from 'react'
import metaMask from '../images/icons/MetaMask.png'
import ProductsInCart from './ProductsInCart'

export default function PaymentDetails() {
    return (
        <div className='payment-details'>
            <section className='first-section'>

            </section>
            <div>
                <p className='pm'>Payment method</p>
                <p>Secure server</p>
            </div>
            <section className='second-section'>
                <div className='first-container'>
                    <div>
                        <div className='select-wallet'>
                            <input type='radio' />
                            <p>Select your wallet</p>
                        </div>
                        <div>
                            <img src={metaMask} />
                            <img src={metaMask} />
                            <img src={metaMask} />
                            <img src={metaMask} />
                        </div>
                    </div>
                    <div>
                        <p>Connect with one of our available wallet providers or add and connect a new wallet.  </p>
                    </div>
                    <div className='pd-form'>
                        <div>
                            <p>Wallet type</p>
                            <input type='text' />
                        </div>
                        <div>
                            <p>Key</p>
                            <input type='text' />
                        </div>
                        <div className='adjust'>
                            <div>
                                <p>Expiry date</p>
                                <input type='text' />
                            </div>
                            <div>
                                <p>CVV</p>
                                <input type='text' />
                            </div>
                        </div>
                        <div>
                            <div className='check'>
                                <input type='checkbox' />
                                <p>Get updates about new drops & exclusive offers</p>
                            </div >
                        </div>
                        {/* <a href='#'>Go back to cart </a> */}
                    </div>
                    <button>Confirm</button>
                </div>
                <div className='second-container'>
                    <h3>Payment Summary</h3>
                    <div>
                        <h6>Metamask wallet : 002345KJi90pzzz3</h6>
                        <p>Actively linked to Yaba, Lagos Nigeria.</p>
                    </div>
                    <div>
                        <p>Expected arrival date: Between 22nd September and 26th September 20222</p>
                    </div>
                    <div className='products-in-cart'>
                        <ProductsInCart />
                    </div>
                </div>
            </section>
        </div>
    )
}
