import React from 'react'

export default function ProductsInCart() {
    return (
        <>
            <div>
                <p>Products in cart :</p>
                <span>3 items</span>
            </div>
            <div>
                <p>Shipping :</p>
                <span>$250</span>
            </div>
            <div>
                <p>Total :</p>
                <span>$100</span>
            </div>
            <div className='grand-total'>
                <p>Grand total :</p>
                <span>$100</span>
            </div>
        </>
    )
}
