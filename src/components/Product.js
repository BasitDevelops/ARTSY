import React from 'react'
import productCompImg from '../images/productCompImg.png'

export default function Product() {
    return (
        <div className='product-expand'>
            <section className='first-section'>
                <div className='img-container'>
                    <img src={productCompImg} />
                </div>
                <div className='second-container'>
                    <div className='product-name'>
                        <h3>Boolean Egyptian</h3>
                        <p>$150</p>
                    </div>
                    <div className='product-details'>
                        <h5>Creator : <span>Ali Dawa</span></h5>
                        <p>Made in Italy</p>
                        <h6>Total views: <span>1.7K views</span></h6>
                        <div>
                            <button>-</button>
                            <p>Count</p>
                            <button>+</button>
                        </div>
                        <div>
                            <button className='add-to-cart'>Add to cart</button>
                            <button className='like'>Like</button>
                        </div>
                    </div>
                    <div className='product-desc'>
                        <p className='info'>Description</p>
                    </div>
                    <div className='product-listings'>
                        <p className='info'>Listings</p>
                    </div>
                    <div className='product-status'>
                        <p className='info'>Status</p>
                    </div>
                </div>
            </section>
            <section className='second-section'>
                <div className='first-container'>
                    <p>Explore more from this collection</p>
                    <div>
                        <button>prev</button>
                        <button>next</button>
                    </div>
                </div>
                <div className='same-collection-products'>
                    <div className='same-collection-product'>
                        <i>like</i>
                        <img src={productCompImg} />
                        <div>
                            <p>Sassy</p>
                            <p>$250</p>
                        </div>
                    </div>
                    <div className='same-collection-product'>
                        <i>like</i>
                        <img src={productCompImg} />
                        <div>
                            <p>Sassy</p>
                            <p>$250</p>
                        </div>
                    </div>
                </div>
                <div className='explore'>
                    <button>Explore all</button>
                </div>
            </section>
        </div>
    )
}
