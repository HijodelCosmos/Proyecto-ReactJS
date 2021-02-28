import dataJson from './itemListDB.json'
import { getFireStore } from "../firebase/index";


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