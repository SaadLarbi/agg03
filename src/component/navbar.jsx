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
                <Navbar.Brand href="/"> <img src={logo} alt="logo" /></Navbar.Brand>
                <Nav className="m-auto my-2 my-lg-0">
                    <Link to="/solutions" className="nav-link text-uppercase ml-5"><h2 className="text-primary">Nos Produits</h2></Link>
                </Nav>
                    <Profile />
                    <LoginButton />
                    <LogoutButton />
            </Container>
        </Navbar>
    )
}