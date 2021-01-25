import React from "react";
import ItemCounter from "./itemCounter"
import imgItem1 from "../../assets/img/items/staff.png"
//aca hardcodeo las imagenes, por que no puedo usar rutas relativas en React


const ItemCard=({title,itemtype,description,stock,price})=>{


    return(
        <div className="card col-12 col-md-4 col-lg-3 mt-5 m-2 rounded-lg">
            <div className="card-body text-center">
                <h3 className="card-title ">{title}</h3>
                <h6 className="card-subtitle mb-2 text-muted">{itemtype}</h6>
                <img src={imgItem1} className="m-3" width="100"></img>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-body text-center">
                <h3>$ {price}</h3>
            </div>
            <div className="card-footer">
                <ItemCounter stock={stock}></ItemCounter>
            </div>
        </div>
    )
}

export default ItemCard