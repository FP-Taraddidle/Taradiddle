import React, { Component } from 'react'
// import { browserHistory } from 'react-router'f

class FinalQ extends Component {
  render() {
    return <div className="field is-horizontal">
        <div className="field">
            <label className="label">How was your exercise?</label>
                <p className="control">
                    <span className="select">
                    <select>
                        <option>Select option</option>
                        <option>Great</option>
                        <option>Exhausting</option>
                        <option>I think I'm dying</option>
                        <option>What the F*@k did I just do?</option>
                    </select>
                    </span>
                </p><br/>
            <label className="label">Are you going to cut down on your Social Media?</label>
                <p className="control">
                    <span className="select">
                    <select>
                        <option>Select option</option>
                        <option>Probably not</option>
                        <option>Probably should</option>
                    </select>
                    </span>
                </p>
        </div>
     </div>  
  }
}

export default FinalQ;