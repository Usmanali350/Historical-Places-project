import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar ';
import { Home } from './Components/Home';
import {About} from './Components/About'
import { Contact } from './Components/Contact';
import { Hostels } from './Components/Hostels';
import { Resturents } from './Components/Resturents';
import { Topattractions } from './Components/Topattractions';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Topattractions" element={<Topattractions />} />
        <Route path="/Hostels" element={<Hostels />} />
        <Route path="/Resturents" element={<Resturents />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
