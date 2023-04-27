// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore, collection} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2ZmOY1NM8Es_W6F3DsePoYFq29CH7qYE",
    authDomain: "pokemon-71d55.firebaseapp.com",
    projectId: "pokemon-71d55",
    storageBucket: "pokemon-71d55.appspot.com",
    messagingSenderId: "750684414344",
    appId: "1:750684414344:web:6090396ac0c7fba5e39a3d",
    measurementId: "G-MTTYMVME1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
export const usersRef = collection(firebaseDB, "users")
export const pokemonListRef = collection(firebaseDB, "pokemonList")
