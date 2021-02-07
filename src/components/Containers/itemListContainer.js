import React, {useState, useEffect} from 'react';
import ItemList from '../item/itemList';
import { useParams } from 'react-router-dom';
import { getFireStore } from '../../firebase/index';


const ItemListContainer= ()=>{

    const [db,setDb]= useState(null)
    
    useEffect(()=>{

        let getDb = getFireStore();
        let itemsDb = getDb.collection("items")
        itemsDb.get()
            .then((querySnapshot)=>{
                querySnapshot.size === 0 && console.log("No results");

                let arrayItems = querySnapshot.docs.map((doc)=>{
                    return(
                        {id: doc.id,
                        ...doc.data()}
                    )
                })
                setDb(arrayItems)

            })
            
    },[])


    return(
        <div className="container">
            <ItemList data={db}></ItemList>
        </div>
    )
}
export default ItemListContainer
