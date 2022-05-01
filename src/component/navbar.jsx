import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../images/logo.png';

export default function navbar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"> <img src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="text-uppercase ml-5">Home</Nav.Link>
                        <Nav.Link href="#action2" className="text-uppercase ml-5">Link</Nav.Link>
                        <Nav.Link href="#action2" className="text-uppercase ml-5">Contact Us</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}