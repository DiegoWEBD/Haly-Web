import { Component } from 'react'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Layout from './components/Layout'
import NewSweetCard from './components/NewSweetCard'

class App extends Component {

  state = {
    products: [
      {
        name: 'Dulce 1',
        description: 'Descripcion 1 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 3990,
        image_filename: 'dulce_1.jpg'
      },
      {
        name: 'Dulce 2',
        description: 'Descripcion 2 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 2280,
        image_filename: 'dulce_2.jpg'
      },
      {
        name: 'Dulce 3',
        description: 'Descripcion 3 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 1500,
        image_filename: 'dulce_3.jpg'
      },
      {
        name: 'Dulce 4',
        description: 'Descripcion 4 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 4000,
        image_filename: 'dulce_4.jpg'
      },
      {
        name: 'Dulce 5',
        description: 'Descripcion 5 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 2000,
        image_filename: 'dulce_5.jpg'
      },
      {
        name: 'Dulce 6',
        description: 'Descripcion 6 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 2970,
        image_filename: 'dulce_6.jpg'
      },
      {
        name: 'Dulce 7',
        description: 'Descripcion 7 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 4990,
        image_filename: 'dulce_7.jpg'
      },
    ],
    cart: [],
    visible_cart: false,
  }

  addToCart = (product) => {
 
    const { cart } = this.state

    if(cart.find(p => p.name === product.name)){
    
      const new_cart = cart.map(p => p.name === product.name 
        ? ({
          ...p,
          quantity: p.quantity + 1
        })
        : p)
      
      return this.setState({
        cart: new_cart
      })
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product, 
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

  addNewSweet = (sweet) => {
    this.setState({
      products: [sweet, ...this.state.products]
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
          />
          <Products
            products={this.state.products} 
            addToCart={this.addToCart}
          />
        </Layout>   
      </div>
    )
  }
}

export default App
