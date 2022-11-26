import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.Config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
    // console.log(usersWithRole)
    // console.log(user.email)

    // const ul=`http://localhost:5000/one-users?email=${user.email}`
    // const {data:eachUser=[]}=useQuery({
    //     queryKey:['eachUsers'],
    //     queryFn: async ()=>{
    //         const res=await fetch(ul)
    //         const data=await res.json()
    //         return data
    //     }
    // })
    // console.log(eachUser)
    
        

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