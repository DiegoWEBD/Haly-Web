const ErrorMessage = ({ children }) => {

    return(
        <div className='text-xs text-red-500 font-semibold tracking-wide px-1'>
            {children}
        </div>
    )
}

export default ErrorMessage