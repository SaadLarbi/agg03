import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './component/carousel.jsx';
import Navbar from './component/navbar.jsx';

function App() {
  return (
      <div className="bg-light">
        <Navbar />
        <Carousel />
      </div>    
  );
}
export default App;