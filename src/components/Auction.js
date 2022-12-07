import React from 'react'
import img4 from '../images/Rectangle 233.png'

export default function Auction() {
    return (
        <div className='auction'>
            <section className='first-section'>
                <h3>Here’s an overview of products actively on auction, explore!</h3>
                <div className='auction-products-container'>
                    <div className='auction-product'>
                        <p>6hr : 40mins: 15s</p>
                    </div>
                    <div className='auction-product'>
                        <p>6hr : 40mins: 15s</p>
                    </div>
                </div>
            </section>
            <section className='second-section'>
                <h3>Top bids from popular creators</h3>
                <div className='top-bids-container'>
                    <div className='top-bid'>
                        <div className='first-container'>
                            <i>like</i>
                            <img src={img4} />
                            <p>Out of the box</p>
                        </div>
                        <div className='second-container'>
                            <p>Creator : <span>Dan Murray</span></p>
                            <p>Date : <span>12/08/22</span></p>
                            <p>Highest bid : <span>0.57 ETH</span></p>
                            <div>
                                <div>
                                    <p>Current bid</p>
                                    <span>0.987 ETH</span>
                                </div>
                                <button>Place bid</button>
                            </div>
                        </div>
                    </div>
                    <div className='top-bid'>
                        <div className='first-container'>
                            <i>like</i>
                            <img src={img4} />
                            <p>Out of the box</p>
                        </div>
                        <div className='second-container'>
                            <p>Creator : <span>Dan Murray</span></p>
                            <p>Date : <span>12/08/22</span></p>
                            <p>Highest bid : <span>0.57 ETH</span></p>
                            <div>
                                <div>
                                    <p>Current bid</p>
                                    <span>0.987 ETH</span>
                                </div>
                                <button>Place bid</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}
