import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import './cart.css';
import { Store }from '../../context/cartContext';
import ItemDeleteButton from '../buttons/itemDeleteButton';
import coinLogo from '../../assets/img/dollar.png'

const Cart = () =>{

    const {itemsInCart , totalPrice , removeItem , clearCart} = useContext(Store)


    return(
        <div id="cart" className='container'>
            <div className="row justify-content-center mt-5">
                <h1 id="cart--title">YOUR CART</h1>
            </div> 
            <div className="row">
            <table className="table text-center mt-4" >
            <thead>
                <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Price per Unit</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
                <tbody>
                    {itemsInCart.length?
                     itemsInCart.map((item,i)=>{
                        return(
                            <tr key={i}>
                                <td><Link to={`/item:${item["id"]}`}><img src={item.src} className="rounded-circle" width="70" height="70" alt="Descripcion de producto"></img></Link></td>
                                <td><Link to={`/item:${item["id"]}`}>{item.title}<br/><h5 className='category--description'>{item.category}</h5></Link></td>
                                <td><img src={coinLogo} width="27" alt="Coin Logo"></img>{item.price}</td>
                                <td>{item.cartcount}</td>
                                <td><img src={coinLogo} width="30" alt="Coin Logo"></img>{item.cartcount*item.price}</td>
                                <td><ItemDeleteButton itemData={item} itemId={item.id} handlerClick={removeItem}></ItemDeleteButton></td>
                            </tr>)})
                    :
                    <tr>
                        <td colSpan="6">
                            <h3>There is nothing around here</h3>
                            <Link to="./">
                                <button type="button" className="btn btn-success text-center">
                                    Lets Go Shopping!
                                </button>
                            </Link>
                        </td>
                    </tr>
                    }
                    
                    
                    
                </tbody>
                <tfoot>                                      
                    <tr>
                        {itemsInCart.length?
                            <td>
                                <button id="cart--clearButton" type="button" onClick={()=>clearCart()} className="btn btn-danger text-center">
                                    Clear Cart
                                </button>
                            </td>
                            :
                            <td></td>
                        }
                        <td colSpan="5"><h3 id="cart--totalPrice">{`TOTAL `}<img src={coinLogo} width="35" alt="Coin Logo"></img>{totalPrice}</h3></td>
                    </tr>
                </tfoot>
            </table>
            </div>

        </div>
    )
}

export default Cart