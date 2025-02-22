import React from 'react'
import './Nav.css'
import {Link} from 'react-scroll'


const Nav = () => {
  return (
    <>
    <nav className='navbar'>
        <span className='logo'>ColorX</span>
        <div className='menu'>
        <Link activeClass='active' to='header' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Home</Link>
        <Link activeClass='active' to='logo' spy={true} smooth={true} offset={-10} duration={500} className='menuList'>Customers</Link>
        <Link activeClass='active' to='benefits' spy={true} smooth={true} offset={-10} duration={500} className='menuList'>Benefits</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className='menuList'>Contact</Link>

        </div>
        
        
    </nav>
    </>
  )
}

export default Nav
