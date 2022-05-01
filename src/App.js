import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './component/carousel.jsx';
import Navbar from './component/navbar.jsx';
import Cards from './component/cards.jsx';

function App() {
  return (
      <div className="container">
        <Navbar />
        <Carousel />
        <Cards />
      </div>    
  );
}
export default App;