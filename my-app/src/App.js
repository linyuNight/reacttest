import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nice from './Nice';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name:0
    }
  }
  _plus() {
    this.setState({
      name: ++this.state.name
    })
  }

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
        <div>
          <Nice name={this.state.name}></Nice>
        </div>
        <div onClick={this._plus.bind(this)}>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
