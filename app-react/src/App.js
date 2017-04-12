import React, { Component } from 'react'
import Routes from './Routes'

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
        this.getUser = this.getUser.bind(this)
        this.getTwitterSignup = this.getTwitterSignup.bind(this)
        this.getTweetCount= this.getTweetCount.bind(this)
        this.getLikeCount = this.getLikeCount.bind(this)
        // this.addToCart = this.addToCart.bind(this)
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

  getUser() {
    fetch('/api/users/:id')
    .then(res => res.json())
    .then(res => console.log(res))
  }

  getTwitterSignup() {
    fetch('/twitter/signup')
    .then(res => res.json())
  }

  getTweetCount() {
    fetch('/tweets')
    .then(res => res.json())
    .then(res => this.setState({userInfo: res}))
 }

 getLikeCount() {
    fetch('/tweets/likes')
    .then(res => res.json())
    .then(res => this.setState({userInfo: res}))
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
