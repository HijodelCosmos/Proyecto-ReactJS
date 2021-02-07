import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../item/itemDetail';
import { getFireStore } from '../../firebase/index';
import './itemDetailContainer.css'

const ItemDetailContainer = ()=>{

    const [item,setItem] = useState(null);
    const { itemId } = useParams(); 



    useEffect(()=>{

        let getDb = getFireStore();
        let itemCollection = getDb.collection("items")
        let getItem = itemCollection.doc(itemId.substr(1))
        getItem.get()
            .then((doc)=>{
                doc === 0 && console.log("No results");

                console.log("Item Found!")
                let itemDb = {id: doc.id, ...doc.data()}
                setItem(itemDb)
            })
    },[])

    return (
        <div id="itemDetail" className="container justify-content-center">
            <ItemDetail itemData={item}></ItemDetail>

        </div>
    )
}

export default ItemDetailContainer