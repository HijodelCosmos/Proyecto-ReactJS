import React from 'react';
import './buttons.css'

const PurchaseButton = ()=>{
    return(
        <div className="d-flex justify-content-center">
            <button type="button" id="purchaseButton" className="btn btn-success text-center mt-4">Complete Purchase!</button>
        </div>
    )
}

export default PurchaseButton