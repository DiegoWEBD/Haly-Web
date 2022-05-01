import { Component } from 'react'

class Logo extends Component {

    render(){
        
        return(
            <a href='/'>
                <img 
                    alt='Haly' 
                    src={require('../img/logos/main_logo.jpg')} 
                    className='h-14 rounded-full'
                />
            </a>
        )
    }
}

export default Logo