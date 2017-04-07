import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return <div className="welcomeBackground">
    <div className="welcomeContent">
    <div className="content about">
        <h1 className="welcomeTitle">About</h1>
            <p>Our main goal is to help you cut down on your social media and turn it into something productive. More <img className="welcomeIcon" src="/img/my-icons-collection/png/003-gym.png" /> and less <img className="welcomeIcon" src="/img/my-icons-collection/png/001-app.png" /></p>
    </div>        
    <div className="content howDoesItWork">  
        <h2 className="welcomeTitle">How does it work?</h2>
            <p>Our app creates a randomly generated exercise based on the amount of time wasted tweeting the day prior.</p>
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
        <a className="button sign-up">
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