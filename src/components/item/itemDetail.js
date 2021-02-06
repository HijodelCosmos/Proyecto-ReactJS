import React, { useContext } from "react";
import ItemCounter from "./itemCounter";
import PurchaseButton from '../buttons/purchaseButton'
import { Store }from '../../context/cartContext';
import coinLogo from '../../assets/img/dollar.png';

const ItemDetail = ({itemData})=>{

    const {isInCart , addItem , removeItem }= useContext(Store);
  
    return( 

        itemData && 
            <div className="container">
                <div className="row justify-content-center">
                <h1 className="mt-4">{itemData.title}</h1>
                </div>
                <div className="row justify-content-between p-2">
                    <img src={itemData.src} className="m-2 col-5" width="100" alt="Descripcion de producto"></img>
                    <div className="col-5 m-2">
                        <h3>{itemData["title"]}</h3>
                        <h4 className="text-muted">{itemData.category}</h4>
                        <p>{itemData.description}</p>
                        <h3 className="text-center">
                            <img src={coinLogo} width="32" alt="Coin Logo"></img> {itemData.price}
                        </h3>      
                        
                        <button onClick={()=>removeItem(itemData.id)} type="button" className="btn btn-danger m-1 ">Delete Items</button>
                        <button onClick={()=>isInCart(itemData.id)} type="button" className="btn btn-warning m-1 ">Is in cart?</button>

                        {isInCart(itemData.id)?
                            <PurchaseButton></PurchaseButton>
                            :
                            <ItemCounter  itemData={itemData} handlerClick={addItem}></ItemCounter>                                                         
                        }
                            
                    </div>               
                </div>           
            </div>
        
    )
}


export default ItemDetail