import React, {useState, useEffect} from 'react';
import ItemList from '../item/itemList';
import ItemData from "../../db/itemListDB.json"


const ItemListContainer= ()=>{

    const [db,setDb]= useState(null)

    useEffect(()=>{
        const call = new Promise((res,rej)=>{
          //  console.log("Llamando")
            setTimeout(()=>{
               // console.log("Respuesta del server");
                let getDB = Object.values(ItemData);
                getDB ? res(getDB) : rej("Problemas con el server");
            },2000)
        })

        call.then(response => {
            setDb(response);
            console.log("Llamada exitosa")
            
            },err=>{
            console.log(err);},
        )    
    },[])


    return(
        <div className="card-deck justify-content-around ">
            <ItemList data={db}></ItemList>
        </div>
    )
}
export default ItemListContainer
