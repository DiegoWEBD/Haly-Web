import { Component } from 'react'
import Product from './Product'

class Products extends Component {

    render(){
        const { products, addToCart } = this.props
        
        return(
            <div className='flex flex-wrap'>
                {products.map((product, index) => 
                    <Product
                        addToCart={() => addToCart(product)}
                        product={product}
                        key={index}
                    />
                )}
            </div>
        )
    }
}

export default Products