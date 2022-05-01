import React from 'react';
import { Carousel } from "react-bootstrap";
import gps01 from '../images/gps01.png';
import gps02 from '../images/gps02.png';
export default function carousel() {
    return (
        <Carousel variant="dark" fade>
            <Carousel.Item interval={3000}>
                <img src={gps02} alt="Gps01"/>
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in facilis corporis optio. Dolore, hic labore pariatur quo ad similique!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={gps01} alt="Gps02"/>
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in facilis corporis optio. Dolore, hic labore pariatur quo ad similique!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}