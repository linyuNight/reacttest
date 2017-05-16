import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nice from './Nice';

class App extends Component {
  render() {
    return (
      //<div className="App">
      //  <div className="App-header">
      //    <img src={logo} className="App-logo" alt="logo" />
      //    <h2>google2</h2>
      //  </div>
      //  <p className="App-intro">
      //    To get started, edit <code>src/App.js</code> and save to reload.
      //  </p>
      //  <Nice />
      //</div>
      <div className="contain">
        <Nice name="1"></Nice>
        <Nice name="2"></Nice>
        <Nice name="4"></Nice>
      </div>
    );
  }
}

export default App;
