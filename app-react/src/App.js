import React, { Component } from 'react'
import Navbar from './Navbar'
import Welcome from  './Welcome'
import Workout from './Workout'
import FirstQ from './FirstQ'
import FinalQ from './FinalQ'

class App extends Component {

constructor(props) {
        super(props)

        // Custom methods
        this.getCategories = this.getCategories.bind(this)
        this.getProducts = this.getProducts.bind(this)
        this.getProduct = this.getProduct.bind(this)
        this.filterProducts = this.filterProducts.bind(this)
        this.getCart = this.getCart.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.checkout = this.checkout.bind(this)

        // Master state
        this.state = {
            //: [],
            originalProducts: [],
            products: [],
            product: {},
            cart: [],
            message: ''
        }
    }

getCategories() {
        fetch('/auth/twitter')
        .then(res => res.json())
        .then(res => this.setState({categories: res}))
    }

  render() {
    return (
      <div className="App">
        <Workout />
      </div>
    )
  }
}

export default App;
