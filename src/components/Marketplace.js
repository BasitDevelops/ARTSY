import React from 'react'
import filterIcon from '../images/icons/filter.png'
import firstProductImg from '../images/firstProductImg.png'
import Newsletter from './Newsletter'
import Contact from './Contact'
import Footer from './Footer'

export default function Marketplace() {
    return (
        <div className='mp-container'>
            <div className='marketplace'>
                <section className='first-section'>
                    <input type='text' placeholder='Search' />
                    <div>
                        <p>See 1-6 of 15 results</p>
                        <div>
                            <p>Sort by</p>
                        </div>
                    </div>
                </section>
                <section className='first-section-mobile'>
                    <p>Filters</p>
                    <p>Sort by</p>
                </section>
                <section className='second-section'>
                    <div className='filter-settings'>
                        <h3><img src={filterIcon} /><p>Filter</p></h3>
                        <div className='line'></div>
                        <div className='category'>
                            <h5>By category</h5>
                            <ul>
                                <li><input type='checkbox' /><p>Editorials</p></li>
                                <li><input type='checkbox' /><p>Fashion</p></li>
                                <li><input type='checkbox' /><p>Optics</p></li>
                                <li><input type='checkbox' /><p>Art & Museum</p></li>
                                <li><input type='checkbox' /><p>Nature</p></li>
                            </ul>
                        </div>
                        <div className='price'>
                            <h5>By price</h5>
                            <p>$100.00 - $150.00</p>
                            <input type='range' />
                        </div>
                        <div className='artist'>
                            <h5>By artist</h5>
                            <ul>
                                <li><p>All</p></li>
                                <li><p>Below $100.00</p></li>
                                <li><p>$100.00 - $150.00</p></li>
                                <li><p>$150.00 - $200.00</p></li>
                                <li><p>Above $200.00</p></li>
                            </ul>
                        </div>
                        <div className='year'>
                            <h5>Collection year</h5>
                        </div>
                    </div>
                    <div className='products-container'>
                        <div className='product'>
                            <img src={firstProductImg} />
                            <div>
                                <h5>PHILOMENA ‘22</h5>
                                <p>$3.90</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src={firstProductImg} />
                            <div>
                                <h5>PHILOMENA ‘22</h5>
                                <p>$3.90</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src={firstProductImg} />
                            <div>
                                <h5>PHILOMENA ‘22</h5>
                                <p>$3.90</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src={firstProductImg} />
                            <div>
                                <h5>PHILOMENA ‘22</h5>
                                <p>$3.90</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='expand'>
                    <button>See more</button>
                </div>
            </div>
            <Newsletter />
            <Contact />
            <Footer />
        </div>
    )
}
