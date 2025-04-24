import React from 'react'
import Navbarr from './components/Navbar/Navbarr'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

const Mainpage = () => {
  return (
    <div>
        <Navbarr/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Mainpage