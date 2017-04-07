import React, { Component } from 'react'

class FinalQ extends Component {
  render() {
    return <div className="field is-horizontal">
        <div className="field">
            <label className="label">How was your exercise?</label>
                <p className="control">
                    <span className="select">
                    <select>
                        <option>Select option</option>
                        <option>Active</option>
                        <option>Moderately Active</option>
                        <option>Not Active</option>
                        <option>Couch Potato</option>
                    </select>
                    </span>
                </p><br/>
            <label className="label">Are you going to cut down on your Social Media?</label>
                <p className="control">
                    <span className="select">
                    <select>
                        <option>Select option</option>
                        <option>Morning</option>
                        <option>Evening</option>
                    </select>
                    </span>
                </p>
        </div>
     </div>  
  }
}

export default FinalQ;