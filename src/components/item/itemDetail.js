import React from "react";
import ItemCounter from "./itemCounter";

const ItemDetail = ({itemData})=>{

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
                        <ItemCounter itemData={itemData}></ItemCounter>
                    </div>               
                </div>           
            </React.Fragment>
        
    )
}

export default ItemDetail