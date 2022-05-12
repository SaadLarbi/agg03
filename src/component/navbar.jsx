import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import Profile from './Profile.js';

export default function navbar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"> <img src={logo} alt="logo" className="ml-2" /></Navbar.Brand>
                <Nav className="m-auto my-2 my-lg-0">
                    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
                    <Link to="/solutions" className="nav-link text-uppercase ml-5"><h2 className="text-primary fs-5">Nos Produits</h2></Link>
                    <Link to="/solutions" className="nav-link text-uppercase ml-5"><h2 className="text-primary fs-5">Nos Services</h2></Link>
                    <Link to="/solutions" className="nav-link text-uppercase ml-5"><h2 className="text-primary fs-5">Devis Gratuit</h2></Link>
                    </Navbar.Collapse>
                </Nav>
                <Profile />
                <LoginButton />
                <LogoutButton />
            </Container>
        </Navbar>
    )
}