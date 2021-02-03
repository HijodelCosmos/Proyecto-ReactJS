import React, {useContext} from 'react';
import cart from '../../assets/img/cart.png'
import { CartContext }from '../../context/cartContext'


const CartWidget = () => {
    const {count}= useContext(CartContext);

    return(
        <div>
            <a href="./#carrito">
                <img className="m-2 tada" src={cart} width="60" alt="Cart Icon"/>
                {count?
                (count > 0) && (<span className="badge badge-danger badge-pill">{count}</span>)
                :
                <></>    
                } 
            </a>
        </div>)
}

export default CartWidget
