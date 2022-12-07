import React from 'react'
import img1 from '../images/Rectangle 230.png'
import img2 from '../images/Rectangle 231.png'
import img3 from '../images/Rectangle 232.png'
import img4 from '../images/Rectangle 233.png'
import fsImgMobile from '../images/home-fs-mobile.png'
import fpImg1 from '../images/fp1.png'
import fpProfileImg from '../images/fpProfileImg.png'
import forwardIcon from '../images/icons/forwardIcon.png'
// import blueForwardIcon from '../images/icons/blueForwardIcon.png'
import auctionBg from '../images/auctionBg.png'
import Newsletter from './Newsletter'
import Contact from './Contact'
import Footer from './Footer'
// import prev from '../images/icons/prev.png'

export default function Home() {
    return (
        <div className='home'>
            <section className='first-section'>
                <h1>Photography is poetry & beautiful untold stories</h1>
                <p>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
                <div className='first-section-images'>
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                </div>
                <div className='first-section-images-mobile'>
                    <img src={fsImgMobile} />
                </div>
            </section>
            <section className='featured-products'>
                <h3>Featured products</h3>
                <div className='product'>
                    <img src={fpImg1} />
                    <div>
                        <h5>The Boolean Egyptian</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                        <div>
                            <div className='profiles'>
                                <img src={fpProfileImg} />
                                <img src={fpProfileImg} />
                                <img src={fpProfileImg} />
                                <img src={fpProfileImg} />
                                <img src={fpProfileImg} />
                            </div>
                            <p>64 major creators</p>
                            <img src={forwardIcon} />
                        </div>
                    </div>
                </div>
                {/* <div className='product even'>
                    <img src={fpImg1} />
                    <div>
                        <h5>The Boolean Egyptian</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                        <div>
                            <div className='profiles'>
                                <img src={fpProfileImg}/>
                                <img src={fpProfileImg}/>
                                <img src={fpProfileImg}/>
                                <img src={fpProfileImg}/>
                                <img src={fpProfileImg}/>
                            </div>
                            <p>64 major creators</p>
                            <img src={forwardIcon} />
                        </div>
                    </div>

                </div> */}
            </section>
            <section className='upcoming-auctions'>
                <h3>See Upcoming Auctions and Exhibitions</h3>
                <div className='carousel' style={{ backgroundImage: `url(${auctionBg})` }}>
                    <div className='first-container'>
                        <div>
                            <img />
                            <span>01</span>
                        </div>
                        <div>
                            <h5>MONALISA REDEFINED IN STYLE.</h5>
                            <p>Start on : 08:00 GTS . Monday </p>
                            <h6>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</h6>
                        </div>
                    </div>
                    <div className='second-container'>
                        <a>See more</a>
                        <button>Set a reminder</button>
                    </div>
                </div>
                <div>
                    <button>prev</button>
                    <button>next</button>
                </div>
            </section>
            <section className='links'>
                <ul>
                    <li><p>Explore marketplace</p><a><img src={forwardIcon} /></a></li>
                    <li><p>See auctions</p><a><img src={forwardIcon} /></a></li>
                </ul>
            </section>
            <section className='top-creators'>
                <div className='first-container'>
                    <h3>TOP CREATORS OF THE WEEK</h3>
                    <ul>
                        <li>Editorials</li>
                        <li>Fashion</li>
                        <li>Lifestyle</li>
                        <li>Blueprint</li>
                    </ul>
                </div>
                <div className='second-container'>
                    <p>“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden</p>
                    <span>1985</span>
                </div>
            </section>
            <Newsletter />
            <Contact />
            <Footer />
        </div>
    )
}

