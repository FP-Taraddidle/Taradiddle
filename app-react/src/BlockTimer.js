import React, { Component } from 'react'
// import { browserHistory } frrom 'react-router'

class BlockTimer extends Component {
	render() {
		return <h1 className="block-timer"><p id="output"><b>{this.props.time.m} : {this.props.time.s}</b></p></h1>
	}
}

export default BlockTimer