import React from 'react'

// Load React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Load page view components
import App from './App'
import Welcome from './Welcome'
import Profile from './Profile'
import Workout from './Workout'
import FirstQ from './FirstQ'
import FinalQ from './FinalQ'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Welcome} />
                <Route path="email" component={FirstQ} />
                <Route path="profile" component={Profile} />
                <Route path="workout" component={Workout} />
                <Route path="finalq" component={FinalQ} />
            </Route>
        </Router>
    }
}

export default Routes