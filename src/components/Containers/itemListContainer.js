import React, {useState, useEffect} from 'react';
import ItemList from '../item/itemList';
import { getFireStore } from '../../firebase/index';
import Loader from '../Loader/loader';
import ItemsPagination from '../pagination/itemsPagination'


const ItemListContainer= ()=>{

    const [items,setItems]= useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

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
                setItems(arrayItems)
                setTimeout(() => {
                    setLoading(false)
                }, 600)
            })            
        return()=>clearTimeout()
    },[])

    //Get current items 
    const indexOfLastItems = currentPage * itemsPerPage;
    const indexOfFirstItems = indexOfLastItems - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItems, indexOfLastItems);
    //Change Page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)

    return(
        <React.Fragment>
        <Loader loaderState={loading}></Loader>
        
            <ItemList data={currentItems} loading={loading}></ItemList>
            <ItemsPagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} currentPage={currentPage}></ItemsPagination>
       
        </React.Fragment>
    )
}
export default ItemListContainer