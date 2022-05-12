import { useState } from 'react'
import { useFormik } from 'formik'
import ErrorMessage from './ErrorMessage'
import SuccessMessage from './SuccessMessage'

const NewSweetForm = ({ addNewSweet, sweets }) => {

    const [added, setAdded] = useState(false)
    
    const validate = (values) => {
        const errors = {}

        // Validations for name field
        if(!values.name){
            errors.name = 'Este campo es obligatorio'
        } else if(sweets.find(s => s.name === values.name)){
            errors.name = `El producto "${values.name}" ya existe`
        }

        // Validations for description field
        if(!values.description){
            errors.description = 'Este campo es obligatorio'
        }

        // Validations for price field
        if(!values.price){
            errors.price = 'Este campo es obligatorio'
        }

        if(!values.image){
            errors.image = 'Este campo es obligatorio'
        }

        return errors
    }

    const onSubmit = async (values) => {
        await addNewSweet(values)
        setAdded(true)
        setInterval(() => setAdded(false), 3000);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            image: ''
        },
        validate,
        onSubmit,
    })

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
            <div className='mb-1'>
                {
                    formik.touched.name && formik.errors.name 
                        ?   <ErrorMessage> {formik.errors.name} </ErrorMessage>
                        :   null
                }
            </div>

            <div className='flex flex-col mb-2'>
                <label className='mb-1 font-semibold italic tracking-wide'>Descripción</label>
                <textarea 
                    type='text'
                    {...formik.getFieldProps('description')}
                    placeholder='Descripción ...'
                    className='py-1 px-2 text-sm text-slate-600 border border-blue-400 rounded border-gray-300'
                />
            </div>
            <div className='mb-4'>
                {
                    formik.touched.description && formik.errors.description 
                        ?   <ErrorMessage> {formik.errors.description} </ErrorMessage>
                        :   null
                }
            </div>

            <div className='flex items-center mb-2'>
                <label className='mr-3 font-semibold italic tracking-wide'>Precio</label>
                <p className='font-bold mr-1'>$</p>
                <input 
                    type='number'
                    {...formik.getFieldProps('price')}
                    placeholder='Precio ...'
                    className='py-1 px-2 text-sm text-slate-600 w-full border border-blue-400 rounded border-gray-300' 
                />
            </div>
            <div>
                {
                    formik.touched.price && formik.errors.price
                        ?   <ErrorMessage> {formik.errors.price} </ErrorMessage>
                        :   null
                }
            </div>

            <div className='mb-2 mt-3'>
                <label className='font-semibold italic tracking-wide'>Imagen</label>
                <input 
                    type='file' 
                    name='file' 
                    onChange={(event) => formik.setFieldValue('image', event.target.files[0])}
                    className='form-control mt-2 block w-full p-1.5 text-gray-600 bg-clip-padding border border-gray-300 rounded-full'
                />
            </div>
            <div>
                {
                    formik.touched.image && formik.errors.image
                        ?   <ErrorMessage> {formik.errors.image} </ErrorMessage>
                        :   null
                }
            </div>

            <div className='flex justify-center mt-6'>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-600 tracking-widest text-white py-1 px-5 rounded-full font-bold text-slate-200 shadow-lg shadow-blue-500/70'
                >
                    Agregar
                </button>
            </div>

            <div className='flex justify-center'>
                { added ? <SuccessMessage>Dulce agregado</SuccessMessage> : null }
            </div>
        
        </form>
    )
}

export default NewSweetForm