import React, {useState, useEffect} from "react";

const ItemCounter = ({itemData, handlerClick})=>{
    

    const stock = itemData && itemData.stock
    //Si le pasan un true al atributo Disabled, el boton se desabilita
    const [btnRmvState, setBtnRmvState] = useState(false)
    const [btnAddState, setBtnAddState] = useState(false)
    const [btnCartState,setBtnCartState] = useState(false)

    const [stockLeft, setStockLeft] = useState(stock)
    const [cartCount,setCartCount] = useState(0)

    const addItem = ()=> {
        (cartCount < stock) && (setCartCount(cartCount+1))
    }
    const removeItem = ()=> {
        (cartCount>0) && setCartCount(cartCount-1)
    }

    useEffect(()=>{

        setStockLeft(stock-cartCount);       

        (cartCount >= stock)?
        setBtnAddState(true)
        : setBtnAddState(false);

        (cartCount <= 0)?
        setBtnRmvState(true)
        : setBtnRmvState(false);

        (cartCount <= 0)?
        setBtnCartState(true)
        : setBtnCartState(false);
    },[cartCount])

    return(
        <React.Fragment>
            <h6 className="text-left">Stock : {stockLeft}</h6>
            <div className="row justify-content-between">
                <button className="btn btn-sm btn-danger" disabled={btnRmvState} type="button" onClick={() => {removeItem()}}>
                    <h4>-</h4>
                </button>
                <h3>{cartCount}</h3>
                <button className="btn btn-sm btn-success" disabled={btnAddState} type="button" onClick={() => {addItem()}}>
                    <h4>+</h4>
                </button>
            </div>
            <div className="row justify-content-center">
                <button onClick={()=>handlerClick(itemData,cartCount)} type="button" className="btn btn-primary m-1 " disabled={btnCartState}>Add to Cart</button>
            </div>
        </React.Fragment>
    )
}

export default ItemCounter