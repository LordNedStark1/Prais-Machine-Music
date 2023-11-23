import React from 'react'
import logo from '../../assets/images/allan-lainez-M7ArH6K0Oyw-unsplash.jpg'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
    <img src={logo} alt='' height={50} width={50}/>
    <div className='nav-links'>
                <li><Link to="/about-us" className='menu-link'>About us</Link></li>
                <li><Link to="/contact-us" className='menu-link'>Contact</Link></li>
                <li><Link to="/bootstrap" className='menu-link'>Bootstrap</Link></li>
                <li><Link to="/album" className='menu-link'>Album</Link></li>
                <li><Link to="/blog" className='menu-link'>Blog</Link></li>
        </div>
    </div>
  )
}
