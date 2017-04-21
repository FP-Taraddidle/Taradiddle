import React, { Component } from 'react'
import TotalTimer from './TotalTimer'
import BlockTimer from './BlockTimer'
// import { browserHistory } frrom 'react-router'

class Workout extends Component {

    constructor() {
        super()
        this.state = { totalTime: {}, time: {}, totalSeconds: 20 * 2, seconds: 20 }
        this.timer = 0
        this.running = 0
        this.startTimer = this.startTimer.bind(this)
        this.countDown = this.countDown.bind(this)
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    secondsToTime(secs) {
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
        fetch('/api/reps?token=' + this.props.token + '&id=' + this.props.userId)
        .then(res => res.json())
        .then(res => {
            this.setState({
                totalSeconds: res.reps * 120,
                totalTime: this.secondsToTime(res.reps * 120),
                time: this.secondsToTime(this.state.seconds)
            })
        })
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
        let totalSeconds = this.state.totalSeconds - 1
        let seconds = this.state.seconds - 1

        // if (seconds <= 10 ){
		// 	seconds = "0" + seconds
		// }

        if (seconds <= 0) {
            seconds = 120
            // this.showModal()
            // this.hideModal()
        }

        this.setState({
            totalTime: this.secondsToTime(totalSeconds),
            time: this.secondsToTime(seconds),
            totalSeconds: totalSeconds,
            seconds: seconds,
        });;

        // Check if we're at zero.
        if (totalSeconds <= 0) {
            clearInterval(this.timer)
        }

    }
    showModal() {
        document.querySelector('#modal').removeClass('is-hidden')
    }
    hideModal() {
        document.querySelector('#modal').addClass('is-hidden')
    }

    render() {
        return <div className="columns is-multiline is-gapless is-mobile">
            <div className="column is-4 square1">
                <div className="container">
                    <TotalTimer time={this.state.totalTime} />
                </div>
            </div>

            <div className="column is-4 square2">
                <img className="is-mobile workoutImage" src="img/exercises/squats.gif" alt="workout1" />
            </div>
            <div className="column is-4 square2">
                <img className="workoutImage" src="img/exercises/leg-raises.gif" alt="workout2" />
            </div>

            <div className="column is-4 square3">
                <div className="container">
                    <BlockTimer time={this.state.time} />
                    <div id="controls">
                        <button id="startPause" onClick={this.startTimer}><b id="start">Start</b></button>
                    </div>
                </div>

            </div>

            <div className="column is-4 square2">
                <p className="current-next"><strong>Current Exercise</strong></p>
                <h1 className="exercise-name">Squats</h1>
                <p className="exercise-description">One of the best exercises is also one of the most natural (just watch a baby sit). This movement works all of the muscles in the lower body including the quads, glutes and hamstrings. It also provides an extra kick for the core as you need your deep abdominal muscles and back to keep your torso upright and perform this exercise correctly.</p>
            </div>

            <div id="modal" className="overlay-background is-hidden">
                <div className="overlay">
                    <h1> Get ready to switch.</h1>
                </div>
            </div>

            <div className="column is-4 square2">
                <p className="current-next"><strong>Next Exercise</strong></p>
                <h1 className="exercise-name">Leg-raises</h1>
                <p className="exercise-description">This lower abdominal exercise can help you build a stronger back and make you less prone to injury. Keep your low back pressing into the ground the entire time and lower your legs as close to the floor as possible without allowing them to touch. To make this exercise easier, bend your knees. Or for more of challenge, keep your legs straight.</p>
            </div>
        </div>
    }
}

export default Workout