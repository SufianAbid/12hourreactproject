import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Collection from './components/Collection';
import Faq from './components/Faq';
import ClothingCollection from './components/Clothingcollection';
import ProductPage from './components/ProductPage';
import ContactPage from './components/ContactPage';
 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/clothing-collection" element={<ClothingCollection />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/product/:productId" element={<ProductPage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;