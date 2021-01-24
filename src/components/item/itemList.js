import React from "react";
import ItemCard from './itemCard';



const ItemList = ({data})=>{

    console.log(data)

    return(
        <React.Fragment>
            {data && data.map((item,i)=>{
                    return(
                        <ItemCard key={i} src={item["src"]} stock={item["stock"]} title={item["title"]} itemtype={item["itemtype"]} description={item["description"]}/>)
                    })}
        </React.Fragment>
    )
}

export default ItemList