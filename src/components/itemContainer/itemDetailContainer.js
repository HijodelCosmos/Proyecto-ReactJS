import React, {useState, useEffect} from 'react';
import ItemData from "../../db/itemListDB.json"
import ItemDetail from '../item/itemDetail';
import './itemDetailContainer.css'

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
            //harcodeo un item cualquiera de mi json
            setItem(response.item1)
    
        }, err=>{
            console.log(err)
        })
    },[])
    console.log(item)

    return (
        <div id="itemDetail" className="container justify-content-center">
            <ItemDetail itemData={item}></ItemDetail>

        </div>
    )
}

export default ItemDetailContainer