import React, { Component } from 'react'
import { router, browserHistory } from 'react-router'
import store from 'store'
// import Chart.js from 'chart.js'

class Profile extends Component {

  constructor(props) {
        super(props)
    

        this.state = {
           
        }
    }

    componentDidMount() {
      let savedInfo = localStorage.getItem('savedInfo', [])
      let token = savedInfo.slice(17, 41)
      fetch('api/twitterings?token=' + token)
      .then(res => res.json())
      .then(res => console.log(res))
    }

    submit() {
      browserHistory.push('/workout')
    }

  // let LineChart = require("react-chartjs").Line;

  // let data = {
  //   labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
  //   datasets: [
  //       {
  //           label: "Total Tweets and Likes for Month of April",
  //           fill: false,
  //           lineTension: 0.1,
  //           backgroundColor: "rgba(75,192,192,0.4)",
  //           borderColor: "rgba(75,192,192,1)",
  //           borderCapStyle: 'butt',
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: 'miter',
  //           pointBorderColor: "rgba(75,192,192,1)",
  //           pointBackgroundColor: "#fff",
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //           pointHoverBorderColor: "rgba(220,220,220,1)",
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: [65, 59, 80, 81, 56, 55, 40],
  //           spanGaps: false,
  //       }
  //   ]
  // };

  // let MyComponent = React.createClass({
  render(){
    return <div className="profile-page">
            <div className="columns is-mobile is-workout-button">
              <div className="column is-half is-offset-one-quarter">
                <button className="workout-button" onClick={this.submit}><b id="start">CLICK TO START WORKOUT</b></button>
              </div>
            </div>
            <h2 className="chart-title">Twitter Usage</h2>
            <div id="line_top_x"></div> 
    </div>
  }
}


export default Profile;