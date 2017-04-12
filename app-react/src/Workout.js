import React, { Component } from 'react'
// import { browserHistory } frrom 'react-router'

class Workout extends Component {

    constructor() {
    super();
    this.state = { time: {}, seconds: 300 };
    this.timer = 0;
    this.running = 0;
    this.startTimer = this.startTimer.bind(this);
    // this.pauseTimer - this.pauseTimer.bind(this)
    this.countDown = this.countDown.bind(this);

    // this.time = 0;
    // this.running = 0;
    // this.min = 0;
    // this.sec = 0;
    // this.tenths = 0;
    // this.reset;
  }

    // increment(){
	// if(running === 1){
	// 	setTimeout(function(){
	// 		sec--;
	// 		let mins = Math.floor(time/10/60);
	// 		let secs = Math.floor(time/10 % 60);
	// 		let tenths = time % 10;
	// 		if(mins < 10){
	// 			mins = "0" + mins;
	// 		} 
	// 		if(secs < 10){
	// 			secs = "0" + secs;
	// 		}
	// 		if (sec <= 0) {
	// 			sec = 59
	// 			min--
	// 		}
	// 		document.getElementById("output").innerHTML = min + ":" + sec + ":";
	// 		increment();
	// 	},100);
	// }


    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
    }   

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer === 0) {
        this.timer = setInterval(this.countDown, 1000);
        }
    }
    pauseTimer() {
        if (this.timer === 1) {
            this.timer = this.countDown
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) { 
        clearInterval(this.timer);
        }
    }

//   exercise() {
 
//   }

//   block() {

//   }

//   rest() {

//   }

  render() {
    return <div className="columns is-multiline is-gapless is-mobile">
            <div className="column is-4 square1">
                <div className="container">
                    <h1><p id="output"><b>{this.state.time.m} : {this.state.time.s}</b></p></h1>
                    <div id="controls">
	                    <button id="startPause"><b id="start">Start</b></button>
                    </div>
                
                </div>
            </div>
            <div className="column is-8 square2">
                <img className="is-mobile workoutImage" src="http://unsplash.it/200/200random?" alt="workout1" />
                <img className="workoutImage" src="http://unsplash.it/200/200random?" alt="workout2" />
            </div>
            <div className="column is-4 square3">
                <div className="container">
                    <h1><p id="output"><b>{this.state.time.m} : {this.state.time.s}</b></p></h1>
                    <div id="controls">
	                    <button id="startPause" onClick={this.startTimer}><b id="start">Start</b></button>
                    </div>
                </div>
            </div>
            <div className="column is-8 square4"></div>
        </div>
  }
}

export default Workout