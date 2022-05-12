

const CartDetails = ({ cart, emptyCart }) => {

    const total_price = cart.reduce((acc, el) => acc + el.price * el.quantity, 0)

    return(
        <div className='py-4 flex flex-col items-center bg-stone-50 sm:text-xl shadow-lg shadow-gray-900 rounded-md w-72 sm:w-96 absolute right-10'>
            <ul className='w-full'>
            {
                cart.map((product, index) => 
                    <li key={index} className='rounded shadow py-2 px-5 text-slate-800 flex items-center justify-between'>

                        <img 
                            alt='' 
                            src={require(`../img/products/${product.image_filename}`)} 
                            className='w-1/4 rounded-md'
                        />

                        <p className='w-1/2 font-semibold italic break-words px-2'>{product.name}:</p>
                        <p className='font-extrabold italic text-slate-900 text-2xl'>{product.quantity}</p>
                    </li>)
            }
            </ul> 
            
            {
                cart.length > 0
                    ?   <button
                            className='mb-4 bg-red-500 hover:bg-red-600 text-sm font-bold tracking-wide italic mt-6 shadow-md shadow-red-800/70 text-slate-200 hover:text-slate-100 px-4 py-1 rounded-full'
                            onClick={() => emptyCart()}
                        >
                            Vaciar carro
                        </button>
                    :   null
            }

            <div className='bg-stone-200 rounded-xl w-11/12  shadow-md shadow-gray-500  font-bold flex py-2 px-10 justify-between my-1'>
                <span >Total: </span> 
                <span className='text-emerald-600'>${total_price}</span>
            </div>
        </div>
    )
}


export default CartDetails