import React from 'react'
import { useState, useEffect, useContext } from 'react'
import filterIcon from '../images/icons/filter.png'
import Newsletter from './Newsletter'
import Contact from './Contact'
import Footer from './Footer'
import Product from './Product'
import CartContext from '../CartContext'

export default function Marketplace() {
    //STATES
    const [marketplaceProducts, setMarketplaceProducts] = useState([])
    const [productFlag, setProductFlag] = useState(false)
    const [selectedItem, setSelectedItem] = useState()
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState()
    const [filterByPriceValue, setFilterByPriceValue] = useState(500)
    const [moreProductsFlag, setMoreProductsFlag] = useState(false)

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/e4818c8fa14d1dd3679c6d9a99e36cdf98089947/products.json')
            .then(response => response.json())
            .then(mpData => setMarketplaceProducts(mpData.products))
    }, [])

    //FUNCTIONS
    const search = (e) => {
        setQuery(e.target.value)
        setFilter(false)
    }

    const filterByPrice = (e) => {
        setFilterByPriceValue(e.target.value)
        setFilter(marketplaceProducts.filter(item => item.price.usd <= filterByPriceValue))
    }

    const { cartFlag } = useContext(CartContext)

    return (
        <>
            {
                !cartFlag &&
                <div className='mp-container'>
                    {
                        productFlag
                            ?
                            <>
                                {
                                    productFlag && <Product
                                        productFlag={productFlag}
                                        selectedItem={selectedItem}
                                    />
                                }
                            </>
                            :
                            <>
                                <div className='marketplace'>
                                    <section className='first-section'>
                                        <input onInput={search} type='text' placeholder='Search' />
                                        <div>
                                            <p>Marketplace</p>
                                        </div>
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
                                                <p>${filterByPriceValue}.00 - $500.00</p>
                                                <input onChange={filterByPrice} type='range' value={filterByPriceValue} min={0} max={500} />
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
                                            {
                                                !filter
                                                    ?
                                                    marketplaceProducts.filter(item => item.name.includes(query)).map(item => {
                                                        return (
                                                            <div className='product' key={item.id} onClick={() => {
                                                                setProductFlag(true)
                                                                setSelectedItem(item)
                                                            }}>

                                                                <img src={item.url} />
                                                                <div>
                                                                    <h5>{item.name}</h5>
                                                                    <p>{`$ ${item.price.usd.toFixed(2)}`}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    :
                                                    filter.map(item => {
                                                        return (
                                                            <div className='product' key={item.id} onClick={() => {
                                                                setProductFlag(true)
                                                                setSelectedItem(item)
                                                            }}>

                                                                <img src={item.url} />
                                                                <div>
                                                                    <h5>{item.name}</h5>
                                                                    <p>{`$ ${item.price.usd.toFixed(2)}`}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                            }
                                        </div>
                                    </section>
                                    <div className='expand'>
                                        {
                                            !moreProductsFlag ?
                                                <button onClick={() => setMoreProductsFlag(true)}>See more</button>
                                                :
                                                <p>This is all for now, more artworks coming soon...</p>
                                        }
                                    </div>
                                </div>
                                <Newsletter />
                                <Contact />
                                <Footer />
                            </>
                    }
                </div>
            }
        </>
    )
}
