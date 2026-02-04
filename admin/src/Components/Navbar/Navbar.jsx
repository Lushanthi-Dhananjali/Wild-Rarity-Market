import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navlogo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="navlogo" />
        <div className="logo">
            <h1>Wild Rarity Market</h1>
        </div>
    </div>
  )
}

export default Navbar