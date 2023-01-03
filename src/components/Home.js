import React from 'react'
import { useState, useEffect, useContext } from 'react'
import img1 from '../images/Rectangle 230.png'
import img2 from '../images/Rectangle 231.png'
import img3 from '../images/Rectangle 232.png'
import img4 from '../images/Rectangle 233.png'
import fsImgMobile from '../images/home-fs-mobile.png'
import fpProfileImg from '../images/fpProfileImg.png'
import ellipse15 from '../images/Ellipse 15.png'
import ellipse16 from '../images/Ellipse 16.png'
import ellipse17 from '../images/Ellipse 17.png'
import ellipse18 from '../images/Ellipse 18.png'
import forwardIcon from '../images/icons/forwardIcon.png'
import Newsletter from './Newsletter'
import Contact from './Contact'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import CRight from '../images/icons/CRight'
import CLeft from '../images/icons/CLeft'
import CartContext from '../CartContext'

export default function Home() {
    const [featuredProductsData, setFeaturedProductsData] = useState([])
    const [carouselData, setCarouselData] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const fpData = fetch('https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/fa83e60319a4dc9a4306d86ff65d24ba565237a3/products.json')
            .then(response => response.json())
            .then(fpData => setFeaturedProductsData(fpData.featured_products))
    }, [])

    useEffect(() => {
        const cData = fetch('https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/ad3985705a52397ddd061e6fd342e7d1b1fe05bd/carousel.json')
            .then(response => response.json())
            .then(cData => setCarouselData(cData.carousel))
    }, [])

    const handlePrevious = () => {
        index === 0 ?
            setIndex(carouselData.length - 1)
            :
            setIndex(prevState => prevState - 1)
    }

    const handleNext = () => {
        index === carouselData.length - 1 ?
            setIndex(0)
            :
            setIndex(prevState => prevState + 1)
    }

    const { cartFlag } = useContext(CartContext)

    return (
        <>
            {
                !cartFlag &&
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
                        {
                            featuredProductsData.map(item => {
                                return (
                                    <div className='f-product' key={item.id}>
                                        <img src={item.url} />
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                            {/* <div>
                                        <div className='profiles'>
                                            <img src={fpProfileImg} />
                                            <img src={ellipse15} />
                                            <img src={ellipse16} />
                                            <img src={ellipse17} />
                                            <img src={ellipse18} />
                                        </div>
                                        <p>{item.creatorCount} major {item.creatorCount <= 1 ? 'creator' : 'creators'}</p>
                                        <img src={forwardIcon} />
                                    </div> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <section className='upcoming-auctions'>
                        <h3>See Upcoming Auctions and Exhibitions</h3>
                        <div className='carousel-container'>
                            {
                                carouselData && carouselData.length > 0 &&
                                <div className='carousel' style={{ backgroundImage: `url(${carouselData[index].url})` }}>
                                    <div className='first-container'>
                                        <div>
                                            <span>{carouselData[index].id.slice(1)}</span>
                                        </div>
                                        <div>
                                            <h5>{carouselData[index].title}</h5>
                                            <p>{carouselData[index].date}</p>
                                            <h6>{carouselData[index].desc}</h6>
                                        </div>
                                    </div>
                                    <div className='second-container'>
                                        <Link to='/auction'>See more</Link>
                                        <button onClick={() => { }}>Set a reminder</button>
                                    </div>
                                </div>
                            }
                        </div>
                        <div>
                            <CLeft onClick={handlePrevious} />
                            <CRight onClick={handleNext} />
                        </div>
                    </section>
                    <section className='links'>
                        <ul>
                            <li><p>Explore marketplace</p><Link to='/marketplace'><img src={forwardIcon} /></Link></li>
                            <li><p>See auctions</p><Link to='/auction'><img src={forwardIcon} /></Link></li>
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
            }
        </>
    )
}

