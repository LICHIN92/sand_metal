import React from 'react'
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './footer.css'
import { FaXTwitter } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className='footer'>
      <div className=''>
        <FaInstagram className='insta' />
        <FaFacebook className='facebook' />
        <FaWhatsapp className='whatsapp' />
        <FaXTwitter className='twitter' />
      </div>
      <div >
        {/* <ul > */}
          <li onClick={()=>navigate('/')}>home</li>
          <li onClick={()=>navigate('/about')}>about</li>
          <li onClick={()=>navigate('/material')}>material</li>
          <li onClick={()=>navigate('/booking')}>Booking</li>
          <li onClick={()=>navigate('/contact')}>Contact</li>
        {/* </ul> */}
      </div>
    </div>
  )
}

export default Footer