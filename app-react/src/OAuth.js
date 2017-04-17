import React from 'react';

class OAuth extends React.Component {
    componentWillMount() {
        console.log(this)
        console.log(location)
        // do stuff with returned oauth
        // maybe stash oauth token?
        // then location.href = '/Workout'
    }

    render() {
        return <div>
        <div className="field">
            <label className="label">Email</label>
            <p className="control has-icon has-icon-right">
                <input className="input" type="text" placeholder="Email input"  />
            </p>
        </div>
        <div className="field">
        <label className="label">Confirm Email</label>
        <p className="control has-icon has-icon-right">
            <input className="input" type="text" placeholder="Email input" />
        </p>
        </div>
    </div>
    }
}

export default OAuth;