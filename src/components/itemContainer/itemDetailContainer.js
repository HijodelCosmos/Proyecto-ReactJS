import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemData from "../../db/itemListDB.json"
import ItemDetail from '../item/itemDetail';
import './itemDetailContainer.css'

const ItemDetailContainer = ()=>{

    const [item,setItem] = useState(null);
    const { itemId } = useParams(); //Capturo el id del objeto atravez del prop del router

    useEffect(()=>{

        
        const getItem = new Promise ((res,rej)=>{
            setTimeout(()=>{
                let getDB = Object.values(ItemData);
                getDB ? res(getDB) : rej("Problemas con el server");
            },2000)
        })
        getItem.then(response =>{
            //por use State objetengo un string con : delante de mi id, asi que lo quito con subtr
            let id = itemId.substr(1,1)
            //uso el id obtenido para obicar el item de mi json convertido actualmente a un array
            setItem(response[id])
    
        }, err=>{
            console.log(err)
        })
    },[])

    return (
        <div id="itemDetail" className="container justify-content-center">
            <ItemDetail itemData={item}></ItemDetail>

        </div>
    )
}

export default ItemDetailContainer