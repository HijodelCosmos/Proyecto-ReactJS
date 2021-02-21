import React from "react";
import ItemCard from './itemCard';



const ItemList = ({data , loading})=>{
    if(loading){
        return <div></div>
    }

    return(
        <div className="d-flex flex-wrap justify-content-around">
            {data && data.map((item,i)=>{
                    return(
                        <ItemCard key={i} itemData={item}/>)
                    })
            }
        </div>
    )
}

export default ItemList