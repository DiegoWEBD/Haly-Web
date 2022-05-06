import Logo from './Logo'
import ShoppingCart from './ShoppingCart'

const NavBar = ({
    cart, 
    visible_cart, 
    showCart, 
    emptyCart
}) => {

    return(
        <nav className='sticky top-1 bg-zinc-900 shadow-lg shadow-zinc-900/80 rounded-xl flex items-center justify-between py-2 px-6 m-1'>
            <Logo />
            <ShoppingCart 
                cart={cart}
                visible_cart={visible_cart}
                showCart={showCart}
                emptyCart={emptyCart}
            />
        </nav>
    )
}

export default NavBar