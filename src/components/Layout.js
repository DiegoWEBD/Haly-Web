import { Component } from 'react'

class Layout extends Component {

    render({ children } = this.props){

        return(
            <div className='mx-4 px-3 mt-8 pt-8'>
                {children}
            </div>
        )
    }
}

export default Layout