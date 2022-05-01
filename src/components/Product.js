import { Component } from 'react'

class Product extends Component {

    render(){
        const { product, addToCart } = this.props
        
        return(
            <div className='max-w-xs bg-amber-50 border max-w-xs mx-auto p-5 mb-10 rounded-md shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400'>
                <img 
                    alt={product.name} 
                    src={ require(`../img/products/${product.image_filename}`) }
                    className='rounded-md shadow-md shadow-gray-400 max-h-44 mx-auto'
                />
                <p className='mt-5 break-all text-lg font-bold tracking-widest'>{product.name}</p>
                <p>${product.price}</p>
                <p className='break-all text-sm text-slate-500 italic'>{product.description}</p>
                <button 
                    className='mt-4 bg-green-500 hover:bg-green-600 shadow-md shadow-gray-500 py-1 px-3 rounded-md font-bold tracking-wide italic text-slate-100'
                    onClick={() => addToCart(product)}
                >
                    Agregar al carro
                </button>
            </div>
        )
    }
}

export default Product