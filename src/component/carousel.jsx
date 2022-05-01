import React from 'react';
import { Carousel } from "react-bootstrap";
import t920 from '../images/t920.png';
import t140 from '../images/t140.png';

export default function carousel() {
    return (
        <Carousel variant="dark" fade>
            <Carousel.Item interval={3000}>
                <img src={t920} alt="Fmb920" width="250px" height="250px" />
                <Carousel.Caption>
                    <h3>Teltonika FMB920</h3>
                    <p className='text-success'>Simple Tracking Solution</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={t140} alt="Fmb140" width="250px" height="250px" />
                <Carousel.Caption>
                    <h3>Teltonika Fmb140</h3>
                    <p className='text-warning'>Advanced Tracking Solution</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}