import React from 'react'
import './material.css'
import msand from '../../assets/img/msand.jpg'
import psand from '../../assets/img/psand.webp'
import metal from '../../assets/img/metals.jpg'
import boulder from '../../assets/img/boulder.webp'
const Material = () => {
  return (
    <div className='materialContainer '>
      <h2 className=' px-1 text-decoration-underline'>Materials</h2>
      <div className='materials'>
        <div>
          <img src={msand} alt="ff" />
          <p>M Sand</p>
        </div>
        <div>
          <img src={psand} alt="m2" />
          <p>P Sand</p>
        </div>
        <div>
          <img src={metal} alt="m3" />
          <p>Metal</p>
        </div>
        <div>
          <img src={boulder} alt="m4" />
          <p>Boulder</p>
        </div>
      </div>
    </div>
  )
}

export default Material