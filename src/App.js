import { Component } from 'react'
import NavBar from './components/NavBar'
import Sweets from './components/Sweets'
import Layout from './components/Layout'
import NewSweetCard from './components/NewSweetCard'
import axios from 'axios'

class App extends Component {

  state = {
    sweets: [],
    cart: [],
    visible_cart: false,
  }

  getSweets = async () => {

    const response = await fetch('http://halyweb-api.xyz/sweets')
    const data = await response.json()
    this.setState({
      sweets: data
    })
  }

  addToCart = (sweets) => {
 
    const { cart } = this.state

    if(cart.find(s => s.name === sweets.name)){
    
      const new_cart = cart.map(s => s.name === sweets.name 
        ? ({
          ...s,
          quantity: s.quantity + 1
        })
        : s)
      
      return this.setState({
        cart: new_cart
      })
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...sweets, 
        quantity: 1
      })
    })
  }

  showCart = () => {
    
    this.setState({
      visible_cart: !this.state.visible_cart
    })
  }

  emptyCart = () => {

    this.setState({
      cart: []
    })
  }

  addNewSweet = async (sweet) => {

    const { image, ...props } = sweet
    const new_sweet = {
      ...props,
      image_filename: 'dulce_6.jpg'
    }

    this.setState({
      sweets: [new_sweet, ...this.state.sweets]
    })
  }

  render(){

    const { visible_cart } = this.state

    return(
      <div className='bg-neutral-300 min-h-screen'>
        <NavBar 
          cart={this.state.cart} 
          visible_cart={visible_cart}
          showCart={this.showCart}
          emptyCart={this.emptyCart}
        />
        
        <Layout>
          <NewSweetCard
            addNewSweet={this.addNewSweet}
            sweets={this.state.sweets}
          />
          <Sweets
            sweets={this.state.sweets} 
            addToCart={this.addToCart}
            getSweets={this.getSweets}
          />
        </Layout>   
      </div>
    )
  }
}

export default App
