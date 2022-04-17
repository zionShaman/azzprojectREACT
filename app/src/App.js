import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './assets/components/Header';
import Cardlist from './assets/components/Cardlist';
import Footer from './assets/components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cardlist />
        <Footer />
      </div>
    );
  }
}

export default App;




/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
 */