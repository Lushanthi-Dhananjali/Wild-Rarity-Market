import React from 'react'
import './Footer.css'
import footer_logo from '../Assest/footer_logo.png'
import instagram_icon from '../Assest/instagram_icon.png'
import printerest_icon from '../Assest/printerset_icon.png'
import whatsapp_icon from '../Assest/whatsapp_icon1.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>MARKET</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
         <div className="footer-icons-container">
            <img src={printerest_icon} alt="" />
        </div>
         <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 -All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
