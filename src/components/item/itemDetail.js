import React from "react";
import ItemCounter from "./itemCounter"

const ItemDetail = ({itemData})=>{

        return(
        <React.Fragment>
            <div className="row">
                <h2>{itemData && itemData.stock}</h2>
            </div>
            <div className="row justify-content-between">
                <ItemCounter stock={itemData && itemData.stock}></ItemCounter>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail