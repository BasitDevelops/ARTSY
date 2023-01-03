import React, { useState, useContext } from 'react'
import CartContext from '../CartContext'
import closeIcon from '../images/icons/close.png'
import Cart from './Cart'
import Marketplace from './Marketplace'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product(props) {
    //STATES
    const [productFlag, setProductFlag] = useState(props.productFlag)
    const [count, setCount] = useState(1)
    
    //FUNCTIONS
    const closeProduct = () => setProductFlag(prevState => !prevState)
    const decreaseCount = () => setCount(prevState => prevState - 1)
    const increaseCount = () => setCount(prevState => prevState + 1)
    
    const { addToCart } = useContext(CartContext)

    const notify = () => toast("Wow so easy!");

    return (
        <>
            {
                productFlag
                    ?
                    <div className='product-expand'>
                        <img src={closeIcon} className='close-icon' onClick={closeProduct} />
                        <section className='first-section'>
                            <div className='img-container'>
                                <img src={props.selectedItem.url} />
                            </div>
                            <div className='second-container'>
                                <div className='product-name'>
                                    <h3>{props.selectedItem.name}</h3>
                                    <p>{`$${props.selectedItem.price.usd.toFixed(2)}`}</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Creator : <span>{props.selectedItem.creator}</span></h5>
                                    <p>{props.selectedItem.origin}</p>
                                    <h6>Total views: <span>{props.selectedItem.views}</span></h6>
                                    <div className='product-count'>
                                        <button onClick={decreaseCount}>-</button>
                                        <p>{count}</p>
                                        <button onClick={increaseCount}>+</button>
                                    </div>
                                    <div>
                                        <button className='add-to-cart' onClick={() => addToCart({ ...props.selectedItem, count: count })}>Add to cart</button>
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
                                    <img src='' />
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
                    :
                    <>
                        <Marketplace />
                    </>
            }
        </>


    )
}
