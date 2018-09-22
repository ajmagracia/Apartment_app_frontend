import React, { Component } from 'react'
import '../css/App.css';
import withAuth from './withAuth'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'/tesathasoet.jpg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    )
  }
}

export default withAuth(App)
