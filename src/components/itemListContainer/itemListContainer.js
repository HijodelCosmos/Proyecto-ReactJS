import React from 'react';
import ItemCard from '../item/itemCard';
import ItemData from '../../db/itemListDB.json';

const ItemListContainer= ()=>{
    const data=Object.values(ItemData)

    return(
        <div className="card-deck justify-content-around ">
            {data.map((item,i)=>{
                return(
                    <ItemCard key={i} stock={item["stock"]} title={item["title"]} itemtype={item["itemtype"]} description={item["description"]}/>)
                })
            }
        </div>
    )
}
export default ItemListContainer
