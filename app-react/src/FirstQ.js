import React, { Component } from 'react'

class FirstQ extends Component {

  render() {
    return <div className="field is-horizontal">
        <div className="field">
            <label className="label">How Active Are You?</label>
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
            <label className="label">Morning or Evening Exercise?</label>
            <p className="control">
                <span className="select">
                <select>
                    <option>Select option</option>
                    <option>Morning</option>
                    <option>Evening</option>
                </select>
                </span>
            </p><br/>
            <label className="label">Subject</label>
            <p className="control">
                <span className="select">
                <select>
                    <input timepicker />
                </select>
                </span>
            </p>

        </div>
    </div>        
     
  }
}


export default FirstQ;