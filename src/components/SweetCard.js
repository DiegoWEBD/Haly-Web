const SweetCard = ({ sweet, addToCart }) => {
    
    return(
        <div className='w-80 h-fit bg-white border border-indigo-400 mx-auto p-5 mb-10 rounded-md shadow-md'>
            <img 
                alt={sweet.name} 
                src={ require(`../img/products/${sweet.image_filename}`) }
                className='rounded-md shadow-md shadow-gray-400 max-h-44 mx-auto'
            />
            <p className='mt-5 break-words text-lg font-bold tracking-widest'>{sweet.name}</p>
            <p>${sweet.price}</p>
            <p className='break-words text-sm text-slate-500 italic'>{sweet.description}</p>
            <button 
                className='mt-4 bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-800/80 py-1 px-3 rounded-md font-bold tracking-wide italic text-slate-100'
                onClick={() => addToCart(sweet)}
            >
                Agregar al carro
            </button>
        </div>
    )
}

export default SweetCard