import React, { useContext, useState } from 'react';
import { getFireStore } from "../firebase/index";
import firebase from "firebase/app";
import "@firebase/firestore";
import { CartContext } from "./cartContext";
//import { getFireStore } from '../../firebase/index';

export const OrderContext = React.createContext()


export const OrderContextProvider = ({children})=>{

    const { itemsInCart , clearCart , totalPrice } = useContext(CartContext)
    const [userData ] = useState({userName:"Comprador",phone:32154896,email:"compratuti@elmail"});
    const [ordersSended , setOrdersSended] = useState([]);
    const [loading , setLoading] = useState(false);
    //const [newOrder,setNewOrder] = useState({})


    const uploadOrder = (link) => {
        let newOrder={
            buyer:userData,
            items:itemsInCart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total:totalPrice,
        }
        //Agregar validación de stock comparando el cartcount con el stock
        let getDb = getFireStore();
        let orderDb = getDb.collection("orders");
        orderDb.add(newOrder)
            .then(({id})=>{
                newOrder.orderId=id
                updateStock()
            })
            .catch((error)=>
                console.log("Ocurrio un error: ",error)
            )
            .finally(()=>{
                console.log("Compra exitosa, su codigo de orden es: ",newOrder.orderId)
                clearCart()
                link.push('/Orders')
            });
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

    const getOrders = () =>{
        setLoading(true)
        let getDb = getFireStore();
        let ordersDb = getDb.collection("orders")
        ordersDb.get()
            .then((querySnapshot)=>{
                querySnapshot.size === 0 && console.log("No results");
                
                let arrayOrders = querySnapshot.docs.map((doc)=>{
                    return(
                        {id: doc.id,
                        ...doc.data()}
                    )
                })
                //el siguiente if sirve para evitar el bucle en el useEffect de Order.js linea14
                if(querySnapshot.size !== 0 && arrayOrders.length!==ordersSended.length){
                 setOrdersSended(arrayOrders)}
                console.log("Getting orders from the DB ")
            
            })
            .catch(err=>console.log('An error ocurred: '+err))
            .finally(setTimeout(() => {
                setLoading(false)
            }, 600))

        return(ordersSended)
    }

    return(
        <OrderContext.Provider value={{loading, ordersSended , userData , uploadOrder , updateStock , getOrders}}>
            {children}
        </OrderContext.Provider>
        )
    }