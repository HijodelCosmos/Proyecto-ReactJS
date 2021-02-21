import React, {useState, useEffect} from 'react';
import ItemList from '../item/itemList';
import { useParams } from 'react-router-dom';
import { getFireStore } from '../../firebase/index';
import Loader from '../Loader/loader';
import ItemsPagination from '../pagination/itemsPagination';


const ItemCategoryContainer= ()=>{

    const {categoryId} = useParams();

    const [items,setItems] = useState([]);
    const [loading , setLoading]=useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    
    useEffect(()=>{
        setLoading(true)

        let category = categoryId.substr(1)
        let getDb = getFireStore();
        let itemsDb = getDb.collection("items")
        let itemsByCategory = itemsDb.where('category','==',category).limit(10)
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
                setItems(arrayItems)
            })
            
    },[categoryId])

    //Get current items 
    const indexOfLastItems = currentPage * itemsPerPage;
    const indexOfFirstItems = indexOfLastItems - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItems, indexOfLastItems);
    //Change Page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)

    return(
        <div className="container">
            <Loader loaderState={loading}></Loader>
            <ItemList data={currentItems}></ItemList>
            <ItemsPagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}></ItemsPagination>
        </div>
    )
}
export default ItemCategoryContainer
