import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {ThemeProvider, Container, Navbar} from 'react-bootstrap';
import logo from './logo.png';
import t920 from './t920.png';
import t140 from './t140.png';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className = "bg-dark container">     
        <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img alt="" src={logo} width="250" height="56" 
                            className="d-inline-block align-top" /></Navbar.Brand>
            </Container>
        </Navbar>
      <Carousel>
        <Carousel.Item interval={1500}>
        <img alt="" src={t920} width="250" height="250" 
                            className="d-inline-block align-top" />
          <Carousel.Caption>
            <h3>Teltonika FMB920</h3>
            <p>Simple Tracking Solution</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          
        <img alt="" src={t140} width="250" height="250" 
                            className="d-inline-block align-top" />
          <Carousel.Caption>
            <h3>Teltonika Fmb140</h3>
            <p>Advanced Tracker</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div> 
    </ThemeProvider>    
  );
}
export default App;