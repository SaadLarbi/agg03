import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';

import './App.css';
import Carousel from './component/carousel.jsx';
import Navbar from './component/navbar.jsx';
import Cards from './component/cards.jsx';
import Footer from './component/Footer.jsx';
import Home from './component/Home.js';
import Menu from './component/menu.js';
import NotFoundPage from './component/NotFoundPage.js';

function App() {
  return (
    <div>
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Carousel /><Home /></>} ></Route>
            <Route path="/menu" element={<Menu />} ></Route>
            <Route path="/solutions" element={<Cards />} ></Route>
            <Route element={<NotFoundPage />} ></Route>
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
export default App;