import React, { Component } from 'react'
// import { browserHistory } from 'react-router'

class Welcome extends Component {

constructor(props) {
        super(props)

        // Custom methods
        this.getAuth = this.getAuth.bind(this)
        this.getTweets = this.getTweets.bind(this)
        // this.getProduct = this.getProduct.bind(this)
        // this.filterProducts = this.filterProducts.bind(this)
        // this.getCart = this.getCart.bind(this)
        // this.addToCart = this.addToCart.bind(this)
        // this.checkout = this.checkout.bind(this)

        // Master state
        this.state = {
            userInfo: [],
            // originalProducts: [],
            // products: [],
            // product: {},
            // cart: [],
            // message: ''
        }
  }

  getAuth() {
    fetch('/auth/twitter')
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .then(res => this.setState({userName: res}))
  }
    
 getTweets() {
    fetch('/tweets')
    .then(res => res.json())
    .then(res => this.setState({userInfo: res}))
 }

  render() {
    return <div className="welcomeBackground">
    <div className="welcomeContent">
    <div className="content about">
        <h1 className="welcomeTitle">About</h1>
            <p>Our main goal is to help you cut down on your social media and turn it into something productive. More <img className="welcomeIcon" src="/img/my-icons-collection/png/003-gym.png" alt="" /> and less <img className="welcomeIcon" src="/img/my-icons-collection/png/001-app.png" alt="" /></p>
    </div>        
    <div className="content howDoesItWork">  
        <h2 className="welcomeTitle">How does it work?</h2>
            <p>Our app creates a randomly generated exercise based on the amount of time wasted spent on Twitter the day prior.</p>
                <ul>
                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                    <li>Ut non enim metus.</li>
                </ul>
    </div>        
    <div className="content toGetStarted">             
        <h2 className="welcomeTitle">To get started</h2>
            <ul>
                <li>Sign-in with your Twitter account below.</li>
                <li>Fill out the short questionarre that follows.</li>
                <li>Don't forget to Warm-up before each exercise</li>
                <li>Ut non enim metus.</li>
            </ul>
    </div>
    <div>
        <a className="button sign-up" onClick={() => console.log("Hello")}>
            <span className="icon">
            <i className="fa fa-twitter"></i>
            </span>
            <span>Sign-up with Twitter</span>
        </a>
    </div>
    </div>
</div>

}
}

export default Welcome;