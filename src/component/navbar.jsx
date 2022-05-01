import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom'; 

export default function navbar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"> <img src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto my-2 my-lg-0" navbarScroll>
                        <Link to="/" className="nav-link text-uppercase ml-5">Acceuil</Link>
                        <Link to="/solutions" className="nav-link text-uppercase ml-5">Nos Solutions</Link>
                        <Link to="/contact" className="nav-link text-uppercase ml-5">Contactes Nous</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}