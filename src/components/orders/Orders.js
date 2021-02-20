import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './order.css';
import { OrderContext } from '../../context/orderContext';
import coinLogo from "../../assets/img/dollar.png";
import Loader from "../Loader/loader"

const Orders = ()=>{
    const {loading , ordersSended ,getOrders} = useContext(OrderContext);
    const [orders , setOrders] = useState([])

    useEffect(()=>{
        setOrders( getOrders());
    },[ordersSended])

    return(
        <div id="orders" className="container">
            <Loader loaderState={loading} ></Loader>            
            <div className="row justify-content-center mt-5">
                <h1 id="orders--title">YOUR ORDERS</h1>
            </div>
            <div className="row">
                <table className="table text-center mt-4">
                <thead>
                    <tr>
                        <th>Order Code</th>
                        <th>Ordered Items</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length ? (
                    orders.map((order, i) => {
                        
                        let items=order["items"]
                        
                        return (
                            <tr key={i}>
                                <td>{order["id"]}</td>
                                <td>{items.map((item,e )=> {
                                    return(
                                        <h5 key={e}>
                                            {item.title} x {item.cartcount}
                                            <br/>
                                        </h5>
                                        )
                                    })}
                                </td>
                                <td>
                                    <img src={coinLogo} width="27" alt="Coin Logo"></img>
                                    {order["total"]}
                                </td>
                            </tr>
                        );
                    }))
                    :
                    (<tr>
                        <td colSpan="6">
                            <h3>There is nothing around here</h3>
                            <Link to="./">
                            <button
                                id="cart--defaultButton"
                                type="button"
                                className="btn btn-success btn-lg text-center"
                            >
                                Lets Go Shopping!
                            </button>
                            </Link>
                        </td>
                        </tr>
                    )}

                </tbody>
                </table>
            </div>
        </div>
    );
}  ;

export default Orders;

