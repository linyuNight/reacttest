import React, { Component } from 'react';
import "./Nice.css";

class Nice extends Component {
	constructor(props) {
		super(props)
	}

	_h() {
		console.log(this.props.name)
	}

  render() {
    return (
    	<div onClick={this._h.bind(this)}>
      	<div className="content">{this.props.name}</div>
      </div>
    );
  }
}

export default Nice;
