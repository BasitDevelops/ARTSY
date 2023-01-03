import React from 'react'
import { useState, useContext } from 'react'
import logo from '../images/ARTSY.png'
import searchIcon from '../images/icons/search.png'
import cartIcon from '../images/icons/cart.png'
import bellIcon from '../images/icons/bell.png'
import toggleIcon from '../images/icons/toggle.png'
import closeIcon from '../images/icons/close.png'
import chatIcon from '../images/icons/chat.png'
import Cart from './Cart'
import { Link, useLocation } from 'react-router-dom'
import CartContext from '../CartContext'

export default function Navbar() {
    const location = useLocation()

    const { menu, cartFlag, cartItems, openMenu, closeMenu, openCart, resetCartFlag } = useContext(CartContext)

    return (
        <>
            <nav>
                <img src={toggleIcon} alt='toggleIcon' className='toggle-icon' onClick={openMenu} />
                <img src={logo} alt='logo' className='logo' />
                <div className='nav-links'>
                    <ul id={menu ? "display-menu" : ""}>
                        <div className='close-icon-container'>
                            <img src={logo} alt='logo' />
                            <img src={closeIcon} alt='closeIcon' className='close-icon' onClick={closeMenu} />
                        </div>
                        <li><Link to='/ARTSY' onClick={resetCartFlag} className={location.pathname === '/ARTSY' && 'current-page'}>Home</Link></li>
                        <li><Link to='/marketplace' onClick={resetCartFlag} className={location.pathname === '/marketplace' && 'current-page'}>Marketplace</Link></li>
                        <li><Link to='/auction' onClick={resetCartFlag} className={location.pathname === '/auction' && 'current-page'}>Auctions</Link></li>
                        <li><Link to='/drops' onClick={resetCartFlag} className={location.pathname === '/drops' && 'current-page'}>Drop</Link></li>
                        <div className='chat-icon-container'>
                            <img src={chatIcon} alt='chatIcon' />
                        </div>
                    </ul>
                </div>
                <div className='nav-icons'>
                    <img src={searchIcon} alt='searchIcon' />
                    <div>
                        <img src={cartIcon} alt='cartIcon' onClick={openCart} />
                        <p>{cartItems.length}</p>
                    </div>
                    <img src={bellIcon} alt='bellIcon' className='bell-icon' />
                </div>
            </nav>
            {cartFlag && <Cart />}
        </>
    )
}


