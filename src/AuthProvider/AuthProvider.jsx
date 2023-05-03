/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/firebase.config";
// import app from "../Firebase/firebase.config";
// import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const googlesign=()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error.message)
    })
}
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () =>{
        return signOut(auth);
    }
    
   

    // observer user auth state 
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // stop observing while unmounting 
        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googlesign,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;