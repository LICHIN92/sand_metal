import React from 'react'
import './about.css'
import stone from '../../assets/img/rockstone.jpg'
const About = () => {
  return (
    <div className='about' style={{ backgroundImage:`url(${stone})` }}>About</div>
  )
}

export default About