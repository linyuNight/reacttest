import React, { Component } from 'react';
import "./Nice.css";

class Nice extends Component {
  render() {
    return (
      <div className="content">{this.props.name}</div>
    );
  }
}

export default Nice;
