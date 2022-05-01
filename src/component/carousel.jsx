import React from 'react';
import { Carousel } from "react-bootstrap";
import gps01 from '../images/gps01.png';
import gps02 from '../images/gps02.png';
export default function carousel() {
    return (
        <Carousel variant="dark" fade>
            <Carousel.Item interval={3000}>
                <img src={gps01} alt="Gps01" width="1120" height="150" />
                {/* <Carousel.Caption> */}
                    {/* <h3>Teltonika FMB920</h3> */}
                    {/* <p className='text-success'>Simple Tracking Solution</p> */}
                {/* </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={gps02} alt="Gps02" width="1120" height="150" />
            </Carousel.Item>
        </Carousel>
    )
}