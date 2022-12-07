import React from 'react'
import logo from '../images/ARTSY.png'
import mailIcon from '../images/icons/mail.png'
import locationIcon from '../images/icons/location.png'

export default function Contact() {
    return (
        <div className='contact'>
            <img src={logo} />
            <ul>
                <li>Home</li>
                <li>Marketplace</li>
                <li>Auctions</li>
                <li>Drops</li>
                <li>Blog</li>
                <li>Wallets</li>
                <li>Rates</li>
                <li>High bids</li>
            </ul>
            <div>
                <h5>REACH US</h5>
                <p><img src={mailIcon} /><span>artsystudios@gmail.com</span></p>
                <p><img src={locationIcon} /><span>Lagos, Nigeria.</span></p>
            </div>
        </div>
    )
}
