import NewSweetForm from './NewSweetForm'

const NewSweetCard = ({ addNewSweet, sweets }) => {   

    return(
        <div className='max-w-xs bg-white border max-w-xs mx-auto p-5 mb-10 rounded-md shadow-lg shadow-gray-500/60'>
            <p className='text-xl text-slate-700 mb-5 text-center font-bold tracking-wide italic'>
                Agregar un nuevo producto
            </p>
            <NewSweetForm
                addNewSweet={addNewSweet}
                sweets={sweets}
            />
        </div>
    )
}

export default NewSweetCard