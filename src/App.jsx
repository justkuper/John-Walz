// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Recordings from './Components/Recordings/Recordings';
import Performances from './Components/Performances/Performances';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Reviews from './Components/Reviews/Reviews';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recordings" element={<Recordings />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
