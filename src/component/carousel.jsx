import React from 'react';
import { Carousel } from "react-bootstrap";
import gps01 from '../images/gps01.png';
import gps02 from '../images/gps02.png';
import gps03 from '../images/gps03.png';
export default function carousel() {
    return (
        <Carousel variant="dark" fade>
            <Carousel.Item interval={3000}>
                <img src={gps01} alt="Gps01" width="1120" height="250" />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p className='text-success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in facilis corporis optio. Dolore, hic labore pariatur quo ad similique!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={gps02} alt="Gps02" width="1120" height="250" />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p className='text-success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in facilis corporis optio. Dolore, hic labore pariatur quo ad similique!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={gps03} alt="Gps03" width="1120" height="250" />
                <Carousel.Caption>
                    <h3>Third Slide</h3>
                    <p className='text-success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in facilis corporis optio. Dolore, hic labore pariatur quo ad similique!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}