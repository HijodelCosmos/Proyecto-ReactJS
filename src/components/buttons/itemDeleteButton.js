import React, {useState, useEffect} from "react";
import './buttons.css'

const ItemDeleteButton = ({itemData , itemId , handlerClick})=>{

    const cartCount = itemData && itemData.cartcount
    //Si le pasan un true al atributo Disabled, el boton se desabilita
    const [btnRmvState, setBtnRmvState] = useState(false)
    const [btnAddState, setBtnAddState] = useState(false)
    const [btnDelItemState,setBtmDelItemState] = useState(false)

    const [trashCount,setCartCount] = useState(0)

    const addItem = ()=> {
        (trashCount < cartCount) && (setCartCount(trashCount+1))
    }
    const removeItem = ()=> {
        (trashCount>0) && setCartCount(trashCount-1)
    }

    useEffect(()=>{
        

        (trashCount >= cartCount)?
        setBtnAddState(true)
        : setBtnAddState(false);

        (trashCount <= 0)?
        setBtnRmvState(true)
        : setBtnRmvState(false);

        (trashCount <= 0)?
        setBtmDelItemState(true)
        : setBtmDelItemState(false);
    },[trashCount])

    return(
        <React.Fragment>
        <div className="row justify-content-center align-items-center">
            <button className="countersButtons rounded-circle" disabled={btnRmvState} type="button" onClick={() => {removeItem()}}>
                -
            </button>
            <h4>{trashCount}</h4>
            <button className="countersButtons rounded-circle" disabled={btnAddState}  type="button" onClick={() => {addItem()}}>
                +
            </button>
        </div>
        <div className="row justify-content-center">
            <button type="button" disabled={btnDelItemState} onClick={()=>handlerClick( itemId , trashCount)} className="btn btn-danger text-center">
                Delete Items
            </button> 
        </div>
        </React.Fragment>
    )
};

export default ItemDeleteButton;