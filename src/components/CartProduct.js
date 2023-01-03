import React, { useState, useContext } from 'react'
import CartContext from '../CartContext'
import CloseIcon from '../images/icons/CloseIcon'

export default function CartProduct(props) {
    //STATES
    const [count, setCount] = useState(props.item.count)

    //FUNCTION
    const decreaseCount = () => setCount(prevState => prevState - 1)
    const increaseCount = () => setCount(prevState => prevState + 1)

    const { removeFromCart } = useContext(CartContext)

    return (
        <>
            <div className='cart-product'>
                <img src={props.item.url} />
                <div>
                    <div className='first-container'>
                        <div>
                            <p className='category'>Editorials</p>
                            <h5 className='uppercase'>{props.item.name}</h5>
                            <h6 className='uppercase'>{props.item.creator}</h6>
                            <p className='size'>Size : <span>{props.item.size.ft} ft</span></p>
                        </div>
                        <div className='counter'>
                            <button onClick={decreaseCount}>-</button>
                            <p>{count}</p>
                            <button onClick={increaseCount}>+</button>
                        </div>
                    </div>
                    <div className='second-container'>
                        <CloseIcon onClick={() => removeFromCart(props.item)} />
                        <p>$ {(props.item.price.usd * count).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
