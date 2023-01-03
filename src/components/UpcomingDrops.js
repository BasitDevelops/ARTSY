import React, { useState, useEffect, useContext } from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Newsletter from './Newsletter'
import CartContext from '../CartContext'

export default function UpcomingDrops() {
  const [upcomingDropsData, setUpcomingDropsData] = useState([])

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/BasitDevelops/9e0020bc5bfb444d6fed4ca84595c146/raw/f07eef2eee3c17daff3d7a0a867c8fa2537c8f38/drops.json')
      .then(response => response.json())
      .then(data => setUpcomingDropsData(data))
  }, [])

  const { cartFlag } = useContext(CartContext)

  return (
    <>
      {
        !cartFlag &&
        <div className='upcoming-drops'>
          <section className='first-section'>
            <h3>Upcoming drops</h3>
            <p>Turn on notifications so that no drops will miss you.</p>
            <button>Notify me</button>
          </section>
          <section className='second-section'>
            <div className='drops-container'>
              {
                upcomingDropsData.map(item => {
                  return (
                    <div className='drop' key={item.id}>
                      <div className='img-container' style={{ backgroundImage: `url(${item.url})` }} >
                        <div>
                          <div className='time'>
                            <h6>Time remaining</h6>
                            <p>06  hrs : 45 min : 22 s</p>
                          </div>
                          <button>Join</button>
                        </div>
                      </div>
                      <div className='drop-details'>
                        <p className='tag'>UPCOMING</p>
                        <p>{item.date.month} {item.date.day} at {item.date.time} {item.date.timezone}</p>
                        <div>
                          <h4>{item.title}</h4>
                          <h5>{item.desc}</h5>
                          <h6>Creator : <span>{item.creator}</span></h6>
                        </div>
                        <a>Get notified</a>
                      </div>
                    </div>
                  )
                })
              }
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
