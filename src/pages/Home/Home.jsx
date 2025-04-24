import React from 'react'
import Carousell from '../../components/Carousels/Carousell'
import './home.css'
import bgg from '../../assets/img/wolfgang-hasselmann-pVr6wvUneMk-unsplash.jpg'
const Home = () => {
  return (
    <div className='homeConatiner'>
      <Carousell />
      <div className='homeContent ' style={{ backgroundImage: `url(${bgg})` }}>
      {/* <h1 className='px-2'> Sand & Metal</h1> */}
        <div className="welcomebox">
          <div className=' welcome'>
            <h3>welcome</h3>

            <p className=''>
              &nbsp; We specialize in supplying premium-quality sand, metal, and rock stones for all types of construction and landscaping projects.
              With a strong commitment to quality and efficiency, we ensure top-grade materials are delivered right to your site — fast and hassle-free
              Whether it's residential, commercial, or industrial needs, we provide reliable and timely delivery of construction materials across your location.
              We take pride in our fast and dependable delivery service, ensuring your materials arrive on time, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home