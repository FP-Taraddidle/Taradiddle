import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import App from './App'
import Welcome from './Welcome'
import Workout from './Workout'
import FirstQ from './FirstQ'
import FinalQ from './FinalQ'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Welcome} />
                <Route path="/Workout" component={Workout} />
                <Route path="/FirstQ" component={FirstQ} />
                <Route path="/FinalQ" component={FinalQ} />
            </Router>
        </Provider>
    }
}

export default Routes