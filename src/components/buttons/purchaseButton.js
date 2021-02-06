import React from 'react';
import {Link} from "react-router-dom";
import './buttons.css'

const PurchaseButton = ()=>{
    return(
        <Link to='/cart'>
        <div className="d-flex justify-content-center">  
                <button type="button" className="purchaseButton btn btn-success text-center mt-4">Complete Purchase!</button>
        </div>
        </Link>
    )
}

export default PurchaseButton