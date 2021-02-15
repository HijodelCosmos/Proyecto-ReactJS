import React, { useState } from 'react';
//import { getFireStore } from '../../firebase/index';

export const OrderContext = React.createContext()


export const OrderContextProvider = ({children})=>{
    const [userData , setUserData] = useState({userName:"Comprador",phone:32154896,email:"compratuti@elmail"})
    const [order , setOrder] = useState({buyer:userData,items:{},date:0,total:0})
/*
    const uploadOrder = () => {
        let getDb = getFireStore();
        let itemCollection = getDb.collection("orders")
        
    }*/
        
    return(
        <OrderContext.Provider value={{order , setOrder , userData , setUserData}}>
            {children}
        </OrderContext.Provider>
    )
    }
