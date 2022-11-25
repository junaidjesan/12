import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.Config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { useQuery } from '@tanstack/react-query';

export const AuthContext=createContext()
const auth=getAuth(app)


const WebContext = ({children}) => {
    const [user,setUser]=useState([])

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
        usersWithRole,
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