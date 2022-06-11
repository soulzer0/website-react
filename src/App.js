import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';

import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';

import Admin from './Admin/Admin';

import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/services' element={<Services/>} />
            <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='/pricing' element={<Pricing/>} />
            <Route exact path='/contact' element={<Contact/>} />

            <Route exact path='/admin/*' element={<Admin/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
