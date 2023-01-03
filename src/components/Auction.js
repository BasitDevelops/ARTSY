import React, { useState, useEffect, useContext } from 'react'
import Newsletter from './Newsletter'
import Contact from './Contact'
import Footer from './Footer'
import CartContext from '../CartContext'

export default function Auction() {

    const [auctionData, setAuctionData] = useState([])

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/e92b503abc14758a31c386e660e50f43d1b11c5e/auction.json')
            .then(response => response.json())
            .then(data => setAuctionData(data))
    }, [])

    const { cartFlag } = useContext(CartContext)

    return (
        <>
            {
                !cartFlag &&
                <div className='auction-container'>
                    <div className='auction'>
                        <section className='first-section'>
                            <h3>Here’s an overview of products actively on auction, explore!</h3>
                            <div className='auction-products-container'>
                                {
                                    auctionData && Object.keys(auctionData).length > 0 &&
                                    auctionData.products.map(item => {
                                        return (
                                            <div className='auction-product' style={{ backgroundImage: `url(${item.url})` }}>
                                                <p>{item.time}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                        <section className='second-section'>
                            <h3>Top bids from popular creators</h3>
                            <div className='top-bids-container'>
                                {
                                    auctionData && Object.keys(auctionData).length > 0 &&
                                    auctionData.bids.map(item => {
                                        return (
                                            <div className='top-bid'>
                                                <div className='first-container'>
                                                    <i>like</i>
                                                    <img src={item.url} />
                                                    <p>{item.name}</p>
                                                </div>
                                                <div className='second-container'>
                                                    <p>Creator : <span>{item.creator}</span></p>
                                                    <p>Date : <span>{`${item.date.day}/${item.date.month}/${item.date.year}`}</span></p>
                                                    <p>Highest bid : <span>{item.bid.highest.eth}</span></p>
                                                    <div>
                                                        <div>
                                                            <p>Current bid</p>
                                                            <span>{item.bid.current.eth}</span>
                                                        </div>
                                                        <button>Place bid</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </div>
                    <Newsletter />
                    <Contact />
                    <Footer />
                </div>
            }
        </>
    )
}
