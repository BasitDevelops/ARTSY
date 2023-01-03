import { createContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
    const [menu, setMenu] = useState(false)
    const [cartFlag, setCartFlag] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const openMenu = () => setMenu(true)
    const closeMenu = () => setMenu(false)

    const openCart = () => {
        setCartFlag(prevState => !prevState)
    }

    const resetCartFlag = () => {
        setCartFlag(false)
        setMenu(false)
    }

    const addToCart = (item) => setCartItems(prevState =>
        [
            ...prevState,
            item
        ]
    )

    const removeFromCart = (item) => setCartItems(
        cartItems.filter(element => item.id !== element.id)
    )

    return (
        <CartContext.Provider value={{ menu, cartFlag, cartItems, openMenu, closeMenu, openCart, resetCartFlag, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;