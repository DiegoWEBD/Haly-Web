import { Component } from 'react'

class Product extends Component {

    render(){
        const { product, addToCart } = this.props
        
        return(
            <div className='max-w-xs bg-white border border-indigo-400 mx-auto p-5 mb-10 rounded-md shadow-md'>
                <img 
                    alt={product.name} 
                    src={ require(`../img/products/${product.image_filename}`) }
                    className='rounded-md shadow-md shadow-gray-400 max-h-44 mx-auto'
                />
                <p className='mt-5 break-words text-lg font-bold tracking-widest'>{product.name}</p>
                <p>${product.price}</p>
                <p className='break-words text-sm text-slate-500 italic'>{product.description}</p>
                <button 
                    className='mt-4 bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-800/80 py-1 px-3 rounded-md font-bold tracking-wide italic text-slate-100'
                    onClick={() => addToCart(product)}
                >
                    Agregar al carro
                </button>
            </div>
        )
    }
}

export default Product