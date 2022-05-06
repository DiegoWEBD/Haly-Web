import { useState } from 'react'
import { useFormik } from 'formik'

const NewSweetForm = ({ addNewSweet }) => {

    const [added, setAdded] = useState(false)
    
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            image_filename: 'dulce_5.jpg'
        },
        onSubmit: values => {
            setAdded(true)
            addNewSweet(values)
            setInterval(() => setAdded(false), 3000);
        }
    })
    console.log(formik.values)

    return(

        <form className='p-2' onSubmit={formik.handleSubmit}>
            <div className='flex flex-col mb-2'>
                <label className='mb-1 font-semibold italic tracking-wide'>Nombre</label>
                <input 
                    type='text'
                    {...formik.getFieldProps('name')}
                    placeholder='Nombre ...'
                    className='py-1 px-2 text-sm text-slate-600 border border-blue-400 rounded border-gray-300' 
                />
            </div>
            
            <div className='flex flex-col mb-4'>
                <label className='mb-1 font-semibold italic tracking-wide'>Descripción</label>
                <textarea 
                    type='text'
                    {...formik.getFieldProps('description')}
                    placeholder='Descripción ...'
                    className='py-1 px-2 text-sm text-slate-600 border border-blue-400 rounded border-gray-300'
                />
            </div>

            <div className='flex items-center mb-5'>
                <label className='mr-3 font-semibold italic tracking-wide'>Precio</label>
                <p className='font-bold mr-1'>$</p>
                <input 
                    type='number'
                    {...formik.getFieldProps('price')}
                    placeholder='Precio ...'
                    className='py-1 px-2 text-sm text-slate-600 w-full border border-blue-400 rounded border-gray-300' 
                />
            </div>

            <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 tracking-wide text-white py-1 px-2 rounded font-semibold shadow-lg shadow-blue-500/70'
            >
                Agregar
            </button>

            {
                added   ?   <p
                                className='mt-5 bg-green-500 shadow-lg shadow-green-700/80 text-slate-50 text-center font-bold tracking-wide italic rounded px-2 py-1'   
                             >¡ Dulce agregado !</p>
                        :   null
            }

        </form>
    )
}

export default NewSweetForm