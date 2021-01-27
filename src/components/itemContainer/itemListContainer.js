import React, {useState, useEffect} from 'react';
import ItemList from '../item/itemList';
import ItemData from "../../db/itemListDB.json"
import { useParams } from 'react-router-dom';


const ItemListContainer= ()=>{

    const {categoryId} = useParams();

    const [db,setDb]= useState(null)

    useEffect(()=>{
        const call = new Promise((res,rej)=>{

            setTimeout(()=>{
              
                let getDB = Object.values(ItemData);
                let category = categoryId!==undefined && categoryId.substr(1);//Le saco el ":" de delante del string

                switch (category) {
                    case 'Potion':
                    case 'Staff':
                    case 'Cloak':

                        let filteredDB = getDB.filter((item)=>{
                            return item['category'] === category
                        });
                        filteredDB ? res(filteredDB) : rej("No se encontro el elemento de esa categoría")
                    break;

                    default:
                        getDB ? res(getDB) : rej("Problemas con el server");
                }
            },2000)
        })

        call.then(response => {
            setDb(response);
            console.log("Llamada exitosa")
            
            },err=>{
            console.log(err);},
        )    
    },[categoryId])


    return(
        <div className="card-deck justify-content-around ">
            <ItemList data={db}></ItemList>
        </div>
    )
}
export default ItemListContainer
