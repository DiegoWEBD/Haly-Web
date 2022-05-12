import { useEffect } from 'react'
import SweetCard from './SweetCard'

const Sweets = ({ sweets, addToCart, getSweets }) => {

    useEffect(() => {
        getSweets()
    }, [getSweets])
    
    return(
        <div className='flex flex-wrap items-center'>
            {sweets.map((sweet, index) => 
                <SweetCard
                    key={index}
                    sweet={sweet}
                    addToCart={addToCart}
                />
            )}
        </div>
    )
}

export default Sweets