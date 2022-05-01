import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carousel from './component/carousel.jsx';
import Navbar from './component/navbar.jsx';
import Cards from './component/cards.jsx';
import Footer from './component/Footer.jsx';
import Home from './component/Home.js';
import Contact from './component/Contacts.js';
import NotFoundPage from './component/NotFoundPage.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Carousel /><Home /></>} ></Route>
          <Route path="/solutions" element={<Cards />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route element={<NotFoundPage />} ></Route>
        </Routes>
        <Footer /> 
      </div>    
  );
}
export default App;