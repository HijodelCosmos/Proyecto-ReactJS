import React from "react";
import ItemCounter from "./itemCounter"
import imgItem1 from "../../assets/img/items/staff.png"

const ItemDetail = ({itemData})=>{

        return( 
        <React.Fragment>
                <div className="row justify-content-center">
                <h1 className="mt-4">{itemData && itemData.title}</h1>
            </div>
            <div className="row justify-content-between p-2">
                <img src={imgItem1} className="m-2 col-5" width="100"></img>
                <div className="col-5 m-2">
                    <h3>{itemData && itemData.title}</h3>
                    <h4 className="text-muted">{itemData && itemData.itemtype}</h4>
                    <p>{itemData && itemData.description}</p>
                    <h3 className="text-center">$ {itemData && itemData.price}</h3>                 
                    <ItemCounter stock={itemData && itemData.stock}></ItemCounter>
                </div>               
            </div>            
        </React.Fragment>
    )
}

export default ItemDetail