import { Component } from 'react'
import Logo from './Logo'
import ShoppingCart from './ShoppingCart'

class NavBar extends Component {

    render(){

        return(
            <div className='bg-orange-500 rounded-xl border-2 border-amber-50 flex justify-between py-2 px-6 text-slate-100'>
                <Logo />
                <ShoppingCart />
            </div>
        )
    }
}

export default NavBar