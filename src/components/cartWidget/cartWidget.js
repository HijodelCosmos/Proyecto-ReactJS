import React, {useContext} from 'react';
import cart from '../../assets/img/cart.png'
import { Store }from '../../context/cartContext'


        


const CartWidget = () => {

    const {count}= useContext(Store);

    return(
        <div>
            <img className="m-2 tada" src={cart} width="60" alt="Cart Icon"/>
            {
            <span className={`badge badge-danger badge-pill ${count>0? 'd-inline' : 'd-none'}`}>{count}</span>   
            } 
        </div>)
}

export default CartWidget
