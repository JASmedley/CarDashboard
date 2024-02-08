import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'

// Write imports for Router & BrowserRouter here //

function App() {
  return (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="car/:id" element={<Car/>}></Route>
    </Routes>
  </>
  );
}

export default App;
