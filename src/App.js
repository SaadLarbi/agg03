import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carousel from './component/carousel.jsx';
import Navbar from './component/navbar.jsx';
import Cards from './component/cards.jsx';
import Footer from './component/Footer.jsx';

function App() {
  return (
      <div>
        <Navbar />
        <Carousel />
        <Cards />
        <Footer /> 
      </div>    
  );
}
export default App;