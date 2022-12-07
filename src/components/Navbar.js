import React from 'react'
import { useState } from 'react'
import logo from '../images/ARTSY.png'
import searchIcon from '../images/icons/search.png'
import cartIcon from '../images/icons/cart.png'
import bellIcon from '../images/icons/bell.png'
import toggleIcon from '../images/icons/toggle.png'
import closeIcon from '../images/icons/close.png'
import chatIcon from '../images/icons/chat.png'

export default function Navbar() {
    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        setMenu(true)
    }

    const closeMenu = () => {
        setMenu(false)
    }

    return (
        <nav>
            <img src={toggleIcon} alt='toggleIcon' className='toggle-icon' onClick={openMenu} />
            <img src={logo} alt='logo' className='logo' />
            <div className='nav-links'>
                <ul id={menu ? "display-menu" : ""}>
                    <div className='close-icon-container'>
                        <img src={logo} alt='logo' />
                        <img src={closeIcon} alt='closeIcon' className='close-icon' onClick={closeMenu} />
                    </div>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Marketplace</a></li>
                    <li><a href='#'>Auctions</a></li>
                    <li><a href='#'>Drop</a></li>
                    <div className='chat-icon-container'>
                        <img src={chatIcon} alt='chatIcon' />
                    </div>
                </ul>
            </div>
            <div className='nav-icons'>
                <img src={searchIcon} alt='searchIcon' />
                <img src={cartIcon} alt='cartIcon' />
                <img src={bellIcon} alt='bellIcon' className='bell-icon' />
            </div>
        </nav>
    )
}


