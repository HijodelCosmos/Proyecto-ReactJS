import React, {useState, useEffect} from "react";
import ItemCard from './itemCard';
import ItemData from "../../db/itemListDB.json"


const ItemList = ()=>{

    const [db,setDb]= useState(null)

    useEffect(()=>{
        const call = new Promise((res,rej)=>{
            console.log("Llamando")
            setTimeout(()=>{
                console.log("Respuesta del server");
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


    console.log(db);

    return(
        <React.Fragment>
            {db && db.map((item,i)=>{
                    return(
                        <ItemCard key={i} stock={item["stock"]} title={item["title"]} itemtype={item["itemtype"]} description={item["description"]}/>)
                    })}
        </React.Fragment>
    )
}

export default ItemList