import React, {useState, useEffect} from 'react';
import ItemData from "../../db/itemListDB.json"
import ItemDetail from '../item/itemDetail';

const ItemDetailContainer = ()=>{

    const [item,setItem] = useState(null);

    useEffect(()=>{


        const getItem = new Promise ((res,rej)=>{
            setTimeout(()=>{
                let getDB = ItemData;
                getDB ? res(getDB) : rej("Problemas con el server");
            },2000)
        })
        getItem.then(response =>{
            setItem(response.item1)
    
        }, err=>{
            console.log(err)
        })
    },[])
    console.log(item)

    return (
        <div className="container justify-content-center m-4">
            <h1 style={{color:"white"}}>pantalla de Item</h1>
            <h2 style={{color:"white"}}>{item && item.title}</h2>
            <ItemDetail itemData={item}></ItemDetail>

        </div>
    )
}

export default ItemDetailContainer