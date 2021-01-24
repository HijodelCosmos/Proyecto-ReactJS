import React from "react";
import ItemCounter from "./itemCounter"
import foto from '../../assets/img/items/staff.png'

const ItemCard=({title,itemtype,description,stock,src})=>{


    return(
        <div className="card col-12 col-md-4 col-lg-3 mt-5 m-2 rounded-lg">
            <div className="card-body text-center">
                <h4 className="card-title ">{title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{itemtype}</h6>
                <img src="/img/items/elixir.png" className="m-3" width="100"></img>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <ItemCounter stock={stock}></ItemCounter>
            </div>
        </div>
    )
}

export default ItemCard