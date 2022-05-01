import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';

export default function navbar() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home"><img alt="Logo" src={logo} className="d-inline-block align-top" /></Navbar.Brand>
        </Navbar>
    )
}
