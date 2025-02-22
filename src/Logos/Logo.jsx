import React from 'react'
import './Logo.css'
import one from '../assets/first.webp'
import two from '../assets/second.png'
import three from '../assets/third.webp'
import four from '../assets/forth.webp'
import five from '../assets/fifth.webp'
import six from '../assets/sixth.png'
import seven from '../assets/seven.webp'
import eight from '../assets/eight.webp'


const Logo = () => {
  return (
    <div>
      <div id="logo">
        <div className='logo-title'>
            <h2>Our satisfied customers</h2>
        </div>
        <div className="all-logos">
            <div className="one">
                <img src={one} alt="" />
            </div>
            <div className="two">
                <img src={two} alt="" />
            </div>
            <div className="three">
                <img src={three} alt="" />
            </div>
            <div className="four">
                <img src={four} alt="" />
            </div>
            <div className="five">
                <img src={five} alt="" />
            </div>
            <div className="six">
                <img src={six} alt="" />
            </div>
            <div className="seven">
                <img src={seven} alt="" />
            </div>
            <div className="eight">
                <img src={eight} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Logo
