import React from 'react';
import cart from '../../assets/img/cart.png'

 const cartWidget = () => {
    return(
        <div>
            <a href="./#carrito"><img className="m-2 tada" src={cart} width="60" alt="Cart Icon"/></a>
        </div>)
}

export default cartWidget