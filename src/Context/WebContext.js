import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.Config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { useQuery } from '@tanstack/react-query';

export const AuthContext=createContext()
const auth=getAuth(app)


const WebContext = ({children}) => {
    const [user,setUser]=useState({})
    const [loader,setLoader]=useState(true)

    const url='http://localhost:5000/users'
    const {data:usersWithRole=[]}=useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res=await fetch(url)
            const data=await res.json()
            return data
        }
    })

    const googleProvider= new GoogleAuthProvider()


    const GoogleCreateUser=()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    const EmailLoggedIn=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const EmailCreateUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LogOutUser=()=>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return (()=>unsubscribe())
    })

    const filter = usersWithRole.filter(obj => {
        return obj.role === 'Seller';
    });

    const updateUserData=(profile)=>{
        const updat= updateProfile(auth.currentUser,profile)
        return updat
    }

    const values={
        EmailCreateUser,
        GoogleCreateUser,
        LogOutUser,
        user,
        usersWithRole,
        updateUserData,
        EmailLoggedIn,
        setLoader,
        loader,
        filter,
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