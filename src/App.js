import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import ApartmentIndex from './pages/ApartmentIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApartmentIndex />
      </div>
    );
  }
}

export default App;
