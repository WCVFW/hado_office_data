import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Food from './pages/Food';
import Empower from './pages/Empower';
import Health from './pages/Health';



export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education' element={<Education />} />
          <Route path='/food' element={<Food />} />
          <Route path='/empower' element={<Empower />} />
          <Route path='/health' element={<Health />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}