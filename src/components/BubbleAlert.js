import { Component } from 'react'

class BubbleAlert extends Component {

    render(){
        
        const { value } = this.props

        return(
            <span className='bg-red-600 font-semibold text-slate-100 rounded-full text-xs px-1'>
                { value > 9 ? '9+' : value }
            </span>
        )
    }
}

export default BubbleAlert