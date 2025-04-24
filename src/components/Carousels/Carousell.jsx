

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import tipper from '../../assets/img/3c9fc05af6ff2a94e4ec6ea4b18277b2.jpg'
import metal from '../../assets/img/wolfgang-hasselmann-9tWYwVFluLM-unsplash.jpg'
import l2 from '../../assets/img/91e8b23f2910cc9ad75e873516104455.jpg'
const Carousell = () => {
    return (
        <div className='carousal'>
            <Carousel>
                <Carousel.Item>
                    <img
                        src={metal}
                        alt="First slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Premium P Sand</h3>
                        {/* <p>Perfect for strong foundations and plastering.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                        src={l2}
                        alt="Third slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={tipper}
                        alt="Third slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <div className='mt-5'>
                            <h3>Third slide label</h3>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousell;
