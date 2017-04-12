import React, { Component } from 'react'
// import { browserHistory } frrom 'react-router'

class Workout extends Component {

    constructor() {
    super()
    this.state = { time: {}, seconds: 300 };
    this.timer = 0;
    this.running = 0;
    this.startTimer = this.startTimer.bind(this);
    // this.pauseTimer - this.pauseTimer.bind(this)
    this.countDown = this.countDown.bind(this);

    // this.time = 0
    // this.running = 0
    // this.min = 0
    // this.sec = 0
    // this.tenths = 0
    
    // this.decrement = this.decrement.bind(this)
    // this.startPause = this.startPause.bind(this)
  }

    // startPause(){
    //         if(this.running === 0){
    //         this.running = 1;
    //         this.decrement();
    //     // document.getElementById("start").innerHTML = "Pause";
    //     // document.getElementById("startPause").style.backgroundColor = "red";	
    //     // document.getElementById("startPause").style.borderColor = "red";
    //     // document.getElementById("startPause").style.borderColor = "red";
    //     }
    //     else if (this.running === 1) {
    //         this.running = 0;
    //     // document.getElementById("start").innerHTML = "Resume";	
    //     // document.getElementById("startPause").style.backgroundColor = "green";	
    //     // document.getElementById("startPause").style.borderColor = "green";
    //     // setTimeout(reset, 15000);
    //     }
    // }

    // decrement(){
	// if(this.running === 1){
	// 	setTimeout(() => {
	// 		this.sec--;
	// 		this.mins = Math.floor(this.time/10/60);
	// 		this.secs = Math.floor(this.time/10 % 60);
	// 		this.tenths = this.time % 10;
	// 		if(this.mins < 10){
	// 			this.mins = "0" + this.mins;
	// 		} 
	// 		if(this.secs < 10){
	// 			this.secs = "0" + this.secs;
	// 		}
	// 		if (this.sec <= 0) {
	// 			this.sec = 59
	// 			this.min--
	// 		}
	// 		// document.querySelector("output").innerHTML = min + ":" + sec + ":";
	// 		// this.decrement();
	// 	},100);
	// }
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