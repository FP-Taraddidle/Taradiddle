import React, { Component } from 'react'
// import { browserHistory } frrom 'react-router'

class BlockTimer extends Component {

    constructor() {
    super()
    this.state = { time: {}, seconds: 300 }
    this.timer = 0
    this.running = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60))

        let divisor_for_minutes = secs % (60 * 60)
        let minutes = Math.floor(divisor_for_minutes / 60)

        let divisor_for_seconds = divisor_for_minutes % 60
        let seconds = Math.ceil(divisor_for_seconds)

        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
    }   

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds)
        this.setState({ time: timeLeftVar })
    }

    startTimer() {
        if (this.timer === 0) {
        this.timer = setInterval(this.countDown, 1000)
        }
    }
    pauseTimer() {
        if (this.timer === 1) {
            this.timer = this.countDown
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1
        this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) { 
        clearInterval(this.timer)
        }
    }
	render() {
		return <div className="container">
                    <h1 className="block-timer"><p id="output"><b>{this.state.time.m} : {this.state.time.s}</b></p></h1>
                        <div id="controls">
                            <button id="startPause" onClick={this.startTimer}><b id="start">Start</b></button>
                        </div>
                </div>

	}
}

export default BlockTimer