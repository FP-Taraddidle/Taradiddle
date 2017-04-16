import React, { Component } from 'react'
import Routes from './Routes'
import store from 'store'

import Navbar from './Navbar'
import Welcome from './Welcome'
import Profile from './Profile'
import Workout from './Workout'
import FirstQ from './FirstQ'
import FinalQ from './FinalQ'


class App extends Component {

  constructor(props) {
        super(props)

        // Custom methods
        // this.getUser = this.getUser.bind(this)
        this.recentUserActivity = this.recentUserActivity.bind(this)
        this.allUserActivity= this.allUserActivity.bind(this)
        // this.save = this.save.bind(this)
        // this.checkout = this.checkout.bind(this)

        // Master state
        this.state = {
            userInfo: [],
            userID: [],
            tweets: [],
            likes: [],
            // cart: [],
            // message: ''
        }
  }
  
  recentUserActivity() {
    fetch('/api/twitterings/:id')
    .then(res => res.json())
    .then(res => console.log(res))
    // .then(res => this.setState({userInfo: res}))
  }

  allUserActivity() {
    fetch('/api/twitterings')
    .then(res => res.json())
    .then(res => console.log(res))
    // .then(res => this.setState({userInfo: res}))
 }

//  componentWillMount() {
//    this.getAuth()
//  }

  render() {
    return (
      <div className="App">
        {location.href.includes('workout') ? '' : <Navbar />}
        <br/>
        <br/>
        {this.props.children}
      </div>
    )
  }
}

export default App;
