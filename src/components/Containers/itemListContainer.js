import React, {useState, useEffect} from 'react';
import ItemList from '../item/itemList';
import { getFireStore } from '../../firebase/index';
import Loader from '../Loader/loader'


const ItemListContainer= ()=>{

    const [db,setDb]= useState(null)
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        let getDb = getFireStore();
        let itemsDb = getDb.collection("items");
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
                setTimeout(() => {
                    setLoading(false)
                }, 600)
            })
            
        return()=>clearTimeout()
    },[])


    return(
        <React.Fragment>
        <Loader loaderState={loading} ></Loader>
        <div className="container">
            <ItemList data={db}></ItemList>
        </div>
        </React.Fragment>
    )
}
export default ItemListContainer
