import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


const ItemsPagination = ({itemsPerPage, totalItems , paginate , currentPage})=>{
   const pageNumbers = [];

   for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(
            <Pagination.Item key={i} active={i===currentPage} onClick={()=>(paginate(i))}>
              {i}
            </Pagination.Item>,
          )
   }

   return(
        <nav className="container  mb-1">
            <Pagination className="justify-content-center" size="lg">
                {pageNumbers}
            </Pagination>
        </nav>
   )
}
export default ItemsPagination