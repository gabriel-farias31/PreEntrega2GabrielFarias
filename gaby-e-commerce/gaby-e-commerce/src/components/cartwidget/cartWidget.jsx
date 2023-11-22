
import { Fragment } from 'react'
import carrito from './imagen/carrito.svg'

const CartWidget = () => {
    return(
        <Fragment>
            <img src={carrito} alt="carrito-widget"/>
            0
        </Fragment> 
    )
}
export default CartWidget