import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';

import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

import Admin from './admin/Admin';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route path='/' element={<Header />} />
            <Route exact path='/' element={<Home />} />
           
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/admin/*' element={<Admin />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
