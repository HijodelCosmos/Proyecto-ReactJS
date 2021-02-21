import React, { useState } from 'react';

//por ahora
import dataJson from '../db/itemListDB.json'
import { getFireStore } from "../firebase/index";

export const CartContext = React.createContext()


export const CartContextProvider = ({children})=>{

    const [count , setCount] = useState(0);
    const [itemsInCart, setItemsInCart] = useState([]);
    const [totalPrice , setTotalPrice] = useState(0);

    const isInCart = (itemId)=>{
        let itemExist = itemsInCart.find(item => item["id"]=== itemId);
        /*itemExist?
        console.log("El item esta en el carrito")
        :
        console.log("El item no esta en el carrito");*/
        return(itemExist?true:false);
    }

    const addItem = (itemData ,cartCount)=>{
        //Me encargo de la suma de items y del precio total de la compra
        setCount(count + cartCount)
        setTotalPrice(totalPrice+(itemData["price"]*cartCount))

        //Me encargo de sumar el item con su cantidad, a un array
        itemData.cartcount=cartCount //al objeto item, le agrego el key cartCount
        setItemsInCart([...itemsInCart,itemData])
        console.log("Usted Agrego "+cartCount+" items al carrito")
    };

    const removeItem = (itemId , trashCount)=>{
        //Busco el item a borrar y su posicion        
        let itemToDelete = itemsInCart.find(item => item["id"]=== itemId)
        let itemIndex = itemsInCart.findIndex(item => item["id"]=== itemId);
        //Si el item esta en el carro, lo filtra
        if(itemIndex !== -1){
            
            let uptdatedItem = itemsInCart.map((item)=>{
                    if (item===itemToDelete){
                        item["cartcount"]=item["cartcount"]-trashCount;
                    }
                return item
            })
            setItemsInCart(uptdatedItem)

    
            //Modifica el counter y el precio total de la compra
            setCount(count - trashCount)
            setTotalPrice(totalPrice-(itemToDelete["price"]*trashCount))
            console.log("Item Borrado")

            //En caso de ser necesario borrar todo el item
            if(itemToDelete['cartcount']===0){
                let removedItem = itemsInCart.filter((item)=>{
                return(item["id"] !== itemId && item)
                });
                setItemsInCart(removedItem)
            }
        }
    }

    const clearCart = ()=>{
        setTotalPrice(0)
        setCount(0)
        setItemsInCart([])
        console.log("El carrito vaciado exitosamente")
    }
    
    //>>>Subir json a firestore<<<<
    const subirJson = ()=>{
        let getDb = getFireStore();
        dataJson.forEach(function(obj) {
            getDb.collection("items").add({
                title: obj.title,
                description: obj.description,
                price: obj.price,
                stock: obj.stock,
                src: obj.src,
                category: obj.category
            }).then(function(docRef) {
                
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        });

    }

    return(
        <CartContext.Provider value={{subirJson ,count , itemsInCart, totalPrice , addItem , isInCart , removeItem , clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

