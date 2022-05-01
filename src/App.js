import { Component } from 'react'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Layout from './components/Layout'

class App extends Component {

  state = {
    products: [
      {
        name: 'Dulce 1',
        description: 'Descripcion 1 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 3990
      },
      {
        name: 'Dulce 2',
        description: 'Descripcion 2 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 2280
      },
      {
        name: 'Dulce 3',
        description: 'Descripcion 3 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 1500
      },
      {
        name: 'Dulce 4',
        description: 'Descripcion 4 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 4000
      },
      {
        name: 'Dulce 5',
        description: 'Descripcion 5 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 2000
      },
      {
        name: 'Dulce 6',
        description: 'Descripcion 6 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 2970
      },
      {
        name: 'Dulce 7',
        description: 'Descripcion 7 ajsldkjalskdjlaksdjlaksdjlaksjdkajshdkajsdhkajs',
        price: 4990
      },
    ],
    cart: []
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

  render(){

    return(
      <div className='bg-slate-50 min-h-screen'>
        <NavBar cart={this.state.cart} />
        
        <Layout>
          <Products
            addToCart={this.addToCart} 
            products={this.state.products} 
          />
        </Layout>   
      </div>
    )
  }
}

export default App
