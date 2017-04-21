import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import store from 'store'

class FirstQ extends Component {

    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
        this.post = this.post.bind(this)
        this.getTokenAndId = this.getTokenAndId.bind(this)
        this.confirmEmail = this.confirmEmail.bind(this)

        this.state = {
            oauth_token: '',
            userId: '',
            email: '',
            confirmEmail: '',
            howActive: '',
            timeOfDay: '',
            specificTime: ''
        }
    }

    componentWillMount() {
        let savedInfo = store.get('savedInfo', {})

        if (savedInfo.oauth_token) {
            this.setState({
                oauth_token: savedInfo.oauth_token,
                userId: savedInfo.userId,
                email: savedInfo.email,
                howActive: savedInfo.howActive,
                timeOfDay: savedInfo.timeOfDay,
                specificTime: savedInfo.specificTime
            })
        }
    }

    componentDidMount() {
        this.getTokenAndId()
    }

    getTokenAndId() {
        if (window.location.href.includes('token=')) {
            let id = window.location.href.split("id=")[1]
            let token = window.location.href.split("token=")[1].slice(0, 23)
            this.setState({ oauth_token: token, userId: id })
        }
    }

    save() {
        let savedInfo = store.get('savedInfo', {})
        savedInfo = this.state
        store.set('savedInfo', savedInfo)
        this.post()
    }

    post() {
        if (this.confirmEmail()) {
            fetch('/api/users/' + this.state.userId + '?token=' + this.state.oauth_token + '&email=' + this.state.email + '&intensity_id=' + this.state.howActive, {
                method: 'PUT'
            })

        }
    }

    confirmEmail() {
        if (this.state.email !== this.state.confirmEmail) {
            alert('Emails do not Match!');
            return false;
        }
        else {
            return true;
        }
    }

    render() {
        return <div>
            <div className="column is-half is-offset-one-quarter">
                <div className="field is-horizontal is-center is-question">
                    <div className="field is-firstq">

                        <label className="label">Email</label>
                        <p className="control has-icon has-icon-right">
                            <input className="input email" type="text" placeholder="Email input" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} required />
                        </p><br />

                        <label className="label">Confirm Email</label>
                        <p className="control has-icon has-icon-right">
                            <input className="input confemail" type="text" placeholder="Email input" value={this.state.confirmEmail} onChange={(e) => this.setState({ confirmEmail: e.target.value })} required />
                        </p><br />

                        <label className="label">How Active Are You?</label>
                        <p className="control">
                            <span className="select" value={this.state.howActive} onChange={(e) => this.setState({ howActive: e.target.value })} required>
                                <select>
                                    <option>Select option</option>
                                    <option value="2">Extremely Active</option>
                                    <option value="3">Kind Of Active</option>
                                    <option value="4">Not Active At All</option>
                                </select>
                            </span>
                        </p><br />

                        <label className="label">Morning or Evening Exercise?</label>
                        <p className="control timeOfDay">
                            <span className="select" value={this.state.timeOfDay} onChange={(e) => this.setState({ timeOfDay: e.target.value })} required>
                                <select>
                                    <option>Select option</option>
                                    <option>Morning</option>
                                    <option>Evening</option>
                                </select>
                            </span>
                        </p><br />

                        <label className="label">What time?</label>
                        <p className="control morningTime">
                            <span className="select" value={this.state.specificTime} onChange={(e) => this.setState({ specificTime: e.target.value })} required>
                                <select>
                                    <option>Morning Options</option>
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
                            <span className="select" value={this.state.specificTime} onChange={(e) => this.setState({ specificTime: e.target.value })} required>
                                <select>
                                    <option>Evening Options</option>
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
                        </p><br />


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
                    <div className="field is-horizontal is-center is-question">
                        <div className="field is-firstq">
                            <ol>
                                <li>Don't forget to warm-up for at least 10 minutes before your exercise.</li>
                                <li>The less you tweet the less you exercise. Simple enough.</li>
                                <li></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}


export default FirstQ;