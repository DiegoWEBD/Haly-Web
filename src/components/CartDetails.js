import { Component } from 'react'

class CartDetails extends Component {

    render(){

        const { cart } = this.props
        const total_price = cart.reduce((acc, el) => acc + el.price * el.quantity, 0)

        return(
            <div className='bg-stone-50 sm:text-xl shadow-lg shadow-gray-900 rounded w-64 sm:w-96 absolute right-10'>
                <ul>
                {
                    cart.map((product, index) => 
                        <li key={index} className='rounded shadow px-4 py-2 border-black text-slate-800 flex items-center justify-between'>
                            <img 
                                alt='' 
                                src={require(`../img/products/${product.image_filename}`)} 
                                className='h-10 sm:h-14'
                            />
                            <p className='font-semibold italic break-all px-6'>{product.name}:</p>
                            <p>{product.quantity}</p>
                        </li>)
                }
                </ul> 
                
                <div className='bg-stone-100 font-bold flex py-2 px-10 justify-between my-1'>
                    <span >Total: </span> 
                    <span className='text-emerald-600'>${total_price}</span>
                </div>
            </div>
        )
    }
}

export default CartDetails