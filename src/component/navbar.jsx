import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom'; 

export default function navbar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"> <img src={logo} alt="logo" /></Navbar.Brand>
                    <Nav className="m-auto my-2 my-lg-0" navbarScroll>
                        <Link to="/solutions" className="nav-link text-uppercase ml-5">Nos Produits</Link>
                        <Link to="/contact" className="nav-link text-uppercase ml-5">Contactez Nous</Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}