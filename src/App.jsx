import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Schools from './pages/Schools';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Admission from './pages/Admission';
import Scholarship from './pages/Scholarship';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/schools" element={<Schools/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/scholarship" element={<Scholarship/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}