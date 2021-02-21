import React, { useContext } from "react";
import {Link} from "react-router-dom";
import ItemCounter from "./itemCounter";
import PurchaseButton from "../buttons/purchaseButton";
import { CartContext }from '../../context/cartContext';
import coinLogo from '../../assets/img/dollar.png'
//aca hardcodeo las imagenes, por que no puedo usar rutas relativas en React


const ItemCard=({itemData})=>{
    
    const {isInCart , addItem ,subirJson }= useContext(CartContext);

    return(
        <div className="card col-12 col-sm-10 col-md-12 col-lg-3 m-3 rounded-lg">
            <div className="card-body text-center">
                <h3 className="card-title ">{itemData["title"]}</h3>
                <h6 className="card-subtitle mb-2 text-muted">{itemData["category"]}</h6>
                <img src={itemData["src"]} className="m-2 img-fluid" width="150" alt="Descripcion de producto"></img>
                <p className="card-text">{itemData["description"]}</p>
            </div>
            <div className="text-center mb-2">
                <h3><img src={coinLogo} width="27" alt="Coin Logo"></img>  {itemData["price"]}</h3>
                <Link to={`/item:${itemData["id"]}`}><button type="button" className="btn btn-primary ">More Info</button></Link>
            </div>
            <div className="card-footer">
                {isInCart(itemData.id)?
                    <PurchaseButton></PurchaseButton>
                    :
                    <ItemCounter  itemData={itemData} handlerClick={addItem}></ItemCounter>                                                         
                }
            </div>
        </div>
    )
}

export default ItemCard