import { Component } from 'react'

class Product extends Component {

    render(){
        const { product, addToCart } = this.props
        
        return(
            <div className='max-w-xs bg-amber-50 border max-w-xs mx-auto p-5 mb-10 rounded-md shadow-md hover:shadow-lg shadow-gray-400 hover:shadow-gray-500'>
                <p className='break-all text-lg font-bold tracking-widest'>{product.name}</p>
                <p>${product.price}</p>
                <p className='break-all text-sm text-slate-500 italic'>{product.description}</p>
                <button 
                    className='mt-4 bg-orange-500 shadow-md shadow-gray-500 py-1 px-3 rounded-md font-bold italic text-slate-100'
                    onClick={() => addToCart(product)}
                >
                    Agregar al carro
                </button>
            </div>
        )
    }
}

export default Product