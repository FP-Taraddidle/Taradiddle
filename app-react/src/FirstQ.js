import React, { Component } from 'react'
// import { browserHistory } from 'react-router'

class FirstQ extends Component {

    // getTime() {
    //     if (option.innerHTML === 'Morning') {

    //     }
    //     if (option.innerHTML === 'Evening') {
            
    //     }
    // }

  render() {
    return <div className="field is-horizontal">
        <div className="field">

            <label className="label">How Active Are You?</label>
                <p className="control">
                    <span className="select">
                    <select>
                        <option>Select option</option>
                        <option>Extremely Active</option>
                        <option>Kind Of Active</option>
                        <option>Not Active At All</option>
                    </select>
                    </span>
                </p><br/>

            <label className="label">Morning or Evening Exercise?</label>
            <p className="control timeOfDay">
                <span className="select">
                <select>
                    <option>Select option</option>
                    <option>Morning</option>
                    <option>Evening</option>
                </select>
                </span>
            </p><br/>

            <label className="label">What time?</label>
            <p className="control morningTime">
                <span className="select">
                    <select>
                        <option>Select option</option> 
                        <option>4:30am</option>
                        <option>5:00am</option>
                        <option>5:30am</option>
                        <option>6:00am</option>
                        <option>6:30am</option>
                        <option>7:00am</option>
                        <option>7:30am</option>
                        <option>8:00am</option>
                        <option>8:30am</option>
                        <option>9:30am</option>
                        <option>10:00am</option>
                        <option>10:30am</option>
                        <option>11:00am</option>
                        <option>11:30am</option>
                    </select>
                </span>
            </p>
            <p className="control eveningTime">
                <span className="select">
                    <select>
                        <option>Select option</option>  
                        <option>4:30pm</option>
                        <option>5:00pm</option>
                        <option>5:30pm</option>
                        <option>6:00pm</option>
                        <option>6:30pm</option>
                        <option>7:00pm</option>
                        <option>7:30pm</option>
                        <option>8:00pm</option>
                        <option>8:30pm</option>
                        <option>9:30pm</option>
                        <option>10:00pm</option>
                        <option>10:30pm</option>
                        <option>11:00pm</option>
                        <option>11:30pm</option>   
                    </select>
                </span> 
            </p>

            {/* <label className="label">Time</label>
            <p className="control eveningTime">
                <span className="select">
                <select>
                    <option>Select option</option>
                <div id="evening-time "className="is-hidden">   
                    <option>4:30pm</option>
                    <option>5:00pm</option>
                    <option>5:30pm</option>
                    <option>6:00pm</option>
                    <option>6:30pm</option>
                    <option>7:00pm</option>
                    <option>7:30pm</option>
                    <option>8:00pm</option>
                    <option>8:30pm</option>
                    <option>9:30pm</option>
                    <option>10:00pm</option>
                    <option>10:30pm</option>
                    <option>11:00pm</option>
                    <option>11:30pm</option>
                </div>     
                </select>
                </span> 
            </p> */}

        </div>
    </div>        
     
  }
}


export default FirstQ;