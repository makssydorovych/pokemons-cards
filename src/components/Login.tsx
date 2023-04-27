import React from 'react';
import { FcGoogle } from "react-icons/fc";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {signInWithPopup} from "firebase/auth"
import {firebaseAuth, usersRef} from "../utils/firebaseConfig";
import { addDoc, getDocs, query, where} from "firebase/firestore"
const Login = () => {
    const handleLogin = async () =>{
        const provider = new GoogleAuthProvider();
        const {user:{email, uid}} = await signInWithPopup(firebaseAuth, provider);
        if(email){
            const firestoreQuery = query(usersRef,where("uid","==", uid));
            const fetchedUser = await getDocs(firestoreQuery)
            if(fetchedUser.docs.length ===0){
                await addDoc(usersRef, {uid, email});
            }
        }
    };
    return (
        <div className="login">
<button className="login-btn">
    <FcGoogle />
    Login with google
</button>
        </div>
    );
};

export default Login;