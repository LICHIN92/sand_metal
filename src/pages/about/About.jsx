import React from 'react'
import './about.css'
import stone from '../../assets/img/rockstone.jpg'
const About = () => {
  return (
    <div className='about' style={{ backgroundImage: `url(${stone})` }}>
    <div>
      <h4>about us</h4>
    <p>
        <br /> &nbsp; We provide various types of sand, metal, and boulders based on your booking. Our registered lorry drivers will deliver the materials directly to your site without any delay. It is our responsibility to ensure that you receive high-quality materials at an affordable price.
        <br /> &nbsp;
        You can easily choose the type and quantity of material you need, and we will take care of the rest. All our materials are sourced from trusted suppliers and undergo strict quality checks before delivery. We value your time and commitment, and that’s why punctuality and reliability are at the core of our service.

        <br /> &nbsp;  Whether it's for small-scale home construction or large commercial projects, we’ve got you covered. With just a few clicks, get the right materials delivered to your doorstep, hassle-free.


      </p>
    </div>

    </div>
  )
}

export default About