import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../item/itemDetail';
import { getFireStore } from '../../firebase/index';
import './itemDetailContainer.css';
import Loader from '../Loader/loader'

const ItemDetailContainer = ()=>{

    const [item,setItem] = useState(null);
    const [loading , setLoading] = useState(false)
    const { itemId } = useParams(); 



    useEffect(()=>{
        setLoading(true)
        let getDb = getFireStore();
        let itemCollection = getDb.collection("items")
        let getItem = itemCollection.doc(itemId.substr(1))
        getItem.get()
            .then((doc)=>{
                doc === 0 && console.log("No results");

                console.log("Item Found!")
                let itemDb = {id: doc.id, ...doc.data()};
                setItem(itemDb);
                setTimeout(() => {
                    setLoading(false)
                }, 600)
            })
            .catch((e)=>{ 
                console.log("Ocurrio un error: "+e)
                setTimeout(() => {
                    setLoading(false)
                }, 500)})
    },[])

    return (
        <div id="itemDetail" className="container justify-content-center mt-4 mb-4">
            <Loader loaderState={loading}></Loader>
            <ItemDetail itemData={item}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer