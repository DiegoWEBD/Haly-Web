import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import CartDetails from './CartDetails'

class ShoppingCart extends Component {

    render(){

        const { cart, visible_cart, showCart } = this.props
        const quantity = cart.reduce((acc, el) => acc + el.quantity, 0)

        return(
            <div>
                <span className='relative left-2'>
                    { quantity !== 0
                        ? <BubbleAlert value={quantity} />
                        : null
                    }
                </span>
                <button onClick={showCart}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8 text-slate-100" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                            />
                    </svg>
                </button>
                { visible_cart ? <CartDetails cart={cart} /> : null }
            </div>      
        )
    }
}

export default ShoppingCart