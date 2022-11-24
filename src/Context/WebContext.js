import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.Config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext=createContext()
const auth=getAuth(app)

const WebContext = ({children}) => {
    const [user,setUser]=useState(null)

    const googleProvider= new GoogleAuthProvider()


    const GoogleCreateUser=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const EmailCreateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LogOutUser=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>unsubscribe()
    },[])

    const values={
        EmailCreateUser,
        GoogleCreateUser,
        LogOutUser,
        user,
    }
    
    return (
        <div>
            <AuthContext.Provider value={values}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default WebContext;