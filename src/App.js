import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider, Container, Navbar} from 'react-bootstrap';
import logo from './logo.png';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className = "bg-light container">     
        <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img alt="" src={logo} width="250" height="56" 
                            className="d-inline-block align-top" /></Navbar.Brand>
            </Container>
        </Navbar>  
      </div> 
    </ThemeProvider>    
  );
}
export default App;