const SuccessMessage = ({ children }) => {

    return(
        <div className='mt-5 border border-green-500 text-green-500 text-center font-semibold tracking-wide italic rounded py-1 w-fit px-6'>
            {children}
        </div>
    )
}

export default SuccessMessage