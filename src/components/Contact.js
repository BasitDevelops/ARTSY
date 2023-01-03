import React from 'react'
import logo from '../images/ARTSY.png'
import mailIcon from '../images/icons/mail.png'
import locationIcon from '../images/icons/location.png'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className='contact'>
            <img src={logo} />
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/marketplace'>Marketplace</Link></li>
                <li><Link to='/auction'>Auctions</Link></li>
                <li><Link to='/drops'>Drops</Link></li>
                <li>Blog</li>
                <li>Wallets</li>
                <li>Rates</li>
                <li>High bids</li>
            </ul>
            <div>
                <h5>REACH US</h5>
                <p><img src={mailIcon} /><span>ayomidebasit026@gmail.com</span></p>
                <p><img src={locationIcon} /><span>Lagos, Nigeria.</span></p>
            </div>
        </div>
    )
}
