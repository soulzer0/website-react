import React, { Component } from 'react';

import Site from './Site';
import Footer from './Components/Footer';
import Header from './Components/Header';

import Home from './Components/Home';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Header/>
          <Home/>
          <Site/>
          <Footer/>
      </div>
    );
  }
}

export default App;
