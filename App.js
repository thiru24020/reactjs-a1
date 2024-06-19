import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
