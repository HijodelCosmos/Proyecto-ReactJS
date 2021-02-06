import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDw-rnDZnHzVsB8iT6PKy3VBPDjmGyF8p8",
    authDomain: "the-tent--react-proyect.firebaseapp.com",
    projectId: "the-tent--react-proyect",
    storageBucket: "the-tent--react-proyect.appspot.com",
    messagingSenderId: "1083262875967",
    appId: "1:1083262875967:web:44b945ebd514f67f97fb8a"
})

export const getFirebase=()=>{
    return app
}

export const getFireStore = ()=>{
    return firebase.firestore(app)
}