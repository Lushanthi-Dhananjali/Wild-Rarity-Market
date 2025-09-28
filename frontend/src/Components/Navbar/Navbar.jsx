import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assest/logo.png'
import cart_icon from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom'
import { MarketContext } from '../../Context/MarketContext'

const Navbar = () => {

    const [menu,setMenu] = useState("home")
    const{getTotalCartItems}= useContext(MarketContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='' />
        <p>Market</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>HOME</Link>{menu=="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("birds")}}><Link style={{textDecoration: 'none'}} to='/birds'>BIRDS</Link>{menu=="birds"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("animal")}}><Link style={{textDecoration: 'none'}} to='/animal'>ANIMAL</Link>{menu=="animal"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("market item")}}><Link style={{textDecoration: 'none'}} to='/marketitems'>MARKET ITEM</Link>{menu=="market item"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration: 'none'}} to='/about'>ABOUT</Link>{menu=="about"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=" " /></Link>
        <div className="nav-cart-count">{getTotalCartItems ()}</div>
      </div>
    </div>
  )
}

export default Navbar
