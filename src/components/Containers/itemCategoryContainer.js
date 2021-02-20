import React, {useState, useEffect} from 'react';
import ItemList from '../item/itemList';
import { useParams } from 'react-router-dom';
import { getFireStore } from '../../firebase/index';
import Loader from '../Loader/loader';


const ItemCategoryContainer= ()=>{

    const {categoryId} = useParams();

    const [db,setDb] = useState(null)
    const [loading , setLoading]=useState(false)
    
    useEffect(()=>{
        setLoading(true)

        let category = categoryId.substr(1)
        let getDb = getFireStore();
        let itemsDb = getDb.collection("items")
        let itemsByCategory = itemsDb.where('category','==',category).limit(3)
        itemsByCategory.get()
            .then((querySnapshot)=>{
                querySnapshot.size === 0 && console.log("No results");

                let arrayItems = querySnapshot.docs.map((doc)=>{
                    return(
                        {id: doc.id,
                        ...doc.data()}
                    )
                })
                setTimeout(() => {
                    setLoading(false)
                }, 500)
                setDb(arrayItems)
            })
            
    },[categoryId])


    return(
        <div className="container">
            <Loader loaderState={loading}></Loader>
            <ItemList data={db}></ItemList>
        </div>
    )
}
export default ItemCategoryContainer
