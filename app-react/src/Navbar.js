import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return <nav className="nav has-shadow navbar">
  <div className="container">
    <div className="nav-left">
      <p className="nav-item projectName">
        Taradiddle
      </p>
      <p className="exercise-mouth">
        Exercise more than your mouth
      </p>
    </div>
    <span className="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div className="nav-right nav-menu">
      {/* <a className="nav-item is-tab">Sign-in</a> */}
      <a className="button sign-up navbar-sign-in" onClick={this.getUser} onClick={() => location.href='/auth/twitter'}>
            <span className="icon">
            <i className="fa fa-twitter"></i>
            </span>
            <span>Sign-in with Twitter</span>
        </a>
    </div>
  </div>
</nav>
  }
}

export default Navbar;