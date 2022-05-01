import { Component } from 'react'
import Product from './Product'

class Products extends Component {

    render(){
        const { products, addToCart} = this.props
        
        return(
            <div className='flex flex-wrap'>
                {products.map((product, index) => 
                    <Product
                        key={index}
                        product={product}
                        addToCart={addToCart}
                    />
                )}
            </div>
        )
    }
}

export default Products