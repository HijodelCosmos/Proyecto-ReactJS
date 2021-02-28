import firebase from 'firebase/app'
import '@firebase/firestore'

const firebaseApiKey= process.env.REACT_APP_FIREBASE_KEY;
const firebaseAuthDomain = process.env.REACT_APP_FIREBASE_DOMAIN;
const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROYECT_ID;
const firebaseStorageBucket = process.env.REACT_APP_FIREBASE_STORAGE;
const fireabaseMessaging = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER;
const firebaseApiId = process.env.REACT_APP_FIREBASE_API_ID;

const app = firebase.initializeApp({
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
    projectId: firebaseProjectId,
    storageBucket: firebaseStorageBucket,
    messagingSenderId: fireabaseMessaging,
    appId: firebaseApiId
})

export const getFirebase=()=>{
    return app
}

export const getFireStore = ()=>{
    return firebase.firestore(app)
}