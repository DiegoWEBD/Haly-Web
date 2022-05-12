import { Component } from 'react'

class Logo extends Component {

    render(){
        
        return(
            <a href='/'>
                <img 
                    alt='Haly' 
                    src={require('../img/logos/main_logo.png')} 
                    className='w-24'
                />
            </a>
        )
    }
}

export default Logo