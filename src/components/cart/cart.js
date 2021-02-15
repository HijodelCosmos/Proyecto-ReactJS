import React, { useContext, useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { getFireStore } from '../../firebase/index';
import firebase from 'firebase/app'
import '@firebase/firestore'
import './cart.css';
import { CartContext }from '../../context/cartContext';
import ItemDeleteButton from '../buttons/itemDeleteButton';
import coinLogo from '../../assets/img/dollar.png'

const Cart = () =>{

    const {itemsInCart , totalPrice , removeItem , clearCart} = useContext(CartContext);
    const [ordersSent , setOrdersSent] = useState([])
    const userData = {userName:"Comprador",phone:32154896,email:"compratuti@elmail"};

    useEffect(()=>{
        console.log(ordersSent)
    },[ordersSent])
    const uploadOrder = () => {
        let newOrder = {
            buyer:userData,
            items:itemsInCart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total:totalPrice,
        }

        let getDb = getFireStore();
        let orderDb = getDb.collection("orders");
        orderDb.add(newOrder)
            .then(({id})=>{
                setOrdersSent([...ordersSent,id])
                updateStock()
            })
            .catch((error)=>
                console.log("Ocurrio un error: ",error)
            )
            .finally(()=>{
                console.log("Compra exitosa, su codigo de orden es: ",ordersSent)
                clearCart()});
    }
    const updateStock = ()=>{
        let db= getFireStore();
        let itemsToUpdate = db.collection("items")
            .where(firebase.firestore.FieldPath.documentId(),'in',itemsInCart.map(i => i.id))            

            itemsToUpdate.get()
            .then((querySnapshot)=>{
                const batch = db.batch()
                let outOfStock = [] //<<<==Deberia continuar con el desarrollo del outofstock

                querySnapshot.docs.forEach((docSnapshot , i)=>{

                    if(docSnapshot.data().stock >= itemsInCart[i].cartcount){
                        batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - itemsInCart[i].cartcount})
                        }
                        else{
                        alert("We are out of stock of: "+docSnapshot.data().title)
                        outOfStock.push(...outOfStock, docSnapshot.data());
                        }
                })
                outOfStock.length===0 && batch.commit();
            })       
    }

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
                                <button id="cart--defaultButton" type="button" className="btn btn-success btn-lg text-center">
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
                            <React.Fragment>
                            <td>
                                <button id="cart--clearButton" type="button" onClick={()=>clearCart()} className="btn btn-danger text-center">
                                    Clear Cart
                                </button>
                            </td>
                            <td colSpan="4"><h3 id="cart--totalPrice">{`TOTAL `}<img src={coinLogo} width="35" alt="Coin Logo"></img>{totalPrice}</h3></td>
                            <td >

                                <button id="cart--buyButton" type="button" onClick={()=>uploadOrder()} className="btn btn-success text-center">
                                    ¡BUY!                                
                                </button>

                            </td>
                            </React.Fragment>
                            :
                            <td></td>
                        }                       
                    </tr>
                </tfoot>
            </table>
            </div>

        </div>
    )
}

export default Cart