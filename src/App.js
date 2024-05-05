import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Skills from './components/Skills/Skills';
import ContactUs from './components/ContactUs/ContactUs';
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/sobre" element={<About/>} />
              <Route path="/projetos" element={<Projects/>} />
              <Route path="/habilidades" element={<Skills/>} />
              <Route path="/contato" element={<ContactUs/>} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  );
}

export default App;
