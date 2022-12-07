import React from 'react'
import productCompImg from '../images/productCompImg.png'

export default function CartProduct() {
    return (
        <>
            <div className='cart-product'>
                <img src={productCompImg} />
                <div>
                    <div className='first-container'>
                        <div>
                            <p className='category'>Editorials</p>
                            <h5>Philomena ‘22</h5>
                            <h6>Clearamane</h6>
                            <p className='size'>Size : <span>200 ft</span></p>
                        </div>
                        <div className='counter'>
                            <button>-</button>
                            <p>Count</p>
                            <button>+</button>
                        </div>
                    </div>
                    <div className='second-container'>
                        <i>close</i>
                        <p>$35.50</p>
                    </div>
                </div>
            </div>
            <div className='cart-product'>
                <img src={productCompImg} />
                <div>
                    <div className='first-container'>
                        <div>
                            <p className='category'>Editorials</p>
                            <h5>Philomena ‘22</h5>
                            <h6>Clearamane</h6>
                            <p className='size'>Size : <span>200 ft</span></p>
                        </div>
                        <div className='counter'>
                            <button>-</button>
                            <p>Count</p>
                            <button>+</button>
                        </div>
                    </div>
                    <div className='second-container'>
                        <i>close</i>
                        <p>$35.50</p>
                    </div>
                </div>
            </div>
        </>
    )
}
