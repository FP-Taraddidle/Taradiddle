import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import store from 'store'

class FirstQ extends Component {

     constructor(props) {
        super(props)
        this.save = this.save.bind(this)

        this.state = {
            email: '',
            howActive: '',
            timeOfDay: '',
            specificTime: ''
        }
    }

    componentWillMount() {
      let savedInfo = store.get('savedInfo', [])
      if (this.props.params.index) {
        let savedInfo = savedInfo[this.props.params.index]
        this.setState({
            email: savedInfo.email,
            howActive: savedInfo.howActive,
            timeOfDay: savedInfo.timeOfDay,
            specificTime: savedInfo.specificTime
        }) 
      }
    }

    save() {
      let savedInfo = store.get('savedInfo', [])
        if ( ! this.props.params.index) {
            savedInfo.push(this.state)
        }
        else {
            savedInfo[this.props.params.index] = this.state
        }
        store.set('savedInfo', savedInfo)
        browserHistory.push('/profile')
    }
    // componentWillMount() {
    //     console.log(this)
    //     console.log(location)
    //     // do stuff with returned oauth
    //     // maybe stash oauth token?
    //     // then location.href = '/Workout'
    // }

    // getTime() {
    //     if (option.innerHTML === 'Morning') {

    //     }
    //     if (option.innerHTML === 'Evening') {
            
    //     }
    // }

  render() {
    return <div className="field is-horizontal is-center">
        <div className="field">

            <label className="label">Email</label>
                <p className="control has-icon has-icon-right">
                    <input className="input" type="text" placeholder="Email input" value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} />
                </p><br/>
     
            <label className="label">Confirm Email</label>
                <p className="control has-icon has-icon-right">
                    <input className="input" type="text" placeholder="Email input" value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>
                </p><br/>

            <label className="label">How Active Are You?</label>
                <p className="control">
                    <span className="select" value={this.state.howActive} onChange={(e) => this.setState({howActive:e.target.value})}>
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
                <span className="select" value={this.state.timeOfDay} onChange={(e) => this.setState({timeOfDay:e.target.value})}>
                <select>
                    <option>Select option</option>
                    <option>Morning</option>
                    <option>Evening</option>
                </select>
                </span>
            </p><br/>

            <label className="label">What time?</label>
            <p className="control morningTime">
                <span className="select" value={this.state.specificTime} onChange={(e) => this.setState({specificTime:e.target.value})}>
                    <select>
                        <option>Select Morning option</option> 
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
                <span className="select" value={this.state.specificTime} onChange={(e) => this.setState({specificTime:e.target.value})}>
                    <select>
                        <option>Select Evening option</option>  
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
            </p><br/>


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
            <div className="field is-grouped">
                <p className="control" onClick={this.save}>
                    <button className="button is-primary">Submit</button>
                </p>
            </div>
        </div>
    </div>        
     
  }
}


export default FirstQ;