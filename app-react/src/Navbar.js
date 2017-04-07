import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return <nav className="nav has-shadow navbar">
  <div className="container">
    <div className="nav-left">
      <p className="nav-item projectName">
        Taradiddle
      </p>
    </div>
    <span className="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div className="nav-right nav-menu">
      <a className="nav-item is-tab">Sign-in</a>
      <a className="nav-item is-tab">Log out</a>
    </div>
  </div>
</nav>
  }
}

export default Navbar;