import Logo from './Logo'
import ShoppingCart from './ShoppingCart'

const NavBar = ({...props}) => {

    return(
        <nav className='sticky top-1 bg-zinc-900 shadow-lg shadow-zinc-900/80 rounded-xl flex items-center justify-between py-2 pl-8 pr-6 m-1'>
            <Logo />
            <ShoppingCart {...props} />
        </nav>
    )
}

export default NavBar