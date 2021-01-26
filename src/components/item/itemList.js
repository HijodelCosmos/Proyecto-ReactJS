import React from "react";
import ItemCard from './itemCard';



const ItemList = ({data})=>{

    console.log(data)

    return(
        <React.Fragment>
            {data && data.map((item,i)=>{
                    return(
                        <ItemCard key={i} itemData={item}/>)
                    })}
        </React.Fragment>
    )
}

export default ItemList