import React, { useState , useContext } from 'react';

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContextProvider)


export const CartContextProvider = ({children})=>{
    const [count , setCount] = useState(0)
    const [itemsToAdd, setItemsToAdd] = useState([]);

    const isInCart = (itemId)=>{
        let itemExist = itemsToAdd.find(item => item["id"]=== itemId);

        itemExist?
        console.log("El item esta en el carrito")
        :
        console.log("El item no esta en el carrito")

        return(itemExist?true:false);
    }

    const addItem = (itemData ,cartCount)=>{
        setCount(count + cartCount)
        itemData.cartcount=cartCount //al objeto item, le agrego el key cartCount
        setItemsToAdd([...itemsToAdd,itemData]) //"..." es un spread operator
        console.log("Usted Agrego "+cartCount+" items al carrito")
    };

    const removeItem = (itemId)=>{        
        let itemToDelete = itemsToAdd.find(item => item["id"]=== itemId)
        let itemIndex = itemsToAdd.findIndex(item => item["id"]=== itemId);
        if(itemIndex !== -1){
            
            let removedItem = itemsToAdd.splice(itemIndex,itemIndex);

            setItemsToAdd(removedItem)
            setCount(count - itemToDelete["cartcount"])

            console.log("Item Borrado")
        }
    }

    const clear = ()=>{
        setItemsToAdd([])
        console.log("El carrito vaciado exitosamente")
    }
        
    return(
        <CartContext.Provider value={{count , itemsToAdd , addItem , isInCart , removeItem , clear}}>
            {children}
        </CartContext.Provider>
    )
}

