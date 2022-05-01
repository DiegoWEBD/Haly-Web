import { Component } from 'react'
import Logo from './Logo'
import ShoppingCart from './ShoppingCart'

class NavBar extends Component {

    render(){

        const { cart } = this.props

        return(
            <div className='bg-amber-500 shadow-lg shadow-gray-500 rounded-xl flex items-center justify-between py-2 px-6 m-1'>
                <Logo />
                <ShoppingCart cart={cart} />
            </div>
        )
    }
}

export default NavBar