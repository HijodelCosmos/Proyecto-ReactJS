import React, { useState , useEffect } from "react";
import ItemCounter from "./itemCounter";
import PurchaseButton from '../button/purchaseButton'
import { Link } from "react-router-dom";

const ItemDetail = ({itemData})=>{

    const [itemsToAdd, setItemsToAdd] = useState([itemData,0]);
    const [cartReady, setCartReady] = useState(false)

    //Evento para el boton del counter
    const onAdd = (cartCount)=>{
        setItemsToAdd([itemData,cartCount])
        setCartReady(true)
        };

    //Use efect para mostrar resultados del evento
   useEffect(()=>{

        itemsToAdd[0] && console.log("Vas a agregar "+itemsToAdd[1]+" unidades de "+itemsToAdd[0]["title"])
 
    },[itemsToAdd])
    
    return( 

        itemData && 
            <React.Fragment>
                <div className="row justify-content-center">
                <h1 className="mt-4">{itemData.title}</h1>
                </div>
                <div className="row justify-content-between p-2">
                    <img src={itemData.src} className="m-2 col-5" width="100" alt="Descripcion de producto"></img>
                    <div className="col-5 m-2">
                        <h3>{itemData["title"]}</h3>
                        <h4 className="text-muted">{itemData.category}</h4>
                        <p>{itemData.description}</p>
                        <h3 className="text-center">$ {itemData.price}</h3>
                      
                            {cartReady?
                                <Link to='/cart'><PurchaseButton></PurchaseButton></Link>
                                :<ItemCounter  itemData={itemData} handlerClick={onAdd}></ItemCounter>}   
                
                        
                            
                    </div>               
                </div>           
            </React.Fragment>
        
    )
}

export default ItemDetail