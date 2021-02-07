import React from "react";
import ItemCard from './itemCard';



const ItemList = ({data})=>{


    return(
        <div className="card-deck justify-content-around">
            {data && data.map((item,i)=>{
                    return(
                        <ItemCard key={i} itemData={item}/>)
                    })
            }
        </div>
    )
}

export default ItemList