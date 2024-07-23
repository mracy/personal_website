import { useState } from 'react';
import Header from "./components/Header";
import './App.css';
import Banner from './components/Banner';
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
//import ImageCropper from './components/ImageCropper';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Expertise />
      <Contact />
      <Footer />


    
    </>
  );
}

export default App;
